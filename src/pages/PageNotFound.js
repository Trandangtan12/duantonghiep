import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <section className="tw-text-gray-600 body-font">
        <div className="container tw-px-5 tw-py-24 tw-mx-auto">
          <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-20">
            <h1 className="sm:tw-text-3xl tw-text-2xl tw-font-medium title-font tw-text-gray-900 tw-uppercase">
            Không tìm thấy trang !
            </h1>
          </div>
          <div className="tw-flex tw-flex-wrap tw--m-4 tw-justify-center">
            <Link to="/"><button className="tw-bg-green-600 tw-p-4 tw-rounded-lg tw-text-white hover:tw-transform hover:tw-duration-1000 hover:tw-bg-green-700">TRỞ VỀ TRANG CHỦ</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
