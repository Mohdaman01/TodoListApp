
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Home from "../components/Home";
import ProtectedRoute from "./ProtectedRoute";


function App() {

  return (

    <div className="App">

      <AuthContextProvider>

        <Routes>
          <Route path="/signin" element={<Signin/> } />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>

      </AuthContextProvider>

    </div>
  );

}

export default App;
