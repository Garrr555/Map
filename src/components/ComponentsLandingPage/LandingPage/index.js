import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faList,
  faMap,
  faSun,
  faMoon,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@components/ComponentsLandingPage/power";
import CardSection from "@components/ComponentsLandingPage/card";
import Navbar from "@components/ComponentsLandingPage/navbar";

export default function LandingPage() {
  // Maps
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.width = "100%";
        iframeRef.current.style.height = "100%";
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark:bg-black w-full h-full dark:text-white">
      <div className="relative h-[700px] bg-[url('/petaterang.png')] dark:bg-[url('/petagelap.png')] bg-cover bg-bottom p-7">
        
        <Navbar></Navbar>

        <div>
          <div className="text-center mx-auto w-[1000px] h-full mt-40 mb-10">
            <p className="text-5xl font-bold mb-5  dark:text-gray-300">Bismillah ACC</p>
            <p className="text-xl">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
          <div className="text-2xl text-center flex gap-3 items-center justify-center">
            <Link
              href="/list"
              className="text-white w-60 border  border-primary bg-primary rounded-full py-3 "
            >
              Map
            </Link>
            <Link
              href="/dashboard"
              className="text-primary dark:text-white w-60 border border-primary dark:border-gray-500 rounded-full py-3"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-b from-transparent to-white dark:to-black"></div>
      </div>

      <CardSection></CardSection>

      <div className="w-[1000px] h-[800px] mx-auto">
        <div className="my-40 text-center mx-auto w-[1000px] h-[600px]">
          <p className="text-5xl font-bold mb-5">Explore My Map</p>
          <p className="text-gray-500 mb-10">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
          <iframe
            ref={iframeRef}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63301.06345552942!2d109.1931380004222!3d-7.430188880462496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655c3136423d1d%3A0x4027a76e352e4a0!2sPurwokerto%2C%20Banyumas%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700898461484!5m2!1sen!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="w-full h-40 bg-gradient-to-b dark:from-black from-white to-gray-300 dark:to-gray-900"></div>

      <Logo></Logo>
    </div>
  );
}
