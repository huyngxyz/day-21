export default function RadioButtons({ options, selectedOption, setSelectedOption }) {
  return (
    <div className="inline-flex space-x-4">
      {options.services.map((option) => (
        <label
          htmlFor={option.value} // Use the value as the unique ID
          key={option.value}
          className="bg-white rounded-full p-3 text-lg items-center cursor-pointer"
        >
          <input
            id={option.value}
            type="radio"
            name={options.id} // Use the options.id as the name attribute
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => setSelectedOption(option.value)}
            className=" appearance-none checked:bg-light-primary"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
