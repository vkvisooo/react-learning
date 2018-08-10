import React from "react";
import { Link } from 'react-router-dom';

export const User = (props) => {
    // navigate through button click
    // navigateHome(){
    //     hashHistory.push("user")
    // }
    var con = "/user/23";
    return (
        <div>
            <h1>This is user routnig</h1>
            <p>hello vishal</p>
            {/* home link would be imprt first is working */}
            <Link to={con}>Home</Link>
        </div >
    )

}