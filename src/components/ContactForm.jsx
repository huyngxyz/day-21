import { useState } from "react";
import Button from "./Button";
import FormSuccess from "./FormSuccess";

export default function ContactForm() {
  const serviceOptions = [
    { value: "web development", label: "web development" },
    { value: "app development", label: "app development" },
    { value: "web design", label: "web design" },
  ];

  const budgetOptions = [
    { value: "0-1000", label: "$0 - $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000" },
    { value: "5000+", label: "Over $5,000" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: [],
    budget: "",
    email: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false)
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitting form');
    setLoading(true);

    // Simulate an API request, you can replace this with your actual form submission logic
    setTimeout(() => {
      setLoading(false);
      setFormSuccess(true);
    }, 2000);
  };

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      if (type === "checkbox") {
        // Create a copy of the current service array and add/remove the selected value
        const updatedService = checked
          ? [...prevFormData.service, value]
          : prevFormData.service.filter((item) => item !== value);
  
        return {
          ...prevFormData,
          [name]: updatedService,
        };
      } else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });

    
  }

  return (
    <div>
      {formSuccess ? (
         <FormSuccess />
      ) : (
      <form onSubmit={handleFormSubmit}>
        {/* first row */}
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <div className="space-x-4 pb-3">
              {/* name */}
              <label aria-label="Name" htmlFor="name" className=" form-text">
                My name is
              </label>
              <input
                aria-required
                required
                onChange={handleChange}
                className="form-text__input w-96"
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="your name*"
              />
            </div>
            <div className="space-x-4">
              {/* company */}
              <label
                aria-label="Company name"
                htmlFor="company"
                className="form-text"
              >
                from
              </label>
              <input
                required
                aria-required
                onChange={handleChange}
                className="form-text__input"
                autoComplete="off"
                type="text"
                name="company"
                id="company"
                value={formData.company}
                placeholder="your company name*"
              />
            </div>
          </div>
          <div className="space-x-4 form-text pb-5">
            {/* Checkbox */}
            <span>I am looking for</span>
            {serviceOptions.map((option) => (
              <label
                key={option.value}
                className={`bg-white rounded-full px-4 py-2 text-xl items-center cursor-pointer group 
                ${formData.service.includes(option.value) ? "bg-primary text-bg" : ""}`}
              >
                <input
                  onChange={handleChange}
                  className="appearance-none"
                  id={option.value}
                  type="checkbox"
                  checked={formData.service.includes(option.value)}
                  name="service" // Use the options.id as the name attribute
                  value={option.value}
                />
                <span className="select-none">{option.label}</span>
              </label>
            ))}
            <span>services.</span>
          </div>
          <div className="space-x-4 form-text pb-3">
            <span>My budget is</span>

            {/* radio button here */}
            <div className="inline-flex space-x-4">
              {budgetOptions.map((option) => (
                <label
                  key={option.value}
                  className={`bg-white rounded-full px-4 py-2 text-xl items-center cursor-pointer checked:bg-lime-200 ${
                    formData.budget.includes(option.value) ? " bg-primary text-bg" : ""
                  }`}
                >
                  <input
                    required
                    aria-required
                    className="appearance-none"
                    onChange={handleChange}
                    id={option.value}
                    type="radio"
                    name="budget" // Use the options.id as the name attribute
                    value={option.value}
                    checked={formData.budget === `${option.value}`}
                  />
                  <span className="select-none">{option.label}</span>
                </label>
              ))}
            </div>
            <label htmlFor="email">and my email is</label>
          </div>
          <div className="space-x-4 form-text">
            <input
              required
              aria-required
              onChange={handleChange}
              className="form-text__input w-1/2"
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="your email address*"
            />
          </div>
        </div>
        <Button loading={loading}/>
      </form>)}
    </div>
  );
}
