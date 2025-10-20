"use client";
import React, { useState } from "react";
import { Button } from "../button";

const NewsLetterForm = () => {
  const [email, setEmail] = useState("");
  return (
    <form action="">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        className="p-2 pl-3 placeholder:text-black/60 border rounded-md border-black/70 w-full "
      />
      <Button type="submit" className="block w-full mt-5">
        Subscribe
      </Button>
    </form>
  );
};

export default NewsLetterForm;
