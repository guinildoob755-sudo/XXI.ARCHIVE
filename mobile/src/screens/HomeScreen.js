// import libraries necessary for navigation and screen components
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';

// define the HomeScreen component. This component represents the Home screen of the app. It displays a gradient background with a title, subtitle, and footer.
export default function HomeScreen({ navigation }) {
  return (
    // use LinearGradient to create a gradient background for the Home screen. The colors, start, and end points of the gradient are defined in the colors object imported from the theme.
    <LinearGradient
      colors={colors.gradients.dark.colors}
      start={colors.gradients.dark.start}
      end={colors.gradients.dark.end}
      style={styles.container}
    >
        <Text style={styles.title}>XXI.ARCHIVE</Text>
        <Text style={styles.subtitle}>Ta bibliothèque créative</Text>
        <Pressable>
          <Text style={styles.buttonText} onPress={() => { console.log('Explore button pressed'); navigation.navigate('Archive'); }}>
            Explore
          </Text>
        </Pressable>
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
  button: {
    marginTop: 24,
    backgroundColor: colors.red,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: { color: colors.offWhite, fontWeight: 'bold' },
});
