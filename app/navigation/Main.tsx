import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Settings from "../screens/Settings";
import TeamAdmin from "../screens/TeamAdmin";
import Team from "../screens/Team";

import InvitationForm from "../components/invite/InvitationForm";
import InvitationPortal from "../components/invite/InvitationPortal";
import AddPeople from "../components/people/AddPeople";
import ActionDetail from "../components/actions/ActionDetail";
import ActionMap from "../components/actions/ActionMap";
import FAQ from "../screens/FAQ";
import Profile from "../screens/Profile";
import AddTag from "../components/people/components/AddTag";
import PeopleDetails from "../components/people/PeopleDetail";
import Action from "../screens/Action";
import TeamMemberCard from "../components/team/TeamMemberDetail";
import InvitedList from "../components/invite/InvitedList";
import Notifications from "../screens/Notifications";
export default function Main() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="TeamAdmin" component={TeamAdmin} />
      <Stack.Screen name="Team" component={Team} />
      <Stack.Screen name="TeamMemberDetail" component={TeamMemberCard} />
      <Stack.Screen name="InvitationForm" component={InvitationForm} />
      <Stack.Screen name="InvitationPortal" component={InvitationPortal} />
      <Stack.Screen name="AddPeople" component={AddPeople} />
      <Stack.Screen name="TaskMap" component={ActionMap} />
      <Stack.Screen name="TaskDetail" component={ActionDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="AddTag" component={AddTag} />
      <Stack.Screen name="PeopleDetails" component={PeopleDetails} />
      <Stack.Screen name="Action" component={Action} />
      <Stack.Screen name="InvitedList" component={InvitedList} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
