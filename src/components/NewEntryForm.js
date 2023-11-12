import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../actions/entries.actions";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewEntryForm(props) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();
  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

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
