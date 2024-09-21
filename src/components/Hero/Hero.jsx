import React from "react";
import heroImg from "../../assets/hero.webp";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import {motion} from 'framer-motion'
import {fadeIn} from '../../utilis/animationVariants'
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-heroBg flex items-center md:h-screen text-white pt-28"
      >
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between mx-auto p-8 h-full gap-12 overflow-y-hidden">
          {/* left side  */}
          <motion.div 
          variants={fadeIn('down',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className="md:w-1/2">
            <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/4 leading-snug">
              Start Your Journey to Mental Wellness
            </h1>
            <p className="text-[17px] mb-12 pr-2">
              We know our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we are kinder to ourselves.Let
              us walk you through the basic in our new mindful guide and how to
              meditate.
            </p>
            <button className="text-white bg-primary py-3.5 px-8 rounded-md hover:bg-primary/90">
              <a href="#contact" className="flex items-center gap-1">
                <span>Get Started</span>
                <IoArrowForwardCircleSharp />
              </a>
            </button>
          </motion.div>
          {/* right side  */}
          <motion.div
          variants={fadeIn('left',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
           className="md:w-1/2 h-[550px]">
            <img
              src={heroImg}
              alt="hero image"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
