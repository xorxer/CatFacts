
import * as React from 'react';
import CacheContext from './CacheContext';
import { View, Text, Pressable, FlatList } from 'react-native';
import { useContext } from 'react';
import { styles } from '../style';

export default function HistoryScreen() {
    const { cache, updateCache } = useContext(CacheContext);

    // Makes the cache empty
    const resetCache = () => {
        updateCache([]);
    }

    return (
        <View style={styles.screen_container}>
            <View style={styles.card_container}>
                <FlatList
                    style={styles.list_style}
                    data={cache}
                    renderItem={({ currFact, index }) => (
                        <Text style={ styles.fact_cache }>{cache[index]}</Text>    
                    )}   
                />
                <Pressable onPress={resetCache}>
                    <Text style={styles.btn_text}>Reset History</Text>
                </Pressable>
            </View>
        </View>
    );
}
