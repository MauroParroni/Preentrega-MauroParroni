import React, { useEffect } from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopApi";
import { setCameraImage, setUser } from "../features/auth/authSlice";
import { fetchSessions } from "../db";

const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProfileImageQuery(localId);
  useEffect(() => {
    //console.log(data)
    if (data) {
      dispatch(setCameraImage(data.image));
    }
  }, [data]);
  useEffect(() => {
    (async () => {
      try {
        const seccion = await fetchSessions(localId);
        console.log("esta es", seccion);
        if (seccion.rows.length) {
          console.log(seccion.rows._array[0]);
          const user = seccion.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log("error al obtener", error.message);
      }
    })();
  }, []);
  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
