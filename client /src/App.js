import logo from './logo.svg';
import './App.css';
import SubmitForm from './pages/SubmitForm';
import NoMatch from './pages/NoMatch';
import Loading from './pages/Loading';
import MatchFound from './pages/MatchFound';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* header links, route basically inserts new component under the current one */}
      {/* <ul>
        <li>
          <Link to={`/`}> submitform </Link>
        </li>
        <li>
          <Link to={`/match`}> Match Found </Link>
        </li>
        <li>
          <Link to={`/nomatch`}> No Match </Link>
        </li>
        <li>
          <Link to={`/loading`}> Loading </Link>
        </li> 
      </ul> */}

      {/* <Routes>
        <Route path='/' element={<SubmitForm/>} />
        <Route path='/nomatch' element={<NoMatch/>} />
        <Route path='/match' element={<MatchFound/>} />
        <Route path='/loading' element={<Loading/>} />

      </Routes> */}

    <form>
      <input type="text" id="message-input"/>
      <button type="submit" id="send-button">Send</button>
    </form>
    </div>
  );
}

export default App;
