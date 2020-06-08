import React, { Component } from "react";
// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

class Toggler extends Component {

    state = {
        // value passed into the withToggler Component, 
        //which will be passed into the superchanged component
        on: this.props.defaultOnValue
    };

    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            };
        })
    };
    // The Toggler component renders the supercharged component (Menu or favorite) and renders it, adding additional properties.
    render() {
        //render the superCharged component, that was wrapped by Toggler and passed in as a prop (component)

        // Destucture component and defaultOnValue from this.props, so that
        // they are no longer being passed into a component with this.props
        
        // TO rename a destructured component use "componet: c"
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
    // Create the supercharged component, that receives the passed in component along with any props that were passed into the original component.
    return function (props) {
        // Return the supercharged component
        return (
            //withToggler component wraps the component passed in (Menu or Favorite) and their props with the Toggler component
            <Toggler
                component={component}
                defaultOnValue={optionsObj.defaultOnValue}
                {...props}
            />
        )
    }
}
