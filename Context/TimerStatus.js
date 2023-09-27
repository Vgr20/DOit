import React, { createContext, useContext, useState } from 'react';

const TimerStatus = createContext();
const TimerUpdateStatus = createContext();

export function useTimerStatus() {
    return useContext(TimerStatus)
}

export function useTimerUpdate() {
    return useContext(TimerUpdateStatus)
}

export const TimerStatusProvider = ({children}) => {
    const [isTimerActive, setIsTimerActive] = useState(false);

    function toggleTimerStatus() {
        setIsTimerActive(prevTimerStatus => !prevTimerStatus)
    }

    return (
        <TimerStatus.Provider value={isTimerActive}>
            <TimerUpdateStatus.Provider value={toggleTimerStatus}>
                {children}
            </TimerUpdateStatus.Provider>
        </TimerStatus.Provider>
    );
};

export default TimerStatusProvider;