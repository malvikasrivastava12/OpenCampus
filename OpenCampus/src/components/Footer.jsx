import "../style/Footer.css";
import Logo from "../assets/Logo.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "50px", width: "170px" }}
          />
        </div>
        <div style={{ color: "white" }}>
          © 2023 Open Campus. All rights reserved.
        </div>
      </div>
    </div>
  );
};
