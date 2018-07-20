import React from "react";

export class Header extends React.Component {
    render() {
        let home = "React Test"
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className=""><a href="#">{home}</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {this.props.obj.nav.map((nav, key) => <li key={key}><a href="#">{nav}</a></li>)}
                    </ul>
                </div>
            </nav>
        )
    }
}
// declare the type of the props passed through home component

Header.propTypes = {
    obj: React.PropTypes.object,
}
