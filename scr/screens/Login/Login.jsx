import { Pressable, TextInput, Text, View } from 'react-native'
import React  from 'react'
import styles from './loginStyles'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { useState } from 'react'

const Login = ({navigation}) => {
    const distpath = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [triggerLogin, result ]  = useLoginMutation();

    const  onsubmit = ()  => {
        triggerLogin({
            email,
            password,
        })
        if( result.isSuccess){
            distpath (setUser(result))
        }
    }



  return (
    <View style ={styles.container}>
        <View style ={styles.loginContainer}>
            <Text>
                Login to start
            </Text>
            <TextInput style ={styles.inputEmail} value={email} onChangeText={setEmail}/>
            <TextInput style ={styles.inputEmail}  value={password} onChangeText={setPassword}/>
            <Pressable style ={styles.loginButton} onPress={onsubmit}>
                <Text>Login</Text>
            </Pressable>
            <Text>No have an account?</Text>
            <Pressable style ={styles.loginButton} onPress={() => {
            navigation.navigate('Signup')}}>
                <Text>Sign up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

