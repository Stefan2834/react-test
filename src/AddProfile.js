import React, {useContext, useState} from 'react'; 
import { NameContext } from "./useContext";
import { RenderDefault } from './index';

const AddProfile = () => {
  const [name, setName] = useState('');
  const {todos, setTodos, setPhotos} = useContext(NameContext);
  const addTodo = (e) => {
    if(todos.push() < 5) {
      setTodos((t) => [...t,name ])
      setPhotos((p) => [...p,'avatar/default.jpg'])
    }
    e.preventDefault();
    setName('');
    RenderDefault();
  } 
  return (
    <div className='add-profile'>
      <div className='add-flex'>
      <div className='add-anim'>
      <div className='add-title'>Adaugarea unui profil</div>
      <div className='add-subtitle'>Adauga un profil pentru alta persoana care vizioneaza pe Netflix.</div>
      <div className='add-line' />
      <div className='add-input-flex'>
        <div className='add-icon'></div>
        <div className='add-form'>
          <form onSubmit={addTodo}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}className='add-input' placeholder='Numele' />
            <input className='add-submit' type='submit' value='Continuare' />
          </form>
        </div>
        <div className='add-checkbox'>
          <input className='add-checkbox-input'type='checkbox' />
          <label className='add-label'>Copil</label>
        </div>
        <button type='button'className='add-anulare' onClick={RenderDefault}>Anulare</button>
      </div>
      <div className='add-line' />
      </div>
      </div>
    </div>
  )
}

export default AddProfile