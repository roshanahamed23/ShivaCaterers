import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/assets/images";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black">
      <div className="flex flex-row max-md:flex-col justify-between gap-4 px-8 py-16 max-sm:py-8">
        <div>
          <Image src={Logo} alt="logo" className="w-[210px] h-[180px]" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-merriweather text-red text-xl mb-2">
              Our Services
            </h3>
            <table className="text-sm text-white">
              <tbody>
                <tr>
                  <td colSpan="2" className="font-bold">
                    Shiva Caterers,
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    we provide exceptional culinary
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    experiences around the clock
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    and warmly welcome special
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    requests to tailor each event
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="font-bold">
                    to your unique needs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-merriweather text-red text-xl mb-2">
              We are Social
            </h3>
            <div className="flex flex-row gap-2">
              <Link href="https://www.facebook.com/shivacaterer/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-8 h-8"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  />
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  />
                </svg>
              </Link>
              <Link href="https://wa.me/qr/GPQX2A2QFJAML1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-8 h-8"
                >
                  <path
                    fill="#25D366"
                    d="M24 4C13.043 4 4 13.043 4 24c0 3.9 1.2 7.6 3.4 10.6L4.9 42l7.5-2 3.1 1.7c2.9 1.6 6.2 2.5 9.6 2.5 10.957 0 20-9.043 20-20S34.957 4 24 4zm0 36c-3.3 0-6.4-.9-9.1-2.5l-4.4 1.1 1.2-4.4C8.9 31.9 8 28 8 24 8 14.6 15.6 7 24 7c8.4 0 16 6.6 16 17s-7.6 17-16 17zm6.1-10.3c-.1-.2-.5-.3-1-.6-.5-.3-2.6-1.3-3-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.5 1.7-.3.3-.6.3-1 .1-2.8-1.4-5.7-4.8-6.6-6.8-.2-.4 0-.6.2-.8.3-.2.5-.6.7-1 .2-.3.1-.6-.1-.9-.2-.3-1.5-3.6-2-4.9-.5-1.3-1-1.1-1.5-1.1-.4 0-.9-.1-1.3-.1-.5 0-1.1.2-1.5.8-.4.6-.6 1.2-.7 1.9-.1.7-.2 1.5.2 2.2.4.7.7 1.4 1.1 2.1.3.7.6 1.4 1.1 2 .5.6 1.1 1.1 1.6 1.6.5.5 1 1 1.5 1.4.5.5 1.1.9 1.8 1.3.7.4 1.4.7 2.2.8.8.1 1.6.1 2.3-.1.7-.2 1.4-.5 2-.9.6-.4 1.2-.9 1.6-1.6.4-.6.6-1.2.8-1.8.2-.7.2-1.4.1-2.1z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-md:mt-4">
          <div className="flex flex-col gap-2 max-w-sm">
            <h3 className="font-merriweather text-red text-xl mb-2">
              Contact Us
            </h3>
            <div className="text-sm text-white font-bold font-montserrat flex flex-col gap-2">
              <span className="break-words">
                No: 3 Uggatta Road, Hunsamaranahalli Bengaluru Urban, Karnataka.
                PIN CODE : 562157
              </span>
              <span className="text-pink-400 font-bold">
                <a href="mailto:Shivacaterers06@gmail.com">
                  Shivacaterers06@gmail.com
                </a>
              </span>
              <span>Need our Service? Call Today!</span>
              <span className="text-pink-400 font-bold font-merriweather text-lg">
                <a href="tel:+917996661169">+91 799661169</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red text-black font-bold w-full px-8 py-6 max-sm:py-5">
        <span>Copyright © 2024 Shiva Caterers. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
