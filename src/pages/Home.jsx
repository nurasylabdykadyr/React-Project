function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center py-16">
          <div className="text-6xl mb-4"></div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mektep</h1>
          <p className="text-gray-500 text-lg mb-8">Школьная система управления</p>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <div className="text-3xl mb-2"></div>
              <h3 className="font-bold text-gray-700">Мұғалімдер</h3>
              <p className="text-gray-400 text-sm">Оценки и расписание</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <div className="text-3xl mb-2"></div>
              <h3 className="font-bold text-gray-700">Оқушылар</h3>
              <p className="text-gray-400 text-sm">Задания и оценки</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <div className="text-3xl mb-2"></div>
              <h3 className="font-bold text-gray-700">Ата-аналар</h3>
              <p className="text-gray-400 text-sm">Успеваемость детей</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home