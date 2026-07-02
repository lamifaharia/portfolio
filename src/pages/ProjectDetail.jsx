import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === parseInt(id));

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{p.name}</h1>
      <p className="mb-4">{p.description}</p>
      <div className="bg-base-200 p-4 rounded-lg mb-4">
        <p><strong>Stack:</strong> {p.tech.join(', ')}</p>
        <p><strong>Challenges:</strong> {p.challenges}</p>
        <p><strong>Future:</strong> {p.futurePlans}</p>
      </div>
      <div className="flex gap-2">
        <a href={p.liveLink} className="btn btn-primary">Live</a>
        <a href={p.gitHub} className="btn btn-secondary">GitHub</a>
        <Link to="/" className="btn btn-ghost">Back</Link>
      </div>
    </div>
  );
}