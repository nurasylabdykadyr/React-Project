import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const users = [
  { username: 'teacher', password: '1234', role: 'teacher', name: 'Мұғалім' },
  { username: 'student', password: '1234', role: 'student', name: 'Оқушы' },
  { username: 'parent', password: '1234', role: 'parent', name: 'Ата-ана' },
]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (username, password) => {
    const found = users.find(
      u => u.username === username && u.password === password
    )
    if (found) {
      setUser(found)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}