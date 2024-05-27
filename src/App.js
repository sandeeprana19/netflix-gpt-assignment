import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./pages/Body/Body";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
