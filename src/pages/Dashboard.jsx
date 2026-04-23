import { useAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'

function Dashboard() {
  const { user } = useAuth()
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])


  return (
     <div className="p-6">
      {showWelcome && (
        <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
          Жүйеге қош келдіңіз, {user?.name}! 👋
        </div>
      )}

      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600">Сәлем, {user?.name}!</p>
      <p className="text-sm text-gray-400 mb-6">Роль: {user?.role}</p>

      {user?.role === 'teacher' && (
        <div className="bg-blue-50 p-4 rounded">
          <h2 className="font-bold text-blue-700">Мұғалім панелі</h2>
          <p>Оценки, расписание, ученики</p>
        </div>
      )}

      {user?.role === 'student' && (
        <div className="bg-green-50 p-4 rounded">
          <h2 className="font-bold text-green-700">Оқушы панелі</h2>
          <p>Мои оценки, расписание</p>
        </div>
      )}

      {user?.role === 'parent' && (
        <div className="bg-yellow-50 p-4 rounded">
          <h2 className="font-bold text-yellow-700">Ата-ана панелі</h2>
          <p>Оценки ребёнка, уведомления</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard