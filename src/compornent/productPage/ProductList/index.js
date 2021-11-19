import React, { useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/fontawesome-free-solid";
import { Link } from 'react-router-dom';

const ProductList = ({ products, price }) => {

  return (
    <div className="tw-flex-grow tw-w-full">
      {products.filter(item => item.price >= price.value.min && item.price <= price.value.max).map((item) => {
        return (
          <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-mb-3">
            <div className="tw-flex tw-justify-between">
              <div className="tw-flex">
                  <img src={item.image} className="tw-w-44 tw-h-44 tw-object-cover" alt="" />
                <div className="tw-ml-5">
                  <div className="tw-mb-3 tw-flex tw-justify-bet">
                    <div>
                      <h3 className="tw-font-bold">{item.name}</h3>
                      <p className="tw-text-sm tw-text-gray-500">{item.seat} ghế</p>
                    </div>
                  </div>
                  <div>

                  </div>
                  <div className="tw-flex tw-items-center">
                    <svg className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 tw-h-[4.625rem] tw-w-[0.75rem]" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74">
                      <path fill="none" stroke="#787878" stroke-linecap="round" stroke-width="2" stroke-dasharray="0 7" d="M7 13.5v46"></path>
                      <g fill="none" stroke="#484848" stroke-width="3">
                        <circle cx="7" cy="7" r="7" stroke="none"></circle>
                        <circle cx="7" cy="7" r="5.5"></circle>
                      </g>
                      <path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878"></path>
                    </svg>
                    <div className="tw-h-[4.625rem] tw-ml-3 tw-flex tw-flex-col tw-justify-between">
                      <div className="tw-flex">
                        <span className="tw-text-xl tw-font-bold">{item.start_time}</span>
                        <div className="tw-flex tw-items-center tw-ml-1">
                          <FontAwesomeIcon className="tw-text-[0.25rem] tw-mx-1" icon={faCircle} />
                          <p className="tw-text-gray-500 tw-text-sm">{item.from}</p>
                        </div>
                      </div>
                      <div className="tw-flex">
                        <span className="tw-text-xl tw-font-bold">{item.end_time}</span>
                        <div className="tw-flex tw-items-center tw-ml-1">
                          <FontAwesomeIcon className="tw-text-[0.25rem] tw-mx-1" icon={faCircle} />
                          <p className="tw-text-gray-500 tw-text-sm">{item.to}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="tw-flex tw-flex-col tw-justify-between tw-items-center">
                <p className="tw-text-2xl tw-font-black tw-text-green-700">{new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(item.price)}</p>
                <div>
                  <Link to={`/productdetail/${item.id}`}>
                    <button className="tw-p-2 tw-bg-red-500 tw-text-white tw-rounded-lg">
                    Chọn chuyến
                    </button></Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}

export default ProductList
