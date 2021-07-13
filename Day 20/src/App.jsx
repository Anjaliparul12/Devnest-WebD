import Card from './components/Card'
import './App.css'

function App(props) {
  return (
  <div className="main">
  <h1><center>Calorie Read Only</center></h1>
    <div class="App">
      <Card title="Pizza" amount="56"/>
      <Card title="Burger" amount="69"/>
      <Card title="Coke" amount="500"/>
      <Card title="Browne" amount="180"/>
      <Card title="Fried Rice" amount="90"/>
      <Card title="Lassania" amount="200"/>
      <Card title="Pani Puri" amount="10"/>
    </div>
    </div>
  );
}

export default App;
