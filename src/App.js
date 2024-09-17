import Header from './components/Header';
import Search from './components/Search';
import Input from './components/Input';
import Notes from './components/Notes';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import React, { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
    <Provider store={store}>
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Input />
      <Notes searchTerm={searchTerm} />
    </Provider>
    </>
  );
}

export default App;
