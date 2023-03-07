import React from "react";
import { View } from "react-native";
import DatePicker from "react-native-modern-datepicker";

export default function CustomCalendarPicker({ saveDate }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DatePicker
        onSelectedChange={(date) => saveDate(date)}
        mode="calendar"
        minimumDate="1900-02-17"
        maximumDate="2050-07-25"
        options={{
          textDefaultColor: "#050D22",
          selectedTextColor: " #1BA573",
          mainColor: "#BDF3DC",
        }}
      />
    </View>
  );
}
