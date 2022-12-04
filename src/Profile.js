import React, {useContext, useEffect} from 'react';
import { NameContext, UserContext } from "./useContext.js";
import { RenderMain,RenderAdd } from "./index.js";
import {Link} from 'react-router-dom';

const Profile = () => {
  const {todos, photos} = useContext(NameContext);
  const {setCurrentUser, setCurrentPhoto} = useContext(UserContext);
  useEffect(() => {
    document.title = 'Netflix';
  }, [])
  return (
    <div className='principal-login'>
      <div className='principal-anim'>
      <div className='choose'>Alege un profil</div>
      <div className='flex-login'>
        {todos.map((todo, index) => {
          return (
            <div onClick={() => {
              setCurrentUser(todo);
              setCurrentPhoto(photos[index]);
              RenderMain();
            }
            } className='login-profile' key={index}><img alt={'Imagine'} src={photos[index]} className='profile-img'  />
              <div className='login-border' />
              <div className='login-name'>{todo}</div>
            </div>
          )
        })}
        {todos.push() < 5 &&
            <button type='button' onClick={() => {RenderAdd()}}className='login-profile-add'>
              <div className='add-circle'><div className='add-plus'></div></div>
              <div className='login-name'>Adauga un profil</div>
            </button>
        }
      </div>
      <button className='gestionare'><Link to='/manage'>Gestionarea profilurilor</Link></button>
      </div>
    </div>
  )  
}

export default Profile