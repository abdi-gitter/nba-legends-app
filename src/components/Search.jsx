import { Form } from 'react-bootstrap';
const Search = ({Search, setSearch}) => {
  return (
    <div>
      <Form.Control 
      placeholder='Search player ...' 
      aria-label='Search'
      type='search'
      className='w-50 m-auto'
      value={Search}
      onChange={(e) => setSearch(e.target.value)}
    ></Form.Control>
    </div>
  )
}

export default Search
