import React, { useEffect, useState } from 'react'
import {FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utilis/animationVariants'
const Contact = () => {

  const [message,setMessage] = useState('Send Message')
  const [successMessage, setSuccessMessage] = useState('')
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    country:'',
    message:'',
  })
  
  
  const [showModal,setShowModal] = useState(false)

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    

    const {name,email,phone,country,message} = formData
  if(!name || !email || !phone || !country || !message){
    alert('Please fill all fields')
  }else{
    setShowModal(true)
    setMessage("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "c8cd15ce-887a-424c-bcf4-311c41bec673");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
     sm()
      setMessage("Send Message");
      // event.target.reset();
    } else {
      // console.log("Error", data); 
      setResult(data.message);
    }
    
  }
  }
  
  const sm = ()=>{
   setSuccessMessage('Message Sent Successfully')
   setTimeout(() => {
    setSuccessMessage('')
   }, 2000);
  }
 const closeModal = ()=>{
  setShowModal(false)

  setFormData({
    name:'',
    email:'',
    phone:'',
    country:'',
    message:''
  })
  
 }
  return (
    <div id='contact' className='bg-heroBg text-white py-28 px-8 flex items-center justify-center'>
    <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid md:grid-cols-2 items-center md:gap-12 gap-8'>
        {/* left side  */}
        <motion.div 
        variants={fadeIn('down',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
        className='space-y-8'>
          <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaUserAlt className='text-primary'/>
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>24 Hours Service</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaEnvelope className='text-primary'/>
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Expert Therapist</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaPhoneAlt className='text-primary'/>
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>High Quality Care</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                <FaGlobe className='text-primary'/>
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* right side  */}


        <motion.div 
        variants={fadeIn('up',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
        className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
         <h3 className='text-heroBg text-2xl font-bold mb-4'>Book Appoinment</h3>
         <form onSubmit={handleSubmit} className='space-y-8 text-heroBg'>
            <div className='flex sm:flex-row flex-col gap-4'>
              <input onChange = {handleChange} 
              name='name'
              value={formData.name}
               type="text" placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
              <input onChange = {handleChange} 
              name='email'
              value={formData.email} 
              type="email" placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
            </div>
            <div className='flex sm:flex-row flex-col gap-4'>
              <input onChange = {handleChange} name='phone'
              value={formData.phone} type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
              <input onChange = {handleChange} name='country' 
              value={formData.country} type="text" placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
            </div>
            <textarea onChange = {handleChange} name='message' 
            value={formData.message}
            placeholder='Type Here...' rows={5} className='w-full rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-primary shadow resize-none'></textarea>
            <span
            className='capitalize text-gray-600'>{successMessage}</span>
            <button
            type='submit'
            className='w-full bg-primary p-3 text-white rounded-md hover:bg-primary/90'
            >{message}</button>
         </form>
        </motion.div>


        </div>
    </div>
    {
      showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 '>
        <div className='bg-white p-8 rounded-md shadow-lg text-heroBg'>
          <h2 className='text-2xl font-bold mb-4'>Thank You!</h2>
          <p>thank you, {formData.name}, for submiting your query.</p>
          <button
          onClick={closeModal}
          className='mt-4 py-2 bg-primary px-4 text-white rounded-md'
          >Close</button>
        </div>
        </div>
      )
    }
    </div>
  )
}

export default Contact