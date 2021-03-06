import { createStackNavigator } from "@react-navigation/stack";
import React from "react"
import { View, Text, Settings} from "react-native";
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../Constants/routeNames";
import ContactDetail from "../screens/ContactDetail";
import Contacts from "../screens/Contacts";
import CreateContact from "../screens/CreateContact";
import SettingsScreen from "../screens/SettingsScreen";



const HomeNavigator = () => {

    const HomeStack = createStackNavigator();

    return (
      <HomeStack.Navigator initialRouteName={CONTACT_LIST} >
        <HomeStack.Screen name={CONTACT_LIST} component={Contacts} options={{headerShown:false}}></HomeStack.Screen>
        <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
        <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
        <HomeStack.Screen name={SETTINGS} component={SettingsScreen} options={{headerShown:false}}></HomeStack.Screen>
      </HomeStack.Navigator>
    );
};

export default HomeNavigator; 