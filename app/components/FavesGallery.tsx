'use client'
import Link from "next/link";
import { useFaves } from "../context/FavesContext";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google"
import { useEffect } from "react";
const plex = IBM_Plex_Mono({ weight: ['700'], subsets: ['latin'] })

interface Props { }

const FavesGallery: React.FC<Props> = ({ }) => {
  const { faves } = useFaves();

  if (faves == undefined || faves.length == 0) {
    return <></>
  }

  console.log(faves)

  return (
    <div className="px-4">
      <h1 className={"" + plex.className}>Faves</h1>
      <div className="flex flex-wrap">
        {faves.map((fave, index) => (
          <div key={index} className=" bg-white" >
            {/* <Image src= */}
            <h2>{fave.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavesGallery