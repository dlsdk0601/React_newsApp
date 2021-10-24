import React from "react";
import "../css/Header.scss";


export default () => {

    return (
        <nav>
            <span className="logo"><img className="logoImg" src="./img/logo.png" alt="no" /></span>
            <div id="webapp_cover">
                <div id="menu_button">
                    <input type="checkbox" id="menu_checkbox" />
                    <label for="menu_checkbox" id="menu_label">
                        <div id="menu_text_bar"></div>
                    </label>
                </div>
            </div>
            <div></div>
        </nav>
    );
}