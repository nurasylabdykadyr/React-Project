import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex gap-6 items-center">
      <Link to="/" className="hover:underline">Главная</Link>
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/grades" className="hover:underline">Оценки</Link>
      {user?.role === 'student' && (
        <Link to="/todos" className="hover:underline">Тапсырмалар</Link>
      )}
      {user ? (
        <button onClick={handleLogout} className="ml-auto bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
          Выйти ({user.name})
        </button>
      ) : (
        <Link to="/login" className="ml-auto hover:underline">Войти</Link>
      )}
    </nav>
  )
}

export default Navbar