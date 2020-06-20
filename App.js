import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Linking } from "expo";
import { View, Text, Button } from "react-native";
import { useLinkProps } from "@react-navigation/native";

const Stack = createStackNavigator();
const prefix = Linking.makeUrl("/");

const DetailsScreen = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const HomeScreen = () => {
  const { onPress, ...props } = useLinkProps({
    to: "/details?id=123",
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button {...props} onPress={onPress} title="Go To Jane" />
    </View>
  );
};

function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: [prefix],
        config: {
          Home: "home",
          Details: {
            path: "details/:id",
            // path: "details/:id?",
          },
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
