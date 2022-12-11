import React, { useContext, createContext } from "react";

const WatchlistContext = createContext();

export const useWatchlist = () =>useContext(WatchlistContext);

const WatchlistProvider = ( {children}) =>{
    return(
        <WatchlistContext.Provider value={{value:''}}>

        </WatchlistContext.Provider>

    )
}

export default WatchlistProvider;