import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Rustic Kitchen, we serve more than just meals — we serve
            memories. Our dishes are crafted with care, combining traditional
            recipes with fresh, local ingredients. With a focus on flavor,
            warmth, and authenticity, we bring the comfort of home-cooked food
            to every table. Quality, satisfaction, and heart are at the center
            of everything we do.
          </p>
          <p>
            We believe great food starts with honest ingredients and a love for
            tradition. Our menu is inspired by the comforting flavors of home —
            slow-cooked, full of heart, and made to bring people together.
            Whether you're stopping by for a hearty meal or sharing a special
            moment with loved ones, we’re here to serve you rustic goodness with
            a timeless touch.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Rustic Kitchen is to bring people together through
            the warmth of wholesome, flavorful food. We are dedicated to
            preserving the charm of traditional cooking while embracing
            sustainable practices and fresh, locally sourced ingredients. Every
            dish we serve reflects our commitment to quality, comfort, and
            creating memorable dining experiences that feel just like home.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarance : </b>
          <p className="text-gray-600">
            We ensure top-quality standards in every dish through fresh
            ingredient sourcing, careful preparation, and a deep commitment to
            serving hearty, flavorful meals you’ll love. Every plate reflects
            our passion for authenticity, consistency, and rustic comfort.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience : </b>
          <p className="text-gray-600">
            We prioritize your convenience with an easy-to-use menu, quick
            ordering process, and timely delivery or pickup options ensuring a
            smooth and satisfying experience from browsing to your first bite.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service : </b>
          <p className="text-gray-600">
            We prioritize exceptional customer service, offering friendly
            support, quick assistance, and a commitment to making every dining
            experience seamless, satisfying, and memorable — whether you’re
            dining in, ordering out, or reaching out.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
