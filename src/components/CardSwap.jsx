import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

/* ================= CARD ================= */

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`
      absolute top-1/2 left-1/2
      rounded-xl

      /* ---------- LIGHT MODE ---------- */
      bg-white
      border border-gray-200
      shadow-[0_25px_60px_rgba(217,70,239,0.25)]

      /* ---------- DARK MODE (IMPROVED READABILITY) ---------- */
      dark:bg-black/40
      dark:border-white/25
      dark:backdrop-blur-lg
      dark:shadow-[0_0_45px_rgba(217,70,239,0.55)]
      dark:hover:shadow-[0_0_70px_rgba(217,70,239,0.75)]

      /* Subtle inner depth */
      dark:bg-gradient-to-b
      dark:from-black/70
      dark:to-black/55

      transition-shadow duration-300
      pointer-events-none

      [transform-style:preserve-3d]
      [will-change:transform]
      [backface-visibility:hidden]

      ${customClass ?? ""}
      ${rest.className ?? ""}
    `}
  />
));
Card.displayName = "Card";

/* ================= HELPERS ================= */

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

/* ================= CARD SWAP ================= */

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 1.8,
          durMove: 1.8,
          durReturn: 1.8,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power2.inOut",
          durDrop: 0.9,
          durMove: 0.9,
          durReturn: 0.9,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const hasSwapped = useRef(false);

  /* ---------- INITIAL POSITION ---------- */

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );
  }, [cardDistance, verticalDistance, skewAmount]);

  /* ---------- SWAP ---------- */

  const swap = () => {
    if (tlRef.current?.isActive()) return;
    if (order.current.length < 2) return;

    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(elFront, {
      y: "+=480",
      duration: config.durDrop,
      ease: config.ease,
    });

    tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);

      tl.set(el, { zIndex: slot.zIndex }, "promote");
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.12}`
      );
    });

    const backSlot = makeSlot(
      refs.length - 1,
      cardDistance,
      verticalDistance,
      refs.length
    );

    tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
    tl.set(elFront, { zIndex: backSlot.zIndex }, "return");

    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn,
        ease: config.ease,
      },
      "return"
    );

    tl.call(() => {
      order.current = [...rest, front];
    });
  };

  /* ---------- RENDER ---------- */

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
        })
      : child
  );

  return (
    <div
      onMouseEnter={() => {
        if (hasSwapped.current) return;
        hasSwapped.current = true;
        swap();
      }}
      onMouseLeave={() => {
        hasSwapped.current = false;
      }}
      className="
        absolute bottom-0 right-0
        translate-x-[5%] translate-y-[20%]
        origin-bottom-right
        perspective-[900px]
        overflow-visible
        cursor-pointer
      "
      style={{ width, height, padding: "80px" }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
