import React from "react";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addEntryRedux, removeEntryRedux } from "../actions/entries.actions";

function EntryLine(props) {
  const dispatch = useDispatch();
  return (
    <Container>
      <Segment color={props.entry.isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {props.entry.description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {"$" + props.entry.value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => props.modifyEntry(props.entry.id)}
              ></Icon>
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(props.entry.id))}
              ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default EntryLine;
