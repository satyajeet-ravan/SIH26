import Home from "./pages/Home";
import CowBreeds from "./pages/CowBreeds";
import BuffaloBreeds from "./pages/BuffaloBreeds";

function App() {

  const path = window.location.pathname;

  if (path === "/breeds/cow") {
    return <CowBreeds />;
  }

  if (path === "/breeds/buffalo") {
    return <BuffaloBreeds />;
  }

  return <Home />;
}

export default App;