import NavBar from "../../components/navbar/navbar";
import SportCard from "./components/sportCard/sportCard";

function BeyondCode() {
  const sportDesc = `I’m a huge fan of football, cricket, and badminton. Football is my top passion, especially watching Lionel Messi play for Barcelona and Argentina. The 2022 World Cup win was an emotional moment for me; seeing Messi finally lift the trophy after all his efforts and near-misses was truly special.\n
  I also love Test cricket, where strategy and patience are key. The Indian Cricket Team, with players like Rahul Dravid, has always inspired me with their discipline and skill. Badminton, with its fast-paced rallies and quick reflexes, is another sport that keeps me sharp. All these sports fuel my passion and push me to stay focused and dedicated in everything I do.`;
  return (
    <div className="bg-bgTheme">
      <NavBar />
      <SportCard
        title={"Sport is the CORE"}
        description={sportDesc}
        image={`./beyondCode/football.webp`}
        invert={true}
      />
    </div>
  );
}

export default BeyondCode;
