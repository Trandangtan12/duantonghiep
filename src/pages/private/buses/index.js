import { faCheck, faEdit, faInfoCircle, faTimes, faTrash } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../../compornent/admin/table'
import { actionGetBuses } from '../../../redux/actions/buses'
import alertify from "alertifyjs";

const Buses = () => {
    const dispatch = useDispatch()
    const {availableBuses} = useSelector(state => state.buses)
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const handleOpenModal = () =>{
      alertify.confirm(
        "Bạn có chắc chắn muốn xoá sản phẩm ?",
        function () {
          alertify.success("Xoá thành công");
        },
      ).set({title:"Update"},{labels:{ok:'Forward', cancel: 'Backward'}}).set('movable', false); ;
    }
    const [columns, setColumns] = useState([
      {
        Header: 'Số thứ tự',
        accessor: 'id',
        show: true,
        filterMethod : (value) =>{

        }
      },
      {
        Header: 'Nội dung',
        accessor: 'body',
        show: true
      },
      {
        Header: 'Tiêu đề',
        accessor: 'title',
        show: true
      },
      {
        Header: 'Hành động',
        Cell : ({data}) =>{
          return <div className="tw-flex tw-justify-center tw-gap-[20px]">
          <button onClick={handleOpenModal}>
           <FontAwesomeIcon  icon={faCheck} color="green"/>
          </button>
          <button>
           <FontAwesomeIcon  icon={faTimes} color="red"/>
          </button>
          <button>
           <FontAwesomeIcon  icon={faTrash} color="red"/>
          </button>
          <button>
           <FontAwesomeIcon  icon={faInfoCircle} color="blue"/>
          </button>
          <button>
           <FontAwesomeIcon  icon={faEdit} color="blue"/>
          </button>
           </div>
           
        }
      },
    ])
    useEffect(() => {
      dispatch(actionGetBuses())
    }, []);
    return (
        <>
        <Table data={availableBuses} columns={columns}/>
        </>
    )
}

export default Buses
