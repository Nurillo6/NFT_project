import { MenuIcon, UserIcon } from "@/assets/icons"
import Image from "next/image"
import LangConfig from "./LangConfig"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components"

const Header = () => {
  const t = useTranslations("HeadersContent")
  return (
    <header className="fixed bg-[#2B2B2B] w-full top-0 lg:px-0 z-50">
      <div className="containers flex items-center justify-between mx-auto !py-5">
        <Link href={'/'}>
          <Image className="w-[182px] h-[24px] lg:w-[243px] lg:h-[32px] " priority src={"/site-logo.svg"} alt="Site Logo" width={243} height={32} />
        </Link>
        <nav className="hidden lg:flex items-center gap-2.5">
          <Link className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5" href={'/marketplace'}>{t("navItem1")}</Link>
          <Link className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5" href={'/top-creator'}>{t("navItem2")}</Link>
          <Link className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5" href={'/wallet'}>{t("navItem3")}</Link>
          <LangConfig />
        <Link href={'/register'}>
          <Button title={t("button")} icon={<UserIcon />} iconPostion="left" type="button" variant="filled" />
        </Link>
        </nav>
        <button className="lg:hidden"> <MenuIcon /> </button>
      </div>
    </header>
  )
}

export default Header