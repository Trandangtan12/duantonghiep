import React from 'react'
import Footer from '../../../compornent/footer';
import Header from '../../../compornent/header';
import Introduce from '../../../compornent/HomePage/introduce';
import QuestionTicker from "../../../compornent/HomePage/questionTicker";
import SearchCars from '../../../compornent/searchCars';
import TicketTimer from '../../../compornent/ticketTimer';

const MobileComponent = () => {
    return (
        <div className="tw-flex tw-w-full tw-flex-col tw-h-screen">
            <Header />

            <div className="tw-flex tw-flex-grow">
                <section className="homePage tw-flex tw-flex-col tw-w-full">
                    <div className="homePageBg tw-block tw-absolute tw-bg-green-600 
                    tw-w-full tw-h-[5em] tw-z-10">
                    </div>
                    <section className="tw-w-full tw-px-5 tw-mt-5 tw-z-10">
                        <h1 className="tw-text-white tw-text-center tw-font-bold tw-text-xl tw-mb-3">Tìm kiếm chuyến xe</h1>
                        <div className="">
                            <SearchCars />
                        </div>
                        <TicketTimer />
                        <Introduce />
                    </section>

                </section>
            </div>
            <Footer />
        </div>

    )
}

export default MobileComponent
