import React from 'react'
import Footer from '../../../compornent/footer'
import ProductList from '../../../compornent/productPage/ProductList'
import SearchFilter from '../../../compornent/productPage/searchFilter'
import UpdateSearch from '../../../compornent/updateSearch'

const DesktopComponent = (props) => {
    const {activeFilter,
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
        productFilter
    } = props
    return (
        <div>
             <UpdateSearch />
            <div className="tw-relative tw-z-10 tw-w-3/4 tw-mx-auto tw-my-5">
                {/* {filterProduct.length == 0 ? ListError() : */}
                <div className="tw-flex">
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
            <Footer />
        </div>
    )
}

export default DesktopComponent
