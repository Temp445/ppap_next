

import { CheckCircle,MoveRight } from 'lucide-react'
import Image from 'next/image'
import CMS from '../assets/CMS4.png'
import CMS1 from '../assets/image5.jpg'
import arrow from '../assets/arrow1.png'
import Link from 'next/link'


const Why_Choose = () => {
 

  return (
    <section className="pt-16 container mx-auto ">
      <div className=" mx-auto px-2 md:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 xl:gap-16 container">
          <div className="w-full md:w-8/12 lg:w-10/12  xl:w-6/12 relative">
            <div className="relative z-10  xl:bg-none lg:shadow-none p-1 rounded-lg shadow-lg transform  transition-transform duration-300">
              <div className="mx-auto  relative">
                     <Image 
                  src={arrow} 
                  alt="ACE CMS" 
                  className="hidden lg:block h-52 w-32 absolute lg:w-28 lg:right-0 xl:right-20 2xl:right-48 top-10  xl:-rotate-12 " 
                />
                <Image 
                  src={CMS1} 
                  alt="ACE CMS" 
                  className="hidden lg:block object-cover w-80 h-52 rounded-lg hover:scale-105" 
                />
              </div>
              <div className="mx-auto  relative mt-5">
                <Image 
                  src={CMS} 
                  alt="ACE CMS" 
                  className="object-cover w-full h-full rounded-lg hover:scale-105" 
                />
              </div>
            </div>
          
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full opacity-70 z-0"></div>
          </div>
          
        
          <div className="w-full xl:w-7/12 space-y-6  border border-gray-200  sm:border-0 pt-5 pb-10 px-2 lg:px-12 xl:px-2 rounded">
            <div className="inline-block bg-blue-50 text-sky-800 px-4 py-1 rounded-full font-medium">
              Why Choose Us?
            </div>
            
            <h2 className="text-2xl md:3xl  2xl:text-4xl font-bold text-gray-800 leading-tight">
               ACE CMS – Smart <span className='text-sky-800 mr-2'>Calibration Management</span> <br className='hidden xl:block' />Made Simple
              <span className="text-blue-600"></span>
            </h2>
            
            <p className=" lg:text-lg text-gray-600">
              At <strong>ACE CMS</strong>, we don&apos;t just help you manage calibration—we help you master it. 
              Here&apos;s why leading companies trust us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                "Audit-ready, zero stress.",
                "Calibrate smarter, not harder.",
                "MSA done in minutes—not hours.",
                "Scan it. Know it. Done.",
                "Your calibration, in your pocket.",
                "100% Cloud-Based, No Data Loss"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-violet-100 border border-gray-100"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
        <div className='w-[130px] md:w-36'>
              <Link href="#features" className=" text-sm  mt-6 bg-sky-600 text-white font-medium py-2 px-2 gap-3 md:py-2 md:px-3 rounded shadow-md transition-colors duration-300  flex items-center md:gap-5">
              Learn More
               <MoveRight size={20}/>
            </Link>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why_Choose