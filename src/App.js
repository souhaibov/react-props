
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handlesouhaib=(name)=>{
    alert(name)
  }
  return (
    <div className="App">
      <header className="App-header">
       <Profile handleName={handlesouhaib} fullName='Souhaib Salem' bio='Metouia' profession='Chess Trainer'>
         <img src='https://avatars.githubusercontent.com/u/100449000?v=4' alt='souhaib'/>
       </Profile>
      </header>
    </div>
  );
}

export default App;
