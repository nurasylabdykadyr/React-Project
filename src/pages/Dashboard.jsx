import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Dashboard() {
  const { user } = useAuth()
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {showWelcome && (
        <div className="bg-green-100 text-green-800 p-3 rounded-xl mb-4 text-center">
          Жүйеге қош келдіңіз, {user?.name}! 
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Dashboard</h1>
        <p className="text-gray-400 mb-8">Сәлем, {user?.name} · {user?.role}</p>

        {user?.role === 'teacher' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/grades" className="bg-blue-600 text-white p-6 rounded-2xl hover:bg-blue-700 transition">
              <div className="text-3xl mb-2"></div>
              <h2 className="text-xl font-bold">Журнал оценок</h2>
              <p className="text-blue-100 text-sm">Добавляй и управляй оценками</p>
            </Link>
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="text-3xl mb-2"></div>
              <h2 className="text-xl font-bold text-gray-700">Ученики</h2>
              <p className="text-gray-400 text-sm">Управление учениками</p>
            </div>
          </div>
        )}

        {user?.role === 'student' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/grades" className="bg-green-600 text-white p-6 rounded-2xl hover:bg-green-700 transition">
              <div className="text-3xl mb-2"></div>
              <h2 className="text-xl font-bold">Мои оценки</h2>
              <p className="text-green-100 text-sm">Посмотри свои результаты</p>
            </Link>
            <Link to="/todos" className="bg-purple-600 text-white p-6 rounded-2xl hover:bg-purple-700 transition">
              <div className="text-3xl mb-2"></div>
              <h2 className="text-xl font-bold">Тапсырмалар</h2>
              <p className="text-purple-100 text-sm">Мои задания</p>
            </Link>
          </div>
        )}

        {user?.role === 'parent' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/grades" className="bg-yellow-500 text-white p-6 rounded-2xl hover:bg-yellow-600 transition">
              <div className="text-3xl mb-2"></div>
              <h2 className="text-xl font-bold">Оценки ребёнка</h2>
              <p className="text-yellow-100 text-sm">Следи за успеваемостью</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard