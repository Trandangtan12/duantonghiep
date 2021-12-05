import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BusesService } from "../../../service/productService";
import TabList from "./ListTab";
import ModalGetInfoTicket from "./ModalGetInfoTicket";


const ProductDetail = () => {
  const { id } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await BusesService.getIdBuses(id);
        if (res.status === 200) {
          setProduct(res.data); 
        }
      } catch (error) {
      }
    };
    fetchProduct();
  }, []);
  const handleOpenModal = () => {
      setIsOpenModal(true)
  };
  return (
    <div className="">
      <div className="tw-bg-green-500 tw-h-[12rem]">
        <div className="tw-w-3/4 tw-mx-auto">
          <div className="tw-text-white">
            <h1 className="tw-py-5 tw-text-xl tw-font-bold">{product.name}</h1>
            <p className="tw-text-xl">
              <span className=" tw-font-bold">
                {product.from} - {product.to}
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
                      <p className="tw-text-sm tw-text-gray-500">
                        {product.seat} ghế
                      </p>
                    </div>
                  </div>
                  <div>
                  <p className="tw-text-sm tw-text-gray-500" >{product.seat_empty} ghế trống</p>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-w-[22rem] tw-sticky tw-top-[1rem]">
            <div className="tw-rounded-lg tw-bg-white tw-p-3 tw-ml-5">
              <div className="tw-flex tw-justify-between ">
                <h1 className="tw-font-bold tw-text-xl">Tổng thanh toán</h1>
                <div>
                  <span className="tw-font-bold tw-text-xl">
                  {new Intl.NumberFormat('vi', {  currency: 'VND', style: 'currency',}).format(product.price)}
                  </span>
                </div>
              </div>
              <div className="tw-flex tw-pt-12">
                <button
                  className="tw-w-full tw-p-2 tw-rounded-md tw-bg-red-600 tw-text-white"
                  onClick={() => {
                    handleOpenModal()
                  }}
                >
                  Thanh toán ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalGetInfoTicket id={id} isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} product={product}/>
    </div>
  );
};

export default ProductDetail;
