import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  )
}

export default App;
