import React from "react";
import Navigation from "../navigation";

function Header(props) {
    const {
        categories = [],
        setCurrentCategory
    } = props;
    return (
        <header className="row pt-2 align-items-center justify-content-around">
            <div className="col-12 col-md-5">
                <h2>Erik Rockenmeyer</h2>
            </div>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
            ></Navigation>
        </header>
    )
}

export default Header;