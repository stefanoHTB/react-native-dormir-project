import { View, Text, Image} from "react-native";
import React, { useState } from "react"
import Input from "../../components/common/input";
import CustomButton from "../../components/common/customButton";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../components/Login/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { REGISTER } from "../../Constants/routeNames";
import { useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import loginUser from "../../context/actions/auth/loginUser";


const Login = () => {
    const [form, setForm] = useState({});
    const {navigate} = useNavigation();


       const {
         authDispatch,
         authState: {error, loading},
      } = useContext(GlobalContext);


       const onChange = ({name, value}) => {
        setForm({...form, [name]: value});
    };

       const onSubmit = () => {
        console.log('form: >>', form )
        if (form.userName && form.password) {
            loginUser(form)(authDispatch);
        }
    }; 

return (
       <ScrollView>

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
        value={form.userName || null}
        onChangeText={(value)=>{
            onChange({name: "userName", value})
          }}
        />
        <Input
        label='PASSWORD'
        icon={<Text>SHOW</Text>}
        iconPosition="right"
        placeholder='Enter Password...'
        secureTextEntry={true}
        onChangeText={(value)=>{
            onChange({name: "password", value})
          }}
        />
        <CustomButton 
        onPress={onSubmit}
        onChange={onChange}
        form={form}
        error={error}
        loading={loading}
        danger title="SUBMIT"/>

            <View style={styles.createSection}>
            <Text style={styles.infoText}>DONT HAVE AN ACCOUNT YET? </Text>
            <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
            <Text style={styles.linkBtn}> REGISTER</Text>
            </TouchableOpacity>

            </View>

        </View>
    </View>

       </ScrollView>
)
};
 
export default Login;