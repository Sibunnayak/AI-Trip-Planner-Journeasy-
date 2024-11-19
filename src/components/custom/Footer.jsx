import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Footer() {
  const openGithub = () => {
    window.open(
      "https://github.com/Sibunnayak",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="footer min-h-32 w-full flex text-muted-foreground items-center justify-center p-4">
      <h1>
        <Link
          to="https://github.com/Sibunnayak"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="link" onClick={openGithub}>
            {" "}
            <p className="sm:font-semibold sm:text-lg text-muted-foreground border-b-2">
              Made by SIbun 😇{" "}
            </p>
          </Button>
        </Link>
      </h1>
    </div>
  );
}

export default Footer;
