import React from "react";
import { fadeInUp } from "./util";

const teamArray = [
  ["Christopher Maximos", "Editor in Chief", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/ChristopherMaximos.jpg"],
  ["Tanvi Dutta Gupta", "Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TanviDuttaGupta-1-scaled.jpeg"],
  ["Ji Hong Ni", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
  ["Cameron Linhares-Huang", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
  ["Enya Lu", "Operations (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/EnyaLu.png"],
  ["Aashna Khetan", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
  ["Christy Wang", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
  ["Michelle Gan", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
  ["Jean Yi", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
  ["Anshika Agarwal", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
  ["Brandon Kim", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
];

const fmrTeamArray = [
  ["Jason Zhao", "Editor in Chief", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/JasonZhao.jpg"],
  ["Irene Han", "Managing Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/IreneHan.jpg"],
  ["Ben Esposito", "Managing Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/BenEsposito.jpeg"],
  ["Rayan Krishnan", "Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/RayanKrishnan.jpg"],
  ["Nic Becker", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/NicBecker.jpg"],
  ["Sam Catania", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/SamCatania.jpg"],
  ["Shana Hadi", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/ShanaHadi.jpg"],
  ["Peter Maldonado", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/PeterMaldonado.jpg"],
  ["Alessandro Vecchiato", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/AlessandroVecchiato.jpg"],
  ["Elaine Park", "Business", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/ElainePark.jpg"],
  ["Jessica Chen", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/JessicaChen.png"],
  ["Anna Greene", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/AnnaGreene.jpg"],
  ["Kaylie Mings", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/KaylieMings.jpg"],
  ["Emily Zhong", "Design (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/EmilyZhong.png"],
  ["Crystal Nattoo", "Design (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/CrystalNattoo.jpg"],
  ["Cooper Reed", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/CooperReed-2-scaled.jpg"],
  ["Matthew Katz", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/MatthewKatz.jpg"],
  ["Chris Tan", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/ChrisTan-scaled.jpeg"],
  ["Anne Li", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TODO"],
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
  var fmr_team = [];
  for (let i in fmrTeamArray) {
    fmr_team.push(
      <div className="member" key={i}>
        <img src={fmrTeamArray[i][2]} />
        <h3>{fmrTeamArray[i][0]}</h3>
        {fmrTeamArray[i][1]}
      </div>
    );
  }

  return (
    <div className="about-section">
      {fadeInUp(<h1>Our Team</h1>)}
      {fadeInUp(<div id="team">
        {team}
      </div>)}
      {fadeInUp(<h1>Former Members</h1>)}
      {fadeInUp(<div id="team">
        {fmr_team}
      </div>)}
    </div>
  )
}

export default Team
