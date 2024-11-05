import Image from "next/image";

const logos = [
  {
    href: "",
    src: "/next-js-seeklogo.svg",
    alt: "next",
    width: 100,
    height: 100,
  },
  {
    href: "",
    src: "/tailwind-css-wordmark-seeklogo.svg",
    alt: "tailwind",
    width: 100,
    height: 100,
  },
  {
    href: "",
    src: "/react-seeklogo.svg",
    alt: "React",
    width: 60,
    height: 60,
  },
  {
    href: "",
    src: "/leaflet-svgrepo-com.svg",
    alt: "Leaflet",
    width: 100,
    height: 100,
  },
  {
    href: "",
    src: "/google-maps-old-svgrepo-com.svg",
    alt: "Google-maps",
    width: 50,
    height: 50,
  },
  {
    href: "",
    src: "/firebase-svgrepo-com.svg",
    alt: "Firebase",
    width: 50,
    height: 50,
  },
  {
    href: "",
    src: "/prisma-svgrepo-com.svg",
    alt: "Prisma",
    width: 50,
    height: 50,
  },
];


export default function Logo(){
    return (
      <div className="w-full bg-gray-300 dark:bg-gray-900">
        <div className="text-center mx-auto w-[1000px]">
          <p className="text-5xl font-bold mb-5">Powered By</p>
          <p className="text-gray-500 mb-10">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center items-center">
              {logos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}