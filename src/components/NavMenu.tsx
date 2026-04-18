import { NavLink } from 'react-router-dom'

export default function NavMenu() {
  return (
    <nav className="flex gap-5">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? "text-blue-500 font-bold" : "text-white hover:text-gray-300"
        }
      >
        Clientes
      </NavLink>
      
      <NavLink 
        to="/proveedores" 
        className={({ isActive }) => 
          isActive ? "text-blue-500 font-bold" : "text-white hover:text-gray-300"
        }
      >
        Proveedores
      </NavLink>
      
      <NavLink 
        to="/usuarios" 
        className={({ isActive }) => 
          isActive ? "text-blue-500 font-bold" : "text-white hover:text-gray-300"
        }
      >
        Usuarios
      </NavLink>

      <NavLink 
        to="/logout" 
        className={({ isActive }) => 
          isActive ? "text-blue-500 font-bold" : "text-white hover:text-gray-300"
        }
      >
        Cerrar sesión
      </NavLink>
    </nav>
  )
}
