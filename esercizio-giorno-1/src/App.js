import ButtonComponent from './components/buttonComp';
import ImgComponent from './components/imgComp';
import './App.css';

const btnText = 'Button';
let imgSrc = 'https://picsum.photos/200/300';
let imgAlt = 'image';

function App() {
  return (
    <div className="App">
      <ImgComponent src={imgSrc} alt={imgAlt} />
      <ButtonComponent btnText={btnText} />
    </div>
  );
}

export default App;
