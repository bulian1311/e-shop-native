import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import { Props } from "./stack-layout.props";

export const StackLayout = ({ children, ...props }: Props) => {
  const navigation = useNavigation();

  return (
    <View {...props}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Назад</Text>
      </TouchableOpacity>

      <View>{children}</View>
    </View>
  );
};
