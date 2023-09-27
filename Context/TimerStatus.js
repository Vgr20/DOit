import { func } from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

const TimerStatus = createContext();
const TimerUpdateStatus = createContext();
const GlobalEndTime = createContext();
const EndTimeUpdate = createContext();

export function useTimerStatus() {
    return useContext(TimerStatus)
}

export function useTimerUpdate() {
    return useContext(TimerUpdateStatus)
}

export function useEndTime() {
    return useContext(GlobalEndTime)
}

export function useEndTimeUpdate() {
    return useContext(EndTimeUpdate)
}

export const TimerStatusProvider = ({children}) => {
    const [isTimerActive, setIsTimerActive] = useState(false);

    function toggleTimerStatus() {
        setIsTimerActive(isTimerActive => !isTimerActive)
    }

    const [endTime, setEndTime] = useState(Date.now());

    function updateEndTime(newEndTime) {
        setEndTime(newEndTime) 
    }

    return (
        <TimerStatus.Provider value={isTimerActive}>
            <TimerUpdateStatus.Provider value={toggleTimerStatus}>.
                <GlobalEndTime.Provider value={endTime}>
                    
                        {children}
                </GlobalEndTime.Provider>
            </TimerUpdateStatus.Provider>
        </TimerStatus.Provider>
    );
};

export default TimerStatusProvider;