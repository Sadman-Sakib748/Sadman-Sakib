import React from "react";
import {
    BsFacebook,
    BsGithub,
    BsLinkedin,
    BsInstagram,
    BsDownload,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const ContactButton: React.FC = () => {
    return (
        <div>
            <div className="flex flex-wrap mt-4 pt-5 lg:pt-0 gap-x-8 text-4xl justify-center items-center">
                <a
                    target="_blank"
                    href="https://www.facebook.com/sadman.sakib.122298"
                >
                    <BsFacebook className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a target="_blank" href="https://github.com/Sadman-Sakib748">
                    <BsGithub className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a
                    target="_blank"
                    href="https://www.instagram.com/sakib1223123/"
                >
                    <BsInstagram className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full" />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/sadman-sakib-442804372/"
                >
                    <BsLinkedin className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a target="_blank" href="mailto:sadman.sakib34523@gmail.com">
                    <SiGmail className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
            </div>

            <div className="mt-6 flex justify-center items-center">
                <a
                    href="https://drive.google.com/file/d/1jA7bqWROomE-8aXCsXR0--q3Wbl51WWk/view?usp=sharing"
                    target="_blank"
                >
                    <button className="flex items-center justify-center gap-2 text-white bg-primary-400 px-10 py-2 rounded-lg font-bold border border-primary-400 hover:bg-transparent duration-300">
                        Resume
                        <BsDownload className="hover:animate-bounce transition-all" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ContactButton;
