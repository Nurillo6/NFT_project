"use client"
import { Button, Heading, Text } from "@/components"
import Image from "next/image"

const WalletContent = () => {
    return (
        <section className="containers pt-[100px] pb-[60px] flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[80px]">
            <div className="w-full lg:w-1/2 pb-[10px] pt-[10px] ">
                <Image className="w-full max-w-[600px] object-cover" src="/walletImage.png" alt="Wallet Connect" width={610} height={642} />
            </div>
            <div className="w-full lg:w-1/2 text-white flex gap-[17px] flex-wrap ">
                <Heading classList="!text-[48px]" tag="h2">Connect Wallet</Heading>
                <Text classList="!1text-[22px] !mb-8">
                    Choose a wallet you want to connect. There are several wallet providers.
                </Text>
                <div className="flex flex-col gap-4 max-w-[400px]">
                    <button className="w-full flex items-center gap-4 px-5 py-3 border border-[#A259FF] rounded-[20px] hover:bg-[#3B3B3B] transition-all">
                        <Image src="/Metamask.svg" alt="Metamask" width={40} height={40} />
                        <span className="text-[18px] font-medium">Metamask</span>
                    </button>
                    <button className="w-full flex items-center gap-4 px-5 py-3 border border-[#A259FF] rounded-[20px] hover:bg-[#3B3B3B] transition-all">
                        <Image src="/WalletConnect.svg" alt="WalletConnect" width={40} height={40} />
                        <span className="text-[18px] font-medium">Wallet Connect</span>
                    </button>
                    <button className="w-full flex items-center gap-4 px-5 py-3 border border-[#A259FF] rounded-[20px] hover:bg-[#3B3B3B] transition-all">
                        <Image src="/Coinbase.svg" alt="Coinbase" width={40} height={40} />
                        <span className="text-[18px] font-medium">Coinbase</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default WalletContent