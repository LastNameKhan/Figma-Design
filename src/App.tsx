import React from 'react';
<<<<<<< HEAD
import './App.css';
import First from './First/First';
import Bottom from './Bottom/Bottom';
function App() {
  return (
    <>
      <First />
      <Bottom />
    </>
=======
import Footer from './Components/Footer/Footer';
import Firstpage from './Components/Footer/Firstpage';
import './App.css';
import Mobile from './component/Mobile';
import Page1 from './component/ThreeCards/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <div className="App">
      <Page1/>
      <Mobile/>
      <Page2/>
      <Firstpage />
      <Footer />
      </div>
>>>>>>> 852d80421a3aa0bfc5a24460bf9cec55428599b7
  );
}

export default App;
