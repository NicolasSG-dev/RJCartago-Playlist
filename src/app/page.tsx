import Navbar from "@/app/components/navbar";
import Playlists from "./playlist";
import MusicCarousel from "./components/SongCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen [background:radial-gradient(ellipse_at_center,_#ffbcbe_35%,_white_70%)]">
      <Navbar />
      <div className="contenido flex flex-col justify-center items-center mx-auto w-max p-5 mt-1">
        <div className="encabezado text-center ">
          <Image
            src="/assets/logo.webp"
            alt="Descripción de la imagen"
            width={250}
            height={250}
            className="mx-auto mt-2"
          />
          <h2 className="-mt-3 text-xl tracking-wide font-sans font-bold">
            Playlist
          </h2>
          <h2 className="-mt-1 text-2xl tracking-wide font-sans font-extrabold bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text text-transparent">
            Revolución juvenil Cartago
          </h2>
          <div className="bg-[#fa3850] w-10 h-1 mx-auto rounded my-2"></div>
          <p className="font-sans">Donde la música se encuentra con tu fé</p>
        </div>
        <div className="playlists -mt-2">
          <Playlists />
        </div>
      </div>
    </main>
  );
}
