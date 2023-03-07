import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  EvilIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import Header from "../../components/people/Header";
import TagComponent from "../TagComponent";
import DashboardTagComponent from "../dasboard/DashboarTagComponent";
import Button from "../dButton";
import { getAge } from "../../utils/dateHelper";
import { CustomTextField } from "../TextFields";
import ListActions from "../dasboard/ListActions";
import { actions } from "../../data";

export default function PeopleDetails({ route, navigation }) {
  const { people, profilePic } = route.params;
  const [tags, setTags] = useState([]);
  const [tagStatus, setTagStatus] = useState(false);
  const saveTags = (data) => setTags(data);
  const age = getAge(people.birthDate);

  return (
    <ScrollView style={styles.container}>
      <Header
        label="People details"
        profilePic={profilePic}
        people={people}
        age={age}
        saveTags={saveTags}
        tagStatus={tagStatus}
      />
      <View style={styles.profileContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Action")}
            style={{
              flexDirection: "column",
              marginLeft: 30,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Feather name="plus-circle" size={37} color="#21C17C" />
            <CustomTextField label="New Action" marginTop={5} />
          </TouchableOpacity>
          <View style={{ justifyContent: "flex-start", marginRight: 110 }}>
            <Image
              source={
                profilePic
                  ? { uri: profilePic }
                  : require("../../assets/avatar.jpg")
              }
              style={styles.image}
            />
          </View>
          <CustomTextField
            label={people.believer}
            fontSize={14}
            color="#21c17c"
            marginTop={30}
            marginRight={30}
          />
        </View>
        <CustomTextField
          label={people.name}
          fontWeight="700"
          fontSize={22}
          textAlign="center"
          color="#050D22"
          marginBottom={20}
        />

        <View style={styles.labelContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#84E5C2"
          />
          <CustomTextField
            label=" Email: "
            color="#21C17C"
            fontSize={14}
            marginHorizontal={10}
          />
          <CustomTextField
            label={people.email}
            lineHeight={21}
            fontSize={14}
            color="#050d22"
          />
        </View>
        <View style={styles.labelContainer}>
          <Feather name="phone-call" size={20} color="#84E5C2" />
          <CustomTextField
            label=" Phone number: "
            color="#21c17c"
            marginHorizontal={10}
          />
          <CustomTextField
            label={people.phone}
            lineHeight={21}
            fontSize={14}
            textAlign="left"
            color="#050d22"
          />
        </View>
        <View style={styles.labelContainer}>
          <Ionicons name="ios-location-outline" size={25} color="#84E5C2" />
          <CustomTextField
            label=" Address: "
            color="#21c17c"
            marginHorizontal={10}
          />
          <CustomTextField
            label={people.location}
            lineHeight={21}
            fontSize={14}
            textAlign="left"
            color="#050d22"
          />
        </View>
        <View style={styles.labelContainer}>
          <AntDesign name="calendar" size={20} color="#84E5C2" />
          <CustomTextField
            label=" Age/DOB: "
            color="#21c17c"
            marginHorizontal={10}
          />
          <CustomTextField
            label={age}
            lineHeight={21}
            fontSize={14}
            textAlign="left"
            color="#050d22"
          />
        </View>
        <View style={styles.labelContainer}>
          <Ionicons name="ios-male-female-sharp" size={20} color="#84E5C2" />
          <CustomTextField
            label=" Gender: "
            color="#21c17c"
            marginHorizontal={10}
          />
          <CustomTextField
            label={people.gender}
            lineHeight={21}
            fontSize={14}
            textAlign="left"
            color="#050d22"
          />
        </View>
        <View style={styles.labelContainer}>
          <FontAwesome5 name="church" size={20} color="#84E5C2" />
          <CustomTextField
            label=" Believer: "
            color="#21c17c"
            marginHorizontal={10}
          />
          <CustomTextField
            label={people.believer}
            lineHeight={21}
            fontSize={14}
            textAlign="left"
            color="#050d22"
          />
        </View>
        <View style={{ marginVertical: 8 }}>
          <CustomTextField
            label="Description"
            fontSize={14}
            fontWeight="700"
            marginBottom={3}
          />
          <CustomTextField
            label={people.description}
            color="#737F8"
            fontSize={12}
            fontWeight="400"
            width="97%"
          />
        </View>
        <View>
          <DashboardTagComponent
            topics={people.tags.filter((tag) => tag.status == true)}
          />

          {tagStatus && (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-start" }}
                >
                  <EvilIcons name="tag" size={20} color="#84E5C2" />
                  <CustomTextField
                    label="Add tags"
                    color="#21C17C"
                    marginLeft={10}
                  />
                </View>

                <Button
                  title="Add new tag"
                  containerStyle={styles.btnMap}
                  onPress={() => navigation.navigate("AddTag")}
                  titleSize={12}
                  backgroundColor="#21C17C"
                  titleColor="white"
                />
              </View>
              <TagComponent
                topics={people.tags.filter((tag) => tag.status == false)}
                saveTags={saveTags}
              />
            </>
          )}
          <Button
            title=""
            containerStyle={styles.btnTag}
            onPress={() => setTagStatus(!tagStatus)}
            titleSize={18}
            backgroundColor="#21C17C"
            titleColor="white"
          />
        </View>
      </View>
      <ListActions
        person={people.id}
        team=""
        actionStatus=""
        actions={actions}
        navigation={navigation}
        topics={[
          {
            title: "Need follow up",
          },
          {
            title: "Single father",
          },
          {
            title: "2019",
          },
          {
            title: "2020",
          },
          {
            title: "2021",
          },
          {
            title: "2022",
          },
        ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    marginTop: 20,
  },
  profileContainer: {
    marginVertical: 42,
    backgroundColor: "white",
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    maxWidth: "80%",
    marginVertical: 8,
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  image: {
    width: 94,
    height: 94,
    borderRadius: 72,
    position: "absolute",
    top: -24,
  },
  btnTag: {
    height: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginVertical: 40,
    borderRadius: 12,
    padding: 6,
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "600",
  },

  btnMap: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    width: 152,
    borderRadius: 6,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
  },
});
