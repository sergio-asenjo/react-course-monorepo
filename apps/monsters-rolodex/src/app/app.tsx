import React from 'react';
import './app.scss';

interface IState {
  monsters: IMonster[];
}

interface IMonster {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class App extends React.Component<{}, IState> {
  private originalMonsters: IMonster[] = [];

  constructor(props: {}) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  override render() {
    return (
      <div className="app">
        <input
          className="search-input"
          type="search"
          placeholder="Search monsters"
          onChange={this.handleChange}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
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
}

export default App;
