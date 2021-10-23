import React, { useState } from 'react'
import { IntroduceList } from '../../config'

const Introduce = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }
    return (
        <div className="tw-mb-10 tw-pb-[1.5rem] tw-mt-[5rem]">
            <div className="tw-py-9 tw-px-5 tw-bg-white tw-shadow-lg tw-rounded-lg">
                <ul>
                    {IntroduceList.slice(0, isReadMore ? 1 : 100).map((item) => (
                        <li className="tw-pb-[2rem]">
                            <h3 className="tw-text-xl tw-font-bold">
                                {item.title}
                            </h3>
                            <p className="tw-my-3 tw-text-sm">{item.description}</p>
                            <p className="tw-my-3 tw-text-sm">{item.description1}</p>
                            <p className="tw-my-3 tw-text-sm">{item.description2}</p>
                            <p className="tw-my-3 tw-text-sm">{item.description3}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleReadMore} className="tw-text-green-500">
                    {isReadMore ? "Đọc thêm" : "Đọc ít hơn"}
                </button>
            </div>
        </div>
    );
}

export default Introduce
