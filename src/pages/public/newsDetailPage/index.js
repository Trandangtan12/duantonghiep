import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsService } from '../../../service/news'
import moment from "moment"

const NewsDetailPage = () => {
    const { id } = useParams()
    const [newDetail, setNewDetail] = useState({});
    useEffect(() => {
        const fetchNewDetail = async () => {
            try {
                const { data } = await NewsService.getInfoNew(id)
                setNewDetail(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchNewDetail()
    }, [])
    return (
        <section className="tw-text-gray-600 tw-h-full tw-bg-white body-font">
            <div className="container tw-px-5 tw-py-24 tw-mx-auto tw-flex tw-flex-col">
                <div className="lg:tw-w-4/6 tw-mx-auto">

                    <div className="tw-flex tw-flex-col sm:tw-flex-row tw-mt-10">
                        <div className="sm:tw-w-1/3 tw-text-center sm:tw-pr-8 sm:tw-py-8">
                            <div className="tw-w-20 tw-h-20 tw-rounded-full tw-inline-flex tw-items-center tw-justify-center tw-bg-gray-200 tw-text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="tw-w-10 tw-h-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>
                            </div>
                            <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-justify-center">
                                <h2 className="tw-font-medium title-font tw-mt-4 tw-text-gray-900 tw-text-lg">
                                    Người viết {newDetail?.user?.name}
                                </h2>
                                <div className="tw-w-12 tw-h-1 tw-bg-indigo-500 tw-rounded tw-mt-2 tw-mb-4" />
                                <p className="tw-text-base">
                                    Ngày tạo {moment(newDetail?.created_at).format("DD/mm/yyyy")}
                                </p>
                            </div>
                        </div>
                        <div className="sm:tw-w-2/3 sm:tw-pl-8 sm:tw-py-8 sm:tw-border-l tw-border-gray-200 sm:tw-border-t-0 tw-border-t tw-mt-4 tw-pt-4 sm:tw-mt-0 tw-text-center sm:tw-text-left">
                            <div className="tw-rounded-lg tw-h-64 tw-overflow-hidden">
                                <img
                                    alt="content"
                                    className="tw-object-cover tw-object-center tw-h-full tw-w-full"
                                    src={newDetail?.image}
                                />
                            </div>
                            <h2 className="tw-font-bold tw-text-2xl tw-mt-4 tw-text-gray-900">
                                {newDetail?.name}
                            </h2>
                            <p className="tw-leading-relaxed tw-mb-4" dangerouslySetInnerHTML={{ __html: newDetail?.description }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NewsDetailPage
