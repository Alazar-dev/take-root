import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e93b81",
  },
  header: {
    height: "30%",
    backgroundColor: "#e93b81e",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    // bottom:10
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  logoImage: {
    height: 175,
    width: 203,
  },
  rightIcon: {
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  formGroup: {
    marginHorizontal: 8,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputStyle: {
    fontSize: 14,
    borderWidth: 1,
    padding: 14,
    borderColor: "#84E5C2",
    borderRadius: 14,
  },
  loginButton: {
    marginHorizontal: 15,
    width: "90%",
    height: 70,
    borderRadius: 16,
    backgroundColor: "#21c17c",
    marginBottom: 30,
  },
});

export default styles;
