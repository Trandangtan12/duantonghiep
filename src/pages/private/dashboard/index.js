import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Chart from "../../../compornent/admin/chart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionGetBuses } from "../../../redux/actions/buses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faCar, faHandshake, faTicketAlt } from "@fortawesome/fontawesome-free-solid";
const DashBoard = () => {
  const { availableOrder } = useSelector((state) => state.buses);
  const dispatch = useDispatch();
  useEffect(() => {

  }, []);
  return (
    <div>
      <div className="container tw-my-12 tw-mx-auto tw-px-4 md:tw-px-12">
        <div className="tw-flex tw-flex-wrap tw--mx-1 lg:tw--mx-4">
          {/* Column */}
          <div className="tw-my-1 tw-px-1 tw-w-full md:tw-w-1/2 lg:tw-my-4 lg:tw-px-4 lg:tw-w-1/4">
            {/* Article */}
            <article className="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <div className="tw-text-center">
              <FontAwesomeIcon icon={faBus} className={"tw-text-[5rem] "} />
              </div>
              <header className="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 md:tw-p-4">
                <h1 className="tw-text-lg">
                  <div
                    className="tw-text-green-600 tw-cursor-pointer"
                   
                  >
                    Chuyến xe
                  </div>
                </h1>
                <p className="text-grey-darker tw-text-sm">20</p>
              </header>
            </article>
            {/* END Article */}
          </div>
          <div className="tw-my-1 tw-px-1 tw-w-full md:tw-w-1/2 lg:tw-my-4 lg:tw-px-4 lg:tw-w-1/4">
            {/* Article */}
            <article className="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <div className="tw-text-center">
              <FontAwesomeIcon icon={faHandshake} className={"tw-text-[5rem] "} />
              </div>
              <header className="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 md:tw-p-4">
                <h1 className="tw-text-lg">
                  <div
                    className="tw-text-green-600 tw-cursor-pointer"
                   
                  >
                    Dịch vụ
                  </div>
                </h1>
                <p className="text-grey-darker tw-text-sm">20</p>
              </header>
            </article>
            {/* END Article */}
          </div>
          {/* END Column */}
          {/* Column */}
          <div className="tw-my-1 tw-px-1 tw-w-full md:tw-w-1/2 lg:tw-my-4 lg:tw-px-4 lg:tw-w-1/4">
            {/* Article */}
            <article className="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <div className="tw-text-center">
              <FontAwesomeIcon icon={faCar} className={"tw-text-[5rem] "} />
              </div>
              <header className="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 md:tw-p-4">
                <h1 className="tw-text-lg">
                  <div
                    className="tw-text-green-600 tw-cursor-pointer"
                   
                  >
                    Loại xe
                  </div>
                </h1>
                <p className="text-grey-darker tw-text-sm">20</p>
              </header>
            </article>
            {/* END Article */}
          </div>
          <div className="tw-my-1 tw-px-1 tw-w-full md:tw-w-1/2 lg:tw-my-4 lg:tw-px-4 lg:tw-w-1/4">
            {/* Article */}
            <article className="tw-overflow-hidden tw-rounded-lg tw-shadow-lg">
              <div className="tw-text-center">
              <FontAwesomeIcon icon={faTicketAlt} className={"tw-text-[5rem] "} />
              </div>
              <header className="tw-flex tw-items-center tw-justify-between tw-leading-tight tw-p-2 md:tw-p-4">
                <h1 className="tw-text-lg">
                  <div
                    className="tw-text-green-600 tw-cursor-pointer"
                   
                  >
                    Vé xe
                  </div>
                </h1>
                <p className="text-grey-darker tw-text-sm">20</p>
              </header>
            </article>
            {/* END Article */}
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default DashBoard;
