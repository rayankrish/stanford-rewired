import React from "react";
import { fadeInUp } from "./util";

const teamArray = [
  ["Jason Zhao", "Editor in Chief", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/JasonZhao.jpg"],
  ["Irene Han", "Managing Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/IreneHan.jpg"],
  ["Ben Esposito", "Managing Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/BenEsposito.jpeg"],
  ["Alessandro Vecchiato", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/AlessandroVecchiato.jpg"],
  ["Enya Lu", "Business (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/EnyaLu.png"],
  ["Crystal Nattoo", "Design (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/CrystalNattoo.jpg"],
  ["Kaylie Mings", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/KaylieMings.jpg"],
  ["Emily Zhong", "Design (Fmr Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/EmilyZhong.png"],
  ["Rayan Krishnan", "Tech (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/RayanKrishnan.jpg"],
  ["Matthew Katz", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/MatthewKatz.jpg"],
  ["Chris Tan", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/ChrisTan-scaled.jpeg"],
  ["Mark Gardiner", "Advisor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/MarkGardiner.jpg"],
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
