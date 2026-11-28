import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function ImportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Import</Text>
    </View>
  );
}       

const styles = StyleSheet.create({
  container: {
    flex: 1,        
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',       
    },  

    title: {    
    color: colors.gold,
    fontSize: 24,
    fontWeight: 'bold',
    },
});