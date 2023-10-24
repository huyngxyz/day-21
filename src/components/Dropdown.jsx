import { useState, useRef, useEffect } from "react";
import ChevronDown from "./svgs/Chevron";


export default function Dropdown({options}) {
    const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);


  const handleOptionSelect = (option) => {
    setSelectedOption(option.value);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


    
  return (
    <div className="relative inline-block w-fit" ref={dropdownRef}>
        <div
          onClick={toggleOptions}
          className={`${selectedOption === "" ? 'text-light-primary' : 'text-primary'} appearance-none bg-white py-2 px-7 rounded-full w-fit leading-tight focus:outline-none cursor-pointer flex items-center justify-between gap-x-4 text-5xl`}
        >
          {selectedOption ? options.find((opt) => opt.value === selectedOption).label : "select an option"}
          <div className=" inset-y-0 right-0 flex items-center text-gray-700">
            <ChevronDown showOptions={showOptions} size={24} color = "#000000" />
          </div>
        </div>
        {showOptions && (
          <div className="mt-2 bg-white p-4 text-3xl w-full rounded-2xl  absolute z-10">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className="p-3 cursor-pointer hover:bg-gray-100 transition-all border-b"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
  );
}
