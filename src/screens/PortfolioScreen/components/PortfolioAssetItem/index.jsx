import React from "react";
import { View, Text, Image } from 'react-native'
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';

const PortfolioAssetItem=({assetItem}) =>{
    const {
        currentPrice,
        image,
        name,
        priceBought,
        priceChangePercentage,
        quantityBought,
        ticker,
    } = assetItem;
    return(
        <View style={styles.coinContainer}>
            <Image source={{uri:""}} style={{height:30,width:30}}/>
            <View>
               <Text style={styles.title}>Bitcoin</Text> 
               <Text style={styles.ticker}>BTC</Text>
            </View>
            <View style={{marginLeft:'auto'}}>
                <Text style={styles.title}>8000 TRY</Text>
                <View style={{flexDirection:'row'}}>
                    <AntDesign 
                            name={'caretup'} 
                            size={12} 
                            color = {'#16c784'}
                            style = {{alignSelf : 'center',marginRight :10}} 
                    />
                    <Text style={{color:'#16c784',fontWeight:'700'}}>1.2%</Text>
                </View>
            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.title}>16000 TRY</Text>
                <Text style={styles.ticker}>2 BTC</Text>
            </View>
        </View>
    )
};

export default PortfolioAssetItem;