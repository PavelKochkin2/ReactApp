import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs" element={<Dialogs data={props.globalState.dialogComponentData} />} />
          <Route 
              path="/profile" 
              element={<Profile data={props.globalState.profileComponentData} addPost={props.addPost}/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
