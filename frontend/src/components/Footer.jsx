import React from "react";
import logo from "../Images/logo.svg";
import ig from "../Images/ig.svg";
import fb from "../Images/fb.svg";
import yt from "../Images/yt.svg";
import tel from "../Images/tel.svg";
import logowhite from "../Images/logowhite.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <div className="mobile:overflow-x-hidden ">
      <div className="relative w-full h-full">
        <div className="trapz1 w-full">
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-15 xl:px-32  flex justify-center font-poppins font-normal text-xl bg-black">
            <div className="w-full flex flex-col h-full">
              <div className="max-w-screen-xl w-full h-full py-7 px-4 sm:px-6 md:px-10 flex flex-col flex-wrap mx-auto">
                <div className="flex w-full mt-10 sm:mt-20 md:mt-30 lg:mt-40 justify-between">
                  <div className="flex gap-6 sm:gap-10 md:gap-15 lg:gap-15 flex-col md:flex-row w-full">
                    <div className="w-full md:w-[12%]">
                      <img src={logowhite} alt="" className="w-full h-auto" />

                      <p> &nbsp; US (International)/English</p>
                    <p> &nbsp; Help & Support</p>
                    </div>
                    <div className="w-full  text-10px md:w-[15%] mt-5">
                      <p className="text-[15px] font-normal text-white dark:text-white">
                        FreeLancer
                      </p>
                      <hr className="w-[60%] mt-5 mb-5 border-[2px] border-[#FFBB6B]" />
                      <ul className="text-white text-[15px] flex flex-col gap-2 font-normal">
                        <li>
                          <Link
                            to=""
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Categories
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Contests
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Freelancers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Enterprise
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Membership
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Preferred Freelancer Program
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Project Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Local Jobs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Photo Anywhere
                          </Link>
                        </li>

                        <li>
                          <Link
                            to=""
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            API for Developers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Showcase
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Get Verified
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                            Desktop App
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full md:w-[15%] mt-5">
                      <p className="text-[20px] font-normal text-white dark:text-white">
                      About us
                      </p>
                      <hr className="w-[60%] mt-5 mb-5 border-[2px] border-[#FFBB6B]" />
                      <ul className="text-white text-[15px] flex flex-col gap-5 font-normal">
                        <li>
                          <Link
                            to=""
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                           How it Works
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
Security
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                           Investor
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                          Sitemap
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                          News
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                          Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                          Awards
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="hover:underline cursor-pointer"
                            onClick={handleLinkClick}
                          >
                          Press Releases
                          </Link>
                        </li>
                      </ul>

                    </div>
                    <div className="w-full md:w-[15%]  gap-9 mt-5">
                      <p className="text-[20px] font-normal text-white  dark:text-white">
                       Terms
                      </p>
                      <hr className="w-[60%] mt-5 mb-5 border-[2px] border-[#FFBB6B]" />
                       <div className=" text-[15px]  text-white">
                       <p>Privacy Policy
                       </p>
                        <p>Terms and Conditions</p>
                        <p>Copyright Policy</p>
                        <p>Code of Conductt</p>
                        <p>Fees and Charges</p>
                       </div>

                    </div>
                    <div className="w-full md:w-[45%] mt-5">
                      <div className="glassbg2 h-full rounded-[40px] gap-7 flex flex-col items-center justify-center p-3">
                        <p className="mt-6 text-[20px] font-normal text-primary dark:text-white">
                         Stories
                        </p>
                        <a
                          className="bg-tertiary h-[55px] rounded-[35px] text-primary flex justify-center items-center font-poppins font-semibold text-[20px] w-[70%]"
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="w-full flex justify-center">
                            Facebook <img src={fb} alt="fb" className="ml-3" />
                          </p>
                        </a>
                        <a
                          className="bg-tertiary h-[55px] rounded-[35px] text-primary flex justify-center items-center font-poppins font-semibold text-[20px] w-[70%]"
                          href="https://www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="w-full flex justify-center">
                            Instagram <img src={ig} alt="ig" className="ml-3" />
                          </p>
                        </a>

                        <a
                          className="bg-tertiary h-[55px] rounded-[35px] text-primary flex justify-center items-center font-poppins font-semibold text-[20px] w-[70%]"
                          href="https://www.youtube.com/@WelcomeToTFS"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="w-full justify-center flex">
                            YouTube <img src={yt} alt="yt" className="ml-3" />
                          </p>
                        </a>
                        <a
                          className="bg-tertiary h-[55px] rounded-[35px] text-primary flex justify-center items-center font-poppins font-semibold text-[20px] w-[70%]"
                          href="https://t.me/welcometotfs14"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="w-full justify-center flex">
                            Telegram{" "}
                            <img src={tel} alt="tel" className="ml-3" />
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="border-[#214284] border-[1px] w-full mx-auto dark:border-gray-700 opacity-20 mt-10 sm:mt-15 md:mt-20" />
                <div className="max-w-screen-xl w-full h-full  text-white flex justify-between mt-5 flex-wrap mx-auto">
                  <div className="flex  mt-4 text-[15px]">
                
                <h6>47,595,510 <br /> Registered Users</h6>
                <h6>18,611,020 <br /> Total Jobs Posted</h6>
                <p>
                    Freelancer ® is a registered Trademark of Freelancer Technology Pty pmited (ACN 141 959 042) <br />
                Copyright © 2020 Freelancer Technology Pty pmited (ACN 141 959 042)
                </p>


                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
