import React from "react";
import Navigation from "../navigation";

function Header(props) {
    const {
        categories = [],
        setCurrentCategory
    } = props;
    return (
        <header className="flex-row">
            <h2>Erik Rockenmeyer</h2>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
            ></Navigation>
        </header>
    )
}

export default Header;