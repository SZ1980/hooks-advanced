import { Link } from "react-router-dom";
// , Route, Switch

function App() {
  return (
    <div className="bg-blue-200">
      <nav className="bg-amber-100 flex space-x-4">
        <ul className="flex space-x-4">
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useReducerA">useReducer 1</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useReducerB">useReducer 2</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useContextA">useContext</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useContextA">useMemo</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useContextA">useCallback</Link>
          </li>
          <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/useContextA">useRef</Link>
          </li>
          {/* <li className="p-4 hover:bg-amber-300 font-semibold">
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default App;
