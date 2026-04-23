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
    <nav className="bg-blue-600 text-white px-4 py-3 flex flex-wrap gap-3 items-center">
      <Link to="/" className="hover:underline text-sm">Главная</Link>
      <Link to="/dashboard" className="hover:underline text-sm">Dashboard</Link>
      <Link to="/grades" className="hover:underline text-sm">Оценки</Link>
      {user?.role === 'student' && (
        <Link to="/todos" className="hover:underline text-sm">Тапсырмалар</Link>
      )}
      {user ? (
        <button onClick={handleLogout} className="ml-auto bg-white text-blue-600 px-3 py-1 rounded text-sm hover:bg-gray-100">
          Выйти ({user.name})
        </button>
      ) : (
        <Link to="/login" className="ml-auto hover:underline text-sm">Войти</Link>
      )}
    </nav>
  )
}

export default Navbar