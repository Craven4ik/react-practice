import React from "react";

const Header = (props) => {
    return (
        <h1>
            Привет, Я - {props.text}!
        </h1>
    )
}

export default Header;