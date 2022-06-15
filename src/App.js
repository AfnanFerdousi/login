import './App.css';
import Login from './pages/login/Login';
import Navbar from './pages/shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-h-screen'>
      <Navbar></Navbar>
      <Login></Login>
    </div>
  );
}

export default App;
