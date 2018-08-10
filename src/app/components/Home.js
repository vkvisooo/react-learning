import React from "react";

import { Header } from './Header';
import { Test } from './test';
export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            homeName: "vishal"
        }

    }
    //data for promises
    userData = {
        vishal: { data: "vishal details" },
        ruplai: { data: "vishal details" },
        vikas: { data: "vishal details" },
        sandeep: { data: "vishal details" }
    }
    users = [
        {
            name: "vishal",
            age: 26,
            status: 'active'
        },
        {
            name: "rupali",
            age: 22,
            status: 'active'
        },
        {
            name: "vikas",
            age: 30,
            status: 'active'
        },
        {
            name: "sandeep",
            age: 29,
            status: 'active'
        },
    ];
    //first promise for fetching all the users
    fetchUsers = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.users);
            }, 3000)
        });
    };
    //second promise for fetching all the data of the single user
    singleUser = (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let authUser = user;
                resolve(this.userData[authUser]);
            })
        });
    };
    welcome() {
        alert("Reach Test is clicked");
    }
    changeState(name) {
        this.setState({
            homeName: name,
        })
    }
    render() {
        // let users = this.users;
        this.fetchUsers()
            .then((users) => {
                let authUser = users[0].name;
                return this.singleUser(authUser);
            })
            .then((user) => {
                console.log(user);
            });
        var initialAge = 26;
        var obj = {
            name: "vishal",
            nav: ["page 1", "page 2", "page 3", "page 4"]
        };
        return (
            <div className="">
                <Header
                    obj={obj}
                    welcome={this.welcome}
                    homeName={this.state.homeName}
                />
                <Test
                    initialAge={initialAge}
                    changeState={this.changeState.bind(this)}
                    initialName={this.state.homeName}
                />
                <p>Content Goes Here.....</p>
            </div>
        )
    }
}
