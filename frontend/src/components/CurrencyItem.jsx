import React from "react";

const CurrencyItem = ({ image, label, isSelected, onClick }) => {

    const borderColorClass = isSelected ? 'border-black' : '#a5aaae';

    const textColor = isSelected && '#fff';

    const fontSize = isSelected && '19px';

    const backgroundColor = isSelected && '#6db1ff';
    const boxShadow = isSelected ? '' :'rgb(109 177 255 / 98%) 1.5px 1.5px 1.5px 1.5px';

    return (
        <div
            className={` dark:text-white transition-[1s] dark:shadow-none dark:border-none flex flex-row justify-center items-center rounded-[0.5rem] w-[45%] p-2 bg-[#fff] dark:bg-[rgb(30,31,34)] dark:hover:bg-[rgb(49,51,56)] hover:bg-[#6db1ff] cursor-pointer ${borderColorClass}`}
            onClick={onClick}
            style={{ boxShadow: 'rgb(109 177 255 / 98%) 1.5px 1.5px 1.5px 1.5px',backgroundColor }}
        >
            <img alt={label} fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" src={image} />
            <span style={{ textColor, fontFamily: 'Smack', fontSize }} className="ml-2">{label}</span>
        </div>
    );
}

export default CurrencyItem;
