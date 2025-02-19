import React from "react";
import Sport_LeftSidebar from "../features/components/Sport_LeftSidebar";
import MainNewsArticle from "../features/components/MainNewsArticle";

const SportsNewsPage = () => {
  const articleData = {
    imageSrc: "https://via.placeholder.com/800x400",
    title: "AO Day 8: Djokovic, Alcaraz book quarterfinal date",
    description:
      "Day 8 at the Australian Open was full of action with Aryna Sabalenka, Coco Gauff, Novak Djokovic, and Carlos Alcaraz all booking their places in the quarterfinals.",
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-4 py-8">
        {/*Left Sidebar*/}
        <Sport_LeftSidebar />

        {/* Main Article Section */}
        <main className="col-span-7 flex flex-col">
          <MainNewsArticle
            imageSrc={articleData.imageSrc}
            title={articleData.title}
            description={articleData.description}
          />
          <MainNewsArticle
            imageSrc={articleData.imageSrc}
            title={articleData.title}
            description={articleData.description}
          />
          <MainNewsArticle
            imageSrc={articleData.imageSrc}
            title={articleData.title}
            description={articleData.description}
          />
          <MainNewsArticle
            imageSrc={articleData.imageSrc}
            title={articleData.title}
            description={articleData.description}
          />
        </main>

        {/* Right Sidebar */}
        <aside className="col-span-3">
          <div className="bg-white p-4 shadow-sm rounded-xl mb-4">
            <h2 className="font-bold text-lg mb-4">Top Headlines</h2>
            <ul className="space-y-2 text-sm divide-y divide-gray-300">
              <li>One sub, no winner: Arteta envy at Liverpool depth</li>
              <li>Frank: Liverpool best side in world, not just Prem</li>
              <li>Kelce flips 'switch' for playoffs, explodes in KC win</li>
              <li>Draymond injures calf in return, to have MRI</li>
              <li>Besiktas appoint Solskjær as head coach</li>
              <li>Bumrah picked in India's Champions Trophy squad</li>
              <li>Alaba set for Madrid return after 13 months out</li>
              <li>Bayern beat Wolfsburg to go clear in Bundesliga</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SportsNewsPage;
