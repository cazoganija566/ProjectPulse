import { useState } from 'react';

const ProjectPulse = () => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (project: any) => {
    setProjects([...projects, project]);
  };

  return (
    <div>
      <h1>Project Pulse</h1>
      <AddProjectForm onSubmit={handleAddProject} />
      <ProjectList projects={projects} />
    </div>
  );
};

const AddProjectForm = ({ onSubmit }: { onSubmit: (project: any) => void }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, description, dueDate });
    setName('');
    setDescription('');
    setDueDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Project Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={e => setDueDate(new Date(e.target.value))} />
      </label>
      <br />
      <button type="submit">Add Project</button>
    </form>
  );
};

const ProjectList = ({ projects }: { projects: any[] }) => (
  <ul>
    {projects.map((project: any) => (
      <li key={project.name}>{project.name}</li>
    ))}
  </ul>
);
