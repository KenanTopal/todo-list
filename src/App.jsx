import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEditing) {
      const id = Math.random();
      setList([...list, { title: value, id: id }])
      setValue("")
    } else{
      setList(list.map(item => {
        if(item.id == editId){
          return {...item, title: value}
        }
      }))
      setIsEditing(false)
      setEditId()
      setValue("")
    }



    
  }

  const handleDelete = id => {
    setList(list.filter(item => item.id !== id))
  }

  const handleEdit = (id) => {
    const specificItem = list.find(item => item.id == id)
    setIsEditing(true)
    setEditId(specificItem.id)
    setValue(specificItem.title)

  }

  return (
    <div className="App">
      <section className='section-list'>
        <form className='form-control' onSubmit={handleSubmit}>
          <h2>Grocery Bud</h2>
          <div className='input-field'>
            <input type="text" placeholder='e.g. eggs' value={value} onChange={(e) => setValue(e.target.value)} />
            <button className='submit-btn'>{isEditing ? "Edit" : "Submit"}</button>
          </div>
        </form>
        <div>
          {list.length > 0 &&
            <div>
              <List items={list} handleDelete={handleDelete} handleEdit={handleEdit} />
              <button onClick={() => setList([])}>Clear All</button>
            </div>
          }
        </div>
      </section>
    </div>
  );
}

export default App;
