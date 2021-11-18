import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionGetBuses } from '../../../../redux/actions/buses';

const CreateTicket = () => {
    const { availableBuses } = useSelector((state) => state.buses);
    console.log(availableBuses);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionGetBuses());
    }, []);
    return (
        <div>
        </div>
    )
}

export default CreateTicket
