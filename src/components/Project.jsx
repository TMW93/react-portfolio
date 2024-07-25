export default function({project}) {
  return (
    <div className='card text-bg-dark'>
      <img src={project.image} className='card-img'></img>
      <div className='card-img-overlay'>
        <h5 className='card-title'>
          <a href={project.repoURL} className='stretched-link'>{project.name}</a>
        </h5>
      </div>
    </div>
  );
}