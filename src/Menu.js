import React from "react"
import { withToggler} from "./HOCs/withToggler"

function Menu (props){
    
        return (
            <div>
                <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
                <nav style={{display: props.on ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        ) 
}
// Set the state of an individual component by sending a defaultOnValue argument 
// into withToggler, with the regular component, and passing into Toggler as a prop.
const SuperchargedMenuComponent = withToggler(Menu, {defaultOnValue: true});
export default SuperchargedMenuComponent;