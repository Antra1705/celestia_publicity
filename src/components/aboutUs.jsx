import React from "react";
import isteLogo from '../assets/iste.png'
import '../style/aboutUs.css'
import Background from "./bgFooter";

const AboutUs = () => {
    return(
        <div className="flex align-center items-center flex-col about-us-bg w-screen overflow-x-hidden" >
            <Background />
            <div className="flex align-center flex-col items-center text-white pt-8 sm:pt-10">
                <img className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:size-[180px]" src={isteLogo} alt="LOGO"/>
                <h1 className="text-[36px] leading-[40px] sm:text-[64px] sm:leading-[64px] md:text-[93px] glow font-[camood] text-center">ABOUT ISTE</h1>
            </div>
            <div className="w-full max-w-[1000px] px-5 sm:px-10 md:px-0 md:mx-[14vw] font-[Aeonik] text-white mt-6 md:mt-[51px]">
                <p>
                    The Indian Society for Technical Education (ISTE) is a prominent
                    advocate for advancing technical education and research in India.
                    Established in 1941, ISTE empowers educators and students through
                    workshops, conferences, and networking. It bridges academia and
                    industry, promotes research and fosters innovation. With a
                    nationwide presence, ISTE enhances teaching methods and aligns
                    education with industry needs, and prepares job-ready graduates
                    through internships and projects.
                </p>
                <br className="hidden md:block"/>
                <p className="hidden md:block">
                    At Vellore Institute of Technology (VIT), we are proud to host the VIT
                    Chapter of ISTE, which stands as a beacon of excellence in technical
                    education. The ISTE-VIT Chapter plays a pivotal role in fostering
                    innovation, skill development and knowledge dissemination among
                    students and professionals.
                </p>
            </div>
            <div className="w-full px-5 sm:px-10 md:px-0 md:ml-[56px] self-start">
                <img className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:size-[210px] relative top-[40px] sm:top-[70px] md:top-[105px]" src={isteLogo} alt="LOGO"/>
            </div>
        </div>
    )
};


export default AboutUs;