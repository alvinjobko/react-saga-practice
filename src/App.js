import { Container, Header } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalace from "./components/DisplayBalace";
import DisplayBalacnces from "./components/DisplayBalacnces";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

function App() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incoming, setIncomging] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //setEntries(newEntries);
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
      console.log(
        "total: ",
        total,
        " totalIncome: ",
        totalIncome,
        " totalExpense: ",
        totalExpense
      );
      return null;
    });
    if (entries.length === 0) {
      setTotal(0);
      setIncomging(0);
      setExpense(0);
    }
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

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value: value,
      isExpense,
    });
    console.log("result", result);
    //setEntries(result);
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
      <EntryLines entries={entries} modifyEntry={modifyEntry}></EntryLines>

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
