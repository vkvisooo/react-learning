import React from "react";

export class Test extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            changedName: props.initialName,
        };
        console.log(props)
    }

    increment_age() {
        //console.log("check");
        this.setState({
            age: this.state.age + 1,
        });
    }
    changeStateName() {
        this.props.changeState(this.state.changedName)
    }
    //for chnage the state of the input value
    onChangeEvent(event) {
        this.setState({
            changedName: event.target.value
        });
    }
    render() {
        let home = "React Test"
        return (
            <div>
                <hr />
                <h1>My age is {this.state.age}</h1>

                <h1>Status {this.state.status}</h1>
                <br />
                {/* another method to bind this */}
                {/* <button onClick={this.increment_age.bind(this)} className="btn btn-primary">Increment Age</button> */}
                <button onClick={() => this.increment_age()} className="btn btn-primary">Increment Age</button>
                <hr />
                <input type="text" value={this.state.changedName} onChange={(event) => this.onChangeEvent(event)} />
                <br /><br />
                <button onClick={() => this.changeStateName()} className="btn btn-primary">Change Name</button>

            </div>
        )
    }
}
