import Routing from "./routes/index.routes";
import { GlobalStyle } from "./styles/global";
import { Toaster } from "react-hot-toast";

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
