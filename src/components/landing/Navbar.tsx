import Image from "next/image";
import { logo } from "../../../public/images";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <div className="w-full 2xl:w-large px-6 lg:px-28 2xl:px-0 mx-auto flex justify-between items-center pt-6 lg:pt-10">
            <div className="w-logo">
                <Link href="/">
                    <Image src={logo} alt="logo fintech" />
                </Link>
            </div>
            <ul className="list-none text-white hidden xl:flex items-center">
                <li className="px-6">
                    <Link className="hover:text-gray-200 transition-all" href="#">Home</Link>
                </li>
                <li className="px-6">
                    <Link className="hover:text-gray-200 transition-all" href="#">Services</Link>
                </li>
                <li className="px-6">
                    <Link className="hover:text-gray-200 transition-all" href="#">Pricing</Link>
                </li>
                <li className="px-6">
                    <Link className="hover:text-gray-200 transition-all" href="#">Feature</Link>
                </li>
                <li className="px-6">
                    <Link className="hover:text-gray-200 transition-all" href="#">Contact</Link>
                </li>
            </ul>
            <div className="hidden xl:block">
                <Link href="/sign-in">
                    <button className="bg-btnDark text-white w-44 h-16 font-medium rounded-lg hover:shadow-xl transition duration-200">
                        <span className="hover:text-gray-200 transition-all">Sign Up</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
