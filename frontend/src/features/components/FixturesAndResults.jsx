const FixturesAndResults = () => {
  const matches = [
    {
      team1: "Yokohama F. Marinos",
      team1Logo: "🇯🇵", // Replace with actual image URL if needed
      score: "1 - 0",
      team2: "Shanghai Shenhua",
      team2Logo: "🇨🇳",
      result: "FT",
      location: "Nissan Stadium, Yokohama, Japan",
      attendance: "N/A",
    },
    {
      team1: "Buriram United",
      team1Logo: "🇹🇭",
      score: "2 - 1",
      team2: "Ulsan Hyundai",
      team2Logo: "🇰🇷",
      result: "FT",
      location: "Chang Arena, Buriram, Thailand",
      attendance: "N/A",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">AFC Champions League Elite</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">MATCH</th>
            <th className="py-2">RESULT</th>
            <th className="py-2">LOCATION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Yokohama F. Marinos</td>
            <td className="py-2">1 - 0</td>
            <td className="py-2">Nissan Stadium, Yokohama, Yokohama, Japan</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Buriram United</td>
            <td className="py-2">2 - 1</td>
            <td className="py-2">Chang Arena, Buriram, Thailand</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default FixturesAndResults;
