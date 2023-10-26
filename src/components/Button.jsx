import { useState } from "react";
import Loading from "./svgs/Loading";

export default function Button() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionSelect = () => {
    
      setIsSubmitting(true); // Set isSubmitting to true when submitting
      // You can perform any submission logic here, like sending data to the server

      // Simulate a delay for the example (remove this in your actual submission logic)
      setTimeout(() => {
        setIsSubmitting(false); // Set isSubmitting to false when submission is complete
      }, 1000); // Replace this with your actual submission logic
  };

  return (
    <button onClick={handleOptionSelect} className={`text-white rounded-full px-14 py-3 mt-12 flex items-center gap-x-2 ${isSubmitting ? 'bg-light-primary' : 'bg-primary'}`}>
      {isSubmitting ? <Loading /> : null}
      <span className="uppercase text-xl">
        {isSubmitting ? "submitting" :  "let's do it"}
      </span>
    </button>
  );
}