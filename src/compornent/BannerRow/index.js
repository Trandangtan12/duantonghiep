import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetNews } from '../../redux/actions/news'


const BannerRow = () => {
  const { news } = useSelector(state => state.news)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionGetNews())
  }, [])
  return (
    <div className="tw-w-full tw-bg-white tw-mt-20 tw-rounded-lg ">
      <h1 className='tw-px-10 tw-py-5 tw-text-xl tw-font-black tw-uppercase'>Bài viết mới của nhà xe SixLeaf</h1>
      <div className='tw-flex tw-flex-1 tw-overflow-auto tw-p-5'>
      <div className="tw-flex tw-flex-1 tw-max-w-max">
        {news.map(item => <div className="tw-bg-white tw-w-[20.6rem] tw-rounded-lg tw-mx-5 tw-shadow-lg tw-flex tw-flex-col">
          <div className="img">
            <img src={item.image} alt="" className="tw-object-cover tw-rounded-t-lg tw-h-44 tw-w-full" />
          </div>
          <div className="text tw-p-6">
            <p className="tw-text-lg">{item.name}</p>
          </div>
        </div>)}
        
        
       
        
      </div>
      


      </div>
    </div>
  )
}

export default BannerRow
