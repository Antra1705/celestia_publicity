import React from "react";
import isteLogo from '../assets/iste.png'
import '../style/aboutUs.css'
import Background from "./bgFooter";

const AboutUs = () => {
    return(
        <div className="relative w-full h-full -mt-20 md:-mt-36">
        <Background />
        <div className="relative z-10 flex align-center items-center flex-col about-us-bg " >
            
            <div className="flex align-center flex-col items-center text-white">
                <img className="mb-6 md:mb-16 w-[96px] h-[96px] md:w-[150px] md:h-[150px] " src={isteLogo} alt="LOGO"/>
                <h1 className="text-4xl md:text-[93px] glow font-[camood]">ABOUT ISTE</h1>
            </div>
            <div className="mx-6 md:mx-[14vw] font-[Aeonik] text-base md:text-[26px] mt-6 md:mt-[51px] text-white leading-relaxed md:leading-8">
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
                <br/>
                <p >
                    At Vellore Institute of Technology (VIT), we are proud to host the VIT
                    Chapter of ISTE, which stands as a beacon of excellence in technical
                    education. The ISTE-VIT Chapter plays a pivotal role in fostering
                    innovation, skill development and knowledge dissemination among
                    students and professionals.
                </p>
            </div>
            <div className="ml-6 md:ml-[40px] self-start">
                <img className="w-[70px] h-[70px] md:w-[140px] md:h-[140px] relative top-9 md:top-[105px] md:mb-10" src={isteLogo} alt="LOGO"/>
            </div>
        </div></div>
    )
};


export default AboutUs;