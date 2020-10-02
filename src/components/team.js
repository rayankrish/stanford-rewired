import React from "react";
import { fadeInUp } from "./util";

const teamArray = [
  ["Jason Zhao", "Editor", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/JasonZhao.jpg"],
  ["Ben Esposito", "Editor", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/BenEsposito.jpeg"],
  ["Irene Han", "Editor", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/IreneHan.jpg"],
  ["Mark Gardiner", "Advisor", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/MarkGardiner.jpg"],
  ["Enya Lu", "Content", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/EnyaLu.png"],
  ["Alessandro Vecchiato", "Content", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/AlessandroVecchiato.jpg"],
  ["Emily Zhong", "Design", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/EmilyZhong.png"],
  ["Kaylie Mings", "Design", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/KaylieMings.jpg"],
  ["Crystal Nattoo", "Design", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/CrystalNattoo.jpg"],
  ["Rayan Krishnan", "Tech", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/RayanKrishnan.jpg"],
  ["Matthew Katz", "Tech", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/MatthewKatz.jpg"],
  ["Chris Tan", "Tech", "https://rwcdn.katz.lol/wp-content/uploads/2020/09/ChrisTan-scaled.jpeg"]
];

function Team() {
  var team = [];
  for (let i in teamArray) {
    team.push(
      <div className="member" key={i}>
        <img src={teamArray[i][2]} />
        <h3>{teamArray[i][0]}</h3>
        {teamArray[i][1]}
      </div>
    );
  }

  return (
    <div className="about-section">
      {fadeInUp(<h1>Our Team</h1>)}
      {fadeInUp(<div id="team">
        {team}
      </div>)}
    </div>
  )
}

export default Team
