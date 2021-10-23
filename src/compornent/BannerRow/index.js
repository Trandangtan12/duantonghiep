import React from 'react'
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import './swiper/css';


const BannerRow = () => {
   
    return (
        <div className="tw-w-full tw-flex tw-flex-col">
        <div className="bannerTicket tw-h-[12rem] tw-mb-4 tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-5">
        <h2 className="tw-text-xl tw-font-bold tw-mb-2 ">Phòng tránh covid 2019</h2>
        <p>The Last React Carousel You'll Ever Need!
          This library is the port of jQuery slick library.</p>
          </div>


          <div className="slideTicket tw-flex tw-h-[12rem]  ">
      
       <div className="tw-bg-white tw-w-full tw-rounded-lg tw-shadow-lg tw-mr-5 tw-flex tw-flex-col">
        <div className="img">
       <img src="https://gos3.ibcdn.com/cab3-new-1634741929.jpg" alt="" class="tw-object-cover tw-rounded-t-lg  tw-w-full"/>
       </div>
       <div class="text tw-px-2">
        <p className="tw-text-sm">The Last React Carousel You'll Ever Need!
          This library is the port of jQuery slick library.</p>
          </div>
       </div>


       <div className="tw-bg-white tw-rounded-lg tw-w-full tw-shadow-lg tw-flex tw-flex-col">
        <div className="img">
       <img src="https://gos3.ibcdn.com/img-1623818080.jpg" alt="" class="tw-object-cover tw-rounded-t-lg  tw-w-full"/>
       </div>
       <div class="text tw-px-2">
        <p className="tw-text-sm">The Last React Carousel You'll Ever Need!
          This library is the port of jQuery slick library.</p>
          </div>
       </div>

          </div>

          <div>

            
          </div>
      </div>
    )
}

export default BannerRow
