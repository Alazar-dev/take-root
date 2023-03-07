import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../../layouts/Header";
import Button from "../../dButton";
import { Ionicons,FontAwesome } from "@expo/vector-icons";
const AddTag = ({ navigation }) => {
  const [tags, SetTags] = useState([
    { title: "need spiritual support", status: false, emoji: "+" },
    { title: "need medical help", status: false, emoji: "+" },
    { title: "Need accommodations", status: false, emoji: "+" },
    { title: "Need food", status: false, emoji: "+" },
  ]);
  const [searchText, setSearchText] = useState("");
  const [tagStatus, setTagStatus] = useState(false);

  const saveSearch = () => {
    SetTags([...tags, { title: searchText, status: true, emoji: "×" }]);
  };

  const updateTags = (title) => {
    const data = [];
    tags.map((val) => {
      if (val.title == title) {
        val.status = !val.status;}
        if (val.status == true) {
          setTagStatus(true);
        }
        data.push({ title: val.title, status: val.status, emoji: "×" });
      
    });

    SetTags(data);
  };
  useEffect(() => {
    updateTags;
  }, [tags]);
  return (
    <ScrollView>
      <Header label="Add new tags" />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="add tag"
            style={styles.inputs}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={saveSearch}
            
          />
<FontAwesome name="remove" size={20} color="red" style={{position:'absolute',right:50}} onPress={()=>setSearchText('')}/>
        </View>

        <View style={styles.card}>
          {tags.map((tag) => (
            <Button
              title={
                <Text>
                  <Ionicons
                    name="checkmark-circle-sharp"
                    size={13}
                    color={tag.status ? "#21C17C" : "#84E5C2"}
                  />
                  {tag.title}
                </Text>
              }
              containerStyle={styles.buttonContainer}
              onPress={() => updateTags(tag.title)}
              titleSize={12}
              backgroundColor="white"
              titleColor={tag.status ? "black" : "#21C17C"}
            />
          ))}
        </View>

        <Button
          title="Add tag to llist"
          containerStyle={styles.btnSave}
          onPress={() => navigation.goBack({newTags: tags})}
          titleSize={12}
          backgroundColor={tagStatus ? "#21C17C" : "white"}
          titleColor={tagStatus ? "white" : "#84E5C2"}
          disabled={!tagStatus}
        />
      </View>
    </ScrollView>
  );
};

export default AddTag;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#F6F6F6",
    margin: 1,
    alignItems: "center",
  },
  card: {
    width: "80%",
    margin: 8,
    padding: 8,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonContainer: {
    height: 28,
    justifyContent: "flex-start",
    alignItems: "flex-start",

    width: "100%",
    borderRadius: 6,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
  },
  btnSave: {
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    width: "64%",
    marginVertical: 20,

    borderRadius: 12,
    padding: 6,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: "600",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    height: 67,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
    marginTop:32,
    padding: 5,
    width:"80%",
    borderRadius:16
  },
  inputs: {
    fontFamily: "Poppins-Regular",
    height: 51,
    backgroundColor: "#F8F8F8",
    flex: 1,
    borderRadius: 12,
    marginHorizontal: 8,
    padding:8
  },
});
