import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    // <Prueba />
    <AuthProvider>
      <Routes>
      <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/chat" element={<Chat />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
