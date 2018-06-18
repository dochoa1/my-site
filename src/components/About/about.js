import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <header className="terminal">About me</header>
        <main>
            <p>
            I recently graduated from <b>Macalester College</b> in St.Paul, MN with
            a Computer Science and Applied Mathematics dual degree. I have had the opportunity
            to conduct research at the <b>University of Miami</b> and intern as a software developer at
            <b> Infinite Campus</b> in Blaine, MN. After graduating I will be an engineering resident at <b>Google</b>.
            </p>
            <p>
            As a software developer I love engineering products that provide novel and helpful experiences to users.
            Solving problems that stem from scale, refactoring code gone wild, optimizing inefficent functions,
            and even chasing down ellusive bugs. I love it all (except for the debugging, that part was a lie).
            I enjoy thinking from the <b>perspective of the end-user</b> and what will make their experience the best that
            it can be instead of what will make the experience of the developer the easiest.
            I aim to build products that <b>make the world a better place</b>.
            </p>
            <p>
            <b>When I'm not building the products of the future</b> I like to spend my time writing, reading,
            running, playing ultimate frisbee, and spending too much time watching youtube videos ¯\_(ツ)_/¯.
            </p>
        </main>
      </div>
    );
  }
}

export default About;
