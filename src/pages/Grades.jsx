import { useState } from "react";
import { initialGrades } from "../data/grades";
import { useAuth } from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";
// import { initialGrades } from '../data/grades'

function Grades() {
  const { user } = useAuth();
  const [grades, setGrades] = useLocalStorage("grades", initialGrades);
  const [form, setForm] = useState({ student: "", subject: "", grade: "" });

  const handleAdd = () => {
    if (!form.student || !form.subject || !form.grade) return;
    const newGrade = { id: Date.now(), ...form, grade: Number(form.grade) };
    setGrades([...grades, newGrade]);
    setForm({ student: "", subject: "", grade: "" });
  };

  const handleDelete = (id) => {
    setGrades(grades.filter((g) => g.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Журнал оценок</h1>

      {user?.role === "teacher" && (
        <div className="bg-white p-4 rounded shadow mb-6 flex gap-2">
          <input
            placeholder="Ученик"
            value={form.student}
            onChange={(e) => setForm({ ...form, student: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <input
            placeholder="Предмет"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="border p-2 rounded flex-1"
          />
          <input
            placeholder="Оценка"
            type="number"
            min="1"
            max="5"
            value={form.grade}
            onChange={(e) => setForm({ ...form, grade: e.target.value })}
            className="border p-2 rounded w-24"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
          >
            Добавить
          </button>
        </div>
      )}

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Ученик</th>
            <th className="p-3 text-left">Предмет</th>
            <th className="p-3 text-left">Оценка</th>
            {user?.role === "teacher" && <th className="p-3">Действие</th>}
          </tr>
        </thead>
        <tbody>
          {grades.map((g) => (
            <tr key={g.id} className="border-t">
              <td className="p-3">{g.student}</td>
              <td className="p-3">{g.subject}</td>
              <td className="p-3 font-bold">{g.grade}</td>
              {user?.role === "teacher" && (
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(g.id)}
                    className="text-red-500 hover:underline"
                  >
                    Удалить
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
