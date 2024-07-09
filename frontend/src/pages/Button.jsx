import React from 'react';

const Button = ({ label, type, variant }) => {
  const baseStyle = "laptop:font-lora laptop:text-[16px] laptop:font-bold laptop:leading-[20px] laptop:text-center laptop:w-[378px] laptop:h-[50px] laptop:rounded-[36px] laptop:mt-5 laptop:border-[#214284] laptop:rounded-1xl laptop:border border-1 laptop:shadow-sm py-2  tablet:text-[18px] font-bold leading-[20px] tablet:leading-[24px]   tablet:w-[378px] tablet:h-[50px] tablet:text-center tablet:w-full tablet:w-auto px-6 py-2 tablet:rounded-[36px] tablet:mt-5 tablet:border-[#214284] tablet:shadow-sm    mobile:font-lora mobile:text-[16px] mobile:w-[300px] mobile:h-[50px] mobile:rounded-1xl mobile:border border-1 mobile:shadow-sm py-2  mobile:rounded-[36px] mobile:mt-5 mb-10 ";
  const variantStyles = {
    solid: "text-white bg-[#214284]",
    outline: "text-[#214284] border border-[#214284]"
  };

  return (
    <button type={type} className={`${baseStyle} ${variantStyles[variant]}`}>
      {label}
    </button>
  );
};

export default Button;

// problem in the button 