import React, {useRef, useState} from 'react';

function useCallback(fn, dependencies) {
    const ref = useRef({ fn , dependencies });

    const dependenciesChanged = !ref.current.dependencies ||
        dependencies.some((dep, i) => dep !== ref.current.dependencies[i]);

    if (dependenciesChanged) {
        ref.current.fn = fn;
        ref.current.dependencies = dependencies;
    }

    return ref.current.fn;
}

const CustomUseCallback = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count]);

    return (
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl p-4 my-6">
            <h1 className="text-3xl font-semibold text-gray-900">
                Counter with CustomUseCallback
            </h1>

            <div className="flex justify-center align-middle gap-6 mt-4">
                <p>Count: <span className="font-bold">{count}</span></p>
                <p>Other Count: <span className="font-bold">{otherCount}</span></p>
            </div>

            <div className="mt-4">
                <button onClick={increment}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Increment
                    Count
                </button>
                <button onClick={() => setOtherCount((prev) => prev + 1)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Increment Other Count
                </button>
            </div>
        </div>

    )
}

export default CustomUseCallback;