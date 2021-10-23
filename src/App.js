import './App.css';
import localImage from '../src/images/IVF-ET.png';

function App () {
  return (
    <div className="App">

      <img src={ localImage } alt="" />
      <img src="https://chennaifertilitycenter.com/assets/images/IVF-ET.png" alt="" />
      <p className="bg-yellow-200 text-5xl p-5 hover:bg-blue-400 hover:text-red-700">This is a tailwind styled paragraph</p>
      <p className="text-primary">This is my custom styled tailwind class</p>
      <p className="text-custom">This is my custom styled tailwind class</p>
      <p className="bg-green-300 text-danger text-8xl font-bold p-12">This is tailwind styled paragraph</p>
    </div>
  );
}

export default App;
