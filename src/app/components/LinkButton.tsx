"use client";
import Image from "next/image";
import { useState } from "react";

interface LinkButtonProps {
  logo: string;
  name: string;
  url: string;
  className?: string;
  arrow: string;
  preview?: string;
}

export default function LinkButton({
  logo,
  name,
  url,
  className = "",
  arrow,
  preview,
}: LinkButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-72"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preview modal */}
      {preview && hovered && (
        <div
          className="absolute bottom-full left-0 mb-2 z-50
                w-full  {/* 👈 coincide con el botón */}
                rounded-t-xl overflow-hidden shadow-2xl
                preview-popover"
        >
          <Image
            src={preview}
            alt={`Preview de ${name}`}
            width={288}
            height={160}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <p className="absolute bottom-2 left-3 text-white text-xs font-medium drop-shadow">
            {name}
          </p>
        </div>
      )}

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          px-6 py-4 w-72 h-14 inline-flex items-center
          rounded-md font-medium text-sm
          shadow-xl hover:shadow-lg
          transition-all duration-200 ease-in-out
          hover:-translate-y-2 active:translate-y-0
          justify-between hover:rounded-t-[0]
          ${className}
        `}
      >
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={30}
            height={30}
            className="object-contain border border-white rounded-full bg-white"
          />
          <span>{name}</span>
        </div>
        <Image
          src={arrow}
          alt={`${name} arrow`}
          width={20}
          height={20}
          className="object-contain"
        />
      </a>
    </div>
  );
}
