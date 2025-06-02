import NavBar from "../../components/navbar/navbar";
import SportCard from "./components/sportCard/sportCard";

function BeyondCode() {
  return (
    <div className=' normalText bg-primary'>
      <NavBar />
      <SportCard
        title={"Football"}
        description={""}
        image={""}
        invert={false}
      />
      <SportCard title={"Cricket"} description={""} image={""} invert={false} />
      <SportCard
        title={"Barcelona"}
        description={""}
        image={""}
        invert={false}
      />
    </div>
  );
}

export default BeyondCode;
