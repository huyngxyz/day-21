export default function RadioButtons({ options, selectedOption, setSelectedOption }) {
  return (
    <div className="inline-flex space-x-4">
      {options.services.map((option) => (
        <label
          htmlFor={option.value} // Use the value as the unique ID
          key={option.value}
          className="bg-white rounded-full p-3 text-base items-center cursor-pointer"
        >
          <input
            id={option.value}
            type="radio"
            name={options.id} // Use the options.id as the name attribute
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => setSelectedOption(option.value)}
            className="form-radio"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  )
}