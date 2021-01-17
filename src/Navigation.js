import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/Home';
import WalletScreen from './screen/Wallet';
import PayScreen from './screen/Pay';


const Tab = createBottomTabNavigator();
export default function Navigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                title: 'Início'
            }}
            />
            <Tab.Screen 
            name="Wallet" 
            component={WalletScreen} 
            options={{
                title: 'Carteira'
            }}
            />
            
            <Tab.Screen 
            name="Pay" 
            component={PayScreen} 
            options={{
                title: 'Pagar'
            }}
            />
            <Tab.Screen 
            name="Notification" 
            component={PayScreen} 
            options={{
                title: 'Notificações'
            }}
            />
            <Tab.Screen 
            name="Settings" 
            component={PayScreen} 
            options={{
                title: 'Ajustes'
            }}
            />
        </Tab.Navigator>

    );
}