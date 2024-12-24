import { useEffect, useState } from "react";

function getLocalStorage(key, initialValue) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }

    if (initialValue instanceof Function) {
        return initialValue();
    }

    return initialValue;
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getLocalStorage(key, initialValue);
    });

    useEffect(() => {
        setLocalStorage(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;