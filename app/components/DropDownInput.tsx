import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
const DropDownInput = ({ placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "My Self", value: "myself" },
    { label: "My Team", value: "myteam" },
    { label: "My Org", value: "myorg" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{
        alignItems: "center",
        justifyContent: "center",

        paddingHorizontal: 12,
        marginVertical: 12,
        borderWidth: 1,
        padding: 20,
        borderColor: "#84E5C2",
        borderRadius: 16,
      }}
      placeholder={placeholder}
    />
  );
};

export default DropDownInput;
