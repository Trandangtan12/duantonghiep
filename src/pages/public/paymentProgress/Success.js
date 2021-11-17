import React from "react";

const Payment = () => {
  return (
    <div className="tw-relative tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-center tw-bg-white tw-shadow tw-rounded-md tw-py-5 tw-pl-6 tw-pr-8 sm:tw-pr-6">
      <div className="tw-flex tw-flex-row tw-items-center tw-border-b sm:tw-border-b-0 tw-w-full sm:tw-w-auto tw-pb-4 sm:tw-pb-0">
        <div className="tw-text-green-500">
          <svg
            className="tw-w-6 sm:tw-w-5 tw-h-6 sm:tw-h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="tw-text-sm tw-font-medium tw-ml-3">
          Success Payment.
        </div>
      </div>
      <div className="tw-text-sm tw-tracking-wide tw-text-gray-500 tw-mt-4 sm:tw-mt-0 sm:tw-ml-4">
        Your Payment was Successful. You can use our services!
      </div>
      <div className="tw-absolute sm:tw-relative sm:tw-top-auto sm:tw-right-auto tw-ml-auto tw-right-4 tw-top-4 tw-text-gray-400 hover:tw-text-gray-800 tw-cursor-pointer">
        <svg
          className="tw-w-4 tw-h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Payment;
