// import necessary libraries and components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ArchiveScreen from '../screens/ArchiveScreen';
import { colors } from '../theme/colors';

// create a stack navigator. A stack navigator allows you to transition between screens and manage navigation history. Each new screen is placed on top of a stack.
const Stack = createNativeStackNavigator();


// define the AppNavigator component. This component sets up the navigation structure of the app.
export default function AppNavigator() {
    return (
        // wrap the navigator in a NavigationContainer. This component manages the navigation tree and contains the navigation state. It must wrap the whole app.
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.black,  
                    },
                    headerTintColor: colors.gold,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                {/* define the screens in the stack navigator. Each screen is associated with a component that will be rendered when the screen is active. */}
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'XXI.ARCHIVE' }} />      
                <Stack.Screen name="Archive" component={ArchiveScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}