import FactScreen from './FactScreen.js';
import HistoryScreen from './HistoryScreen.js';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';
import { styles } from '../style.js';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Fact"
            screenOptions={styles.tab}
            // Helps with rendering performance   
            initialLayout={{
                width: Dimensions.get('window').width
            }}
        >
            <Tab.Screen 
                name="Fact" 
                component={FactScreen}
                options={{ tabBarLabel: 'Fact' }}
                screenOptions={{

                }}
            />
            <Tab.Screen 
                name="History"
                component={HistoryScreen}
                options={{ tabBarLabel: 'History' }}  
            />
        </Tab.Navigator>
    );
}
