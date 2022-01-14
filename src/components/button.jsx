import React from "react";

export default function Button(props){
    return (
        <div>
            {props.disabled? 
            <button className="text-white text-capitalize bg-white-200 border-0 p-2 rounded-3 my-3 w-100" disabled>{props.value}</button> : 
            <button className={props.nofill? "text-inactive text-capitalize bg-white border-0 p-2 rounded-3 my-3 w-100" : "text-white text-capitalize bg-primary-3 border-0 p-2 rounded-3 my-3 w-100"}>{props.value}</button>}
        </div>
    )
}