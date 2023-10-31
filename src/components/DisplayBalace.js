import React from "react";
import { Statistic } from "semantic-ui-react";
function DisplayBalace(props) {
  return (
    <Statistic size={props.psize} color={props.color}>
      <Statistic.Label style={props.pstyle}>{props.label}</Statistic.Label>
      <Statistic.Value>{props.value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalace;
