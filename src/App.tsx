import { Header } from "components/Header/header";
import { useDataContext } from "contexts/useDataContext/useDataContext";
import { Home } from "pages/Home/Home";
import { useEffect } from "react";

function App() {
  const { data, loadData } = useDataContext();

  useEffect(() => {
    if (data.length === 0) {
      loadData();
    }
  }, [data, loadData]);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
