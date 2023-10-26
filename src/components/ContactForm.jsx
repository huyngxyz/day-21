import Dropdown from "./dropdown";

export default function ContactForm() {
  const serviceOptions = [
    { value: "web", label: "web development" },
    { value: "app", label: "app development" },
    { value: "design", label: "web design" },
  ];

  const budgetOptions = [
    { value: "0-1000", label: "$0 - $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000" },
    { value: "5000+", label: "Over $5,000" },
  ];

  return (
    <div>
      <form action="submit">
        {/* first row */}
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <div className="space-x-4 pb-3">
              <label
                aria-label="Name"
                htmlFor="name"
                className=" form-text"
              >
                My name is
              </label>
              <input
                required
                className="form-text__input w-96"
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                placeholder="your name*"
              />
            </div>
            <div className="space-x-4">
              <label
                aria-label="Company name"
                htmlFor="company"
                className="form-text"
              >
                from
              </label>
              <input
                className="form-text__input"
                autoComplete="off"
                type="text"
                name="company"
                id="company"
                placeholder="your company name*"
              />
            </div>
          </div>
          <div className="space-x-4 form-text pb-3">
            <label htmlFor="services">I am looking for</label>
            <Dropdown options={serviceOptions} />
            <span>services.</span>
          </div>
          <div className="space-x-4 form-text pb-3">
            <label htmlFor="budget">My budget is</label>
            <Dropdown options={budgetOptions} />
            <label htmlFor="email">and my email is</label>
          </div>
          <div className="space-x-4 form-text">
            <input
              className="form-text__input w-1/2"
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              placeholder="your email address*"
            />
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
}
