import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navigation">
            <Link className="navElem" to={"/"}>Главная</Link>
            <Link className="navElem" to={"/image"}>Картинка</Link>
            <Link className="navElem" to={"/chat"}>Чат</Link>
            <Link className="navElem" to={"/toggle"}>CheckBox</Link>
        </nav>
    )
}

export default Nav;