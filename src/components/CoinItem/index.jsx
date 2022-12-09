import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const CoinItem = ({ marketCoin }) => {
   const {
      name,
      current_price,
      market_cap_rank,
      price_change_percentage_24h, 
      symbol, 
      market_cap,
      image
   } = marketCoin;

   const normalizeMarketCap = (marketCap) =>{
      if(marketCap > 1_000_000_000_000){
         return `${Math.floor(marketCap / 1_000_000_000_000)} T`
      } if(marketCap > 1_000_000_000){
         return `${Math.floor(marketCap / 1_000_000_000)} T`
      } if(marketCap > 1_000_000){
         return `${Math.floor(marketCap / 1_000_000)} T`
      }if(marketCap > 1_000){
         return `${Math.floor(marketCap / 1_000)} T`
      }
      return marketCap;
   };

    return (
       <View style = {styles.coinContainer}>
         <Image
            source={{uri:image}}
            style = {{height: 30, width: 30, marginRight:10,alignSelf: "center"}}
         /> 
        <View>
             <Text style= {styles.title}>{name}</Text>
            <View style = {{flexDirection: "row"}}>
            <View style = {styles.rankContainer}>
                <Text style = {styles.rank}>{market_cap_rank}</Text>
            </View>
            <Text style = {styles.text}>{symbol.toUpperCase()}</Text>
            <AntDesign name='caretdown' size={12} color = "white" style = {{alignSelf : 'center',marginRight :10}} />
            <Text style = {styles.text}>{price_change_percentage_24h.toFixed(3)}%</Text>
         </View>
      </View>
      <View style = {{marginLeft:'auto', alignItems:'flex-end'}}>
        <Text style= {styles.title}>{current_price}</Text>
        <Text style= {{color:'white'}}>MCap {normalizeMarketCap(market_cap)}</Text>
      </View>
    </View>
    );
}

export default CoinItem;