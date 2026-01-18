export default function ServiceVideo({ src }) {
  return (
    <div className="relative w-full h-full">
      {/* glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-fuchsia-500/30 via-purple-500/20 to-transparent blur-2xl animate-pulse" />

      <video
        src={src}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        className="relative z-10 w-full h-full object-cover rounded-3xl"
      />
    </div>
  );
}

