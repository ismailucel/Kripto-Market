import React from "react";
import { View, Text, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

const PortfolioAssetsList = () =>{
    return(
        <View>
            <FlatList 
            data={[]}
            renderItem={()=> <Text>Item</Text>}
            ListHeaderComponent={
                <>
                    <View style={styles.balanceContainer}>
                        <View>
                             <Text style={styles.currentBalance}>Current Balance</Text>
                            <Text style={styles.currentBalanceValue}>20000 TRY</Text>
                            <Text style={styles.valueChange}>1000 TRY (All Time)</Text>
                        </View>
                        <View style={styles.priceChangePercentageContainer}>
                            <AntDesign 
                                name={'caretup'} 
                                size={12} 
                                color = {'white'}
                                style = {{alignSelf : 'center',marginRight :10}} 
                             />
                            <Text style={styles.percentageChange}>1.2%</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.assetsLabel}> Your assets</Text>
                    </View>
                </>
            }
            />
        </View>
    )
}

export default PortfolioAssetsList;