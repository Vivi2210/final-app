import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, addDoc, doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const studentId = "123456"; // tu matrícula

  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        const docRef = doc(db, "tasks", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setDescription(data.description || "");
        }
      };
      fetchItem();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("El título es obligatorio");
      return;
    }

    const data = {
      title,
      description,
      studentId,
      updatedAt: serverTimestamp()
    };

    if (id) {
      await updateDoc(doc(db, "tasks", id), data);
    } else {
      await addDoc(collection(db, "tasks"), {
        ...data,
        createdAt: serverTimestamp()
      });
    }

    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{id ? "Editar Tarea" : "Nueva Tarea"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Descripción:</label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Form;