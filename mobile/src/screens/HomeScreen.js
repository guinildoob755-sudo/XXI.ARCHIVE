// importation des modules nécessaires
import { StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
// définition du composant HomeScreen. Ce composant représente l'écran d'accueil de l'application. Il affiche un fond en dégradé et un titre.
export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={colors.gradients.dark.colors}
      start={colors.gradients.dark.start}
      end={colors.gradients.dark.end}
      style={styles.container}
    >
      <Text style={styles.title}>XXI.ARCHIVE</Text>

      <Text style={styles.subtitle}>
        Ta bibliothèque créative
      </Text>


      <Text style={styles.footer}>
        XXI.STUDIOS · Version 1.0.0
      </Text>
    </LinearGradient>
    
  );
}

// définition des styles pour le composant HomeScreen. Les styles sont créés à l'aide de StyleSheet.create, ce qui permet de définir les styles de manière structurée.
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
