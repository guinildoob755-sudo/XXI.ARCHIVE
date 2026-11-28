// import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '../theme/colors';


// define the ArchiveScreen component. This component represents the Archive screen of the app. It displays a simple view with a title.
export default function ArchiveScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archive</Text>
        <Pressable onPress={() => navigation.navigate('Import')} style={styles.button}>
          <Text style={styles.buttonText}>Import</Text>
        </Pressable> 

    </View>
    
  );
}

// define the styles for the ArchiveScreen component. The styles are created using StyleSheet.create, which provides a way to define styles in a structured manner.
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
    button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.gold,
    borderRadius: 5,
    },
    buttonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    },
});