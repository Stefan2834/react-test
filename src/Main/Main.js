import React, {useContext, useEffect, useState, useRef} from 'react'; 
import { UserContext } from "../useContext";
import NavBar from './NavBar.js';
import Footer from './Footer.js';


const Main = () => {
  const {currentUser} = useContext(UserContext);
  const [film] = useState([
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14'
  ])
  useEffect(() => {
    document.title = 'Pagina principala - Netflix';
  }, [])
  var film1 = 0;
  var film2 = 0;
  var film3 = 0;
  const filmFlex1 = useRef();
  const filmFlex2 = useRef();
  const filmFlex3 = useRef();
  const rightFilm1 = (nr) => {
    film1 += 1;
    if(film1 <= 1) {
      nr.current.style.left = - film1 * 90.5 + 'vw' ;
    } else if(film1 === 2) {
      nr.current.style.left = '-121vw';
    } else {
      film1 -= 1;
    }
  }
  const leftFilm1 = (nr,) => {
    film1 -= 1;
    if (film1 >= 0) {
      nr.current.style.left = - film1 * 90.5 + 'vw';
    } else {
      film1 += 1;
    }
  }
  const rightFilm2 = (nr) => {
    film2 += 1;
    if(film2 <= 1) {
      nr.current.style.left = - film2 * 90.5 + 'vw' ;
    } else if(film2 === 2) {
      nr.current.style.left = '-121vw';
    } else {
      film2 -= 1;
    }

  }
  const leftFilm2 = (nr) => {
    film2 -= 1;
    if (film2 >= 0) {
      nr.current.style.left = - film2 * 90.5 + 'vw';
    } else {
      film2 += 1;
    }
  }
  const rightFilm3 = (nr) => {
    film3 += 1;
    if(film3 <= 1) {
      nr.current.style.left = - film3 * 90.5 + 'vw' ;
    } else if(film3 === 2) {
      nr.current.style.left = '-121vw';
    } else {
      film3 -= 1;
    }

  }
  const leftFilm3 = (nr) => {
    film3 -= 1;
    if (film3 >= 0) {
      nr.current.style.left = - film3 * 90.5 + 'vw';
    } else {
      film3 += 1;
    }
  } 
  return (
    <div className='main-bg'>
      <NavBar />
      <div className='main-film-principal'>
        <div className='main-gradient' />
        <div className='main-film-flex'>
          <div className='main-logo' />
          <div className='main-text'>In 1919, in orasul Birmingham din Anglia, Tommy Shelby, seful feroce al unei temute bande de gangsteri, e pus pe capatuiala cu orice pret.</div>
          <div className='main-btn-flex'>
            <div className='main-redare'><i className="fa-solid fa-play" />Redare</div>
            <div className='main-info'><i className="fa-solid fa-circle-info" />Mai multe informatii</div>
          </div>
        </div>
      </div>
      <>
      <div className='film-right' onClick={() => {rightFilm1 (filmFlex1)}}><i className="fa-solid fa-chevron-down" style={{rotate:"-90deg"}}  /></div>
      <div className='film-left' onClick={() => {leftFilm1 (filmFlex1)}}><i className="fa-solid fa-chevron-down" style={{rotate:"90deg"}}  /></div>
      <div className='film-text'>Populare acum</div>
      <div className='film-flex' ref={filmFlex1}>
      {film.map((filme, index) => {
        return (
          <div className='film' key={index} data-name={filme}>
          <div className='film-detali'>
            <div className='film-detali-flex'>
              <div className='film-detali-btn-flex'>
                <div className='film-detali-btn-play'><i className="fa-solid fa-play" /></div>
                <div className='film-detali-btn-list'><i className="fa-solid fa-plus" /></div>
                <div className='film-detali-btn-like'><i className="fa-regular fa-thumbs-up" /></div>
                <div className='film-detali-btn-info'><i className="fa-solid fa-chevron-down" /></div>
              </div>
              <div className='film-detali-text'>
                <span className='film-concordanta'>Nou</span>
                <span className='film-varsta'>16+</span>
                <span className='film-sez'>6 sezoane</span>
                <div className='film-hd'>HD</div>
              </div>
              <div className='film-detali-tip'>Actiune <span className='film-pct'>•</span> Dur <span className='film-pct'>•</span> Drama</div>
            </div>
          </div>
        </div>
        )})}
      </div>
      </>



      <>
      <div className='film-right' onClick={() => {rightFilm2 (filmFlex2)}}><i className="fa-solid fa-chevron-down"style={{rotate:"-90deg"}} /></div>
      <div className='film-left' onClick={() => {leftFilm2 (filmFlex2)}}><i className="fa-solid fa-chevron-down"style={{rotate:"90deg"}} /></div>
      <div className='film-text'>Doar pe Netflix</div>
      <div className='film-flex' ref={filmFlex2}>
      {film.map((filme, index) => {
        return (
          <div className='film' key={index} data-name={filme}>
          <div className='film-detali'>
            <div className='film-detali-flex'>
              <div className='film-detali-btn-flex'>
                <div className='film-detali-btn-play'><i className="fa-solid fa-play" /></div>
                <div className='film-detali-btn-list'><i className="fa-solid fa-plus" /></div>
                <div className='film-detali-btn-like'><i className="fa-regular fa-thumbs-up" /></div>
                <div className='film-detali-btn-info'><i className="fa-solid fa-chevron-down" /></div>
              </div>
              <div className='film-detali-text'>
                <span className='film-concordanta'>Nou</span>
                <span className='film-varsta'>16+</span>
                <span className='film-sez'>6 sezoane</span>
                <div className='film-hd'>HD</div>
              </div>
              <div className='film-detali-tip'>Actiune <span className='film-pct'>•</span> Dur <span className='film-pct'>•</span> Drama</div>
            </div>
          </div>
        </div>
        )})}
      </div>
      </>



      
      <>
      <div className='film-right' onClick={() => {rightFilm3 (filmFlex3,film3)}}><i className="fa-solid fa-chevron-down"style={{rotate:"-90deg"}}  /></div>
      <div className='film-left' onClick={() => {leftFilm3 (filmFlex3,film3)}}><i className="fa-solid fa-chevron-down"style={{rotate:"90deg"}} /></div>
      <div className='film-text'>Sugestii pentru {currentUser}</div>
      <div className='film-flex' ref={filmFlex3}>
      {film.map((filme, index) => {
        return (
          <div className='film' key={index} data-name={filme}>
          <div className='film-detali'>
            <div className='film-detali-flex'>
              <div className='film-detali-btn-flex'>
                <div className='film-detali-btn-play'><i className="fa-solid fa-play" /></div>
                <div className='film-detali-btn-list'><i className="fa-solid fa-plus" /></div>
                <div className='film-detali-btn-like'><i className="fa-regular fa-thumbs-up" /></div>
                <div className='film-detali-btn-info'><i className="fa-solid fa-chevron-down" /></div>
              </div>
              <div className='film-detali-text'>
                <span className='film-concordanta'>Nou</span>
                <span className='film-varsta'>16+</span>
                <span className='film-sez'>6 sezoane</span>
                <div className='film-hd'>HD</div>
              </div>
              <div className='film-detali-tip'>Actiune <span className='film-pct'>•</span> Dur <span className='film-pct'>•</span> Drama</div>
            </div>
          </div>
        </div>
        )})}
      </div>
      </>
      <Footer />
    </div>
  )
}


export default Main