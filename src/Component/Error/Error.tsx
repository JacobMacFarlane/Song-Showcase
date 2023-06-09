import React from "react";
import { Link } from "react-router-dom";

interface ErrorProps {
  message?: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
  const shownText = message ? (
    <p>{message}</p>
  ) : (
    <Link to="/">
      {" "}
      <h2 className="go-back">Click here and lets go back home pal!</h2>
    </Link>
  );

  return (
    <div>
      <h2>Oops!!!!</h2>
      {shownText}
    </div>
  );
};
