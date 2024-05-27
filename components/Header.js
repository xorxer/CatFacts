import { View, Text } from 'react-native';
import { styles } from '../style';
// Header usually has more content, but this one only has the title
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Cat Facts</Text>
    </View>
  );
}
