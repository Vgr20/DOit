import React, { createContext, useContext, useState } from 'react';

const TimerStatus = createContext();

export const useTimerStatus = () => {
    return useContext(TimerStatus);
};

export const TimerStatusProvider = ({children}) => {
    const [isTimerActive, setIsTImerActive] = useState(false);

    return (
        <TimerStatus.Provider value={{isTimerActive, setIsTImerActive}}>
            {children}
        </TimerStatus.Provider>
    );
};