import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';



interface IState{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zKnLzGwKp4DXzlvrKyP8lQHaD4%26pid%3DApi&f=1",
      age: 36,
      note: "Like to eat tacos"
    },
    {
      name: "Jame Harden",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vY9cfbuC53VHqKFbl2cQhgHaEy%26pid%3DApi&f=1",
      age: 33,
      note: "Like to eat go to stay in shape"
    }])
  

  return (
    <div className="App">
      <h1>
        People Invited to party.
        <List people={people} />
      </h1>
    </div>
  );
}

export default App;