// Redux Selector / Action
import { useDispatch } from "react-redux";

// import state selectors
import { setSetting } from "./store/setting/action";
import { useEffect } from "react";

function App({children}) {
  // const [data, setData] = useState(null)
  // useEffect(()=> {
  //   fetch('http://localhost:8081/api')
  //   .then(res => res.json())
  //   .then(data => setData(data.message))
  //   .catch(err => console.log(err));
  // })

  const dispatch = useDispatch();
  dispatch(setSetting());
  return (
    <div className="app">
      {/* <h1>{data ? data: "Loading..."}</h1> */}
      {children}
    </div>
  )
}

export default App;