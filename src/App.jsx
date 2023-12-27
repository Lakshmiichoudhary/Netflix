import Body from "./Components/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

function App() {
  
  
  return (
  <Provider store={AppStore}>
    <Body />
  </Provider>
  )
}


export default App;
