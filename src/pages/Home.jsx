function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-12">
     
        <div className="bg-green-100 border border-green-200 text-green-800 px-6 py-4 rounded-xl text-center font-medium mb-12 shadow-sm">
          Mektep жүйесіне қош келдіңіз! Білім беруді бірге жеңілдетейік.
        </div>

      
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Главная страница</h1>
          <p className="text-gray-500 font-medium">Сәлем, Пайдаланушы · управление системой</p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      
          <div className="bg-blue-600 p-8 rounded-[24px] text-white shadow-lg hover:scale-[1.02] transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Мұғалімдер</h3>
            <p className="text-blue-100 opacity-90">Журналды толтыру және сабақ жоспарлау</p>
          </div>

       
          <div className="bg-[#00b341] p-8 rounded-[24px] text-white shadow-lg hover:scale-[1.02] transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Оқушылар</h3>
            <p className="text-green-100 opacity-90">Күнделік көру және тапсырма орындау</p>
          </div>

          <div className="bg-[#9333ea] p-8 rounded-[24px] text-white shadow-lg hover:scale-[1.02] transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Ата-аналар</h3>
            <p className="text-purple-100 opacity-90">Баланың үлгерімін қадағалау</p>
          </div>
        </div>

       
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <h2 className="font-bold text-gray-700 uppercase tracking-wider text-sm">Соңғы жаңалықтар</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { title: "Тоқсанның аяқталуы", date: "25.05.2026", status: "Маңызды" },
              { title: "Жаңа оқу бағдарламасы", date: "10.05.2026", status: "Жаңарту" },
              { title: "Ата-аналар жиналысы", date: "05.05.2026", status: "Хабарландыру" }
            ].map((news, i) => (
              <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition">
                <div>
                  <div className="font-bold text-gray-800">{news.title}</div>
                  <div className="text-xs text-gray-400">{news.date}</div>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                  {news.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home