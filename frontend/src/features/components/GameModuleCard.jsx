import React from "react";

const GameModuleCard = () => {
  return (
    <div className="bg-white shadow-xs rounded-lg p-4 w-full  ">
      <div className="text-gray-600 text-sm font-semibold">
        Indian Super League
      </div>
      <div className="flex justify-between items-center mt-1 border-b pb-2 mb-2 border-gray-300"></div>

      <div className="grid grid-cols-3 justify-between flex-grow">
        <div className="flex flex-col border-r border-gray-200 pr-2">
          <span className="text-red-600 text-xs pb-2 font-bold">30'</span>
          <div className="flex  items-center ">
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full gap-2">
              <div className="flex items-center">
                <img
                  src="/fc-goa-logo.png"
                  alt="FC Goa"
                  className="w-8 h-8 mr-2"
                />
                <div className="flex flex-col ">
                  <span className="font-bold text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    FC Goa
                  </span>
                  <div className="text-sm text-gray-600">(9-6-3)</div>
                </div>
              </div>
              <div className="text-xl font-bold text-right">1</div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-3  ">
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full gap-2">
              <div className="flex items-center">
                <img
                  src="/odisha-fc-logo.png"
                  alt="Odisha FC"
                  className="w-8 h-8 mr-2"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Odisha FC
                  </span>
                  <div className="text-sm text-gray-600">(6-7-5)</div>
                </div>
              </div>
              <div className="text-xl font-bold text-right">0</div>
            </div>
          </div>
        </div>
        <div className="border-r border-gray-200 text-xs text-gray-600  p-2">
          <span className="font-bold">Salt Lake Stadium</span>
          <br /> Bidhannagar, West Bengal, India
        </div>
        <div className="pl-4 ">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <img
                src="/fc-goa-logo.png"
                alt="FC Goa"
                className="w-5 h-5 mr-2"
              />
              <span className="font-bold text-xs text-gray-800">FC Goa</span>
            </div>
            <div className="text-xs text-gray-600">⚽ B Fernandes - 29'</div>
          </div>
          <div className="flex flex-col items-start mt-3">
            <div className="flex items-center mb-2">
              <img
                src="/odisha-fc-logo.png"
                alt="Odisha FC"
                className="w-5 h-5 mr-2"
              />
              <span className="font-bold text-xs text-gray-800">Odisha FC</span>
            </div>
            <div className="text-xs text-gray-600">No Goals</div>
          </div>
        </div>
      </div>

      {/*Divider between two module */}
      <div className="flex justify-between items-center mt-1 border-b border-gray-300 pb-2 mb-2"></div>

      {/*Another Game Module just a sample*/}
      <div className="grid grid-cols-3 justify-between flex-grow">
        <div className="flex flex-col border-r border-gray-200 pr-2">
          <span className="text-gray-600 text-xs font-bold pb-2">11:00 PM</span>
          <div className="flex  items-center ">
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full gap-2">
              <div className="flex items-center">
                <img
                  src="/fc-goa-logo.png"
                  alt="FC Goa"
                  className="w-8 h-8 mr-2"
                />
                <div className="flex flex-col ">
                  <span className="font-bold text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Lauer
                  </span>
                  <div className="text-sm text-gray-600">(9-6-3)</div>
                </div>
              </div>
              <div className="text-xl font-bold text-right">1</div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-3  ">
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full gap-2">
              <div className="flex items-center">
                <img
                  src="/odisha-fc-logo.png"
                  alt="Odisha FC"
                  className="w-8 h-8 mr-2"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    Bengaluru FC
                  </span>
                  <div className="text-sm text-gray-600">(6-7-5)</div>
                </div>
              </div>
              <div className="text-xl font-bold text-right">0</div>
            </div>
          </div>
        </div>
        <div className="border-r border-gray-200 text-xs text-gray-600 p-2">
          <span className="font-bold">Pandit Jawaharlal Nehru Stadium</span>
          <br /> Fatorda, Goa, India
        </div>
        <div className="pl-4 ">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <img
                src="/fc-goa-logo.png"
                alt="FC Goa"
                className="w-5 h-5 mr-2"
              />
              <span className="font-bold text-xs text-gray-800">FC Goa</span>
            </div>
            <div className="text-xs text-gray-600">⚽ B Fernandes - 29'</div>
          </div>
          <div className="flex flex-col items-start mt-3">
            <div className="flex items-center mb-2">
              <img
                src="/odisha-fc-logo.png"
                alt="Odisha FC"
                className="w-5 h-5 mr-2"
              />
              <span className="font-bold text-xs text-gray-800">Odisha FC</span>
            </div>
            <div className="text-xs text-gray-600">No Goals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModuleCard;
