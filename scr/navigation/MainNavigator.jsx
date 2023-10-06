import React, {useState} from 'react'
import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const MainNavigator = () => {
    const [user, setUser] = useState(null)
    return ( user ? <BottomTabNavigator/> : <AuthStackNavigator/> )
}


export default MainNavigator

