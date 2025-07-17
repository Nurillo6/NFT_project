"use client"
import React, { useEffect, useState } from 'react'
import { FormatTime } from './Format';

const Timer = ({hours,minutes,seconds}:{hours:number,minutes:number,seconds:number}) => {
    const [timeLeft, setTimeLeft] = useState({ hours: hours, minutes: minutes, seconds: seconds});
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }

                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="bg-black/40 w-[300px] backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="text-white/80 text-sm mb-2">Auction ends in:</div>
            <div className="flex items-center space-x-4">
                <div className="text-center">
                    <div className="text-4xl font-bold text-white">
                        {FormatTime(timeLeft.hours)}
                    </div>
                    <div className="text-white/60 text-xs">Hours</div>
                </div>
                <div className="text-white text-2xl">:</div>
                <div className="text-center">
                    <div className="text-4xl font-bold text-white">
                        {FormatTime(timeLeft.minutes)}
                    </div>
                    <div className="text-white/60 text-xs">Minutes</div>
                </div>
                <div className="text-white text-2xl">:</div>
                <div className="text-center">
                    <div className="text-4xl font-bold text-white">
                        {FormatTime(timeLeft.seconds)}
                    </div>
                    <div className="text-white/60 text-xs">Seconds</div>
                </div>
            </div>
        </div>
    )
}

export default Timer