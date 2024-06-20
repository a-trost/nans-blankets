import React from "react";

export default function NavBar() {
  const siteName = "Nan's Knits";
  return (
    <div className="px-4 py-4">
      <a className="text-3xl" href="/">
        {siteName}
      </a>
    </div>
  );
}
