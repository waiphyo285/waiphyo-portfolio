import React from "react";

function FooterComponent({ socials }) {
  const curYear = new Date().getFullYear();
  return (
    <footer
      className={
        `d-flex
        flex-wrap 
        align-items-center 
        justify-content-center
        justify-content-md-between  
        shadow-sm 
        px-2 
        py-3`
      }
    >
      <ul className="nav list-unstyled">
        {socials.map((social, socIdx) => (
          <li key={socIdx} className="social py-2 mx-2">
            <a href={social.href}>
              <i
                aria-hidden="true"
                className={social.icon}
                style={{ backgroundColor: social.color }}
              ></i>
            </a>
          </li>
        ))}
      </ul>
      <div className="copyright">
        <span className="p-2">
          Copyright &copy; {curYear}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default FooterComponent;
