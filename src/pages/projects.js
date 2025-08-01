// src/pages/projects.js
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            slug={project.slug}
            aosDelay={i * 250}
          />
        ))}
      </div>
    </div>
  );
}
