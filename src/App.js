import React, { useState , useEffect} from 'react'
import {BrowserRouter, Route,  Routes} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { DataContext, themeContext } from './context/DataContext'
import UserDetails from './components/UserDetails';

export default function App() {
  const [list , setList] = useState([]);
  const [apiStatus, setApiStatus] = useState("initial");
  const [lightTheme, setLightTheme] = useState(true)
  
  useEffect(() => {
    const fetchList = async () => {
      setApiStatus("loading")
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if(res.ok){
        const data = await res.json();
        setList(data);
        setApiStatus("success")
      }else{
        setApiStatus("failure")
      }
    }
    fetchList();
  },[])
  
  const toggleLightTheme = () => {
    setLightTheme(!lightTheme);
  }

  return (
    <BrowserRouter>
    <DataContext.Provider value={{list, apiStatus}}>
      <themeContext.Provider value={{lightTheme, toggleLightTheme}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </themeContext.Provider>
    </DataContext.Provider>
    </BrowserRouter>
  )
}
