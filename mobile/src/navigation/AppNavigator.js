import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { colors } from '../theme/colors';
import ImportScreen from '../screens/ImportScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.black },
          headerTintColor: colors.gold,
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Import"
          component={ImportScreen}
          options={{ title: 'Importer' }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}