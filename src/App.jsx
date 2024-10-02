import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./reduxStore/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
