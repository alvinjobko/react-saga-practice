import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";

function NewEntryForm(props) {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      ></EntryForm>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        isExpense={isExpense}
        value={value}
      ></ButtonSaveOrCancel>
    </Form>
  );
}

export default NewEntryForm;
