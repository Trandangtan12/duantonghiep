import React, { useEffect, useState } from "react";
import ProductList from "../../../compornent/productPage/ProductList";
import SearchFilter from "../../../compornent/productPage/searchFilter";

import UpdateSearch from "../../../compornent/updateSearch";
import { useDispatch, useSelector } from "react-redux";
import { actionGetBuses, actionSearchBuses } from '../../../redux/actions/buses';
import { useParams } from "react-router";

const Products = () => {
    const { start, end, date } = useParams()
    const dispatch = useDispatch();
    const { availableSearch } = useSelector(state => state.buses);
    useEffect(() => {
        dispatch(actionSearchBuses(start, end, date))
        dispatch(actionGetBuses())
    }, [])
    const [price, setPrice] = useState({
        min: 0,
        max: 2000000,
        step: 1,
        value: {min: 0, max: 2000000}
    })
    const [qtyFilter, setQtyFilter] = useState(1)
    const onChange = (data) => {
        setPrice({...price, value: data.value})
    }
    
    const onRemoveChange = () =>{
        setPrice({...price, value: {min: 0, max: 2000000}})
        setQtyFilter(1)
    }
    const increateQty = () => {
        setQtyFilter(qtyFilter + 1)
    } 
    const decreateQty = () => {
        if(qtyFilter <= 1) {

        }else {
            setQtyFilter(qtyFilter - 1)
        }
    }
    return (
        <div className="">
            <UpdateSearch />
            <div className="tw-relative tw-z-10 tw-w-3/4 tw-mx-auto tw-my-5">
                <div className="tw-flex">
                    <SearchFilter 
                    data={price} 
                    onChange={onChange} 
                    onRemoveChange={onRemoveChange}
                    qtyFilter={qtyFilter}
                    onIncreateQty={increateQty}
                    onDecreateQty={decreateQty}/>
                    <ProductList products={availableSearch} price={price} qtyFilter={qtyFilter}/>
                </div>
            </div>
        </div>
    )
}

export default Products
