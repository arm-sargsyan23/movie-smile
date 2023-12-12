import { Link } from "react-router-dom"

export default function Footer (){
    return (
        <footer className="h-[120px] w-full flex justify-center items-end">
            <div className="w-full h-full px-20 py-8 backdrop-blur-2xl flex items-center justify-between ">
                <div className="flex space-x-4">
                    <a className="w-[30px]" href="https://web.telegram.org/a/">
                        <img src="/media/images/telegram.png" alt="Telegram Icon" />
                    </a>
                    <a className="w-[30px]" href="https://www.facebook.com/">
                        <img src="/media/images/facebook.png" alt="Facebook Icon" />
                    </a>
                    <a className="w-[30px]" href="https://www.whatsapp.com/?lang=ru_RU">
                        <img src="/media/images/whatsapp.png" alt="Whatsapp Icon" />
                    </a>
                    <a className="w-[30px]" href="https://www.instagram.com/">
                        <img src="/media/images/instagram.png" alt="Instagram Icon" />
                    </a>
                    <a className="w-[30px]" href="https://www.messenger.com/?locale=ru_RU">
                        <img src="/media/images/facebook-messenger.png" alt="Messeger Icon" />
                    </a>
                    <a className="w-[30px]" href="https://www.youtube.com/watch?v=U-aO-G6jEYc">
                        <img src="/media/images/youtube.png" alt="Youtube Icon" />
                    </a>
                </div>
                <Link to="/" className="flex space-x-1 text-2xl text-gray-100 items-end">
                    <p>MOVIE</p>
                    <p className="text-purple-600 text-6xl">W</p>
                    <p>SMILE</p>
                </Link>
            </div>
        </footer>
    )
}