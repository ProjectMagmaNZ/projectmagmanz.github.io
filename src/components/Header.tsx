import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import { logoText } from "@/assets";
import "./styles/header.css";

export default function Header() {
  const { location } = useRouterState();
  const path = location.pathname;

  let yellow = false;
  if (path === "/projects" || path === "/about") {
    yellow = true;
  }

  const [isMobile, setMobile] = useState(window.innerWidth < 740);
  const [atTop, setAtTop] = useState(window.scrollY === 0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 740);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <header
      className={`header${!atTop && !menuOpen ? " scrolled" : ""} + ${
        yellow ? "header-yellow" : ""
      }`}
    >
      <nav className="header-nav">
        <Link to="/">
          <img
            src={logoText}
            alt="Logo"
            height={60}
            onClick={() => setMenuOpen(false)}
          />
        </Link>
        {isMobile ? (
          <>
            <button
              className="hamburger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Open menu"
            >
              {menuOpen ? <IoClose size={40} /> : <IoMenu size={40} />}
            </button>
            {menuOpen && (
              <ul className="header-ul mobile-menu">
                <li>
                  <Link
                    className="header-a"
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="header-a"
                    to="/team"
                    onClick={() => setMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="header-a"
                    to="/projects"
                    onClick={() => setMenuOpen(false)}
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    className="header-a"
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="https://forms.gle/wMDQGo9Ews73hzHK6">
                    <button className="header-button">Join Us</button>
                  </a>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className="header-ul">
            <li>
              <Link
                className="header-a"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="header-a"
                to="/team"
              >
                Our Team
              </Link>
            </li>
            {/* TODO: add back once page is sorted <li>
              <Link
                className="header-a"
                to="/projects"
              >
                Our Work
              </Link>
            </li> */}
            <li>
              <Link
                className="header-a"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
      {!isMobile && (
        <a href="https://forms.gle/wMDQGo9Ews73hzHK6">
          <button className="header-button">Join Us</button>
        </a>
      )}
    </header>
  );
}
