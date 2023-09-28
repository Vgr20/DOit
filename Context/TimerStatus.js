import React, { createContext, useContext, useState } from 'react';

const TimerStatus = createContext();
const TimerUpdateStatus = createContext();
const FinishTime = createContext();
const setFinishTime = createContext();

export function useTimerStatus() {
    return useContext(TimerStatus)
}

export function useTimerUpdate() {
    return useContext(TimerUpdateStatus)
}

export function useFinishTime() {
    return useContext(FinishTime)
}

export function useSetFinishTime() {
    return useContext(setFinishTime)
}

export const TimerStatusProvider = ({children}) => {
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [finishTime, setFinishTime] = useState(Math.floor(Date.now() / 1000) + 3600);

    function toggleTimerStatus() {
        setIsTimerActive(prevTimerStatus => !prevTimerStatus)
    }

    function changeFinishTime(newFinishTime) {
        setFinishTime(newFinishTime)
    }

    return (
        <TimerStatus.Provider value={isTimerActive}>
            <TimerUpdateStatus.Provider value={toggleTimerStatus}>
                <FinishTime.Provider value={finishTime}>
                    {/* <setFinishTime.Provider value={changeFinishTime}> */}
                        {children}
                    {/* </setFinishTime.Provider> */}
                </FinishTime.Provider>
            </TimerUpdateStatus.Provider>
        </TimerStatus.Provider>
    );
};

export default TimerStatusProvider;