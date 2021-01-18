import React from "react";
import { fadeInUp } from "./util";

const teamArray = [
  ["Jason Zhao", "Editor in Chief", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/JasonZhao.jpg"],
  ["Irene Han", "Managing Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/IreneHan.jpg"],
  ["Ben Esposito", "Managing Editor", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/BenEsposito.jpeg"],
  ["Nic Becker", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/NicBecker.jpg"],
  ["Sam Catania", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/SamCatania.jpg"],
  ["Tanvi Dutta Gupta", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/TanviDuttaGupta-1-scaled.jpeg"],
  ["Shana Hadi", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/ShanaHadi.jpg"],
  ["Peter Maldonado", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/PeterMaldonado.jpg"],
  ["Christopher Maximos", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/ChristopherMaximos.jpg"],
  ["Alessandro Vecchiato", "Content", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/AlessandroVecchiato.jpg"],
  ["Enya Lu", "Business (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/EnyaLu.png"],
  ["Elaine Park", "Business", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/ElainePark.jpg"],
  ["Crystal Nattoo", "Design (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/CrystalNattoo.jpg"],
  ["Jessica Chen", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/JessicaChen.png"],
  ["Anna Greene", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/AnnaGreene.jpg"],
  ["Ji Hong Ni", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/JiHongNi-1-scaled.jpeg"],
  ["Cameron Linhares-Huang", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/CameronLinharesHuang.jpg"],
  ["Kaylie Mings", "Design", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/KaylieMings.jpg"],
  ["Emily Zhong", "Design (Fmr Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/EmilyZhong.png"],
  ["Rayan Krishnan", "Tech (Lead)", "https://cdn.stanfordrewired.com/wp-content/uploads/2020/09/RayanKrishnan.jpg"],
  ["Anne Li", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/AnneLi.jpg"],
  ["Cooper Reed", "Tech", "https://cdn.stanfordrewired.com/wp-content/uploads/2021/01/CooperReed-2-scaled.jpg"],
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
