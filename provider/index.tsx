import { Footer, Header } from '@/modules'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main className="site-main mt-[99px]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout