import { useNavigate } from "react-router";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import { Col, Row } from "antd";
import { withTranslation } from "react-i18next";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
const Header = (props) => {
  const { t } = props;
  const [subMenuOpen, setSubMenuOpen] = useState(-1);
  const toggleMenu = (x) => {
    setSubMenuOpen(subMenuOpen === x ? -1 : x);
  };
  console.log(subMenuOpen);

  const navigate = useNavigate();
  const onClickMenuItem = (path) => {
    navigate(path)
    toggleMenu(1)
  }

  //Sticky Header
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };
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
              <a
                href="#footer_id"
                onClick={() => navigate("/")}
              >{t("About Us")}</a>
            </li>
            <li className="nav-li">
              <a
                href="#_service"
                onClick={() => navigate("/")}
              >{t("Services")}</a>
            </li>
            <li className="nav-li">
              <a
                href="#case-study"
                onClick={() => navigate("/")}
              >{t("Case Studies")}</a>
            </li>
            <li className="nav-li">
              <a
                href="#industries"
                onClick={() => navigate("/")}
              >{t("Industries")} </a>
            </li>

            <li className="nav-li">
              <a
                href="/#main_career"
                onClick={() => navigate("/career")}
              >{t("Career")}</a>
            </li>
            <li className="nav-li">
              <a
                href="#_contact"
                onClick={() => navigate("/")}
              >{t("Contact Us")}</a>
            </li>
          </ul>
        </nav>

        <div className={`submenu ${subMenuOpen === 0 ? "is-open" : ""}`}>
          <div className="icon-close">
            <CloseOutlined onClick={() => toggleMenu(1)} />
          </div>

          <div className="title-header">
            <a className="title"
              onClick={() => onClickMenuItem("/")}
              href="#footer_id"
            >About Us</a>
          </div>
          <div className="title-header">
            <a className="title"
              onClick={() => onClickMenuItem("/")}
              href="#_service"
            >Services</a>
            <div className="line"></div>
          </div>
          <div className="title-header">
            <a className="title"
              onClick={() => onClickMenuItem("/")}
              href="#case-study"
            >Case Studies</a>
            <div className="line"></div>
          </div>
          <div className="title-header">
            <a className="title"
              onClick={() => onClickMenuItem("/")}
              href="#industries"
            >Industries</a>
            <div className="line"></div>
          </div>

          <div className="title-header">
            <a className="title"
              onClick={() => onClickMenuItem("/career")}
              href="#main_career"
            >Careers</a>
            <div className="line"></div>
          </div>
          <div className="button-header">
            <a className="Button-title"
              onClick={() => onClickMenuItem("/")}
              href="#_contact"
            >Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation()(Header);
