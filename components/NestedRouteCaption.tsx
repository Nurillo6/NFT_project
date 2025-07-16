"use client"
import { routeType } from '@/@types/RouteType'
import { Link, usePathname } from '@/i18n/navigation'
import React, { Dispatch, SetStateAction } from 'react'

const NestedRouteCaption = ({ routeList, period, setPeriod }: { routeList: routeType[], period?:"today" | "week" | "month" | "all", setPeriod?:Dispatch<SetStateAction<"today" | "week" | "month" | "all">> }) => {
    const pathname = usePathname()
    return (
        <div className='flex justify-between'>
            {routeList.map((item: routeType) => (
                <Link onClick={() => setPeriod ? setPeriod((item.href as "today" | "week" | "all" | "month")) : ""} style={{width:`${100 / routeList.length}%`}} key={item.id} href={`${period ? "#" : item.href}`} className={`border-b-[2px] ${period ? (period == item.href ? "border-[#858584]" : "border-transparent") : pathname == item.href ? "border-[#858584]" : "border-transparent"} !w-[${100 / routeList.length}%] flex items-center cursor-pointer !gap-[16px] justify-center py-[15px] text-center`}>
                    <span className='text-[22px] text-white leading-[140%]'>{item.title}</span>
                    {item.count && <button className='bg-[#858584] text-white py-[5px] px-[10px] rounded-[20px]'>{item.count}</button>}
                </Link>
            ))}
        </div>
    )
}

export default NestedRouteCaption