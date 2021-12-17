import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { MENU_BOTTOM_LIST } from '../../config'

const MenuMobileBottom = () => {
    return (
        <nav className="tw-fixed tw-bottom-0 tw-block tw-z-20 tw-w-full tw-opacity-[0.9] tw-bg-black">
        <ul className="tw-flex tw-justify-around tw-content-end tw-px-2 tw-py-4">
            {MENU_BOTTOM_LIST.map((item) => (
                <Link to={item.link}>
                <li className="tw-flex tw-flex-col tw-justify-center">
                    
                    <span className="tw-text-white tw-text-center">
                        <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <span className="tw-text-white tw-text-xs">{item.label}</span>
                </li>
                </Link>

            ))}
        </ul>
    </nav>
    )
}

export default MenuMobileBottom
