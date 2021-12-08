import React from "react";
import BannerRow from "../../../compornent/BannerRow";
import DatePickerForm from "../../../compornent/datePicker";
import Introduce from '../../../compornent/HomePage/introduce';
import QuestionTicker from "../../../compornent/HomePage/questionTicker";
import SearchCars from '../../../compornent/searchCars';


const HomePages = () => {
 
  return (
    <section className="homePage tw-relative tw-flex tw-flex-col tw-w-full">
      <div className="homePageBg tw-hidden xl:tw-block tw-absolute tw-top-[-37rem] tw-left-[-10rem] tw-bg-green-600 
    tw-w-[69rem] tw-h-[60rem] tw-z-10 tw-rounded-[50%]"> </div>
      <div className="homePageBgLight tw-hidden xl:tw-block tw-absolute tw-top-[-37rem] tw-left-[-11.5rem] tw-bg-green-300 
    tw-w-[72rem] tw-h-[60.3rem] tw-rounded-[50%]"> </div>
      <section className="tw-w-3/4 tw-mx-auto tw-mt-5 tw-z-10">
        <h1 className="tw-text-white tw-font-bold tw-text-xl tw-mb-3">Tìm kiếm chuyến xe</h1>
        <div className="tw-flex">
         <SearchCars />
          <BannerRow />
          
        </div>
        <Introduce />
        {/* <QuestionTicker /> */}
      </section>

    </section>
  )
};

export default HomePages;
