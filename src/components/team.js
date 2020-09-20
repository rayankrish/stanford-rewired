import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const teamArray = [
  ["Jason Zhao", "Content", "http://52.12.8.45/wp-content/uploads/2020/09/JasonZhao.jpg"],
  ["Ben Esposito", "Content", "http://52.12.8.45/wp-content/uploads/2020/09/BenEsposito.jpeg"],
  ["Irene Han", "Content", "http://52.12.8.45/wp-content/uploads/2020/09/IreneHan.jpg"],
  ["Mark Gardiner", "Content", "http://52.12.8.45/wp-content/uploads/2020/09/MarkGardiner.jpg"],
  ["Enya Lu", "Content", "http://52.12.8.45/wp-content/uploads/2020/09/EnyaLu.png"],
  ["Alessandro Vecchiato", "Content", "http://52.12.8.45/wp-content/uploads/2020/09/AlessandroVecchiato.jpg"],
  ["Emily Zhong", "Design", "http://52.12.8.45/wp-content/uploads/2020/09/EmilyZhong.png"],
  ["Kaylie Mings", "Design", "http://52.12.8.45/wp-content/uploads/2020/09/KaylieMings.jpg"],
  ["Crystal Nattoo", "Design", "http://52.12.8.45/wp-content/uploads/2020/09/CrystalNattoo.jpg"],
  ["Rayan Krishnan", "Tech", "http://52.12.8.45/wp-content/uploads/2020/09/RayanKrishnan.jpg"],
  ["Matthew Katz", "Tech", "http://52.12.8.45/wp-content/uploads/2020/09/MatthewKatz.jpg"],
  ["Chris Tan", "Tech", "http://52.12.8.45/wp-content/uploads/2020/09/ChrisTan-scaled.jpeg"]
];

function fadeInUp(elem, delay=0) {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      duration={0.5}
      animateOnce={true}
      offset={200}
      delay={delay}
    >
      {elem}
    </ScrollAnimation>
  )
}

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
    <div>
      {fadeInUp(<h1>Our Team</h1>)}
      {fadeInUp(<div id="team">
        {team}
      </div>)}
    </div>
  )
}

export default Team
