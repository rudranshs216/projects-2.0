import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen)
  return (
   <Router>
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar/>
        <Switch>
          <Route exact path ="/mail">
          <Mail />

          </Route>
          <Route exact path ="/" >
            <EmailList/>
          </Route>
        </Switch>
        {sendMessageIsOpen && <SendMail/>}
      </div>

      
    </div>
    </Router>
  );
}

export default App;
