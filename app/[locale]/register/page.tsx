import Image from 'next/image'
import React from 'react'
import { Button, Heading } from '@/components'

const Register = () => {
  return (
    <div className='relative h-[691px]'>
      <div className="containers flex justify-end">
        <div className='w-[690px] h-[691px] absolute left-0'>
          <Image src={"/login.png"} alt='login' priority className='w-[610px] h-[690px]' width={610} height={690} />
        </div>
        <div className='flex flex-col gap-[20px] pt-[60px]'>
          <Heading children={"Create account"} tag='h2' classList='!text-[51px]' />
          <p className='text-[22px] font-normal w-[460px]' >Welcome! enter your details and start creating, collecting and selling NFTs.</p>
          <form className="w-full max-w-[400px] flex flex-col">
            <input className='outline-none px-5 py-[19px] text-black bg-white rounded-[20px] text-[16px] w-[460px] mt-[30px]' type="text" placeholder={`Username`} />
            <input className='outline-none px-5 py-[19px] text-black bg-white rounded-[20px] text-[16px] w-[460px] mt-[10px]' type="text" placeholder='Email address' />
            <input className='outline-none px-5 py-[19px] text-black bg-white rounded-[20px] text-[16px] w-[460px] mt-[10px]' type="text" placeholder='Password' />
            <input className='outline-none px-5 py-[19px] text-black bg-white rounded-[20px] text-[16px] w-[460px] mt-[10px]' type="text" placeholder='Confirm password' />
            <Button title='Create account' type='submit' variant='filled' extraClass='w-[460px] mt-[10px] justify-center' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register