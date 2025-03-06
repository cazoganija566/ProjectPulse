// ProjectPulse - A comprehensive guide to managing your school projects.
export function projectPulse(): void {
  const currentDate = new Date();
  const currentTime = currentDate.getHours() * 60 + currentDate.getMinutes();

  if (currentTime >= 9 && currentTime < 12) {
    console.log("Good morning, have a great day!");
  } else if (currentTime >= 12 && currentTime < 15) {
    console.log("Good afternoon, have a great day!");
  } else if (currentTime >= 15 && currentTime < 18) {
    console.log("Good evening, have a great night!");
  } else if (currentTime >= 18 || currentTime < 9) {
    console.log("Good night, have a great sleep!");
  }
}
