import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} Arvan's Portfolio. All rights reserved.</p>
        <ul style={navStyle}>
          <li>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "1rem 0",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
};

const navStyle = {
  listStyle: "none",
  padding: 0,
  margin: "0.5rem 0 0",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
};

export default Footer;
