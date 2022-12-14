import { atom, selector } from 'recoil'; // atom rerender screens with updated values, selecter is a function that accepts atom or other selectors
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getWatchlistedCoins } from '../services/requests';

export const allPortfolioBoughtAssets = selector({
    key:'allPortfolioBoughtAssets',
    get: async () =>{
        const jsonValue = await AsyncStorage.getItem('@portfolio_coins')
        return jsonValue !=null ? JSON.parse(jsonValue): [];
    }
})

export const allPortfolioBoughtAssetsFromAPI= selector({
    key:'allPortfolioBoughtAssetsFromAPI',
    get: async ({get}) =>{
        const boughtPortfolioAssets= get(allPortfolioBoughtAssetsInStorage)
        const portfolioAssetsMarketData = await getWatchlistedCoins(1, boughtPortfolioAssets.map((portfolioAsset) => portfolioAsset.id).join(','))

        const boughtAssets = boughtPortfolioAssets.map((boughtAsset) => {
            const portfolioAsset= portfolioAssetsMarketData.filter((item)=>boughtAsset.id===item.id)
            return{
                ...boughtAsset,
                currentPrice: portfolioAsset.current_price,
                priceChangePercentage:portfolioAsset.price_chane_percentage_24
            }
        })
        return boughtAssets.sort((item1, item2) => (item1.quantityBought*item1.currentPrice)<(item2.quantityBought*item2.c))
    }
})

export const allPortfolioAssets = atom({
    key:'allPortfolioAssets',
    default:allPortfolioBoughtAssetsFromAPI
})

// portfolio'ya her girdiğimizde price güncellenmeli



export const allPortfolioBoughtAssetsInStorage = atom({
    key:'allPortfolioBoughtAssetsInStorage',
    default:allPortfolioBoughtAssets,
})


