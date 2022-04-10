import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


//components
import SearchBar from './components/searchbar/SearchBar'


const App:React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <div className="App">
      <SearchBar  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     
    </div>
  );
}

export default App;
