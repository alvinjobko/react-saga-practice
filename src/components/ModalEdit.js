import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit(props) {
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
        <Button primary onClick={() => props.setIsOpen(false)}>
          OK
        </Button>
        <Button onClick={() => props.setIsOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
