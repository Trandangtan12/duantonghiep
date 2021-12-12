import React from 'react'
import { useState } from 'react'
import ProductList from '../../../compornent/productPage/ProductList'
import SearchFilter from '../../../compornent/productPage/searchFilter'
import UpdateSearch from '../../../compornent/updateSearch'

const MobileComponent = (props) => {
    const { activeFilter,
        districtEnd,
        districtStart,
        time,
        qtyFilter,
        price,
        timeMoning,
        timeLunch,
        timeAfternoon,
        timeNight,
        onChange,
        onRemoveChange,
        onIncreateQty,
        onDecreateQty,
        checkedMoning,
        checkedLunch,
        checkedAfternoon,
        checkedNigth,
        handleCheckedMoning,
        handleCheckedLunch,
        handleCheckedAfternoon,
        handleCheckedNigth,
        onChangeFilterCheckBox,
        products,
        productFilter } = props
    const [openFilterMobile, setOpenFilterMobile] = useState(false)
    const handleOpenFilterMobile = () => {
        setOpenFilterMobile(!openFilterMobile)
    }
    return (
        <div>
            <UpdateSearch  handleOpenFilterMobile={handleOpenFilterMobile}/>
            <div className={`tw-transition tw-duration-500 tw-ease-in-out tw-delay-150
            ${openFilterMobile ? "tw-translate-x-0" : "tw--translate-x-80"}
            tw-fixed tw-z-50 tw-top-0 tw-h-full tw-pl-3 tw-overflow-auto tw-bg-white`}>
                <div className='tw-text-right tw-my-2 tw-mx-4'>
                <span className='tw-font-black tw-px-3 tw-py-2 tw-rounded-full tw-bg-gray-200' onClick={() => handleOpenFilterMobile()}>X</span>
                </div>
                <SearchFilter
                    activeFilter={activeFilter}
                    districtStart={districtStart}
                    districtEnd={districtEnd}
                    products={products}
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
                    onIncreateQty={onIncreateQty}
                    onDecreateQty={onDecreateQty}
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
            </div>
            <div className="tw-relative tw-z-10 tw-w-full tw-px-4 tw-mx-auto tw-my-5">
                {/* {filterProduct.length == 0 ? ListError() : */}
                <div>

                    <ProductList
                        products={products}
                        productFilter={productFilter}
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

export default MobileComponent
