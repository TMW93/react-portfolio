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
    id: 1,
    name: 'Tech Blog',
    image: TechBIMG,
    repoURL: 'https://github.com/TMW93/Tech-Blog',
  },
  {
    id: 2,
    name: 'Employee Tracker',
    image: ETrackerIMG,
    repoURL: 'https://github.com/TMW93/employee-tracker',
  },
  {
    id: 3,
    name: 'E-Commerce Backend',
    image: ECommIMG,
    repoURL: 'https://github.com/TMW93/E-Commerce-Back-End',
  },
  {
    id: 4,
    name: 'Social Network API',
    image: SoNetAPIIMG,
    repoURL: 'https://github.com/TMW93/social-network-api',
  },
  {
    id: 5,
    name: 'Cooktube',
    image: CookTubeIMG,
    repoURL: 'https://github.com/KiranRoss1999/Recipe-Recommendation-Platform',
  },
  {
    id: 6,
    name: 'Movie Club',
    image: MovieIMG,
    repoURL: 'https://github.com/isaacfallon/Movie-Club-Project-2',
  },
  {
    id: 7,
    name: 'README Generator',
    image: RMGenIMG,
    repoURL: 'https://github.com/TMW93/README-Generator',
  },
];

export default function Portfolio() {
  return (
    <div className='container w-100 p-0 m-0'>
      <ul className='list-group d-flex justify-content-center align-items-center'>
        {projects.map((project) => (
          <li key={project.id} className='list-group-item d-flex justify-content-center align-items-center w-75 my-3'>
            <Project project={project}/>
          </li>
        ))}
      </ul>
    </div>
  );
}