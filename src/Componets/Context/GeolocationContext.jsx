import React, {createContext} from 'react';
import { useState } from 'react';

const GeolocationContext = createContext({
    Geolocation: null,
    setGeolocation: () => {}
});

function GeolocationContextProvider({children}){

    const [Geolocation, setGeolocation] = useState(null);

   return(
    <GeolocationContext.Provider value={{Geolocation,setGeolocation}}>
        {children}
    </GeolocationContext.Provider>
   );
}

export {GeolocationContext,GeolocationContextProvider}
