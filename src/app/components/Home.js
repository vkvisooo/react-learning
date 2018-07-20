import React from "react";

import { Header } from './Header';

export class Home extends React.Component {
    render() {
        var obj = {
            name: "vishal",
            nav: ["page 1", "page 2", "page 3", "page 4"]
        };
        return (
            <div className="">
                <Header obj={obj} />
                <p>Content Goes Here.....</p>
            </div>
        )
    }
}