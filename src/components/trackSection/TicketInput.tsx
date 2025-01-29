"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Button from "../shared/Button";

const TicketInput = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError("Please enter a valid ticket number or membership ID.");
      return;
    }

    router.replace(`/track?ticketId=${inputValue}`);
    setError("");
  };

  return (
    <div>
      <form className="flex flex-col gap-8 mt-12 max-w-[800px] w-full mx-auto items-center px-4">
        <input
          type="text"
          placeholder="Enter ticket number or membership card no."
          className={`w-full py-2 bg-transparent border-b-2 
                          border-primary text-white font-normal outline-none placeholder:text-white ${
                            error && "border-red-500"
                          }`}
          value={inputValue}
          onChange={handleInputChange}
        />

        <Button variant="solid" onClick={handleSubmit}>
          Submit
        </Button>
      </form>

      {error && <p className="text-red-500 text-center my-4">{error}</p>}
    </div>
  );
};

export default TicketInput;
