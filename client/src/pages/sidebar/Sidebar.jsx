import React, { useState } from "react";
import "./sidebar.css";
import { AiOutlineHome, AiOutlineBars } from "react-icons/ai";
import { PiBroadcast } from "react-icons/pi";

import { Link } from "react-router-dom";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  // console.log(show)
  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <span><AiOutlineBars/></span>
    
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link className="nav-logo">
              <span>
                <AiOutlineHome />
              </span>
              <span className="nav-logo-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link className="nav-link active">
                <span>
                  <PiBroadcast />
                </span>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/" className="nav-link">
                <span>
                  <AiOutlineHome />
                </span>
                <span className="nav-link-name">Hotel</span>
              </Link>
              <Link to="/" className="nav-link">
                <span>
                  <AiOutlineHome />
                </span>
                <span className="nav-link-name">Gallery</span>
              </Link>
              <Link to="/" className="nav-link">
                <span>
                  <AiOutlineHome />
                </span>
                <span className="nav-link-name">Transaction</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <span>
              <AiOutlineHome />
            </span>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>

      <h1>Content</h1>
    </main>
  );
}
