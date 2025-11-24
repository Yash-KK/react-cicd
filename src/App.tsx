import Home from "./pages/home";
import { LoginPage } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={(role: any, email: string) => {}} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
