import { useEffect, useRef, React } from 'react';
import './Clock.css';

const Clock = () => {
  const secondHandle = useRef(null);
  const minuteHandle = useRef(null);
  const hourHandle = useRef(null);

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let ss = date.getSeconds();
      let mm = date.getMinutes();
      let hh = date.getHours();
      console.log(ss, mm, hh);
      secondHandle.current.style.transform = `rotateZ(${ss * 6}deg)`;
      minuteHandle.current.style.transform = `rotateZ(${mm * 6}deg)`;
      hourHandle.current.style.transform = `rotateZ(${hh * 30}deg)`;
    }, 1000);
  }, []);
  return (
    <div>
      {' '}
      <div id='app'>
        <div className='clock-container'>
          <div className='clock'>
            <div ref={hourHandle} className='hor' id='hor'>
              <div className='hr'></div>
            </div>
            <div ref={minuteHandle} className='min' id='min'>
              <div className='mn'></div>
            </div>
            <div ref={secondHandle} className='sec' id='sec'>
              <div className='sc'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
