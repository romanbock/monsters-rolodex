import { useState, useEffect, ChangeEvent } from 'react'

import CardList from './components/card-list/card-list.component.'
import SearchBox from './components/search-box/search-box.component'

import { getData } from './utils/data.utils'
import './App.css'

export type Monster = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState('') //[value, setValue]
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState<Array<Monster>>([])
  const [filteredMonster, setFilteredMonster] = useState(monsters)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Array<Monster>>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setMonsters(users)
    }
    fetchUsers()
  }, []) //no depency, because should it never changes!

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    )
    setFilteredMonster(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }
  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLowerCase()
    setTitle(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="monster-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
      />
      <br />
      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="Set Title"
      />
      <CardList monsters={filteredMonster} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users }
//         })
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase()
//     this.setState(() => {
//       return { searchField: searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonster = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     )

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monster"
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     )
//   }
// }

export default App
