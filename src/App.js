
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json').then(
      response => response.json()
    ).then(json => setData(json))
  }, [])

  console.log(data && data.data && data.data.children)
  return (
    <div className="App">

      {data && data.data.children && data.data.children.map((item, index) => <div key={index} className="mainClass">
        <div class="card body1">
          <div class="card-header">
            {item.data.title}
          </div>
          <div class="card-body">
            <p class="card-text">{item.data.selftext_html}</p>
            <h5 class="card-title">{item.data.score}</h5>
            <a href={item.data.url} class="btn btn-primary">Go to the given link</a>
          </div>
        </div>
        
      </div>)}

    </div>
  );
}

export default App;
