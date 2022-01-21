import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom';

function App() {

  const dialogsData = [
    { id: "1", name: "Alex" },
    { id: "2", name: "Miha" },
    { id: "3", name: "Toha" },
    { id: "4", name: "Kroshka" }
  ]

  const messagesData = [
    { message: "Hi" },
    { message: "Hello" },
    { message: "Go sex" },
    { message: "WTF?!??!?" }
  ]


  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/dialogs" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
