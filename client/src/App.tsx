import { Suspense } from "react";
import GlobalStyle from "./GlobalStyle";
import Routes from "./app/routes/Routes";
import Spinner from "./app/components/Spinner/Spinner";


const App: React.FC = () => {

  return (
    <Suspense fallback={<Spinner/>}>
      <GlobalStyle />
         <Routes/>
    </Suspense>
  );
};

export default App;
