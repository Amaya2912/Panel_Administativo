export default function Usuarios() {
  const usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
    { id: 2, nombre: "María Perez", email: "maria@example.com" },
    { id: 3, nombre: "Carlos López", email: "carlos@example.com" },
  ]

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-6">Usuarios</h1>
      <button type="button" className="rounded-lg bg-gray-300 font-bold p-2 gap-3 mb-5 hover:bg-gray-500 cursor-pointer">
        Crear nuevo usuario
      </button>
      <table className="w-full border-collapse border border-gray-800">
        <thead className="bg-gray-300">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td className="border p-2">{usuario.id}</td>
              <td className="border p-2">{usuario.nombre}</td>
              <td className="border p-2">{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
