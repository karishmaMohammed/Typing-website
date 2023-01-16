import TypingBox from "./Components/TypingBox.jsx";
import { GlobalStyles } from "./Styles/global.js";

var randomWords =  require('random-words');

function App() {

  const words = randomWords(100);

  return (
    <div className="canvas">

      <GlobalStyles/>
      <h1>Typing Test</h1>
      <TypingBox words={words}/>
      <h1>Footer</h1>
   </div>
  );
}

export default App;
