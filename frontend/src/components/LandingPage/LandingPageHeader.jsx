import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Header() {
        let navigate=useNavigate();
        const handlelogout=()=>{
          localStorage.removeItem('token')
          navigate('/login')
        }
    return (
        <div className="flex justify-between items-center bg-white w-full z-100 py-4 px-6">
            <div className="flex items-center">
                <Link to="/">
                    <img
                        className="h-16 object-contain mr-4"
                        src="https://s3.amazonaws.com/fjds/gig_company/original/20/freelancer-logo.png?1587072521"
                        alt="logo"
                    />
                </Link>
                <Link to="/">
                <button className="ml-4 font-semibold font-poppins">How to use it</button>
                </Link>
                <Link to ="/">
                  <button className="ml-4 font-semibold font-poppins">examples</button>
                  </Link>
            </div>

            <div className="flex items-center mr-12">
                <h4 className="mr-6 font-semibold font-poppins"><Link to="/login">Log In</Link></h4>
                <h4 className="mr-6 font-semibold font-poppins"><Link to="/signup">Sign Up </Link></h4>
                <button className="bg-primary font-lora text-white py-2 px-4 font-bold">Post a Project</button>
            </div>
        </div>
    )
}
export default Header;
