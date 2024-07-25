import TechBIMG from '../assets/images/tech-blog.png';
import ETrackerIMG from '../assets/images/employee-tracker.png';
import ECommIMG from '../assets/images/e-commerce-backend.png';
import SoNetAPIIMG from '../assets/images/social-network-api.png';
import CookTubeIMG from '../assets/images/cooktube.png';
import MovieIMG from '../assets/images/movie-club.png';
import RMGenIMG from '../assets/images/readme-generator.png';

import Project from '../components/Project';

const projects = [
  {
    name: 'Tech Blog',
    image: TechBIMG,
    repoURL: 'https://github.com/TMW93/Tech-Blog',
  },
  {
    name: 'Employee Tracker',
    image: ETrackerIMG,
    repoURL: 'https://github.com/TMW93/employee-tracker',
  },
  {
    name: 'E-Commerce Backend',
    image: ECommIMG,
    repoURL: 'https://github.com/TMW93/E-Commerce-Back-End',
  },
  {
    name: 'Social Network API',
    image: SoNetAPIIMG,
    repoURL: 'https://github.com/TMW93/social-network-api',
  },
  {
    name: 'Cooktube',
    image: CookTubeIMG,
    repoURL: 'https://github.com/KiranRoss1999/Recipe-Recommendation-Platform',
  },
  {
    name: 'Movie Club',
    image: MovieIMG,
    repoURL: 'https://github.com/isaacfallon/Movie-Club-Project-2',
  },
  {
    name: 'README Generator',
    image: RMGenIMG,
    repoURL: 'https://github.com/TMW93/README-Generator',
  },
];

export default function Portfolio() {
  return (
    <div className='container'>
      <ul className='list-group'>
        {projects.map((project) => (
          <li className='list-group-item d-flex justify-content-center align-items-center'>
            <Project project={project}/>
          </li>
        ))}
      </ul>
    </div>
  );
}