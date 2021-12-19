import React, { useEffect, useState } from 'react'
import ModalGetInfoTicket from './ModalGetInfoTicket'
import Rating from '@mui/material/Rating';
import moment from 'moment';
import { UserApi } from '../../../service/userService';
import { Link } from 'react-router-dom';
import { ratingService } from '../../../service/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import Footer from '../../../compornent/footer';
import FormPayTicket from './FormPayTicket';

const DesktopComponent = (props) => {
  const { handleOpenModal, product, id, isOpenModal, setIsOpenModal } = props
  const [star, setStar] = useState(0)
  const [wordRating, setWordRaing] = useState("")
  const { user } = UserApi.isAuthenticated();
  const [ratingList, setRatingList] = useState([])
  const quantityRating = ratingList?.length
  const sumRating = ratingList?.reduce((a, b) => a + Number(b.rating_point), 0)
  const averageRating = Math.round(sumRating / quantityRating)
  const checkRatingUser = ratingList?.filter(item => item?.user_id === user?.id).length
  const handleAddRating = async (value) => {
    const dataRating = {
      rating_point: star,
      description: value
    }
    if (star === 0) {
      alert("Bạn chưa chọn số sao !!!")
    } else {
      try {
        if (checkRatingUser >= 1) {
          alert("Bạn đã đánh giá chuyến này")
        } else {
          const res = await ratingService.addRating(product.id, dataRating)
          setRatingList([res.data[0], ...ratingList])
        }

      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleRemoveRating = async (id) => {
    try {
      await ratingService.deleteRating(id)
      setRatingList(ratingList?.filter(item => item.id !== id))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setRatingList(product.rating)
  }, [product.rating])
  return (
    <div className="">
      <div className="tw-bg-green-500 tw-h-[12rem]">
        <div className="tw-w-3/4 tw-mx-auto">
          <div className="tw-text-white">
            <h1 className="tw-py-5 tw-text-xl tw-font-bold">{product.name} {product.startPointName} - {product.endPointName}</h1>
            <p className="tw-text-xl">
              <span className=" tw-font-bold">
                {product.detailAddressStart} - {product.detailAddressEnd}
              </span>{" "}
              | <span>Thời gian khởi hành {product.date}</span> -{" "}
              <span>{ product.start_time}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="tw-w-3/4 tw-mx-auto">
        <div className="tw-flex tw-mt-[-5rem]">
          <div className="tw-flex-grow">
            <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-mb-3">
            <div className="tw-flex">
            <div className="tw-w-48 tw-h-36 tw-border tw-border-gray-200">
              {product.image == null ? <p className="tw-text-center tw-my-[40%] tw-text-sm">Không có ảnh</p> : <img src={product.image} className="tw-w-full tw-h-full tw-object-cover" alt="" />}
            </div>

            <div className="tw-ml-5">
              <div className="tw-mb-3 tw-flex tw-justify-bet">
                <div>
                  <h3 className="tw-font-bold">{product.name}</h3>
                  <p className="tw-text-sm tw-text-gray-500">{product.seat} ghế</p>
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
                    <span className="tw-text-xl tw-font-bold">{product.start_time}h</span>
                    
                  </div>
                  <div className="tw-flex">
                    <span className="tw-text-xl tw-font-bold">{moment(product.end_time).format("HH:mm") }h</span>
                   
                  </div>
                </div>
              </div>
              <div className='tw-my-3'>
          <p className='tw-mb-2 tw-font-bold'>Dịch vụ trên xe</p>
          <p>{product?.service?.map(i => <span className='tw-p-2 tw-text-white tw-text-xs tw-rounded-md tw-mx-1 tw-bg-yellow-500'>{i.name}</span> )}</p>
        </div>
            </div>
          </div>
            </div>
            <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-mb-3">
              <h1 className='tw-text-xl'>Mô tả chi tiết</h1>
              <div>
                {product.description}
              </div>
            </div>
            <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-mb-3">
              <div className='PostRating'>
                <div className='tw-flex tw-justify-between tw-items-center'>
                  <h1 className='tw-text-xl'><span className='tw-mr-2'>Đánh giá</span>
                    {quantityRating === 0 ? <span className=''>(chưa có đánh giá)</span> :
                      (<> <span>({quantityRating})</span> <span>{averageRating} <FontAwesomeIcon className='tw-text-yellow-400' icon={faStar} /></span> </>)
                    }
                    { }
                  </h1>

                  <div className={`${user === undefined ? "tw-hidden" : "tw-block"} tw-flex tw-justify-between tw-items-center`}>
                    <Rating
                      name="simple-controlled"
                      value={star}
                      onChange={(event, newValue) => {
                        setStar(newValue);
                      }}
                    />

                  </div>
                </div>
                {user === undefined ? <div className='tw-my-3'>Hãy <Link className='tw-text-green-500' to="/signin">đăng nhập</Link> để đánh giá!</div> :
                  <div className='tw-my-3'>
                    <textarea onChange={(e) => setWordRaing(e.target.value)} placeholder='Viết đánh giá...'
                      className='tw-w-full tw-h-20 tw-p-3 tw-rounded-lg tw-border tw-border-gray-300'></textarea>
                    <button onClick={() => handleAddRating(wordRating)} className='tw-bg-green-500 tw-text-white tw-rounded-lg tw-text-right 
                   tw-my-2 tw-px-4 tw-py-1'>Gửi</button>
                  </div>

                }

              </div>
              <div>
                {ratingList?.sort((a, b) => b.id - a.id)?.map((item, index) => <div className='tw-py-5 tw-border-b tw-border-gray-300' key={index}>
                  <div className='tw-flex tw-items-center '>
                    <div className='tw-mr-2'>
                      <img src="https://storage.googleapis.com/fe-production/svgIcon/avatar.svg" alt="" />
                    </div>
                    <div>
                      <p>{item.user_name} </p>
                      <p className='tw-flex tw-justify-between tw-items-center'> <Rating
                        name="size-small"
                        value={item.rating_point}
                        size="small"
                        readOnly
                      /></p>
                    </div>

                  </div>
                  <div className='tw-mt-3'>
                    {item.description}
                  </div>
                  <div className='tw-mt-1'>
                    <p className='tw-text-xs tw-text-gray-400'><span className='tw-pr-2'>Đăng ngày {moment(item.rating_time).format("DD/MM/YYYY")}</span>
                      {user?.id === item?.user_id ? <span onClick={() => handleRemoveRating(item.id)} className='tw-px-2 hover:tw-underline hover:tw-text-green-500 tw-cursor-pointer tw-border-l tw-border-gray-400'>Xóa</span> : ""}

                    </p>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
          <div className="tw-w-[25rem] ">
            <FormPayTicket product={product} />
          </div>
        </div>
      </div>
      {/* <ModalGetInfoTicket id={id} isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} product={product} /> */}
      <Footer />
    </div>
  )
}

export default DesktopComponent
