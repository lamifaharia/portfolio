import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found!</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg mb-4">{project.description}</p>
      <div className="mb-4"><strong>Tech Stack:</strong> {project.tech.join(', ')}</div>
      <div className="mb-4"><strong>Challenges:</strong> {project.challenges}</div>
      <div className="mb-4"><strong>Future Plans:</strong> {project.futurePlans}</div>
      <div className="flex gap-4">
        <a href={project.liveLink} className="btn btn-primary">Live Demo</a>
        <a href={project.gitHub} className="btn btn-outline">GitHub</a>
        <Link to="/" className="btn">Back Home</Link>
      </div>
    </div>
  );
}