import { createContext, FC, useContext } from 'react'
import TagManager from 'react-gtm-module'

const REACT_APP_GTMID = process.env.REACT_APP_GTMID || ''
const gtmId = REACT_APP_GTMID

if (!gtmId) throw new Error('Please add the Firebase config to your .env file')

//Initialize TagManager
TagManager.initialize({
    gtmId,
})

export const GTMContext = createContext(TagManager || {})

export const useGTM = (): typeof TagManager => {
    return useContext(GTMContext)
}

export const GTMProvider: FC = ({ children }) => (
    <GTMContext.Provider value={TagManager}>{children}</GTMContext.Provider>
)
