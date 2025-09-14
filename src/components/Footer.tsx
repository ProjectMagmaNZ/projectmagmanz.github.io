import { IoMail } from "react-icons/io5";

import { instagram, linkedin, linktree, logoTextLight, wave } from "@/assets";
import "./styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        className="wave"
        src={wave}
        height={40}
        width="100%"
      />
      <img
        src={logoTextLight}
        alt="Logo"
        height={60}
      />
      <div className="footer-content">
        <div>
          <p className="footer-text">
            Got any questions? Feel free to reach out!
          </p>
          <address className="footer-text">
            <a href="mailto:projectmagmanz@gmail.com">
              <IoMail
                size={24}
                style={{ marginRight: "4px" }}
              />
              projectmagmanz@gmail.com
            </a>
          </address>
        </div>
        <div>
          <p className="footer-text">Connect with us!</p>
          <ul className="footer-ul">
            <li>
              <a href="https://www.instagram.com/projectmagmanz/">
                <img
                  src={instagram}
                  alt="Instagram"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/project-magma-nz">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  height={40}
                  width={40}
                />
              </a>
            </li>
            <li>
              <a href="https://linktr.ee/projectmagmanz">
                <img
                  src={linktree}
                  alt="Linktree"
                  height={40}
                  width={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
