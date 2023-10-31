import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalace from "./DisplayBalace";

function DisplayBalacnces(props) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalace
              psize="tiny"
              color="green"
              pstyle={{ textAlign: "Center" }}
              label="Incoming:"
              value={props.incoming}
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalace
              psize="tiny"
              color="red"
              pstyle={{ textAlign: "Center" }}
              label="Expense:"
              value={props.expense}
            ></DisplayBalace>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalacnces;
