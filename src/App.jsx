import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widgets/Widgets';
import Login from './components/login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const[{user} , dispatch] = useStateValue();
  return (
    <div className="app">
       {!user ? <Login /> :(
         <>
          <Header />
          <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
         </div>
         </>
       )}
    </div>
  );
}

export default App;
