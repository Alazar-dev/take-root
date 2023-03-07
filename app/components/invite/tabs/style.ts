import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    height: height / 2.5,
    marginVertical: 16,
    padding: 16,
    borderTopColor: "#EAEDEC",
    borderBottomColor: "#EAEDEC",
    borderBottomWidth: 0.8,
    borderTopWidth: 0.8,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#050D22",
    alignSelf: "center",
    marginBottom: 4,
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  formGroup: {
    marginHorizontal: 8,
    width: width - 50,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#21C17C",
  },
  inputStyle: {
    fontSize: 14,
    borderWidth: 1,
    padding: 14,
    borderColor: "#84E5C2",
    borderRadius: 14,
  },
  tabs: {
    height: 52,
    width: width - 70,
    backgroundColor: "#FFF",
    alignSelf: "center",
    marginTop: 8,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 4,
    borderWidth: 1,
    borderColor: "#84E5C2",
  },
  tabButton: {
    width: "45%",
    height: 36,
  },
  tag: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 15,
  },
  row: {
    width: "95%",
    flexDirection: "row",
    marginVertical: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    padding: 8,
    backgroundColor: "#D7F8EA",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    marginLeft: 15,
    fontWeight: "600",
    color: "#222",
    fontSize: 15,
  },
  footer: {
    position: "absolute",
    bottom: 1,
    width: "100%",
    height: 50,
  },
  confirmButton: {
    marginHorizontal: 15,
    width: "90%",
    height: 40,
    borderRadius: 16,
    backgroundColor: "#21c17c",
    marginBottom: 30,
  },
});

export default styles;
