import { useEffect, useRef } from "react";

export default function ServiceVideo({ src, active }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (active) {
      videoRef.current.currentTime = 13; // 👈 START AT 13s
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [active]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
