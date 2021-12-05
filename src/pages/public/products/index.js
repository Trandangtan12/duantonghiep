import React, { useEffect, useState } from "react";
import ProductList from "../../../compornent/productPage/ProductList";
import SearchFilter from "../../../compornent/productPage/searchFilter";
import UpdateSearch from "../../../compornent/updateSearch";
import { useDispatch, useSelector } from "react-redux";
import { actionGetBuses, actionSearchBuses } from '../../../redux/actions/buses';
import { useParams } from "react-router";
import moment from "moment";
import { ProvinceService } from "../../../service/provinceService";

const Products = () => {
    const { start, end, date } = useParams()
    const dispatch = useDispatch();
    const { availableSearch } = useSelector(state => state.buses);
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
    const [checkedMoning, setCheckedMoning] = useState(false)
    const [checkedLunch, setCheckedLunch] = useState(false)
    const [checkedAfternoon, setCheckedAfternoon] = useState(false)
    const [checkedNigth, setCheckedNigth] = useState(false)
    const [districtStart, setDistricStart] = useState([])
    const [districtEnd, setDistrictEnd] = useState([])
    const [activeFilter, setActiveFilter] = useState([])

    const onChangeFilterCheckBox = (filter) => {
        if (activeFilter.includes(filter)) {
            const filterIndex = activeFilter.indexOf(filter)
            const newFilter = [...activeFilter]
            newFilter.splice(filterIndex, 1)
            setActiveFilter(newFilter)
        } else {
            setActiveFilter([...activeFilter, filter])

        }
    }
    let filterProduct;
    if (activeFilter.length === 0 || activeFilter.length === districtStart.length || activeFilter.length === districtEnd.length) {
        filterProduct = availableSearch.filter((item) =>
            item.price >= price.value.min
            && item.price <= price.value.max
            && item.seat_empty >= qtyFilter
            && moment(item.start_time, "HH:mm") >= time.minTime
            && moment(item.start_time, "HH:mm") <= time.maxTime
        )
    } else {
        filterProduct = availableSearch.filter((item) =>
            item.price >= price.value.min
            && item.price <= price.value.max
            && item.seat_empty >= qtyFilter
            && moment(item.start_time, "HH:mm") >= time.minTime
            && moment(item.start_time, "HH:mm") <= time.maxTime
            && activeFilter.includes(item.startDistrict_name) || activeFilter.includes(item.endDistrict_name)

        )
    }
   console.log(activeFilter);
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
        setActiveFilter([])
    }

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

    const timeNight = availableSearch.filter(item => item.price >= price.value.min
        && item.price <= price.value.max
        && item.seat_empty >= qtyFilter
        && moment(item.start_time, "HH:mm") >= moment("18:01", "HH:mm")
        && moment(item.start_time, "HH:mm") <= moment("23:59", "HH:mm"))
    useEffect(() => {
        const fetchDistrictStart = async () => {
            try {
                const districtStartRes = await ProvinceService.getDistrict(start)
                const districtStartMap = districtStartRes.data.districts.map(item => (
                    {
                        value: item.code,
                        label: item.name
                    }
                ))
                setDistricStart(districtStartMap)
            } catch (error) {
                console.log(error);
            }
        }
        fetchDistrictStart()
    }, [start])

    useEffect(() => {
        const fetchDistrictEnd = async () => {
            try {
                const districtEndRes = await ProvinceService.getDistrict(end)
                const districtEndMap = districtEndRes.data.districts.map(item => (
                    {
                        value: item.code,
                        label: item.name
                    }
                ))
                setDistrictEnd(districtEndMap)
            } catch (error) {
                console.log(error);
            }
        }
        fetchDistrictEnd()
    }, [end])




    return (
        <div className="">
            <UpdateSearch />
            <div className="tw-relative tw-z-10 tw-w-3/4 tw-mx-auto tw-my-5">
                {/* {filterProduct.length == 0 ? ListError() : */}
                <div className="tw-flex">
                    <SearchFilter
                        activeFilter={activeFilter}
                        districtStart={districtStart}
                        districtEnd={districtEnd}
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
                        onChangeFilterCheckBox={onChangeFilterCheckBox}
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
                </div>
                {/* } */}

            </div>
        </div>
    )
}

export default Products
