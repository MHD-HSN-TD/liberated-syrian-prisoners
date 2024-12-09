import Image from "next/image"
// import NavBarLinks from "../navBar/NavBarLinks"
// import { social } from "./socail"
import SocialIcons from "../SocialIcons/SocialIcons"
import Link from "next/link"

const Footer = () => {
    const socialMediaData = {
        nameENG: "SPUS",
        name: "موقع الجامعات السورية الخاصة",
        about: "",
        imageHref: "",
        phone: "+963967586966",
        email: "info@spus.sy",
        facebook: "https://www.facebook.com/mhammad.tadmori",
        linkedIn: false,
        telegram: "https://t.me/HasnTD",
        github: false,
        whatsapp: "963967586966",
    };


    return (
        <footer className="footer lg:p-5 p-4 bg-slate-800 text-neutral-content">
            <div>
                <Link href={'/'}>
                    <Image src="/imgs/flag.png" alt="logo" width={180} height={180} className="w-auto h-auto py-5" />
                </Link>
                <p className="font-bold">كل الحقوق محفوظة <span> ©</span>    08/12/2024  </p>
                <div className="flex gap-3">
                    {/* <p className="font-bold"> لمزيد من التفاصيل : </p> */}
                    <p className=""><a className="text-warning " href={`https://wa.me/963967586966`} target='_blank'> الحرية لشعبا العربي السوري </a></p>
                </div>
            </div>

            {/* //?-----social start------- */}
            <div>
                <span className="footer-title">الروابط الاجتماعية</span>
                <div className="flex  gap-4">
                    <SocialIcons
                        facebook={socialMediaData.facebook}
                        whatsapp={socialMediaData.whatsapp}
                        phone={socialMediaData.phone}
                        telegram={socialMediaData.telegram}
                    ></SocialIcons>
                </div>
            </div>
            {/* //?-----social ends------- */}
        </footer >
    )
}

export default Footer
