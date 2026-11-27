// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

// define the ArchiveScreen component. This component represents the Archive screen of the app. It displays a simple view with a title.
export default function ArchiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archive</Text>
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
});