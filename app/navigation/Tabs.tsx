import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import People from "../screens/People";
import Action from "../screens/Action";
import { Ionicons } from "@expo/vector-icons";
import { CustomTextField } from "../components/TextFields";
import Settings from "../screens/Settings";
import MyTeam from "../screens/MyTeam";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -50,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
      backgroundColor: "#FAFAFA",
      padding: 5,
      height: 84,
      width: 84,
      borderRadius: 40,
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#21C17C",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 1,
          right: 1,
          elevation: 0,
          backgroundColor: "#21C17C",
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
          height: 70,
          paddingTop: 12,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/home.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#fff" : "#84E5C2",
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="People"
        component={People}
        options={{
          headerRight: () => (
            <Image
              source={require("../assets/menu.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                marginRight: 5,
              }}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/shake.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#fff" : "#84E5C2",
                }}
              />
              <CustomTextField label="People" color="#fff" fontSize={9} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Action"
        component={Action}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/plus.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 30,
                tintColor: focused ? "#fff" : "#84E5C2",
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              children={props.children}
              onPress={props.onPress}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyTeam"
        component={MyTeam}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/user.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#fff" : "#84E5C2",
                }}
              />
              <CustomTextField label="Team" color="#fff" fontSize={9} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Invite people to the team",
          headerRight: () => (
            <View>
              <Image
                source={require("../assets/menu.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 5,
                }}
              />
              <CustomTextField label="Team" color="#fff" fontSize={9} />
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                name="md-settings-outline"
                size={26}
                color={focused ? "#fff" : "#84E5C2"}
              />
              <CustomTextField label="Settings" color="#fff" fontSize={9} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#FAFAFA",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
