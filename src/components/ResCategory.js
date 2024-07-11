import { useState } from 'react';
import ItemList from './ItemList';
const ResCategory = ({ data, showItems, toggleShowIndex }) => {
    const handleClick = () => {
        toggleShowIndex()
    }
    return (
        <div className="w-6/12 m-auto shadow-lg p-4 flex flex-col cursor-pointer" onClick={handleClick}>
            <div className='flex justify-between items-center mb-4' >
                <span className="font-medium text-base cursor-pointer">{data.title}😋</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6 cursor-pointer"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default ResCategory;
