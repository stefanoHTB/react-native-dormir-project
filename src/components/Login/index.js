import { View, Text, Image} from "react-native";
import React from "react"
import Container from "../../components/common";
import Input from "../../components/common/input";
import CustomButton from "../../components/common/customButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../Constants/routeNames";
import Message from "../common/Message";

const LoginComponent = ( error, form, justSignedUp, onChange, loading, onSubmit) =>
 {
    const {navigate} = useNavigation();



  return (
    <Container>

        <Image 
        source={ require('../../assets/images/logo.png')}
        style={styles.LogoImage}
        />
        
    <View>
        <Text style={styles.title}>WELCOME TO LIVESTREAM</Text>
        <Text style={styles.subtitle}>LOGIN HERE</Text>


        <View style={styles.form}>
        <Input 
        label="USERNAME"
        iconPosition="right"
        placeholder='Enter Username...'
        //error={"this field is required"}
        />
        <Input
        label='PASSWORD'
        icon={<Text>SHOW</Text>}
        iconPosition="right"
        placeholder='Enter Password...'
        secureTextEntry={true}
        />
        <CustomButton danger title="SUBMIT"/>

            <View style={styles.createSection}>
            <Text style={styles.infoText}>DONT HAVE AN ACCOUNT YET? </Text>
            <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
            <Text style={styles.linkBtn}> REGISTER</Text>
            </TouchableOpacity>

            </View>

        </View>
    </View>

         

        </Container>
  )
}

export default LoginComponent;