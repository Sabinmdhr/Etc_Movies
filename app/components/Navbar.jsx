"use client";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div>
      <nav>
        <span>etc.</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Searh for Movies"
            className="Search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Search</button>
        </form>
        <ul>
          <Link href="/home">
            <li>Home</li>
          </Link>
          <Link href="#">
            <li>Movies</li>
          </Link>
          <Link href="#">
            <li>TV-Series</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
