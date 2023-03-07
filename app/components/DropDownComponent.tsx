import React from 'react';
import { View, TextStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface dropDownProps extends TextStyle {
  data: Array<object>;
  placeholder: string;
}

export default function DropdownComponent(props: dropDownProps) {
  return (
    <View
      style={{
        backgroundColor: props.bgColor,
        paddingHorizontal: props.paddingHorizontal || 5,
        paddingVertical: props.paddingVertical || 5,
        width: props.containerWidth || 130,
        borderRadius: 10,
        marginHorizontal: props.marginHorizontal,
      }}>
      <Dropdown
        statusBarIsTranslucent={true}
        style={{
          position: 'relative',
          borderRadius: props.borderRadius,
          borderWidth: props.borderWidth,
          marginTop: props.mt,
          borderColor: props.borderColor,
          width: props.w,
          paddingTop: props.pt,
          paddingBottom: props.pb,
          paddingLeft: props.pl,
          marginBottom: props.mb,
        }}
        iconStyle={{ marginRight: props.iconMarginRight }}
        itemTextStyle={{ color: '#737F8F', fontSize: props.itemTextFontSize || 13 }}
        iconColor={props.iconColor}
        placeholderStyle={{
          color: props.placeholderColor,
          fontSize: props.itemTextFontSize || 13,
          textAlign: props.placeholderTextAlign,
        }}
        selectedTextStyle={{
          fontSize: props.itemTextFontSize || 13,
          color: props.selectedTextColor,
          textAlign: props.placeholderTextAlign,
        }}
        data={props.data}
        labelField="label"
        valueField="value"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(item) => {
          Object.keys(item).length === 6 ? props.setValue(item) : props.setValue(item.value);
        }}
      />
    </View>
  );
}
