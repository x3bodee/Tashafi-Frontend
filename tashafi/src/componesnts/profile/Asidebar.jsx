import React from 'react'
import { Asideitems } from './Asideitems'

export default function Asidebar() {
    return (
        <>
            <div className="aside__bar">
                <ul className="aside__list">
                    {Asideitems.map((item, key) => {
                        return (
                            <li
                                key={key}
                                className="aside__item"
                            >

                                <div id="aside__item__icon">{item.icon}</div>
                                <div id="aside__item__title">{item.title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
