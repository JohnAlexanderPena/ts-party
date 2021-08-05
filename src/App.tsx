import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/PartyApp/List';
import AddToList from './components/PartyApp/AddToList';
import Main from './components/BankApp/Main';



export interface IState{
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}



function App() {

  const [view, setView] = useState("Party List")
  const changeViews = () => {
    view === "Party List" ? setView("Bank") : setView("Party List")
  }


  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zKnLzGwKp4DXzlvrKyP8lQHaD4%26pid%3DApi&f=1",
      age: 36,
      note: "Like to eat tacos"
    },
    {
      name: "Jame Harden",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vY9cfbuC53VHqKFbl2cQhgHaEy%26pid%3DApi&f=1",
      age: 33,
      note: "Like to eat go to stay in shape"
    }])
  

  return (
    <div className="App">
      <button onClick={changeViews} className="btn-change">Change App</button>
     {view === "Party List" ?  <><h1>
        People Invited to party.
      </h1>
        <List people={people} />
        <AddToList people={people} setPeople={setPeople} /> </>: <Main />} 
    </div>
  );
}

export default App;