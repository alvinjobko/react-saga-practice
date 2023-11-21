import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { CloseEditModal } from "../actions/modals.action";

function ModalEdit(props) {
  const dispatch = useDispatch();
  return (
    <Modal open={props.isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <EntryForm
            description={props.description}
            setDescription={props.setDescription}
            value={props.value}
            setValue={props.setValue}
            isExpense={props.isExpense}
            setIsExpense={props.setIsExpense}
          ></EntryForm>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={() => dispatch(CloseEditModal())}>
          OK
        </Button>
        <Button onClick={() => dispatch(CloseEditModal())}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
