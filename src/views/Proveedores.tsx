export default function Proveedores() {
    const proveedores = [
    { id: 1, nombre: "Distribuidora Lopez", contacto: "juan@example.com", telefono: "555-1234" , ciudad: "Bogotá"},
    { id: 2, nombre: "Tech Suplies", contacto: "maria@example.com", telefono: "555-5678" , ciudad: "Ciudad De México"},
    { id: 3, nombre: "ElectroCom", contacto: "carlos@example.com", telefono: "555-9012" , ciudad: "Nueva York"},
  ]
  return (
       <div className="py-10">
        <h1 className="text-4xl font-bold mb-6">Proveedores</h1>
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
            <th className="border p-2">Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map(proveedor => (
            <tr key={proveedor.id}>
              <td className="border p-2">{proveedor.id}</td>
              <td className="border p-2">{proveedor.nombre}</td>
              <td className="border p-2">{proveedor.contacto}</td>
              <td className="border p-2">{proveedor.telefono}</td>
              <td className="border p-2">{proveedor.ciudad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
