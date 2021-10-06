import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../../compornent/admin/table'
import { actionGetBuses } from '../../../redux/actions/buses'
const Buses = () => {
    const dispatch = useDispatch()
    const {availableBuses} = useSelector(state => state.buses)
    useEffect(() => {
      dispatch(actionGetBuses())
    }, []);
    return (
        <>
        <Table data={availableBuses}/>
        </>
    )
}

export default Buses
