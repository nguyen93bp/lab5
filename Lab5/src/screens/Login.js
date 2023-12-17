import { useState, useEffect} from "react"
import {View} from "react-native"
import {Button, Text, TextInput} from "react-native-paper"
import { useMyContextController, login } from "../context"
//import {COLORS } from "../../constants"

export default Login = ({navigation})=>{
    const [email, setEmail] = useState("tvn26012002@gmail.com");
    const [password, setPassword] = useState("123456");
    const [showPassword, setShowPassword] = useState(false);
    const [controller, dispatch] = useMyContextController();
    const {userLogin} = controller;

    useEffect(()=>{
        if(userLogin!=null)
        {
            if(userLogin.role == "admin")
                navigation.navigate("Admin")
            else
                navigation.navigate("Customer")
        }
    }, [userLogin])

    const onSubmit =()=>{
        login (dispatch, email, password);
    }

    return (
        <View style={{flex:1, justifyContent:"center", alignContent:"center"}}>
            <Text style={{fontSize: 40, fontWeight: "bold", alignSelf:"center", color:"pink" , marginBottom: 30
        }}>
            Login
        </Text>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail}

            style={{
                margin:10
            }}
            mode="outlined"
        />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={! showPassword}
            style={{
                margin:10,
            }}

            right={<TextInput.Icon icon="eye" onPress={() =>setShowPassword (!showPassword)}/>}
            mode="outlined"

        />

        <Button mode="contained-tonal" onPress={onSubmit}
            style={{
                margin:10,
                padding:5
                }}
            labelStyle={{
                fontSize:20
                }}
            >
                Đăng Nhập
            </Button>
        </View>
    )
}