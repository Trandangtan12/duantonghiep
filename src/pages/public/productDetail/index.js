import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BusesService } from "../../../service/productService";
import ModalGetInfoTicket from "./ModalGetInfoTicket";
import { isMobile } from 'mobile-device-detect';
import DesktopComponent from "./DesktopComponent"
import MobileComponent from "./MobileComponent"


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
   <>
   {isMobile ? <MobileComponent
   id={id}
   isOpenModal={isOpenModal}
   product={product}
   handleOpenModal={handleOpenModal}
   setIsOpenModal={setIsOpenModal}
   /> : <DesktopComponent 
   id={id}
   isOpenModal={isOpenModal}
   product={product}
   handleOpenModal={handleOpenModal}
   setIsOpenModal={setIsOpenModal}
   /> }
   </>
  );
};

export default ProductDetail;
