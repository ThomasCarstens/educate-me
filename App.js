import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SelectionScreen from './screens/SelectionScreen';

import { ref as ref_d, set, get, onValue } from 'firebase/database'
import { storage, database } from './firebase'
import SpeciesScreen from './screens/SpeciesScreen';

const Stack = createNativeStackNavigator();
const UserContext = React.createContext()

function App() {
  const [gameFileContext, setGameFile] =   React.useState()
  const hi = 'hi'
  React.useMemo(()=>{
      
    // GameFile loaded from Firebase Realtime Database.
    const gameFileRef = ref_d(database, "gameFile" );

    onValue(gameFileRef, (snapshot) =>  {
          const data = snapshot.val();
          if (data){
            console.log('Gamefile downloaded in App.js')
            setGameFile(data)

          }
          
        })
      }, [])
            return (
  

            <UserContext.Provider value={hi}>
              <NavigationContainer>
                <Stack.Navigator>

                  <Stack.Screen options={{headerShown: false}} initialParams={{"gameFileContext": gameFileContext}} name="Login" component={LoginScreen} />
                  <Stack.Screen options={{headerShown: false}} initialParams={{"gameFileContext": gameFileContext}} name="Selection" component={SelectionScreen} />
                  <Stack.Screen options={{headerShown: false}} initialParams={{"gameFileContext": gameFileContext}} name="Home" component={HomeScreen} />
                  <Stack.Screen options={{headerShown: false}} initialParams={{"gameFileContext": gameFileContext}} name="Species" component={SpeciesScreen} />

                </Stack.Navigator>
              </NavigationContainer>
            </UserContext.Provider>

            );

}

export default App;