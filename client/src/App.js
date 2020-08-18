import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResult from "./components/search"
import TableDisplay from './components/table';
import API from "./utils/api";

function App() {
  const [randomPeople, setRandomPeople]=useState([])

  const [originalPeople, setOriginalPeople]=useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
     API.getRandomPeople().then(response => {
       setRandomPeople(response.data.results)
       setOriginalPeople(response.data.results)
     })
  }, [])
  
  const handleInputChange = (event) => {
      const { value} = event.target
      setSearch(value)
      console.log(value)

      const newRandomPeople = originalPeople.filter(person => {
        return person.name.first.toLowerCase().includes(value.toLowerCase()) || person.name.last.toLowerCase().includes(value.toLowerCase())
      })
      setRandomPeople(newRandomPeople)


  }
  const handleClick = columnName => {
    const newRandomPeople = randomPeople.sort((a,b) => {
      //console.log("first:",a.n?ame.first)
      return a.name.first.localeCompare(b.name.first)
    })  
   // alert("success")
    setRandomPeople(newRandomPeople)
    //console.log(randomPeople)
  }
  return (
    <> 
    {console.log(randomPeople)}
    <SearchResult search = {search}  handleInputChange = {handleInputChange}  />
    <TableDisplay handleClick={handleClick}  randomPeople={randomPeople} />
    </>
  )
  
        
};

export default App;
