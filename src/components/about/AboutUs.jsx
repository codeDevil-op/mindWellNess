import React, { useState } from 'react'
import {IoPlay,IoArrowForwardCircleSharp} from 'react-icons/io5'
import thumbnailImg from '../../assets/video-thumbnail.webp'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utilis/animationVariants'
const AboutUs = () => {
  const [isVideoPlaying,setIsVideoPlaying] = useState(false)

  const handleVideoPlay = ()=>{
    setIsVideoPlaying(true)
  }

  const handleCloseVideo = ()=>{
    setIsVideoPlaying(false)
  }
  return (
    <div id='about' className='bg-[#f7f8fc]'>
    <motion.div 
    variants={fadeIn('down',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
    className='container mx-auto'>
    <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
      {/* left side  */}
      <div className='md:w-1/2 w-full mb-8 md:mb-0 '>
      {
        !isVideoPlaying ?(
          <div className='relative'>
            <img src={thumbnailImg} alt="video thumbnail" className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
            <button 
            onClick={handleVideoPlay}
             className='absolute top-1/2 left-1/2 bg-primary transform -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full p-3'>
               <IoPlay className='size-12 text-white'/>
            </button>
          </div>
        ):(
          null
        )
      }
       </div>
      {/* right side  */}
      <div className='md:w-1/2 w-full'>

      <h2 className="text-4xl font-secondary capitalize font-bold mb-4 leading-snug">
              Individual consult and therapy
            </h2>
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

      </div>
    </div>
    {
      isVideoPlaying && (
        <div onClick={handleCloseVideo} className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30'>
        <div className='relative w-full h-full flex items-center justify-center '>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KVm5QuXSxxA?si=e9gLy1kNwxz1wwny" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div onClick={handleCloseVideo} className='absolute top-4 right-4
        text-white text-2xl cursor-pointer'>
          &times;
        </div>
        </div>
        </div>
      )
    }
    </motion.div>
    </div>
  )
}

export default AboutUs