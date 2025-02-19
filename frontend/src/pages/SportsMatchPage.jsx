import DateSlider from "../features/components/DateSlider";
import GameModuleCard from "../features/components/GameModuleCard";

const newsArticles = [
  {
    title:
      "Dortmund suffer 2-1 home loss to VfB Stuttgart on coach Kovac’s debut",
    description:
      "Borussia Dortmund slumped to a 2-1 defeat to visitors VfB Stuttgart on Saturday in a disappointing debut for new coach Niko Kovac that dropped his team further away from the Champions League qualification spots.",
    image: "https://via.placeholder.com/100",
    time: "41m",
    source: "Reuters",
  },
  {
    title: "Lukas Hradecky makes a great save",
    description: "Lukas Hradecky makes a great save",
    image: "https://via.placeholder.com/100",
    time: "1h",
    source: "Reuters",
  },
];

const SportsMatchPage = () => {
  return (
    <div className="bg-[#EDEEF0] min-h-screen">
      <div className="max-w-screen-xl mx-auto grid grid-cols-32 gap-4 py-8">
        <aside className="col-span-1"></aside>
        <div className="col-span-22">
          <div className="flex flex-col gap-4">
            <DateSlider />
            <div className="pl-2 font-bold text-sm text-gray-700">
              Wednesday, February 12, 2025
            </div>
            <GameModuleCard />
            <GameModuleCard />
          </div>
        </div>

        <aside className="col-span-8">
          <div className="max-w-sm bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-3">Football News</h2>
            {newsArticles.map((news, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 mb-4 border-b border-gray-200 pb-3 last:border-none"
              >
                <img
                  src={news.image}
                  alt="news"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {news.description}
                  </p>
                  <div className="text-xs text-gray-400 mt-1">
                    {news.time} • {news.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};
export default SportsMatchPage;
