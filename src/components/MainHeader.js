import React from "react";
import { Header } from "semantic-ui-react";
function MainHeader(props) {
  return <Header as={props.hstyle}>{props.title}</Header>;
}

export default MainHeader;
