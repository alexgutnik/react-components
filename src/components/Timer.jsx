import {useEffect, useState} from "react";

export default function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = new Date(2025, 11, 0);

    const getTime = () => {
        const time = deadline - Date.now();

        setSeconds(Math.floor(time / 1000) % 60);
        setMinutes(Math.floor(time / (1000 * 60)) % 60);
        setHours(Math.floor(time / (1000 * 60 * 60)) % 24);
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime();
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
    <div className="timer bg-gradient-to-r from-green-300 to-violet-400 rounded-xl p-4 my-6">
        <h1 className="text-3xl font-semibold text-gray-900">Timer</h1>

        <div className="timer__container flex flex-row justify-center align-middle gap-10">
            <div className="timer__days">
                <h2>{days}</h2>
                <p>Days</p>
                </div>
                <div className="timer__hours">
                    <h2>{hours}</h2>
                    <p>Hours</p>
                </div>
                <div className="timer__minutes">
                    <h2>{minutes}</h2>
                    <p>Minutes</p>
                </div>
                <div className="timer__seconds">
                    <h2>{seconds}</h2>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    );
}
