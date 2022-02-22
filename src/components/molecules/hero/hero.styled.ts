import styled from "styled-components/native";

export const StyledView = styled.View`
  height: 206px;
  border-radius: ${({ theme }) => theme.radius[1]};
  overflow: hidden;
`;

export const StyledText = styled.Text`
  color: #ffffff;
`;

export const StyledBg = styled.ImageBackground`
  flex: 1;
  padding-left: 24px;
  padding-top: 48px;
`;
