"use client";

export default function MoviePlayer({ trailerKey }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&showinfo=0`}
        title="Trailer Background"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ pointerEvents: "none" }} // prevent interaction
      />
    </div>
  );
}
