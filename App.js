import React, {useState} from 'react';
import axios from "axios";


const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=7f07124bab5f45208ce589bceb392ebc");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>come</button>
      </div>
      {data && <textarea row={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
