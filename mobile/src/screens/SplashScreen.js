import { StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import AppNavigator from '../navigation/AppNavigator';

export default function Home({navigation}) {
    return (
        <LinearGradient
            colors={[colors.black, colors.gold]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
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