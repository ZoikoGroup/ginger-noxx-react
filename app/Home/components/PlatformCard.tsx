"use client";

import Image from "next/image";

type PlatformCardProps = {
  image: string;
  title: string;
  products: string;
  href?: string;
};

export default function PlatformCard({
  image,
  title,
  products,
  href = "#",
}: PlatformCardProps) {
  return (
    <div className="platform-card">
      <div className="platform-icon">
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
        />
      </div>

      <h3>{title}</h3>

      <p>{products}</p>

      <button onClick={() => window.location.href = href}>Start here →</button>
    </div>
  );
}
