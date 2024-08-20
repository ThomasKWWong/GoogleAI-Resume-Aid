import './App.css';

function App() {
  async function test(){
      // event.preventDefault();
      const response = await fetch("/api/ai", {
        method: 'POST',
      })
      const data = await response.json();
      console.log(data.message)
  }

  return (
    <div className="App">
      <button type = "submit" onClick={(e) => test()}>test</button>
    </div>
  );
}

export default App;
