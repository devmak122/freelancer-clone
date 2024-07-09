/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unknown-property */
import { Link, useLocation, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
const Home = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0);
        setActivePage(location.pathname);
    }, [location]);


    return (
        <>
            <div>
                <nav className="bg-primary  dark:bg-tertiary">
                    <div className="max-w-screen-xl flex flex-wrap  mobile:justify-between  justify-center items-center mx-auto p-4">
                        <div className=" w-full md:block md:w-auto ">
                            <ul className="font-medium flex flex-col md:flex-row items-center mobile:items-start mobile:text-start p-4 md:p-0 mt-4 border mobile:h-screen border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <Link to={"/dashboard"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                           DashBoard</p>

                                    </li>
                                </Link>
                                <Link to={"/Lists"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            Lists</p>
                                    </li>
                                </Link>
                                <Link to={"/Tasklists"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>Tasklists</p>
                                    </li>
                                </Link>
                                <Link to={"/mypro"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            Myprojects</p>

                                    </li>
                                </Link>
                                <Link to={"/inbox"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            Inbox</p>

                                    </li>
                                </Link>
                                <Link to={"/feedback"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            FeedBack</p>

                                    </li>
                                </Link>
                                <Link to={"/freecredit"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            FreeCredit</p>

                                    </li>
                                </Link>
                                <Link to={"/projectupdate"} className="mobile:border-b mobile:w-full mobile:border-b-secondary" >
                                    <li>
                                        <p className={`block py-2 px-2 mobile:font-semibold mobile:justify-start mobile:py-4 text-white font-poppins mobile:text-start text-[19px] font-normal ${activePage === "/Browse" ? "bg-tertiary px-5 text-primary rounded-3xl border-b-secondary border-b-2" : ""}`}>
                                            Project Updates</p>

                                    </li>
                                </Link>
                                </ul>

                            </div>

</div>
</nav>
            </div>

        </>
    )
}

export default Home;
