
import './App.css';
import Title from './components/layout/Title';
import People from './components/lists/People';
import AddPerson from './components/forms/AddPerson';

const App = () => {
  return (
    <div className="App">
      <Title />
      <AddPerson />
      <People />
    </div>
  );
}

export default App;
