import { FC } from "react"; // Import FC from React
import { payyard_logo_white, facebook_logo, instagram_logo, twitter_logo, linkedin_logo } from "../../../public/images";
import Image from "next/image";

interface FooterLink {
    title: string;
    content: string[];
}

const Footer: FC = () => {
    const dataFooter: FooterLink[] = [
        {
            title: 'Links',
            content: ['Contact', 'Terms and Conditions', 'Privacy Policy', 'imprint', 'Support']
        },
        {
            title: 'Community',
            content: ['Facebook', 'Discord', 'Telegram']
        },
        {
            title: 'Our office',
            content: ['Indonesia', 'Jl Petemon Kuburan 74 A, Jawa Timur', 'Jawa Timur 60252']
        }
    ];

    return (
        <div className="bg-btnDark w-full py-14">
            <div className="w-full xl:w-container mx-auto px-8 text-gray-400 lg:grid grid-cols-2 text-sm">
                <div className="mr-0 lg:mr-40">
                    <Image className="" src={payyard_logo_white} alt="Payyard.io" width="200" height="200" />
                    <p className="my-8 leading-relaxed">
                    Our mission is simple: empower freelancers and small business owners to get paid easily, accessibly, and globally. No more limitations—only growth and opportunity.
                    </p>
                    <div className="flex items-center">
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <Image src={ facebook_logo } alt="facebook" />
                        </a>
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <Image src={ instagram_logo } alt="instagram" />
                        </a>
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <Image src={ twitter_logo } alt="twitter" />
                        </a>
                        <a href="#" className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <Image src={ linkedin_logo } alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex justify-between">
                    {dataFooter.map((footer, index) => (
                        <div key={index}>
                            <h4 className="font-medium text-white text-base">{footer.title}</h4>
                            {footer.content.map((content, contentIndex) => (
                                <p key={contentIndex} className="mt-3">{content}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;