import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const GymCard = (props) => {

    console.log(props)
    return(
        <section className="w-full pt-16 pb-20 bg-gray-50">

            <div className="px-10 mx-auto text-center max-w-7xl">
                <h2 className="text-5xl font-bold text-blue-600">
                    Gym: <span className="text-gray-800"> {props.gym.name}</span>
                </h2>
                <p className="mt-3 text-lg text-gray-500">Address: <span className="text-gray-800"> {props.gym.address}</span></p>
                <p className="mt-3 text-lg text-gray-500">Contact No: <span className="text-gray-800"> {props.gym.contact_number}</span></p>
            </div>
        </section>

    )
}
export default GymCard;
