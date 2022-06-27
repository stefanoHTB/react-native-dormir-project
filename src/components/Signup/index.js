/*
import { View, Text, Image} from "react-native";
import React from "react"
import Container from "../../components/common";
import Input from "../../components/common/input";
import CustomButton from "../../components/common/customButton";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../Constants/routeNames";
import register from "../../screens/Register/index"

const RegisterComponent = (onSubmit, onChange, form, errors) =>
 {
    const {navigate} = useNavigation();



  return (
    <Container>

        
    <View>
        <Text style={styles.title}>WELCOME TO LIVESTREAM</Text>
        <Text style={styles.subtitle}>CREATE AN ACCOUNT</Text>

        <View style={styles.form}>
        <Input 
        label="FIRST NAME"
        iconPosition="right"
        placeholder='Enter First Name...'
        onChangeText={(value)=>{
          onChange({name: "firstName", value})
        }}

        error={errors.firstName}
        />

        <Input 
        label="LAST NAME"
        iconPosition="right"
        placeholder='Enter Last Name...'
        //error={"this field is required"}
        error={errors.lastName}

        />

        <Input 
        label="EMAIL"
        iconPosition="right"
        placeholder='Enter Email...'
        //error={"this field is required"}
        error={errors.email}

        />

        <Input 
        label="USERNAME"
        iconPosition="right"
        placeholder='Enter Username...'
        //error={"this field is required"}
        onChangeText={(value)=>{
          onChange({name: "firstName", value})
        }}
        error={errors.userName}

        />

        <Input
        label='PASSWORD'
        icon={<Text>SHOW</Text>}
        iconPosition="right"
        placeholder='Enter Password...'
        secureTextEntry={true}
        error={errors.password}

        />
        <CustomButton onPress={onSubmit} primary title="REGISTER"/>

            <View style={styles.createSection}>
            <Text style={styles.infoText}>ALREADY HAVE AN ACCOUNT YET? </Text>
            <TouchableOpacity onPress={()=>{navigate(LOGIN)}}>
            <Text style={styles.linkBtn}> LOGIN</Text>
            </TouchableOpacity>

            </View>

        </View>
    </View>

         

        </Container>
  )
}

export default RegisterComponent;
*/