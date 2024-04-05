import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './apps/App21_router';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './mui/HelloWorld';
import BasicButton from './mui/Buttons';
import Buttons from './mui/Buttons';
import TextInputs from './mui/TextInputs';
import Badges from './mui/Badges';
import Lists from './mui/Lists';
import NestedList from './mui/NestedList';
import BasicTable from './mui/BasicTable';
import DataTable from './mui/DataTable';
import SimpleAlert from './mui/SimpleAlert';
import BottonAppBar from './mui/ButtonAppBar';
import BasicCard from './mui/BasicCard';
import TemporaryDrawer from './mui/TemporaryDrawer';
import BasicGrid from './mui/BasicGrid';
import BasicModal from './mui/BasicModal';
import Make from './mui/Make';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{marginTop: '40px', marginLeft: '20px', marginRight: '20px', backgroundColor: 'cccccc'}}>
      <Make />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();