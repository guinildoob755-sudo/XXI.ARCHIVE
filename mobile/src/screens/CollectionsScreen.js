
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function CollectionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collections</Text>
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