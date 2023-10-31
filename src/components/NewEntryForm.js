import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
function NewEntryForm(props) {
  return (
    <Form unstackable>
      <EntryForm
        description={props.description}
        setDescription={props.setDescription}
        value={props.value}
        setValue={props.setValue}
        isExpense={props.isExpense}
        setIsExpense={props.setIsExpense}
      ></EntryForm>
      <ButtonSaveOrCancel
        addEntry={props.addEntry}
        description={props.description}
        isExpense={props.isExpense}
        value={props.value}
      ></ButtonSaveOrCancel>
    </Form>
  );
}

export default NewEntryForm;
