import React from 'react';
import usePersistedState from '../hooks/userPersistedState';

const ConfigContext = React.createContext();

export const ConfigProvider = ({ children }) => {
    const [betterPerformance, setBetterPerformance] = usePersistedState('betterPerformace', true);

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