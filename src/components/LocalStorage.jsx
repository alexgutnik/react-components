import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorage = () => {
    const [name, setName] = useLocalStorage("name", "");

    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 my-6">
            <h1 className="text-3xl font-semibold text-gray-900">
                Local Storage
            </h1>

            <div className="flex justify-center align-middle mt-4">
                <input className="border border-gray-300 rounded-lg p-2" type="text" placeholder="Enter your name"
                       onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="flex justify-center align-middle mt-4">
                <p>Stored name: <b>{name}</b></p>
            </div>
        </div>
    )
}

export default LocalStorage;