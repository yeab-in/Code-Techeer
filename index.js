/* 챕터 04 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Welcome(props) 
{
  return <h1>안녕, {props.name}</h1>
}
  */

/* 챕터 05
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import CommentList from './chapter_05/CommentList';

  ReactDOM.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import NotificationList from './chapter_06/NotificationList';

  ReactDOM.render (
    <React.StrictMode>
      <NotificationList />
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();