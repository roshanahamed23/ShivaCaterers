import React from "react";
import Image from "next/image";
import { heroDark } from "@/assets/images";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section>
      <div className="bg-rose-50 lg:flex flex-row mt-1">
        {/* Hero Content */}
        <div className=" bg-rose-50 relative h-screen lg:flex-1 flex flex-col justify-center items-center">
          <Image
            src={heroDark}
            layout="fill"
            objectFit="cover"
            alt="Hero Background"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col gap-4 items-center justify-center text-white text-center px-4">
            <h1
              className="text-2xl md:text-4xl mb-4 font-bold text-center"
              style={{ color: "#990011FF" }}
            >
              Welcome to Shiva Caterers
            </h1>

            <h2
              className="text-lg md:text-xl mb-4 font-semibold"
              style={{ color: "#FCF6F5FF" }}
            >
              Taste is the sign of life !
            </h2>

            <div className="text-xl md:text-4xl" style={{ color: "#ED2B33FF" }}>
              <Typewriter
                options={{
                  strings: [
                    "Deliciously Crafted, Professionally Served, Perfectly Tailored for Every Occasion",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                }}
              />
            </div>

            <p
              className="text-lg md:text-1.5xl mb-8 max-w-2xl"
              style={{ color: "#FCF6F5FF" }}
            >
              From intimate gatherings to grand celebrations, our catering
              services bring the finest culinary experiences to your table.
            </p>

            <Link
              href="/menu"
              className="bg-red text-black font-semibold py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out"
            >
              Explore our Menus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
