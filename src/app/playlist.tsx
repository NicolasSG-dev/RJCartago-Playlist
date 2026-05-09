import LinkButton from "./components/LinkButton";

const playlists = [
  {
    id: 1,
    name: "Escauchar en Spotify",
    logo: "/assets/spotify.svg",
    url: "https://open.spotify.com/playlist/7uXiWbwaXDBetg8cwDkEv4?si=a4bb93ea95dc4e72",
    className: "bg-green-500 text-white hover:bg-green-600",
    arrow: "/assets/right-arrow.svg",
    preview: "/assets/spotify-preview.webp",
  },
  {
    id: 2,
    name: "Escuchar en Apple Music",
    logo: "/assets/apple.svg",
    url: "https://music.youtube.com/...",
    className: "bg-[#fa3850] text-white hover:bg-[#fa2e46]",
    arrow: "/assets/right-arrow.svg",
    preview: "/assets/previews/spotify-preview.jpg",
  },
  {
    id: 3,
    name: "Escuchar en YouTube Music",
    logo: "/assets/YT-Music.svg",
    url: "https://music.youtube.com/...",
    className: "bg-[#ff0000] border text-white border-[#ff0000]",
    arrow: "/assets/right-arrow.svg",
    preview: "/assets/previews/spotify-preview.jpg",
  },
  {
    id: 4,
    name: "Descargarlas en nuestro Drive",
    logo: "/assets/drive.svg",
    url: "https://music.youtube.com/...",
    className: "bg-[#ffcf63] text-white",
    arrow: "/assets/right-arrow.svg",
    preview: "/assets/previews/spotify-preview.jpg",
  },
  {
    id: 5,
    name: "Escuchar en YouTube",
    logo: "/assets/YT.svg",
    url: "https://music.youtube.com/...",
    className: "bg-[#ce1312] border text-white",
    arrow: "/assets/right-arrow.svg",
    preview: "/assets/previews/spotify-preview.jpg",
  },
];

export default function Playlists() {
  return (
    <div className="playlists flex flex-col gap-3 mt-4">
      {playlists.map((playlist) => (
        <LinkButton
          key={playlist.id}
          logo={playlist.logo}
          name={playlist.name}
          url={playlist.url}
          className={playlist.className}
          preview={playlist.preview}
          arrow={playlist.arrow}
        />
      ))}
    </div>
  );
}
