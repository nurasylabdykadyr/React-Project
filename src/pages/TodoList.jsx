import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useAuth } from '../context/AuthContext'

function TodoList() {
  const { user } = useAuth()
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (!text.trim()) return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setText('')
  }

  const handleToggle = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Менің тапсырмаларым</h1>

      <div className="flex gap-2 mb-6">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder="Жаңа тапсырма"
          className="border p-2 rounded flex-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Қосу
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(t => (
          <li key={t.id} className="flex items-center gap-3 bg-white p-3 rounded shadow">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => handleToggle(t.id)}
              className="w-4 h-4"
            />
            <span className={t.done ? 'line-through text-gray-400 flex-1' : 'flex-1'}>
              {t.text}
            </span>
            <button
              onClick={() => handleDelete(t.id)}
              className="text-red-500 hover:underline text-sm"
            >
              Өшіру
            </button>
          </li>
        ))}
      </ul>

      
    </div>
  )
}

export default TodoList