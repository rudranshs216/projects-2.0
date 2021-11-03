
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import ChatView from './ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';
import Login from './Login';
import Preview from './Preview';
import WebCamCapture from './WebCamCapture';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      }else{
        dispatch(logout())
      }
    })
    
  }, [])

  return (
    <div className="App">
    <Router>
    {!user ? (<Login/>) : 
    (<>
      <img className="app_logo" src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
   
   <div className="app_body">
   <div className="app_bodyBackground">
    <Switch>
    <Route exact path="/">
    <WebCamCapture/>
    </Route>
    <Route exact path="/chats">
    <Chats/>
    </Route>
    <Route exact path="/chats/view">
    <ChatView/>
    </Route>
    <Route exact path="/preview">
    <Preview/>
    </Route>

    </Switch>
    </div>
    </div>
    </>
    )}
    
    </Router>
      
      
    </div>
  );
}

export default App;
