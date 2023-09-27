import React, { ReactNode } from "react";
import Header from "./header";
import { Container } from "./styled.index";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
