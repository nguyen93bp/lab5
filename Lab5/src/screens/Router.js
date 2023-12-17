import 'react-native-gesture-handler';
import React from "react"
import { StyleSheet,Text,View } from "react-native" 
import { useMyContextController } from '../context';
import { createStackNavigator } from '@react-navigation/stack';
import Admin from './Admin';
import Login from './Login';
import Customer from './Customer';
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";
import AddNewService from "./AddNewService";
const Stack = createStackNavigator();
 export default Router =()=>{
    const [controller, dispatch]= useMyContextController();
    const {userlogin}=controller;
    return (
        <Stack.Navigator initialRouteName='Login'
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name='Admin' component={Admin}/>
            <Stack.Screen name='Customer' component={Customer}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name="Services" component={Services}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="AddNewService" component={AddNewService}
                options={{
                    headerStyle: {backgroundColor:"pink"},
                }}
            />
            <Stack.Screen name="ServiceDetail"component={ServiceDetail}
                options={{
                    headerStyle: {backgroundColor: "pink"},
            }}
            />
        </Stack.Navigator>
    )
 }