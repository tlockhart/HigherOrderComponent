import React, { Component } from "react";
// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

class Toggler extends Component {

    state = {
        on: this.props.defaultOnValue
    };

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            };
        })
    };
    // render the supercharged Menu or favorite component
    render() {
        //render passed in component from props
        //seperate out component and defaultOnValue
        const {component: C, defaultOnValue, ...props} = this.props
        return (
            <C
                on={this.state.on}
                toggle={this.toggle}
                {...props}
            />
        )
    }
}
export function withToggler(component, optionsObj) {
    // Create the supercharged componentthat receives the passed in component along with any props that were passed into the original component.
    return function (props) {
        return (
            //The passed component with the props that are being passed to the Menu or Favorite component
            <Toggler
                component={component}
                defaultOnValue={optionsObj.defaultOnValue}
                {...props}
            />
        )
    }
}
