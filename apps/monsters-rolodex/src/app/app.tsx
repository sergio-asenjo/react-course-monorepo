import Card from '@components/card/card.component';
import SearchBox from '@components/search-box/search-box.component';
import { IMonster } from '@interfaces/IMonster';
import { ChangeEvent, useEffect, useState } from 'react';
import './app.scss';

interface IState {
  monsters: IMonster[];
}

const App = () => {
  const [monsters, setMonsters] = useState<IMonster[]>([]);
  const [originalMonsters, setOriginalMonsters] = useState<IMonster[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredMonsters = originalMonsters.filter((monster) =>
      monster.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMonsters(filteredMonsters);
  };
  
  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      setMonsters(users);
      setOriginalMonsters(users);
    };
    fetchMonsters();
  }, []);
  
  return (
    <div className="app">
      <h1 className="title">Monsters Rolodex</h1>
      <SearchBox placeholder="Search monsters" onChangeHandler={handleChange} />
      <div className="monsters__container">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id}/>;
        })}
      </div>
    </div>
  );
};

/* export class App extends React.Component<{}, IState> {
  private originalMonsters: IMonster[] = [];

  constructor(props: {}) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  override render() {
    const { monsters } = this.state;
    const { handleChange } = this;

    return (
      <div className="app">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" onChangeHandler={handleChange} />
        <div className="monsters__container">
          {monsters.map((monster) => {
            return <Card monster={monster} key={monster.id}/>;
          })}
        </div>
      </div>
    );
  }

  override async componentDidMount(): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState(() => {
      return { monsters: users };
    });
    this.originalMonsters = users;
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredMonsters = this.originalMonsters.filter((monster) =>
      monster.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState(() => {
      return { monsters: filteredMonsters };
    });
  }
} */

export default App;
