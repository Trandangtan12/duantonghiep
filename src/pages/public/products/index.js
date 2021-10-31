import React, { useEffect, useState } from "react";
import ProductList from "../../../compornent/productPage/ProductList";
import SearchFilter from "../../../compornent/productPage/searchFilter";

import UpdateSearch from "../../../compornent/updateSearch";


const Products = () => {
  
    return (
        <div className="">
            <UpdateSearch />
        <div className="tw-relative tw-z-10 tw-w-3/4 tw-mx-auto tw-mt-5"> 
            <div className="tw-flex">
                <SearchFilter />
                <ProductList />
            </div>
        </div>
        </div>
    )
}

export default Products
