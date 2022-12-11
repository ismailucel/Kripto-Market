import React from "react";
import { View, Text } from 'react-native'
import { useWatchlist } from '../../Contexts/WatchlistContext'

const WatchlistScreen = () =>{
    const {value} = useWatchlist()
    return(
        <View>
            <Text style = {{color:'white'}}> Hello Watchlist</Text>
        </View>
    )
};

export default WatchlistScreen;