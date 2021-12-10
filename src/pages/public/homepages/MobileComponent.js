import React from 'react'
import BannerRow from "../../../compornent/BannerRow";
import DatePickerForm from "../../../compornent/datePicker";
import Introduce from '../../../compornent/HomePage/introduce';
import QuestionTicker from "../../../compornent/HomePage/questionTicker";
import SearchCars from '../../../compornent/searchCars';

const MobileComponent = () => {
    return (
        <section className="homePage tw-flex tw-flex-col tw-w-full">
            <div className="homePageBg tw-block tw-absolute tw-bg-green-600 
    tw-w-full tw-h-[5em] tw-z-10"> </div>
            <section className="tw-w-full tw-px-5 tw-mt-5 tw-z-10">
                <h1 className="tw-text-white tw-text-center tw-font-bold tw-text-xl tw-mb-3">Tìm kiếm chuyến xe</h1>
                <div className="">
                    <SearchCars />
                </div>
                <Introduce />
                <QuestionTicker />
            </section>

        </section>
    )
}

export default MobileComponent
