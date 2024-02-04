import axios from 'axios'
import {createContext, useState, useEffect} from 'react';


export const UserContext = createContext({})


export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!user) {
            axios.get('/device').then(({data}) => {
                setUser(data)
            })
        }
    },  [])

return (
    <UserContextProvider value={{user, setUser}}>
        {children}
    </UserContextProvider>

)
}