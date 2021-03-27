import React, { useState, useEffect } from 'react';

const ConfigContext = React.createContext();

export const ConfigProvider = ({ children }) => {
    const [betterPerformance, setBetterPerformance] = useState(true);

    const toggleBetterPerformance = () => setBetterPerformance(!betterPerformance);

    const state = {
        betterPerformance,
        setBetterPerformance,
        toggleBetterPerformance
    };

    return (
        <ConfigContext.Provider value={state}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigContext;