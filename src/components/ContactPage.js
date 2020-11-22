import React, { useState } from "react";

export const ContactPage = () => {
  const [status, setStatus] = useState("Open Now");
  return (
    <div className="container">
      <h1>Status: {status} </h1>
      <button onClick={() => setStatus("Open Now")}>Change to Open</button>
      <button onClick={() => setStatus("Closed Now")}>Change to Closed</button>
    </div>
  );
};
