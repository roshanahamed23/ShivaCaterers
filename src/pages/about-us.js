import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Clientpart from "@/components/Clientpart";
import Product from "@/components/Product";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import founderImage from "@/assets/images/founder.png";
import image1 from "@/assets/sliders/image1.jpg";
import image2 from "@/assets/sliders/image2.jpg";
import image3 from "@/assets/sliders/image3.jpg";
import image4 from "@/assets/sliders/image4.jpg";
import image5 from "@/assets/sliders/image5.jpg";
import image6 from "@/assets/sliders/image6.jpg";
import image7 from "@/assets/sliders/image7.jpg";
import image8 from "@/assets/sliders/image8.jpg";
import image9 from "@/assets/sliders/image9.jpg";
import image10 from "@/assets/sliders/image10.jpg";
import image11 from "@/assets/sliders/image11.jpg";
import image12 from "@/assets/sliders/image12.jpg";
import image13 from "@/assets/sliders/image13.jpg";
import image14 from "@/assets/sliders/image14.jpg";
import image15 from "@/assets/sliders/image15.jpg";
import image16 from "@/assets/sliders/image16.jpg";
import image17 from "@/assets/sliders/image17.jpg";
import image18 from "@/assets/sliders/image18.jpg";
import image19 from "@/assets/sliders/image19.jpg";
import image20 from "@/assets/sliders/image20.jpg";
import image21 from "@/assets/sliders/image21.jpg";
import "react-image-gallery/styles/css/image-gallery.css"; // Import CSS for ImageGallery

const images = [
  {
    original: image1.src,
    thumbnail: image1.src,
    description: "Founder of Shiva Caterers",
  },
  {
    original: image2.src,
    thumbnail: image2.src,
    description: "About Shiva Caterers",
  },
  {
    original: image3.src,
    thumbnail: image3.src,
    description: "Shiva Caterers",
  },
  {
    original: image4.src,
    thumbnail: image4.src,
    description: "Shiva Caterers",
  },
  {
    original: image5.src,
    thumbnail: image5.src,
    description: "Shiva Caterers",
  },
  {
    original: image6.src,
    thumbnail: image6.src,
    description: "Shiva Caterers",
  },
  {
    original: image7.src,
    thumbnail: image7.src,
    description: "Shiva Caterers",
  },
  {
    original: image8.src,
    thumbnail: image8.src,
    description: "Shiva Caterers",
  },
  {
    original: image9.src,
    thumbnail: image9.src,
    description: "Shiva Caterers",
  },
  {
    original: image10.src,
    thumbnail: image10.src,
    description: "Shiva Caterers",
  },
  {
    original: image11.src,
    thumbnail: image11.src,
    description: "Shiva Caterers",
  },
  {
    original: image12.src,
    thumbnail: image12.src,
    description: "Shiva Caterers",
  },
  {
    original: image13.src,
    thumbnail: image13.src,
    description: "Shiva Caterers",
  },
  {
    original: image14.src,
    thumbnail: image14.src,
    description: "Shiva Caterers",
  },
  {
    original: image15.src,
    thumbnail: image15.src,
    description: "Shiva Caterers",
  },
  {
    original: image16.src,
    thumbnail: image16.src,
    description: "Shiva Caterers",
  },
  {
    original: image17.src,
    thumbnail: image17.src,
    description: "Shiva Caterers",
  },
  {
    original: image18.src,
    thumbnail: image18.src,
    description: "Shiva Caterers",
  },
  {
    original: image19.src,
    thumbnail: image19.src,
    description: "Shiva Caterers",
  },
  {
    original: image20.src,
    thumbnail: image20.src,
    description: "Shiva Caterers",
  },
  {
    original: image21.src,
    thumbnail: image21.src,
    description: "Shiva Caterers",
  },
];

const FounderSection = () => (
  <div className="flex flex-col lg:flex-row items-center">
    <Image
      src={founderImage}
      alt="Founder"
      className="rounded-8xl shadow-xl w-full max-w-80 max-h-80 lg:max-w-96 lg:max-h-96 lg:mr-8 mb-4 lg:mb-0"
      width={600}
      height={600}
    />
    <div className="text-center lg:text-left w-full lg:w-4/5">
      <h3 className="font-merriweather text-4xl font-bold mb-4 text-red">
        Our Founder
      </h3>
      <p className="font-monserrat text-black font-bold text-lg leading-relaxed">
        Our founder, Mr. Sunil Yadav, with years of culinary expertise and a
        passion for excellence, has built Shiva Caterers from the ground up.
        With a vision to deliver exceptional dining experiences, his dedication
        and commitment have been the cornerstone of our success.
      </p>
      <p className="font-monserrat text-black font-bold text-lg leading-relaxed mt-4">
        It all started in 2008, with a small team and a big dream. Over the
        years, we have grown and evolved, always staying true to our core values
        of quality and service. Under Mr. Sunil Yadav's leadership, Shiva
        Caterers has not only flourished but also set new standards in the
        catering industry. With a keen focus on innovation and customer
        satisfaction, we have expanded our services to cater to a diverse range
        of events, from intimate gatherings to large-scale celebrations. Our
        team of dedicated professionals continues to uphold our founder's
        vision, ensuring that each culinary creation reflects our commitment to
        quality and creativity.
      </p>
      <p className="font-monserrat text-black font-bold text-lg leading-relaxed mt-4">
        Throughout our journey, we have garnered numerous accolades and built
        lasting relationships with clients who trust us to deliver memorable
        experiences. Our relentless pursuit of excellence drives us to
        continually evolve and adapt, staying ahead of trends while remaining
        rooted in the timeless principles of hospitality. As we look towards the
        future, we remain dedicated to upholding the values that have guided us
        from the beginning, confident in our ability to exceed expectations and
        create unforgettable moments for our clients.
      </p>
      <p className="font-monserrat text-black font-bold text-lg leading-relaxed mt-4">
        Achievements: With 16 years of working successfully, we have earned a
        reputation for excellence and reliability. Our commitment to quality has
        never wavered, and we continue to strive for perfection in every event
        we cater.
      </p>
    </div>
  </div>
);

const ExperienceSection = () => (
  <div className="text-amber-700 brightness-50 text-center m-4 bg-amber-100 p-2">
    <h3 className="font-merriweather font-bold text-4xl mb-2">
      16 Years Of Experience will never let you down...
    </h3>
    <p className="text-lg font-bold">
      We focus our work on a quality-oriented ideology, emphasizing excellence
      in every detail.
    </p>
  </div>
);

const WhyChooseUsSection = () => (
  <section className="flex flex-col lg:flex-row gap-1 mb-8 text-white">
    {[
      {
        title: "Exceptional Quality",
        text: "At Shiva Caterers, we provide top-notch food and service. Our fresh ingredients and skilled chefs ensure a delightful dining experience.",
      },
      {
        title: "Customizable Menus",
        text: "Every event is unique. We offer customizable menus tailored to your preferences and dietary needs, perfect for weddings, corporate events, or birthday parties.",
      },
      {
        title: "Professional Service",
        text: "Our experienced team ensures your event is seamless and memorable. From planning to execution, we deliver exceptional service with a personal touch.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 1 }}
        className="bg-black shadow-md rounded-lg p-6 mb-6 font-merriweather text-white"
      >
        <h2 className="text-lg font-semibold mb-4">{item.title}</h2>
        <p className="text-white">{item.text}</p>
      </motion.div>
    ))}
  </section>
);

const AboutUsPage = () => {
  const pageStyles = {
    zoom: "85%", // Set the default zoom level to 85%
  };

  return (
    <Layout>
      <div className="bg-rose-50 py-9 px-8" style={pageStyles}>
        <h1
          style={{
            fontFamily: "Garamond, serif",
            fontSize: "49px",
            fontWeight: "bold",
            color: "goldenrod",
            textAlign: "center",
          }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          Welcome to Shiva Caterers
        </h1>

        <FounderSection />
        <ExperienceSection />
        <ImageGallery items={images} />
        <section className="flex flex-col lg:flex-row mb-10 items-baseline justify-center">
          <motion.div
            animate={{ y: [0, -30, 0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="p-5 lg:p-9 text-center lg:text-left transform hover:scale-105 duration-300 ease-linear brightness-50 flex items-center justify-center font-merriweather text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-red"
          >
            Why Choose Us
          </motion.div>
        </section>
        <WhyChooseUsSection />
        <Product />
        <Clientpart />
      </div>
    </Layout>
  );
};

export default AboutUsPage;

