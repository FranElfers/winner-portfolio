import { createContext } from 'react'
import usePersistedState from '../hooks/userPersistedState';

const ConfigContext = createContext();

export const ConfigProvider = ({children}) => {
	// false = better graphics, true = better performance
	const [ performance, setPerformance ] = usePersistedState('performance',false)
	const togglePerformance = () => setPerformance(!performance)

	return <ConfigContext.Provider value={{ performance, togglePerformance }} >
		{children}
	</ConfigContext.Provider>

}

export default ConfigContext