import React, { Fragment } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm(props) {
  return (
    <Fragment>
      <Form.Group widths={3}>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shinny thing"
          value={props.description}
          onChange={(event) => props.setDescription(event.target.value)}
        ></Form.Input>
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={props.value}
          onChange={(event) => props.setValue(event.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is Expense"
          checked={props.isExpense}
          onChange={(event) => props.setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm;
