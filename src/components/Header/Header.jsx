import { useNavigate } from "react-router";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import { Col, Row } from "antd";
import { withTranslation } from "react-i18next";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
const Header = (props) => {
  const { t } = props;
  const [subMenuOpen, setSubMenuOpen] = useState(-1);
  const toggleMenu = (x) => {
    setSubMenuOpen(subMenuOpen === x ? -1 : x);
  };
  console.log(subMenuOpen);

  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="site-logo">
          <a href="/">
            <img className="img_logo" src={logo}></img>
          </a>
        </div>

        <div className="menu">
          <MenuOutlined onClick={() => toggleMenu(0)} />
        </div>

        <nav className="site-navigation">
          <ul id="nav">
            <li className="nav-li">
              <a href="#footer_id">{t("About Us")}</a>
            </li>
            <li className="nav-li">
              <a href="#_service">{t("Services")}</a>
            </li>
            <li className="nav-li">
              <a href="#case-study">{t("Case Studies")}</a>
            </li>
            <li className="nav-li">
              <a href="#industries">{t("Industries")} </a>
            </li>

            <li className="nav-li">
              <a href="/career">{t("Career")}</a>
            </li>
            <li className="nav-li">
              <a href="#_contact">{t("Contact Us")}</a>
            </li>
          </ul>
        </nav>

        <div className={`submenu ${subMenuOpen === 0 ? "is-open" : ""}`}>
          <div className="icon-close">
            <CloseOutlined onClick={() => toggleMenu(1)} />
          </div>

          <div className="title-header">
            <p className="title">About Us</p>
          </div>
          <div className="title-header">
            <p className="title">Services</p>
            <div className="line"></div>
          </div>
          <div className="title-header">
            <p className="title">Case Studies</p>
            <div className="line"></div>
          </div>
          <div className="title-header">
            <p className="title">Industries</p>
            <div className="line"></div>
          </div>

          <div className="title-header">
            <p className="title" onClick={() => navigate("/career")}>Careers</p>
            <div className="line"></div>
          </div>
          <div className="button-header">
            <p className="Button-title">Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(Header);
