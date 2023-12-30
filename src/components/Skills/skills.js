import React from 'react'
import './skills.css';

import sql from '../../assets/mysql.png';
import cplus from '../../assets/cplus.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import boot from '../../assets/bootstrap.png';
import node from '../../assets/node.png';


const Skills = () => {
    const skillsList = [
        { name: 'HTML', image: html },
        { name: 'CSS', image: css },
        { name: 'JavaScript', image: js },
        { name: 'React', image: react },
        { name: 'Node.js', image: node },
        // { name: 'Express.js', image: 'express.png' },
        // { name: 'MongoDB', image: 'mongodb.png' },
        { name: 'Bootstrap', image: boot },
        { name: 'C++', image: cplus },
        { name: 'MySQL', image: sql }
      ];
    
      return (
        <div className="skills-container">
            <h2>Tech Stack</h2>
            <span className='skill'>
        A skilled programmer with expertise in Data Structures and Algorithms (DSA), I have been honing my problem-solving abilities through consistent practice on platforms like <a href="https://leetcode.com/diya9/" target="_blank" rel="noopener noreferrer">LeetCode</a>, <a href="https://www.codechef.com/users/sanvesha28" target="_blank" rel="noopener noreferrer">CodeChef</a>, and <a href="https://codeforces.com/profile/sanvesha28" target="_blank" rel="noopener noreferrer">Codeforces</a>.
      </span>

          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.image} alt={skill.name} className="skill-image" />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      );
}

export default Skills;
