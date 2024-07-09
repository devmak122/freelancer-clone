import React, { useState } from 'react';
import Button from './Button';
import NewListModal from './NewListModal';

const Lists = () => {
    const [activeTab, setActiveTab] = useState('Favorites');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lists, setLists] = useState([
        { name: 'Favorites', description: '' },
        { name: 'My Hires', description: '' },
        { name: 'Recently Viewed', description: '' },
        { name: 'Bookmarks', description: '' },
    ]);

    const handleAddList = (values) => {
        setLists([...lists, { name: values.name, description: values.description }]);
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col bg-gray-200  font-poppins">
            <div className="flex-grow flex flex-col space-y-1 md:flex-row  gap-10 mx-4 md:mx-8 my-4">
                <div className="w-full md:w-1/4 bg-white p-4 shadow-lg  rounded-lg mb-4 md:mb-0 ml-0 md:ml-8">
                    <div className='flex flex-row items-center justify-center'>
                        <h2 className="text-xl font-bold mb-4">Lists</h2>
                        <button
                            className="w-full text-right px-4 py-2 rounded text-blue-500 hover:bg-gray-100"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Add New List
                        </button>
                    </div>
                    <ul className="space-y-2">
                        <hr className="border-t-2 opacity-16 mb-4" />
                        <h2 className="text-xl font-bold mb-4">Users</h2>
                        {lists.map((list, index) => (
                            <li key={index}>
                                <button
                                    className={`w-full text-left px-4 py-2 rounded ${activeTab === list.name ? 'text-blue-500 ' : 'hover:bg-gray-100'
                                        }`}
                                    onClick={() => setActiveTab(list.name)}
                                >
                                    {list.name}
                                </button>
                            </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="w-full md:w-3/4 bg-white p-4 shadow-md font-poppins rounded-lg ml-0 md:ml-4">
                    <div className="text-center">
                        <h2 className="text-2xl text-start font-semibold mb-4">
                            {activeTab} <span className="text-light">private . 0 members</span>
                        </h2>
                        <hr className="border-t-2 opacity-16 mb-4" />
                        <p className="text-primary">This list is empty</p>
                        <p>
                            Add freelancers to your list for the most convenient
                            <br />
                            way to access them later.
                        </p>
                        <div className="w-full md:w-auto">
                            <Button label="Browse FreeLancers" type="submit" variant="solid" />
                        </div>
                    </div>
                </div>
            </div>

            <NewListModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddList}
            />
        </div>
    );
};

export default Lists;
