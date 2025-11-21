import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db, serverTimestamp } from "./firebase";

function App() {
  const [data, setData] = useState([]);

  const tareasRef = collection(db, "tasks");

  const cargarDatos = async () => {
    const q = query(tareasRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setData(docs);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const guardarDatos = async () => {
    const nuevaTarea = {
      title: "nueva tarrea",
      description: "hacer de desarrlollo",
      studentId: "123456",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    await addDoc(tareasRef, nuevaTarea);
    cargarDatos();
  };

  const actualizarDatos = async (id) => {
    const tareaRef = doc(db, "tasks", id);
    await updateDoc(tareaRef, {
      title: " actualizada",
      description: "bien ",
      updatedAt: serverTimestamp()
    });
    cargarDatos();
  };

  const eliminarDatos = async (id) => {
    const tareaRef = doc(db, "tasks", id);
    await deleteDoc(tareaRef);
    cargarDatos();
  };

  return (


    
    <div className="App">
      <h1>lista de tareass</h1>

      <button onClick={guardarDatos}>Crear</button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong><br />
            {item.description && <span>{item.description}</span>}
            <button onClick={() => actualizarDatos(item.id)}>Actualizar</button>
            <button onClick={() => eliminarDatos(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;