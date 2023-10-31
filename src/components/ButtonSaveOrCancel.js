import React from "react";
import { Button } from "semantic-ui-react";
function ButtonSaveOrCancel(props) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button
        primary
        onClick={() =>
          props.addEntry(props.description, props.value, props.isExpense)
        }
      >
        Confirm
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
