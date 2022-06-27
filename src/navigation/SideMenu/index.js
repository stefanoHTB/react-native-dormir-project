import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Container from '../../components/common';
import styles from './styles'
import { loadOptions } from '@babel/core';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { HOME_NAVIGATOR, SETTINGS } from '../../Constants/routeNames'
import { useNavigation } from "@react-navigation/native";


const SideMenu = ({navigation}) => {

    const {navigate} = useNavigation();



    const menuItems = [

        {icon:<Text>T</Text>, name: 'Settings'},
        {icon:<Text>T</Text>, name: 'Logout'},

    ];

    return (
        <SafeAreaView>
          <Container>
          <Image source={ require('../../assets/images/logo.png')}style={styles.LogoImage}/>

           <View>
           <TouchableOpacity style={styles.button} onPress={()=> {navigate(HOME_NAVIGATOR)}}>
                <Text >HOME</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={()=> {navigate(SETTINGS)}}>
                <Text >SETTINGS</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button}>
                <Text>LOGOUT</Text>
             </TouchableOpacity>
                       </View>
    
          </Container>
        </SafeAreaView>
      );
};

export default SideMenu


/*
 {menuItems.map( ({name, icon}) => (
                 <TouchableOpacity key={name} style={styles.item}> {icon}
                    <Text>{name}</Text>
                 </TouchableOpacity>
                       ))}
                       */