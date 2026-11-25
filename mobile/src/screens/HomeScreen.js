import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>XXI.ARCHIVE</Text>
      <Text style={styles.subtitle}>Ta bibliothèque créative</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.offWhite,
    marginTop: 8,
  },
});