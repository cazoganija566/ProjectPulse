function getProjectName(): string {
  const projects = ["My Project", "Your Project", "Our Project"];
  return projects[Math.floor(Math.random() * projects.length)];
}
