import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about_container">
      <div>
        <div className="about_title">
          <h1>About Me</h1>
        </div>
        <img
          className="about_img"
          alt="My son and I"
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/311435266_10228022015446481_375629265674883144_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qhbQQFGym1YAX-gGgak&_nc_ht=scontent-dfw5-2.xx&oh=00_AfD_ajiaa9wln9NWZsqbFAhDvB4_s6mARLPX1tmHVRi5Vw&oe=636F4CFD"
        />
        <p className="about_paragraph">
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
          ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        </p>
      </div>
    </div>
  );
}

export default About;
