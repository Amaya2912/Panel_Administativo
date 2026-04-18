import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./views/Home";
import Proveedores from "./views/Proveedores";
import Usuarios from "./views/Usuarios";
import Logout from "./views/Logout";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/proveedores" element={<Proveedores />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/logout" element={<Logout />} />
            </Route>
        </Routes>
    </BrowserRouter>
      
  )
}
