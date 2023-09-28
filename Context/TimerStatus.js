import React, { createContext, useContext, useState } from 'react';

const TimerStatus = createContext();
const TimerUpdateStatus = createContext();
const FinishTime = createContext();
const setFinishTime = createContext();
const TotalDuration = createContext();
const setTotalDuration = createContext();

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

export function useTotalDuration() {
    return useContext(TotalDuration)
}

export function useSetTotalDuration() {
    return useContext(setTotalDuration)
}

export const TimerStatusProvider = ({children}) => {
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [totalDuration, setTotalDuration] = useState('60');
    const [finishTime, setFinishTime] = useState(Math.floor(Date.now() / 1000) + totalDuration);

    function toggleTimerStatus() {
        setIsTimerActive(prevTimerStatus => !prevTimerStatus)
    }

    // function changeTotalDuration(newtotalDuration)

    const changeFinishTime = (newFinishTime) => {
        setFinishTime(newFinishTime)
    }

    return (
        <TimerStatus.Provider value={isTimerActive}>
            <TimerUpdateStatus.Provider value={toggleTimerStatus}>
                <FinishTime.Provider value={{finishTime , changeFinishTime}}>
                    {/* <setFinishTime.Provider value={changeFinishTime}> */}
                        {children}
                    {/* </setFinishTime.Provider> */}
                </FinishTime.Provider>
            </TimerUpdateStatus.Provider>
        </TimerStatus.Provider>
    );
};

export default TimerStatusProvider;