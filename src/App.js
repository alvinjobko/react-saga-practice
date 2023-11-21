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
  const [incoming, setIncomging] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector((state) => state.entries);
  const isOpen = useSelector((state) => state.modals.isOpen);
  useEffect(() => {
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
      <EntryLines entries={entries}></EntryLines>

      <MainHeader title="Add new transaction" hstyle="h3"></MainHeader>

      <NewEntryForm></NewEntryForm>
      <ModalEdit isOpen={isOpen} />
    </Container>
  );
}

export default App;
