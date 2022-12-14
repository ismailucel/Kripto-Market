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
    console.log(currentPrice);
    return(
        <View style={styles.coinContainer}>
            <Image source={{uri:image}} style={{height:30,width:30,marginRight:10,alignself:'center'}}/>
            <View>
               <Text style={styles.title}>{name}</Text> 
               <Text style={styles.ticker}>{ticker}</Text>
            </View>
            <View style={{marginLeft:'auto'}}>
                <Text style={styles.title}>{currentPrice}</Text>
                <View style={{flexDirection:'row'}}>
                    <AntDesign 
                            name={'caretup'} 
                            size={12} 
                            color = {'#16c784'}
                            style = {{alignSelf : 'center',marginRight :10}} 
                    />
                    <Text style={{color:'#16c784',fontWeight:'700'}}>{priceChangePercentage.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.title}>16000 TRY</Text>
                <Text style={styles.ticker}>{quantityBought} {ticker}</Text>
            </View>
        </View>
    )
};

export default PortfolioAssetItem;