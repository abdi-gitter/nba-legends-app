import Header from './components/Header';
import './App.css'
import Search from './components/Search'
import CardContainer from './components/CardContainer'
import { Container } from 'react-bootstrap';
import {useState} from 'react'


//we have to use lifting the state up to the parent component
//we can also use redux and context to solve this problem

function App() {
const [search, setSearch] = useState('');

   return (
    <Container className='text-center mt-4'>
      <Header/>
      <Search search={search} setSearch={setSearch} />
      <CardContainer search={search} />
    </Container>
  )
}

export default App
