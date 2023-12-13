import { Header, Footer } from "../common"

export default function Layout({children}){
    return (
        <div className="min-h-screen">
            <img className="w-auto min-h-screen fixed object-cover" src="/media/images/bg3.jpg" alt="Background" />
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}