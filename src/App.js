import { Container, Header } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalace from "./components/DisplayBalace";
import DisplayBalacnces from "./components/DisplayBalacnces";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [entries, setEntries] = useState(initialEntries);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incoming, setIncomging] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        totalExpense += Number(entry.value);
      } else {
        totalIncome += Number(entry.value);
      }
      setIncomging(totalIncome);
      setExpense(totalExpense);
      let total = totalIncome - totalExpense;
      setTotal(total);
      return null;
    });
  }, [entries]);

  const payload_add = {
    id: 5,
    description: "hello from redux",
    value: 100,
    isExpense: false,
  };

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
    console.log(entries);
    console.log(result);
  }
  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value: value,
      isExpense,
    });
    console.log("result", result);
    setEntries(result);
    resetEntry();
  }
  function modifyEntry(id) {
    console.log("edit entry with id", id);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      console.log(
        "edit entry with id",
        entry.id,
        entry.description,
        entry.value,
        entry.isExpense
      );
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }
  return (
    <Container>
      <MainHeader title="Budget" hstyle="h1" />
      <DisplayBalace
        psize="small"
        label="Your Balance:"
        value={"$" + total}
      ></DisplayBalace>

      <DisplayBalacnces
        incoming={"$" + incoming}
        expense={"$" + expense}
      ></DisplayBalacnces>

      <MainHeader title="History" hstyle="h3"></MainHeader>
      <Header as="h3">History</Header>
      <EntryLines
        entries={entries}
        modifyEntry={modifyEntry}
        deleteEntry={deleteEntry}
      ></EntryLines>

      <MainHeader title="Add new transaction" hstyle="h3"></MainHeader>

      <NewEntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        addEntry={addEntry}
      ></NewEntryForm>
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 200,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 200,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 200,
    isExpense: true,
  },
];
