import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react"
import { HOME_NAVIGATOR } from "../Constants/routeNames";
import HomeNavigator from "./HomeNavigator";
import SideMenu from "./SideMenu";

const NavItems = ({navigation}) => {

 
};

const getDrawerContent = (navigation) => {

  return  <SideMenu navigation={navigation} />;
};




const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator drawerContent={({navigation}) => getDrawerContent() } >
        <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}
         ></Drawer.Screen>
    
      </Drawer.Navigator>
    );
};

export default DrawerNavigator; 