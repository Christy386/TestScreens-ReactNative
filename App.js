//impostar bibliotecas gerais
import * as React from 'react';
import { View, Text, Button, TextInput  } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const navigation = useNavigation();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Página 1"
        onPress={() => navigation.navigate('P1')}
      />
    </View>
  );
}

function P1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Página 1</Text>
      <TextInput style={{width: '100%', height: '10%', backgroundColor: 'orange', color: 'red'}}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="P1" component={P1} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;