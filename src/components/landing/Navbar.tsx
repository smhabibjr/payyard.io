import Image from "next/image";
import { payyard_logo_white } from "@public/assets/images/landingpage";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <div className="w-full 2xl:w-large px-6 lg:px-28 2xl:px-0 mx-auto flex justify-between items-center pt-6 lg:pt-10">
            <div className="" >
                <Link href="/">
                    <Image src={payyard_logo_white} alt="logo fintech" width="250" height="250" style={{ width: "auto", height: "auto" }} priority />
                </Link>
            </div>
            
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
