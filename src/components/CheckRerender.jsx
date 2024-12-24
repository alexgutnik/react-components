import React, { memo, useEffect, useState } from 'react';

const CheckRerender = () => {
    console.log('CheckRerender render');

    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('CheckRerender useEffect');
    }, []);

    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 my-6">
            <h1 className="text-3xl font-semibold text-gray-900">
                Check re-rendering
            </h1>
            <SubComponentWithLogic value={value} />
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setValue((prev) => prev + 1)}>Change value</button>

            <SubComponentWithoutLogic />
        </div>
    );
}

const SubComponentWithLogic = (props) => {
    console.log('SubComponent render');

    useEffect(() => {
        console.log('SubComponent useEffect');
    }, [props.value]);

    return (
        <div className="bg-gradient-to-r from-yellow-200 to-red-400 rounded-xl p-4 my-6">
            <h1 className="">
                Hello from SubComponent!
            </h1>
            <p>Value: {props.value}</p>
        </div>
    );
}

const SubComponentWithoutLogic = memo(() => {
    console.log('SubComponentWithoutLogic render');

    return (
        <div className="bg-gradient-to-r from-yellow-200 to-red-400 rounded-xl p-4 my-6">
            <h1 className="">
                Hello from No logic component!
            </h1>
        </div>
    );
});

export default CheckRerender;