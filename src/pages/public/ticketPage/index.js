import React from "react";

const Ticket = () => {
  return (
    <div className="tw-h-screen tw-bg-gray-300">
      <div className="tw-py-12">
        <div className="tw-max-w-md tw-mx-auto tw-bg-gray-100 tw-shadow-lg tw-rounded-lg md:tw-max-w-5xl">
          <div className="md:tw-flex ">
            <div className="tw-w-full tw-p-4 tw-px-5 tw-py-5">
              <div className="md:tw-grid md:tw-grid-cols-3 tw-gap-2 ">
                <div className="tw-col-span-2 tw-p-5">
                  <h1 className="tw-text-xl tw-font-medium ">
                    Thanh toán chuyến xe
                  </h1>
                  <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-pt-6">
                    <div className="tw-flex tw-items-center">
                      {" "}
                      <img
                        src="https://vcdn-english.vnecdn.net/2021/10/18/xebuytdien55341634461594-16345-7236-8397-1634529149_1200x0.jpg"
                        width={60}
                        className="tw-rounded-full "
                      />
                      <div className="tw-flex tw-flex-col tw-ml-3">
                        {" "}
                        <span className="md:text-md tw-font-medium">
                          Tên chuyến xe
                        </span>{" "}
                        <span className="tw-text-xs tw-font-light tw-text-gray-400">
                          mã số vé
                        </span>{" "}
                      </div>
                    </div>
                    <div className="tw-flex tw-justify-center tw-items-center">
                      <div className="tw-pr-8 tw-flex ">
                        {" "}
                        <span className="tw-font-semibold">-</span>{" "}
                        <input
                          type="text"
                          className="focus:tw-outline-none tw-bg-gray-100 tw-border tw-h-6 tw-w-8 tw-rounded tw-text-sm tw-px-2 tw-mx-2"
                          defaultValue={1}
                        />{" "}
                        <span className="tw-font-semibold">+</span>{" "}
                      </div>
                      <div className="tw-pr-8 ">
                        {" "}
                        <span className="tw-text-xs tw-font-medium">
                          $10.50
                        </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <i className="fa fa-close tw-text-xs tw-font-medium" />{" "}
                      </div>
                    </div>
                  </div>                 
                </div>
                <div className=" tw-p-5 tw-bg-gray-800 tw-rounded tw-overflow-visible"> <span className="tw-text-xl tw-font-medium tw-text-gray-100 tw-block tw-pb-3">Thông tin thanh toán</span> <span className="tw-text-xs tw-text-gray-400 ">Loại thẻ</span>
              <div className="tw-overflow-visible tw-flex tw-justify-between tw-items-center tw-mt-2">
                <div className="tw-rounded tw-w-52 tw-h-28 tw-bg-gray-500 tw-py-2 tw-px-4 tw-relative tw-right-10"> <span className="tw-italic tw-text-lg tw-font-medium tw-text-gray-200 tw-underline">VISA</span>
                  <div className="tw-flex tw-justify-between tw-items-center tw-pt-4 "> <span className="tw-text-xs tw-text-gray-200 tw-font-medium">****</span> <span className="tw-text-xs tw-text-gray-200 tw-font-medium">****</span> <span className="tw-text-xs tw-text-gray-200 tw-font-medium">****</span> <span className="tw-text-xs tw-text-gray-200 tw-font-medium">****</span> </div>
                  <div className="tw-flex tw-justify-between tw-items-center tw-mt-3"> <span className="tw-text-xs tw-text-gray-200">Giga Tamarashvili</span> <span className="tw-text-xs tw-text-gray-200">12/18</span> </div>
                </div>
                <div className="tw-flex tw-justify-center tw-items-center tw-flex-col"> <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width={40} className="tw-relative tw-right-5" /> <span className="tw-text-xs tw-font-medium tw-text-gray-200 tw-bottom-2 tw-relative tw-right-5">mastercard.</span> </div>
              </div>
              <div className="tw-flex tw-justify-center tw-flex-col tw-pt-3"> <label className="tw-text-xs tw-text-gray-400 ">Name on Card</label> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="Giga Tamarashvili" /> </div>
              <div className="tw-flex tw-justify-center tw-flex-col tw-pt-3"> <label className="tw-text-xs tw-text-gray-400 ">Card Number</label> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="**** **** **** ****" /> </div>
              <div className="tw-grid tw-grid-cols-3 tw-gap-2 tw-pt-2 tw-mb-3">
                <div className="tw-col-span-2 "> <label className="tw-text-xs tw-text-gray-400">Expiration Date</label>
                  <div className="tw-grid tw-grid-cols-2 tw-gap-2"> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="mm" /> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="yyyy" /> </div>
                </div>
                <div className> <label className="tw-text-xs tw-text-gray-400">CVV</label> <input type="text" className="focus:tw-outline-none tw-w-full tw-h-6 tw-bg-gray-800 tw-text-white tw-placeholder-gray-300 tw-text-sm tw-border-b tw-border-gray-600 tw-py-4" placeholder="XXX" /> </div>
              </div> <button className="tw-h-12 tw-w-full tw-bg-blue-500 tw-rounded focus:tw-outline-none tw-text-white hover:tw-bg-blue-600">Thanh toán</button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
