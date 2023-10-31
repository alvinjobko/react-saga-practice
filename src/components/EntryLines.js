import React from "react";
import EntryLine from "./EntryLine";
import { Container } from "semantic-ui-react";

function EntryLines(props) {
  return (
    <Container>
      {props.entries.map((entry) => {
        return (
          <EntryLine
            key={entry.id}
            entry={entry}
            deleteEntry={props.deleteEntry}
            modifyEntry={props.modifyEntry}
          ></EntryLine>
        );
      })}
    </Container>
  );
}

export default EntryLines;
