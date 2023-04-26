import { Toaster } from "react-hot-toast";
import Routing from "./routes/index.routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routing />
      <Toaster />
    </>
  );
}

export default App;
