import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero */}
      <section className="text-center py-20 bg-base-200 rounded-2xl mb-10">
        <h1 className="text-5xl font-bold">Lami Faharia</h1>
        <p className="text-xl my-4">Full Stack Developer | CS Student</p>
        <button className="btn btn-primary">Download Resume</button>
      </section>

      {/* Projects */}
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="card bg-base-100 shadow-lg border">
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p>{p.description}</p>
              <Link to={`/project/${p.id}`} className="btn btn-outline mt-4">View Details</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}