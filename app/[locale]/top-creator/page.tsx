"use client"
import Heading from '@/components/Heading'
import NestedRouteCaption from '@/components/NestedRouteCaption'
import Text from '@/components/Text'
import { getQuery } from '@/lib/getQueryData'
import React, { useState } from 'react'

const AllTime = () => {
  const [period, setPeriod] = useState<"today" | "week" | "month" | "all">("all")
    const routeList = [
        {id:1,title:"All Time",href:"all"},
        {id:2,title:"Today",href:"today"},
        {id:3,title:"This Week",href:"week"},
        {id:4,title:"This Month",href:"month"}
    ]
    const {data = {}} = getQuery(`/ranking/rankings?period=${period}`, 'ranking', period)
       
    return (
        <div className='pt-[80px]'>
            <div className='containers'>
                <Heading tag='h1' classList='!text-[51px] !mb-[10px]'>Top Creators</Heading>
                <Text classList='!text-[22px] !mb-[30px]'>Check out top ranking NFT artists on the NFT Marketplace.</Text>
                <NestedRouteCaption setPeriod={setPeriod} period={period} routeList={routeList} />
            </div>
            <div className='containers !py-[40px]'>
                <table className='w-full'>
                  <thead>
                    <tr className=''> 
                      <th className='py-[12px] rounded-tl-[20px] rounded-bl-[20px] border-t-[2px] border-b-[2px] border-l-[2px] border-[#858584] font-normal text-[#858584] text-[18px] text-center'>#</th>
                      <th className='py-[12px] border-t-[2px] border-b-[2px] border-[#858584] font-normal text-[#858584] text-[18px] text-start'>Artist</th>
                      <th className='py-[12px] border-t-[2px] border-b-[2px] border-[#858584] font-normal text-[#858584] text-[18px] text-start'>Change</th>
                      <th className='py-[12px] border-t-[2px] border-b-[2px] border-[#858584] font-normal text-[#858584] text-[18px] text-start'>NFTs Sold</th>
                      <th className='py-[12px] rounded-tr-[20px] rounded-br-[20px] border-t-[2px] border-b-[2px] border-r-[2px] border-[#858584] font-normal text-[#858584] text-[18px] text-start'>Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* {data?.data?.map(item)} */}
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllTime