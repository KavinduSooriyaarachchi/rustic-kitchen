import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            The Rustic Kitchen <br /> Mahathenna , Belihuloya.{" "}
          </p>
          <p className="text-gray-500">
            Tel : +94 70 371 1654 <br /> Email : contact@rustickitchen.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Behind Rustic Kitchen
          </p>
          <p className="text-gray-500">
            Rustic Kitchen is built on the passion of people who truly love what
            they do. From our chefs to our servers, every team member is
            dedicated to crafting hearty meals and welcoming experiences that
            feel like home. We believe that great food comes from great people
            and our team brings warmth, tradition, and care to every plate we
            serve.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            CONTACT US
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
