
import CacheContext from './CacheContext';
import { View, Text, Pressable, Image } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { styles } from '../style';

export default function FactScreen() {
  const { cache, updateCache } = useContext(CacheContext);
  const [currFact, setFact] = useState("");
  const [imgUri, setImgUri] = useState(" ");

  // Runs once the first time the component renders, automatically has a single fact
  useEffect(() => {
    getCatFact();
  }, []);
    
  const getCatFact = () => {
    fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.json())
    .then(json => {
      // Update the fact and add the new fact to the cache
      setFact(json.data[0]);
      getCatImage();
      const clone = [...cache];
      clone.push(json.data[0]);
      updateCache(clone);
    })
  };

  const getCatImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(json => {
      setImgUri(json[0].url)
    })
  };

  return (
    <View style={styles.screen_container}>
      <View style={styles.card_container}>
        <Image 
          style={styles.fact_image}
          source={{ uri: imgUri}}
        />
        <View style={styles.fact_container}>
          <Text style={styles.fact_text}>{currFact}</Text>
        </View>
        <Pressable onPress={getCatFact}>
          <Text style={styles.btn_text}>New Fact</Text>
        </Pressable>
      </View>
    </View>
  );
}
