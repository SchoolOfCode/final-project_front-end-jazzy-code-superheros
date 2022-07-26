import { factsData } from "./factsdata";
import "./facts.css";

const Facts = () => {
  return (
    <div className="Main-container">
      {factsData.map((fact, index) => {
        return (
          <div className="Fact-container" key={index}>
            <img src={fact.img} alt={fact.fact} />
            <h3>{fact.fact}</h3>
            <p>{fact.explanation}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Facts;
