import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 46px;
  position: sticky;
  top: 0px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(min-content, 50px) auto 1fr auto;
  gap: 0px 0.25rem;
  align-items: center;
  padding: 0px 1rem;
  border-bottom: 1px solid blue;
  background-color: blue;
  /* background-color: ${(props) => props.theme.colors.background}; */
  z-index: 100;
  border: 1px solid blue;
  /* border-bottom: 1px solid ${(props) => props.theme.colors.focus}; */
`;
