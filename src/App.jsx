import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import  { useState,useEffect } from "react";
import axios from "axios";

const App = () => {
  const [transactions,setTransaction] = useState([])

useEffect (() =>{
  const fetchData = async () =>{
  const response= await axios.get("https://backend-scwv.onrender.com/expenses")
  setTransactions(response.data);
  };
  fetchData();
},[])


  const addTransaction=(title,amount)=>{
    console.log('Add:',title,amount)
    const newTxn={
      id:transactions.length+1,
      title:title,
      amount:+amount
    }
    setTransaction([...transactions,newTxn]);
  }



  return (
    <>
      <h1>Expense Tracker</h1>
      <TransactionList transactions={transactions} />
      <TransactionForm addTransaction={addTransaction}/>
    </>
  );
};
export default App;
