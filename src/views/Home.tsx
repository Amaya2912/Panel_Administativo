export default function Home() {

  const clientes = [
    { id: 1, nombre: "Kata Becerra", contacto: "Kata@example.com", telefono: "555-1234"},
    { id: 2, nombre: "Jhon Amaya", contacto: "Jhon@example.com", telefono: "555-5678"},
    { id: 3, nombre: "Anderson Perez", contacto: "Anderson@example.com", telefono: "555-9012"}
  ]
  return (
    <div className="py-10">
        <h1 className="text-4xl font-bold mb-6">Clientes</h1>
        <p className="pb-2">En este apartado se muestran todos los clientes del negocio</p>
        <button type="button" className="rounded-lg bg-gray-300 font-bold p-2 gap-3 mb-5 hover:bg-gray-500 cursor-pointer">
          Crear nuevo proveedor
        </button>
      <table className="w-full border-collapse border border-gray-800">
        <thead className="bg-gray-300">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Contacto</th>
            <th className="border p-2">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(clientes => (
            <tr key={clientes.id}>
              <td className="border p-2">{clientes.id}</td>
              <td className="border p-2">{clientes.nombre}</td>
              <td className="border p-2">{clientes.contacto}</td>
              <td className="border p-2">{clientes.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
