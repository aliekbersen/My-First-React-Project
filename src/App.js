img
import './App.css';

function App() {
let name = 'mario'

const handleClick = () => {
  name = 'luigi'
  console.log(name)
}

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
