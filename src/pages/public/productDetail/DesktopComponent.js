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
    const data = {
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
          const res = await ratingService.addRating(product.id, data)
          setRatingList([res.data[0], ...product.rating])
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
  console.log(ratingList);
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
              <span>{product.start_time}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="tw-w-3/4 tw-mx-auto">
        <div className="tw-flex tw-mt-[-5rem]">
          <div className="tw-flex-grow">
            <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-mb-3">
              <div className="tw-flex">
                <img
                  src={product.image}
                  className="tw-w-40 tw-h-28 tw-object-cover"
                  alt=""
                />
                <div className="tw-ml-5">
                  <div className="tw-mb-3 tw-flex tw-justify-bet">
                    <div>
                      <h3 className="tw-font-bold">{product.name}</h3>
                      {/* <p className="tw-text-sm tw-text-gray-500">
                        {product.seat} ghế
                      </p> */}
                    </div>
                  </div>
                  <div>
                    <p className="tw-text-sm tw-text-gray-500" >{product.seat_empty} ghế trống</p>
                  </div>

                  <div></div>
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
          <div className="tw-w-[23rem] ">
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
