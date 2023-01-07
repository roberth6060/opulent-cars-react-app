import { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import Routes from "./routes/Routes";



const App: React.FC = () => {

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <GlobalStyle />
      <Routes/>
    </Suspense>
  );
};

export default App;
