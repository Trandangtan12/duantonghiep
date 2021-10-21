import React from 'react'


const BannerRow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
      };
    return (
        <div className="tw-w-full tw-flex tw-flex-col">
        <div className="bannerTicket tw-h-[12rem] tw-mb-4 tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-5">
        <h2 className="tw-text-xl tw-font-bold tw-mb-2 ">Phòng tránh covid 2019</h2>
        <p>The Last React Carousel You'll Ever Need!
          This library is the port of jQuery slick library.</p>
          </div>
          <div className="slideTicket tw-flex tw-h-[12rem]  ">
       <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-5 tw-mr-5">
       <h2 className="tw-text-xl tw-mr-4 tw-font-bold tw-mb-2 ">Phòng tránh covid 2019</h2>
        <p>The Last React Carousel You'll Ever Need!
          This library is the port of jQuery slick library.</p>
       </div>
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-5">
       <h2 className="tw-text-xl tw-mr-4 tw-font-bold tw-mb-2 ">Phòng tránh covid 2019</h2>
        <p>The Last React Carousel You'll Ever Need!
          This library is the port of jQuery slick library.</p>
       </div>
          </div>
      </div>
    )
}

export default BannerRow
