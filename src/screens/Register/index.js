import { View, Text} from "react-native";
import React, { useContext, useEffect, useState, } from "react"
import RegisterComponent from "../../components/Signup";
import styles from "../../components/Signup/styles";
import Input from "../../components/common/input";
import CustomButton from "../../components/common/customButton";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../Constants/routeNames";
import envs from "../../config/env";
import axios from "../../helpers/axiosInterceptor";
import register from "../../context/actions/auth/register";
import { GlobalContext } from '../../context/Provider'
import { useFocusEffect } from "@react-navigation/native";
import { clearAuthState } from "../../context/actions/auth/register";





const SignUp = ( ) => {
 const {navigate} = useNavigation();
 const [form, setForm] = useState({});
 const [errors, setErrors] = useState({});
 const {authDispatch,
        authState: {error, loading, data}
    } = useContext(GlobalContext);
   

    useFocusEffect(
        React.useCallback(() => {
            return () => {
              if (data || error) {
                clearAuthState()(authDispatch);
              }
            };
          }, [data, error]),
        )


    const onChange = ( {name, value}) => {
        setForm({...form, [name]: value});

        if(value !== '') {
            if (name === 'password'){
                if (value.length < 6){
                    setErrors((prev) => {
                        return {...prev, [name]: 'it needs to be more than 6 characthers'};
                    });
                } else {
                    setErrors((prev) => {
                        return {...prev, [name]: null}
                    });        
                }
            } else {
                setErrors((prev) => {
                    return {...prev, [name]: null};
                });  
            }        
        } else {
            setErrors((prev) => {
                return {...prev, [name]: 'required field'}
            }); 
        }};






    const onSubmit = () => {
        console.log('form: >>', form ); //delete later
        if(!form.userName) {
            setErrors((prev) => {
                return {...prev, userName:'username is required'};
            });
        }
        if (!form.firstName) {
            setErrors((prev) => {
                return {...prev, firstName:'first name is required'};
            });
        }
        if (!form.lastName){
            setErrors((prev) => {
                return {...prev, lastName:'last name is required'};
            });
        }
        if (!form.email){
            setErrors((prev)=>{
                return {...prev, email:'Email is required'}
            });
        }
        if (!form.password){
            setErrors(prev=>{
                return {...prev, password:'password is required'}
          });
         }

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) && 
            Object.values(errors).every((item) => !item)
        ) {
        register(form)(authDispatch)((response) => {
        navigate(LOGIN, {data: response});
         });
        }
    };

    return (

    <ScrollView>
    <View>
        <Text style={styles.title}>WELCOME TO LIVESTREAM</Text>
        <Text style={styles.subtitle}>CREATE AN ACCOUNT</Text>

        <View style={styles.form}>
            {error?.error && <Text>{error.error}</Text>}

        <Input 
        label="FIRST NAME"
        iconPosition="right"
        placeholder='Enter First Name...'
        error={errors.firstName || error?.first_name?.[0]}
        onChangeText={(value) => {
          onChange({name: "firstName", value});
        }}
        />

        <Input 
        label="LAST NAME"
        iconPosition="right"
        placeholder='Enter Last Name...'
        //error={"this field is required"}
        onChangeText={(value)=>{
        onChange({name: "lastName", value});
          }}
        error={errors.lastName || error?.last_name?.[0]}

        />

        <Input 
        label="EMAIL"
        iconPosition="right"
        placeholder='Enter Email...'
        onChangeText={(value)=>{
            onChange({name: "email", value})
          }}
        //error={"this field is required"}
        error={errors.email || error?.email?.[0]}

        />

        <Input 
        label="USERNAME"
        iconPosition="right"
        placeholder='Enter Username...'
        //error={"this field is required"}
        onChangeText={(value)=>{
          onChange({name: "userName", value})
        }}
        error={errors.userName || error?.username?.[0]}

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
        error={errors.password || error?.password?.[0]}

        />
        <CustomButton 
        onPress={onSubmit}
        onChange={onChange}
        form={form}
        errors={errors}
        error={error}
        disabled={loading}
        loading={loading}
        primary title="REGISTER"/>

        <View style={styles.createSection}>
        <Text style={styles.infoText}>ALREADY HAVE AN ACCOUNT YET? </Text>
        <TouchableOpacity 
        onPress={() => { 
            navigate(LOGIN);
            }}>
        <Text style={styles.linkBtn}> LOGIN</Text>
        </TouchableOpacity>

        </View>
        </View>
    </View> 
    </ScrollView> 
    );
};

export default SignUp;

/*
<RegisterComponent 
onSubmit={onSubmit}
onChang={onChange}
form={form}
errors={errors}/>
*/