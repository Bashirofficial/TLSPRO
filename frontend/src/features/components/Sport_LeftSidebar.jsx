const Sport_LeftSidebar = () => {
  const leagues = [
    { name: "Football", icon: "https://path-to-football-icon.png" },
    { name: "Baseball", icon: "https://path-to-baseball-icon.png" },
    { name: "Hockey", icon: "https://path-to-hockey-icon.png" },
    {
      name: "Men's Basketball",
      icon: "https://path-to-mens-basketball-icon.png",
    },
    {
      name: "Women's Basketball",
      icon: "https://path-to-womens-basketball-icon.png",
    },
  ];

  return (
    <>
      {/* Left Sidebar */}
      <aside className="col-span-2">
        <div className="bg-white p-4 shadow-sm rounded-xl mb-4">
          <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-full mb-4">
            Create Account
          </button>
          <button className="border border-blue-500 text-blue-500 py-2 px-4 w-full rounded-full mb-8">
            Log In
          </button>
        </div>
        <div className="bg-white p-4 shadow-sm rounded-xl">
          <h2 className="font-bold text-sm  text-gray-800 ">Featured</h2>
          <ul className="divide-y divide-gray-300">
            {leagues.map((league, index) => (
              <li key={index} className="flex items-center py-2">
                <img
                  src={league.icon}
                  alt={`${league.name} icon`}
                  className="w-8 h-4 mr-3"
                />
                <span className="text-gray-800 text-sm ">{league.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sport_LeftSidebar;
