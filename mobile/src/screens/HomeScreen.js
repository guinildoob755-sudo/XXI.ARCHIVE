import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen() {
  return (
    <LinearGradient
      colors={colors.gradients.dark.colors}
      start={colors.gradients.dark.start}
      end={colors.gradients.dark.end}
      style={styles.container}
    >
        <Text style={styles.title}>XXI.ARCHIVE</Text>
        <Text style={styles.subtitle}>Ta bibliothèque créative</Text>
        <Text style={styles.footer}>XXI.STUDIOS · Version 1.0.0</Text>

    </LinearGradient>
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
    textAlign: 'center',
    color: colors.offWhite,
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    color: colors.gold,
    marginTop: 8,
  },

    footer: {
    position: 'absolute',
    bottom: 50,
    color: colors.sand,
    fontSize: 12,
  },
});
