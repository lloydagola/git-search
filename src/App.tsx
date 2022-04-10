import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface Props{
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}


const SearchBar : React.FC<Props> = ({searchTerm = '', setSearchTerm}) => {
  const placeholder:string = 'Search Github Users'
  
  return <input 
              type='search' 
              placeholder={placeholder} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => console.log(`search for ${searchTerm}?`)}
          />
}

const App:React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  return (
    <div className="App">
      <SearchBar  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
     
    </div>
  );
}

export default App;
