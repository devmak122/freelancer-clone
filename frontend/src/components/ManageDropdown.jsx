import { Link } from "react-router-dom";

const ManageDropdown = ({ isOpen, onLinkClick }) => {
    const handleClick = () => {
        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <div className={`dropdown ${isOpen ? "block" : "hidden"} absolute top-full right-0 w-[450px] bg-white shadow-lg rounded-lg mt-2 p-4 z-10`}>
            <div className="border-b pb-2 mb-2">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-bold text-lg">Recent Projects</h4>
                    <Link to="/recent-projects" className="text-blue-500 block mt-2" onClick={handleClick}>View All</Link>
                </div>
                <p className="text-gray-600 text-[15px] text-center mt-4">You do not have any active projects. <Link to="/create-project" className="text-blue-500" onClick={handleClick}>Create one</Link> to get started!</p>
            </div>
            <div className="border-b pb-2 mb-2">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-bold text-lg">Lists</h4>
                    <Link to="/lists" className="text-blue-500 block mt-2" onClick={handleClick}>View All</Link>
                </div>
                <ul className="list-none">
                    <li><Link to="/Lists" className="text-blue-500" onClick={handleClick}>Favorites</Link></li>
                    <li><Link to="/Lists" className="text-blue-500" onClick={handleClick}>My Hires</Link></li>
                    <li><Link to="/Lists" className="text-blue-500" onClick={handleClick}>Recently Viewed</Link></li>
                </ul>
            </div>
            <div className="border-b pb-2 mb-2 flex flex-row justify-between items-center">
                <h4 className="font-bold text-lg">Tasklists</h4>
                <Link to="/tasklists" className="text-blue-500 block mt-2" onClick={handleClick}>View All</Link>
            </div>
            <div className="border-b pb-2 mb-2">
                <div className="flex flex-row justify-between items-center">
                    <h4 className="font-bold text-lg">Projects Updates</h4>
                    <Link to="/recent-projects" className="text-blue-500 block mt-2" onClick={handleClick}>View All</Link>
                </div>
                <p className="text-gray-600 text-[15px] text-center mt-4">You do not have any active projects. <Link to="/create-project" className="text-blue-500" onClick={handleClick}>Browse projects</Link> to start work and give updates.</p>
            </div>
        </div>
    );
};

export default ManageDropdown;
