import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionGetNews } from '../../../redux/actions/news'

const NewPages = () => {
    const { news } = useSelector(state => state.news)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionGetNews())
    }, [])
    return (
        <section className="tw-text-gray-600 body-font tw-h-full tw-bg-white tw-overflow-hidden">
            <div className="container tw-px-5 tw-w-3/4 tw-py-24 tw-mx-auto">
                <div className="tw--my-8 tw-divide-y-2 tw-divide-gray-100">
                    {news.map(item => <div className="tw-py-8 tw-flex tw-flex-wrap md:tw-flex-nowrap">
                        <div className="md:tw-w-64 md:tw-mb-0 tw-mb-6 tw-mr-6 tw-flex-shrink-0 tw-flex tw-flex-col">
                           <img src={item.image} className='tw-w-full' alt="" />
                        </div>
                        <div className="md:tw-flex-grow">
                            <h2 className="tw-text-2xl tw-font-medium tw-text-gray-900 title-font tw-mb-2">
                                {item.name}
                            </h2>
                            <p className="tw-leading-relaxed">
                               {/* {item.dé} */}
                            </p>
                            <Link to={`newdetail/${item.id}`} className="tw-text-green-500 tw-inline-flex tw-items-center tw-mt-4">
                                Xem chi tiết
                                <svg
                                    className="tw-w-4 tw-h-4 tw-ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>)}
                    
                    
                </div>
            </div>
        </section>

    )
}

export default NewPages
