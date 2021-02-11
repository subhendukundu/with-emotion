import React from "react";
import styled from "@emotion/styled";

const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.colors.primary })
);

export default function Index() {
  return <H1>You're running React on the Edge!</H1>;
}
