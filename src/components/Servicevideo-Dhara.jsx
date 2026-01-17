import { useEffect, useRef } from "react";

export default function ServiceVideo({ src, active }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  return (
    <div
      className={`
        absolute inset-0
        transition-all duration-700 ease-out
        ${active
          ? "opacity-100 scale-100 z-20"
          : "opacity-0 scale-95 z-10"}
      `}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
