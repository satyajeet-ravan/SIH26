import { useState } from "react";
import {
  UserRound,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

import "./Navbar.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
const [language, setLanguage] = useState("English");

  return (
    <header className="navbar">

      <a href="/" className="brand">
        <div className="brand-icon">
          🐄
        </div>

        <span className="brand-name">
          Breed<span>Vision</span>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="active">
          Home
        </a>

       <a href="#about">About</a>

        <a href="#breeds">
          Breeds
          <ChevronDown size={15} />
        </a>

        <a href="#how-it-works">
          How It Works
        </a>

        <div className="language-dropdown">
  <button
    className="language-button"
    onClick={() => setLanguageOpen(!languageOpen)}
  >
    {language}
    <ChevronDown
      size={16}
      className={languageOpen ? "rotate-icon" : ""}
    />
  </button>

  {languageOpen && (
    <div className="language-menu">
      <button
        onClick={() => {
          setLanguage("English");
          setLanguageOpen(false);
        }}
      >
        English
      </button>

      <button
        onClick={() => {
          setLanguage("हिंदी");
          setLanguageOpen(false);
        }}
      >
        हिंदी
      </button>

      <button
        onClick={() => {
          setLanguage("मराठी");
          setLanguageOpen(false);
        }}
      >
        मराठी
      </button>

      <button
        onClick={() => {
          setLanguage("ગુજરાતી");
          setLanguageOpen(false);
        }}
      >
        ગુજરાતી
      </button>
    </div>
  )}
</div>

        <a href="#contact">
          Contact
        </a>
      </nav>

      <div className="nav-actions">

        <button className="login-btn">
          <UserRound size={17} />
          Login
        </button>

        <button className="get-started-btn">
          Get Started
        </button>

      </div>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

    </header>
  );
}

export default Navbar;