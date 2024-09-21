import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import serviceImg1 from '../../assets/service1.webp'
import serviceImg2 from '../../assets/service2.webp'
import serviceImg3 from '../../assets/service3.webp'
import serviceImg4 from '../../assets/service4.webp'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utilis/animationVariants'
const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="container mx-auto pt-10">
        <motion.div 
        variants={fadeIn('up',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
        className="text-center space-y-5">
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis velit, est error obcaecati quae id. Ipsa eaque delectus
            quaerat odit
          </p>
        </motion.div>

        {/* services category  */}
        <div    
        className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList 
            variants={fadeIn('up',0.3)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
            className='flex flex-wrap justify-between md:gap-8 gap-4 '>
              <Tab>Couple Counceling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Felling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </motion.TabList>

            <TabPanel>
            <motion.div 
            variants={fadeIn('up',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
            className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className="md:w-1/2 bg-white rounded-lg font-secondary p-12">
                <h3 className="text-3xl font-semibold text-primary mb-4">Couple Counceling</h3>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam repellendus sint possimus consequuntur cumque et ipsa animi laboriosam dolorem! </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside
                ">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <img src={serviceImg1} alt="service image" className="w-full h-auto rounded-2xl object-cover md:h-[446px]" />
              </div>
              </motion.div>

              
            </TabPanel>

            <TabPanel >
            <motion.div 
            variants={fadeIn('up',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
            className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className="md:w-1/2 bg-white rounded-lg font-secondary p-12">
                <h3 className="text-3xl font-semibold text-primary mb-4">Parenting Skills</h3>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam repellendus sint possimus consequuntur cumque et ipsa animi laboriosam dolorem! </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside
                ">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>

              <div className="md:w-1/2">
                <img src={serviceImg2} alt="service image" className="w-full h-auto rounded-2xl object-cover md:h-[446px]" />
              </div>
              </motion.div>

              
            </TabPanel>

            <TabPanel>
            <motion.div 
            variants={fadeIn('up',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
            className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className="md:w-1/2 bg-white rounded-lg font-secondary p-12">
                <h3 className="text-3xl font-semibold text-primary mb-4">Felling Stuck</h3>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam repellendus sint possimus consequuntur cumque et ipsa animi laboriosam dolorem! </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside
                ">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src={serviceImg3} alt="service image" className="w-full h-auto rounded-2xl object-cover md:h-[446px]" />
              </div>
              </motion.div>

              
            </TabPanel>
            
            <TabPanel>
            <motion.div 
            variants={fadeIn('up',0.2)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
            className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className="md:w-1/2 bg-white rounded-lg font-secondary p-12">
                <h3 className="text-3xl font-semibold text-primary mb-4">Self-Confidence</h3>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam repellendus sint possimus consequuntur cumque et ipsa animi laboriosam dolorem! </p>
                <h4 className="text-xl font-medium text-black mb-4">Benefits</h4>
                <ul className="list-disc list-inside
                ">
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src={serviceImg4} alt="service image" className="w-full h-auto rounded-2xl object-cover md:h-[446px]" />
              </div>
              </motion.div>

              
            </TabPanel>
           
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
