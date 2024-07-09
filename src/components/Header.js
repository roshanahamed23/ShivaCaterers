import Link from "next/link";
import { Logo } from "@/assets/images";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full h-24 py-4 shadow-bottom pl-4 pr-4 bg-black">
      <div className="ml-8">
        <Image src={Logo} alt="logo" width={180} height={150} priority={true} />
      </div>
      <div className="hidden sm:flex">
        <ul className="flex gap-8 list-none font-bold justify-center items-center text-cyan-50">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-red transition-colors duration-500 ease-in-out">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/menu" legacyBehavior>
              <a className="hover:text-red transition-colors duration-500 ease-in-out">
                Menu
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us" legacyBehavior>
              <a className="hover:text-red transition-colors duration-500 ease-in-out">
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-us" legacyBehavior>
              <a className="hover:text-red transition-colors duration-500 ease-in-out">
                About Us
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex m-24">
        <Link href="/contact-us" legacyBehavior>
          <a className="btn-primary hover:text-sky-50 font-bold text-black">
            Book Now
          </a>
        </Link>
      </div>
      <div className="sm:hidden relative">
        <button onClick={toggleMenu} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {menuOpen && (
          <ul className="absolute right-0 top-16 bg-black text-cyan-50 font-bold flex flex-col items-start p-4 gap-4 shadow-lg rounded-lg">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:text-red transition-colors font-bold duration-500 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/menu" legacyBehavior>
                <a className="hover:text-red transition-colors font-bold duration-500 ease-in-out">
                  Menu
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" legacyBehavior>
                <a className="hover:text-red transition-colors font-bold duration-500 ease-in-out">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-us" legacyBehavior>
                <a className="hover:text-red transition-colors font-bold duration-500 ease-in-out">
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" legacyBehavior>
                <a className="btn-primary text-black">Book Now</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
      <style jsx>{`
        .float:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease-in-out;
        }
        @media (max-width: 640px) {
          .shadow-bottom {
            box-shadow: 0 4px 2px -2px gray;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
