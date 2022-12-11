import React, { useContext, createContext, useState } from "react";

const WatchlistContext = createContext();

export const useWatchlist = () =>useContext(WatchlistContext);

const WatchlistProvider = ( {children}) =>{
    const [watchlistCoinIds,setWatchlistCoinIds] = useState([]);
    return(
        <WatchlistContext.Provider value={{watchlistCoinIds}}>
            {children}
        </WatchlistContext.Provider>

    )
}

export default WatchlistProvider;