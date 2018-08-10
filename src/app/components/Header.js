import React from "react"

// stateless component dont need render() and class is replaced by const and fat arrow function is there.
// if we dont need states then we should use stateless component for better performance

export const Header = (props) => {
    console.log(props)
    let home = "React Test";

    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="" onClick={props.welcome}><a>{props.homeName}</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    {props.obj.nav.map((nav, key) => <li key={key}><a href="#">{nav}</a></li>)}
                </ul>
            </div>
        </nav>
    )
}
//export const Header;
// declare the type of the props passed through home component

