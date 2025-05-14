export const QuickAlerts = () => (
  <div className="bg-[#1e1e1e] rounded-xl p-4 text-white shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold">Quick alerts <span className="bg-red-600 text-white px-2 py-0.5 rounded-full text-sm ml-1">2</span></h2>
      <button className="text-sm text-red-400 hover:underline">Mark all as read</button>
    </div>

    {[...Array(5)].map((_, i) => (
      <div key={i} className="border-b border-gray-700 py-3">
        <p className="text-sm">Coach Williams team has a 70% injury risk this month</p>
        <div className="flex items-center gap-2 mt-2">
          <button className="bg-blue-600 px-3 py-1 rounded text-sm">Review</button>
          <button className="bg-gray-700 px-3 py-1 rounded text-sm">Resolve</button>
          <span className="text-red-500 text-lg ml-auto">⚠️</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">8 min ago</p>
      </div>
    ))}
  </div>
);
