"use client"
import React, { useState } from "react";
import Image from 'next/image'

export default function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className=" rounded-lg bg-gray-600 ">
      <Image
        alt=""
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className={`
            lg:duration-700 lg:ease-in-out
            ${
              isLoading
                ? "lg:scale-110 lg:blur-2xl lg:grayscale"
                : "lg:scale-100 lg:blur-0 lg:grayscale-0"
            })`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}