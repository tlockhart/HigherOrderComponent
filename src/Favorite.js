import React from "react"
import {withToggler} from "./HOCs/withToggler"

function Favorite(props) {   
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={props.toggle}
                    >
                        {props.on ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
}
// Set the state of an individual component by sending a defaultOnValue argument 
// into withToggler, with the regular component, and passing into Toggler as a prop.
const SuperchargedFavoriteComponent = withToggler(Favorite, {defaultOnValue: false});
export default SuperchargedFavoriteComponent;