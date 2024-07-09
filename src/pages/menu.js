import Layout from "@/components/Layout";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const menuData = {
    Chats: [
      "Kolkata Phulka",
      "Panipuri (3 Variety of Paani)",
      "Papdi Chats",
      "Assorted Chats",
      "Sev Puri",
      "Aloo Puri",
      "Bhel Puri",
      "Chinese Bhel",
      "Bombay Bhel",
      "Matar Handi Chats",
      "Aloo Tikki Ragada",
      "Aloo Tikki Chole",
      "Samosa Chats",
      "Mini Kachori Chats",
      "Kachori Chats",
      "Paneer Chilada",
      "Moong Dal Chats (Utharkandi)",
      "Masala Puri (South)",
      "Dahi Puri",
      "Fruits Chats",
      "Corn Chats",
      "Tava Chats",
      "Banarasi Chats",
      "Jhalmuri",
      "Palak Patti Chats",
      "Sweet Potato Chats",
      "Barbeque Chats",
      "Katori Chats",
      "Pav Bhaji",
      "Vada Pav",
    ],
    "Vegetable Dishes": [
      "Mix Veg",
      "Veg Kolhapuri",
      "Veg Haryali",
      "Tava Veg",
      "Veg Makhni",
      "Methi Matar Malai",
      "Corn Methi Malai",
      "Corn Palak",
      "Matar Palak",
      "Gobi Aloo Gravy",
      "Gobi Aloo Dry",
      "Gobi Aloo Matar",
      "Dum Aloo",
      "Kashmiri Dum Aloo",
      "Veg Hyderabadi",
      "Jharkhandi Dum Aloo",
      "Kadai Mix Veg",
      "Dry Aloo",
      "Jeera Aloo",
      "Aloo Matar",
      "Aloo Jhol",
      "Aloo Baingan Palak",
      "Bhindi Masala",
      "Pindi Chole",
      "Chira",
      "Lauki Kofta",
      "Kathal Sabji",
      "Turai Sabji",
      "Kadu Sabji",
      "Bharwa Shimla Mirch",
      "Aloo Methi",
      "Kadai Mushroom",
      "Baingan Bharta",
    ],
    Tandoor: [
      "Paneer Malai Tikka",
      "Tandoori Paneer Tikka",
      "Haryani Paneer Tikka",
      "Cream Paneer Tikka",
      "Mint Paneer Tikka",
      "Mushroom Sholay Kebab",
      "Malai Mushroom",
      "Spicy Tandoori Mushroom",
      "Aloo Bhukara",
      "Gobi Tandoori Tikka",
      "Veg Seekh Kebab Tandoori Tikka",
      "Broccoli Tandoori Kebab Tikka",
      "Pineapple Tandoori Tikka",
      "Shakarkandi Tandoori Tikka",
      "Apple Tandoori Tikka",
    ],
    "Paneer Dishes": [
      "Paneer Butter Masala",
      "Malai Paneer",
      "Paneer Tikka Masala",
      "Kadai Paneer",
      "Paneer Makhni",
      "Zafrani Paneer",
      "Kesariya Paneer",
      "Shahi Paneer",
      "Paneer Pasanda",
      "Afghani Paneer",
      "Mughlai Paneer",
      "Kohlapuri Paneer",
      "Palak Paneer",
      "Mehti Malai Paneer",
      "Matar Paneer",
    ],
    Chinese: [
      "Paneer Chilly",
      "Baby Corn Chilly",
      "Paneer Pepper Fry",
      "Baby Corn Pepper Fry",
      "Potato Chilly",
      "Mushroom Chilly",
      "Mushroom Manchurian",
      "Paneer Manchurian",
      "Baby Corn Manchurian",
      "Gobi Manchurian",
      "Veg Ball Manchurian",
      "Paneer Sesame Kebab",
      "Mix Manchurian",
      "Spring Noodles",
      "Veg Cheese Roll",
    ],
    Starters: [
      "Cheese Stuffed Ball",
      "Harabhara Kebab",
      "Spring Roll",
      "Cocktail Samosa",
      "Cocktail Kachori",
      "French Fries",
      "Veg Cutlet",
      "Pakoda (Assorted Paneer, Veg, Gobi)",
      "Veg Nuggets",
      "Mushroom Kebab (Fry)",
      "Crispy Baby Corn",
      "Dahi Kebab",
      "Moong Dal Pakodi",
      "Sprout Tikki Kebab",
    ],
    Sweets: [
      "JALEBI RABRI",
      "MALPUA RABRI",
      "MOONG DAL HALWA",
      "BADAM HALWA",
      "GAJAR HALWA",
      "DOODHI HALWA",
      "DAL BADAM HALWA",
      "MALAI LADOO",
      "CHOCOLATE MALAI LADOO",
      "COCONUT CHEENA PAYAS",
      "MINI RAS MALAI",
      "RASGULLA",
      "GULAB JAMUN",
      "RAJBHOG",
      "RASBHARI",
      "BOONDI BAKED",
      "DRY FRUIT BARFI",
      "BESAN BARFI",
      "MALAI CHAM-CHAM",
      "MALAI GULLA",
      "MALAI SANDWICH",
      "KHEER KADAM",
      "CHINAR JALPAI",
      "SANDESH",
      "GUR SANDESH",
      "MANGO CHAM-CHAM",
      "MALAI ROLL",
      "MALAI CHAAP",
    ],
    Salads: [
      "GREEN SALAD",
      "FINGER CUT SALAD",
      "SPROUT SALAD",
      "CABBAGE POTATO SALAD",
      "CORN SUMMER SALAD",
      "MEXICAN SALAD",
      "ITALIAN CHIPPED SALAD",
      "BRIGHT SPRING SALAD",
      "TACO SALAD",
      "PASTA SALAD",
      "TOMATO SUMMER SALAD",
      "CHICKPEA SALAD",
      "TOFU SALAD",
      "SPICY WATERMELON SALAD",
      "SPICY PINEAPPLE SALAD",
      "FRUIT SUMMER SALAD",
      "BLACK BEAN CORN SALAD",
    ],
    Juices: [
      "VIRGIN MOJITO",
      "BLUE LIME",
      "GUAVA SPICE",
      "KIWI SANGRIA",
      "BLACK CURRENT MOJITO",
      "FRUIT PUNCH",
      "KALA KHATTA",
      "ORANGE MINT MOJITO",
      "GREEN APPLE",
      "TERI MERI MOCKTAIL",
      "LICHI BLOSSOM",
      "SODA SHIKANJI",
      "JALJEERA",
      "SEASONAL FRUIT JUICE",
    ],
  };

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categoryVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <Layout>
      <div
        className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#000000FF" }}
      >
        {/* Logo section */}
        <div className="flex justify-center items-center mb-12">
          <Image
            src={logo}
            width={200}
            height={100}
            objectFit="contain"
            alt="Logo"
          />
        </div>

        {/* Menu categories */}
        {Object.keys(menuData).map((category, index) => (
          <div key={index} className="mb-6">
            <motion.div
              className="bg-amber-100 shadow-lg rounded-lg p-8 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => toggleCategory(category)}
            >
              <h2 className="text-2xl font-semibold text-black">{category}</h2>
            </motion.div>
            <AnimatePresence>
              {activeCategory === category && (
                <motion.div
                  className="border-y-gray-700 shadow-lg rounded-lg p-4 mt-2 overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={categoryVariants}
                  transition={{ ease: "linear" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {menuData[category].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-rose-300 p-4 rounded-lg shadow hover:shadow-lg font-bold"
                        whileHover={{ scale: 1.03 }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MenuPage;
