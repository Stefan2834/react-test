import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react'; 
import { NameContext, UserContext } from "./useContext";

const App = (props) => {
  const [todos, setTodos] = useState(['Site','Creat de','Stefan']);
  const [photos, setPhotos] = useState(['avatar/avatar1.jpg','avatar/avatar2.png','avatar/avatar3.jpg'])
  const [currentUser, setCurrentUser] = useState('');
  const [currentPhoto, setCurrentPhoto] = useState('');
  return (
  <React.StrictMode>
    <UserContext.Provider value={{currentUser, setCurrentUser, currentPhoto, setCurrentPhoto}}>
    <NameContext.Provider value={{todos, setTodos, photos, setPhotos}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<props.render />} />
          <Route path='/manage' element={<props.manage />} />
        </Routes>
      </BrowserRouter>
    </NameContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
)}

export default App