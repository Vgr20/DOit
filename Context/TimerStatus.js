import React, { createContext, useContext, useState } from 'react';

const TimerStatus = createContext();
const TimerUpdateStatus = createContext();
const FinishTime = createContext();
const setFinishTime = createContext();
const TotalDuration = createContext();
const setTotalDuration = createContext();
const TimerPaused = createContext();
const PauseStart = createContext();
const BreakList = createContext();

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

export function useAppPaused() {
    return useContext(TimerPaused)
}

export function usePauseStart() {
    return useContext(PauseStart)
}

export function useBreakList() {
    return useContext(BreakList)
}

export const TimerStatusProvider = ({children}) => {
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [totalDuration, setTotalDuration] = useState('60');
    const [finishTime, setFinishTime] = useState(Math.floor(Date.now() / 1000) + totalDuration);
    const [timerPaused, setTimerPaused] = useState(false);
    const [pauseStartAt, setPauseStart] = useState(Math.floor(Date.now() / 1000));
    const [breakList, setBreakList] = useState([]);

    function toggleTimerStatus() {
        setIsTimerActive(prevTimerStatus => !prevTimerStatus)
    }

    const changeTotalDuration = (newtotalDuration) => {
        setTotalDuration(newtotalDuration)
    }

    const changeFinishTime = (newFinishTime) => {
        setFinishTime(newFinishTime)
    }

    const changePlayPause = (newPlayPause) => {
        setTimerPaused(newPlayPause)
    }

    const changePauseStart = (newPauseStart) => {
        setPauseStart(newPauseStart)
    }

    const changeBreakList = (newBreakList) => {
        setBreakList(newBreakList)
    }

    return (
        <TimerStatus.Provider value={isTimerActive}>
            <TimerUpdateStatus.Provider value={toggleTimerStatus}>
                <FinishTime.Provider value={{finishTime , changeFinishTime}}>
                    <TotalDuration.Provider value={{totalDuration, changeTotalDuration}}>
                        <TimerPaused.Provider value={{timerPaused, changePlayPause}}>
                            <PauseStart.Provider value={{pauseStartAt, changePauseStart}}> 
                                <BreakList.Provider value={{breakList, changeBreakList}}>
                                    {children}
                                </BreakList.Provider>
                            </PauseStart.Provider>
                        </TimerPaused.Provider>
                    </TotalDuration.Provider>
                </FinishTime.Provider>
            </TimerUpdateStatus.Provider>
        </TimerStatus.Provider>
    );
};

export default TimerStatusProvider;