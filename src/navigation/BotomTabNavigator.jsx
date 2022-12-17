import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import  PortfolioScreen  from  "../screens/PortfolioScreen"

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
 return (
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'grey',
        tabBarStyle:{
            backgroundColor: '#181818'
        }
    }}>
      <Tab.Screen 
      name="Anasayfa" 
      component={HomeScreen} 
      options= {{
        tabBarIcon : ({focused, color}) => (
        <AntDesign name="home" size={focused ? 30 : 25} color={color} />
        ),
      }} 
      />
      <Tab.Screen 
       name="Portfolyo" 
       component={PortfolioScreen} 
       options= {{
        tabBarIcon : ({focused, color}) => (
        <Foundation name="graph-pie" size={focused ? 35 : 30} color={color} />
        ),
      }} 
      />
      <Tab.Screen
        name="Takip Edilenler"
        component={WatchlistScreen}
        options= {{
         tabBarIcon : ({focused, color}) => (
         <FontAwesome name="star" size={focused ? 30 : 25} color={color}/>
        ),
      }}      
      /> 

     </Tab.Navigator>
  );
};

export default BottomTabNavigator;