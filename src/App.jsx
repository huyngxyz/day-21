import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <main>
      <div className="h-screen"></div>
      <div className="h-screen justify-center flex-col flex px-20">
        <div className=" w-fit h-fit">
          <h1 className="text-7xl tracking-tight text-primary font-extrabold max-w-4xl pb-28">
            Got an idea for a project? We’re here to 
            <span className="pl-4 relative">
              <span>talk.</span>
              <svg
            className="-bottom-6 absolute -right-4"
            width="188"
            height="38"
            viewBox="0 0 188 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.9032 35.5009C5.14097 25.4309 28.2766 15.6593 37.1985 13.6766C56.988 9.27895 76.0622 6.81504 96.4357 12.1178C112.859 16.3924 136.318 31.4728 151.083 16.7078C161.137 6.65421 171.494 2.7645 185.292 2.7645"
              stroke="#737373"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
            </span>
          </h1>
          
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
