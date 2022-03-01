import styled from "styled-components/native";

export const StyledWrapper = styled.TouchableOpacity<{ color: string }>`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: ${({ color }) => color};
`;

export const StyledView = styled.View<{ active: boolean; color: string }>`
  width: 16px;
  height: 16px;
  background-color: ${({ active, color }) => (active ? "white" : color)};
  border-radius: 8px;
`;
