import React, { useEffect, useState } from "react";
import ProductList from "../../../compornent/productPage/ProductList";
import SearchFilter from "../../../compornent/productPage/searchFilter";
import UpdateSearch from "../../../compornent/updateSearch";
import { useDispatch, useSelector } from "react-redux";
import { actionGetBuses, actionSearchBuses } from '../../../redux/actions/buses';
import { useParams } from "react-router";
import moment from "moment";

const Products = () => {
    const { start, end, date } = useParams()
    const dispatch = useDispatch();
    const { availableSearch } = useSelector(state => state.buses);
    console.log(availableSearch);
    useEffect(() => {
        dispatch(actionSearchBuses(start, end, date))
        dispatch(actionGetBuses())
    }, [])
    const [time, setTime] = useState({
        minTime: moment("00:00", "HH:mm"),
        maxTime: moment("23:59", "HH:mm")
    })
    const [price, setPrice] = useState({
        min: 0,
        max: 2000000,
        step: 1,
        value: { min: 0, max: 2000000 }
    })
    const [qtyFilter, setQtyFilter] = useState(1)
    const onChange = (data) => {
        setPrice({ ...price, value: data.value })
    }


    const increateQty = () => {
        setQtyFilter(qtyFilter + 1)
    }
    const decreateQty = () => {
        if (qtyFilter <= 1) {

        } else {
            setQtyFilter(qtyFilter - 1)
        }
    }

    const [checkedMoning, setCheckedMoning] = useState(false)
    const [checkedLunch, setCheckedLunch] = useState(false)
    const [checkedAfternoon, setCheckedAfternoon] = useState(false)
    const [checkedNigth, setCheckedNigth] = useState(false)

    const handleCheckedMoning = () => {
        setCheckedMoning(!checkedMoning)
        setCheckedLunch(false)
        setCheckedAfternoon(false)
        setCheckedNigth(false)
        if (!checkedMoning) {
            setTime({ minTime: moment("00:00", "HH:mm"), maxTime: moment("06:00", "HH:mm") })
        } else {
            setTime({ minTime: moment("00:00", "HH:mm"), maxTime: moment("23:59", "HH:mm") })
        }

    }
    const handleCheckedLunch = () => {
        setCheckedMoning(false)
        setCheckedLunch(!checkedLunch)
        setCheckedAfternoon(false)
        setCheckedNigth(false)
        if (!checkedLunch) {
            setTime({ minTime: moment("06:01", "HH:mm"), maxTime: moment("12:00", "HH:mm") })
        } else {
            setTime({ minTime: moment("00:00", "HH:mm"), maxTime: moment("23:59", "HH:mm") })
        }

    }
    const handleCheckedAfternoon = () => {
        setCheckedMoning(false)
        setCheckedLunch(false)
        setCheckedAfternoon(!checkedAfternoon)
        setCheckedNigth(false)
        if (!checkedAfternoon) {
            setTime({ minTime: moment("12:01", "HH:mm"), maxTime: moment("18:00", "HH:mm") })
        } else {
            setTime({ minTime: moment("00:00", "HH:mm"), maxTime: moment("23:59", "HH:mm") })
        }
    }
    const handleCheckedNigth = () => {
        setCheckedMoning(false)
        setCheckedLunch(false)
        setCheckedAfternoon(false)
        setCheckedNigth(!checkedNigth)
        if (!checkedNigth) {
            setTime({ minTime: moment("18:01", "HH:mm"), maxTime: moment("23:59", "HH:mm") })
        } else {
            setTime({ minTime: moment("00:00", "HH:mm"), maxTime: moment("23:59", "HH:mm") })
        }
    }

    const ListError = () => {
        return (<div className="tw-bg-white tw-p-5 tw-flex tw-flex-col tw-justify-center tw-items-center">
            <div>
                <img src="https://storage.googleapis.com/fe-production/images/route-no-schedule.png" alt="" />
            </div>
            <div>
                <p className="tw-font-bold tw-text-xl">Không có chuyến xe nào</p>
            </div>
        </div>)
    }
    const onRemoveChange = () => {
        setPrice({ ...price, value: { min: 0, max: 2000000 } })
        setQtyFilter(1)
        setCheckedMoning(false)
        setCheckedLunch(false)
        setCheckedAfternoon(false)
        setCheckedNigth(false)
        setTime({ minTime: moment("00:00", "HH:mm"), maxTime: moment("23:59", "HH:mm") })
    }
    const filterProduct = availableSearch.filter((item) =>
        item.price >= price.value.min
        && item.price <= price.value.max
        && item.seat_empty >= qtyFilter
        && moment(item.start_time, "HH:mm") >= time.minTime
        && moment(item.start_time, "HH:mm") <= time.maxTime
    )
    const timeMoning = availableSearch.filter(item => item.price >= price.value.min
        && item.price <= price.value.max
        && item.seat_empty >= qtyFilter
        && moment(item.start_time, "HH:mm") >= moment("00:00", "HH:mm")
        && moment(item.start_time, "HH:mm") <= moment("06:00", "HH:mm"))

    const timeLunch = availableSearch.filter(item => item.price >= price.value.min
        && item.price <= price.value.max
        && item.seat_empty >= qtyFilter
        && moment(item.start_time, "HH:mm") >= moment("06:01", "HH:mm")
        && moment(item.start_time, "HH:mm") <= moment("12:00", "HH:mm"))

    const timeAfternoon = availableSearch.filter(item => item.price >= price.value.min
        && item.price <= price.value.max
        && item.seat_empty >= qtyFilter
        && moment(item.start_time, "HH:mm") >= moment("12:01", "HH:mm")
        && moment(item.start_time, "HH:mm") <= moment("18:00", "HH:mm"))

    const timeNight= availableSearch.filter(item => item.price >= price.value.min
        && item.price <= price.value.max
        && item.seat_empty >= qtyFilter
        && moment(item.start_time, "HH:mm") >= moment("18:01", "HH:mm")
        && moment(item.start_time, "HH:mm") <= moment("23:59", "HH:mm"))

    return (
        <div className="">
            <UpdateSearch />
            <div className="tw-relative tw-z-10 tw-w-3/4 tw-mx-auto tw-my-5">
                {availableSearch.length == 0 ? ListError() : <div className="tw-flex">
                    <SearchFilter
                        products={availableSearch}
                        time={time}
                        qtyFilter={qtyFilter}
                        price={price}
                        timeMoning={timeMoning}
                        timeLunch={timeLunch}
                        timeAfternoon={timeAfternoon}
                        timeNight={timeNight}
                        onChange={onChange}
                        onRemoveChange={onRemoveChange}
                        qtyFilter={qtyFilter}
                        onIncreateQty={increateQty}
                        onDecreateQty={decreateQty}
                        checkedMoning={checkedMoning}
                        checkedLunch={checkedLunch}
                        checkedAfternoon={checkedAfternoon}
                        checkedNigth={checkedNigth}
                        handleCheckedMoning={handleCheckedMoning}
                        handleCheckedLunch={handleCheckedLunch}
                        handleCheckedAfternoon={handleCheckedAfternoon}
                        handleCheckedNigth={handleCheckedNigth}
                    />
                    <ProductList
                        products={availableSearch}
                        productFilter={filterProduct}
                        price={price}
                        qtyFilter={qtyFilter}
                        checkedMoning={checkedMoning}
                        checkedLunch={checkedLunch}
                        checkedAfternoon={checkedAfternoon}
                        checkedNigth={checkedNigth}
                        timeFilter={time}
                    />
                </div>}

            </div>
        </div>
    )
}

export default Products
