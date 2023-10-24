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
        <div className="flex flex-col gap-y-3">
          <div className="flex space-x-2">
            <div className="space-x-4">
              <label
                htmlFor="name"
                className=" text-5xl text-primary font-bold"
              >
                My name is
              </label>
              <input
                className="text-center placeholder:text-light-primary text-primary font-bold bg-transparent border-b border-underline pb-2 w-96 text-5xl focus:border-light-primary outline-none autofill:!bg-transparent autofill:!text-primary"
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                placeholder="your name*"
              />
            </div>
            <div className="space-x-4">
              <label
                htmlFor="company"
                className=" text-5xl text-primary font-bold"
              >
                from
              </label>
              <input
                className="text-center placeholder:text-light-primary text-primary font-bold bg-transparent border-b border-underline pb-2  text-5xl focus:border-light-primary outline-none autofill:!bg-transparent autofill:!text-primary"
                autoComplete="off"
                type="text"
                name="company"
                id="company"
                placeholder="your company name*"
              />
            </div>
          </div>
          <div className="flex space-x-2"></div>
          <div className="space-x-4 text-primary font-bold text-5xl">
            <label htmlFor="services">I am looking for</label>
            <Dropdown options={serviceOptions} />
            <span>services.</span>
          </div>
          <div className="space-x-4 text-primary font-bold text-5xl">
            <label htmlFor="budget">My budget is</label>
            <Dropdown options={budgetOptions} />
          <label htmlFor="email">and you can reach me at</label>

          </div>
          <div className="space-x-4 text-primary font-bold text-5xl">

          <input
                className="text-center placeholder:text-light-primary text-primary font-bold bg-transparent border-b border-underline pb-2 w-1/2  text-5xl focus:border-light-primary outline-none autofill:!bg-transparent autofill:!text-primary"
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
