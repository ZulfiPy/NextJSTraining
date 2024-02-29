import Link from "next/link";
import { FaYoutube, FaGithub, FaLaptop } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-4 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hober:text-white">Zulfipy</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-4xl lg:text-5xl">
                    <Link
                        href="https://www.youtube.com/@DaveGrayTeachesCode"
                        className="text-white/90 hover:text-white">
                        <FaYoutube />
                    </Link>
                    <Link
                        href="https://courses.davegray.codes/"
                        className="text-white/90 hover:text-white">
                        <FaLaptop />
                    </Link>
                    <Link
                        href="https://github.com/ZulfiPy"
                        className="text-white/90 hover:text-white">
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://www.youtube.com/@DaveGrayTeachesCode"
                        className="text-white/90 hover:text-white">
                        <FaXTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}