import React from 'react'
import {
    faCircle
  } from "@fortawesome/fontawesome-free-solid";
  import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DesktopComponent = (props) => {
    const { productFilter } = props
    const ListError = () => {
        return (<div className="tw-bg-white tw-p-5 tw-text-center">
          <img src="https://storage.googleapis.com/fe-production/images/route-no-schedule.png" alt="" />
          <p className="tw-font-bold tw-text-xl">Không có chuyến nào để hiển thị</p>
        </div>)
      }
    
    
      const mapProduct = productFilter.map((item, index) => {
        return (
          <div key={index} className="tw-rounded-lg tw-bg-white tw-p-3 tw-mb-3 hover:tw-shadow-2xl tw-transition tw-ease-in-out">
            <div className="tw-flex tw-justify-between ">
              <div className="tw-flex">
                <div className="tw-w-36 tw-h-36 tw-border tw-border-gray-200">
                  {item.image == null ? <p className="tw-text-center tw-my-[40%] tw-text-sm">Không có ảnh</p>: <img src={item.image} className="tw-w-full tw-h-full tw-object-cover"  alt="" />}
                
                </div>
                
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
                          <p className="tw-text-gray-500 tw-text-sm">{item.startWard_name}</p>
                        </div>
                      </div>
                      <div className="tw-flex">
                        <span className="tw-text-xl tw-font-bold">{`${moment(item.end_time).format("HH:mm")}`}</span>
                        <div className="tw-flex tw-items-center tw-ml-1">
                          <FontAwesomeIcon className="tw-text-[0.25rem] tw-mx-1" icon={faCircle} />
                          <p className="tw-text-gray-500 tw-text-sm">{item.endWard_name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
    
                </div>
              </div>
    
              <div className="tw-flex tw-flex-col tw-justify-between tw-items-center">
                <p className="tw-text-2xl tw-font-black tw-text-green-700">{new Intl.NumberFormat('vi', { currency: 'VND', style: 'currency', }).format(item.price)}</p>
                <div className="tw-text-center">
                  <p className="tw-py-3 tw-text-gray-500">{item.seat_empty > 0 ? `Số ghế trống ${item.seat_empty}` : <span>Hết ghế</span>}</p>
                  {item.seat_empty <= 0 ? null :
                    <Link to={`/productdetail/${item.id}`}>
                      <button className="tw-p-2 tw-bg-red-500 tw-text-white tw-rounded-lg">
                        Chọn chuyến
                      </button></Link>}
    
                </div>
              </div>
            </div>
          </div>
        )
      }
      )
    
      return (
        <div className="tw-flex-grow tw-w-full">
          {mapProduct == null || mapProduct.length == 0 ? ListError() : mapProduct}
        </div>
      )
}

export default DesktopComponent
