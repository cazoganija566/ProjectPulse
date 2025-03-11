// ProjectPulse - A comprehensive guide to managing your school projects

import { Project } from 'project-pulse';

const project = new Project('My Awesome Project');

project.addTask('Write report', () => {
  const reportText = `Introduction:
    This is a report on the status of my project, which was completed in ${new Date().toLocaleDateString()}.

  Tasks:
    - Write report
    - Review progress

  Progress:
    - Completed: 100%
    - Due date: ${new Date().toLocaleDateString()}
`;
});

project.addTask('Review progress', () => {
  console.log(`Project status: ${project.status}`);
});
