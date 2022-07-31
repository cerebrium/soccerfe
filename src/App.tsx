import { Routes, Route } from "react-router-dom";
import { Layout } from "./shared/layout";
import { Home } from "./views/home";

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
