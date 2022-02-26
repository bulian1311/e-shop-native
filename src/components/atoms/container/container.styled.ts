import { Platform } from "react-native";
import styled from "styled-components/native";

const os = Platform.OS;

export const StyledContainer = styled.SafeAreaView`
  ${os === "android" && "margin-top: 44px"}
  flex: 1;
  padding-left: ${(props) => props.theme.spacing.space[4]};
  padding-right: ${(props) => props.theme.spacing.space[4]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
