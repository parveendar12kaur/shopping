import React from "react";
import s from "./footerStyle.css";
import wm_logo from '../assets/wm_logo.svg';

class Footer extends React.Component {
    render() {
        return (
            <div>
              <div className={s.footer}>
                <img src={wm_logo} className={s.footer_logo}/>
              </div>
            </div>
        );
    }
}

export default Footer;
