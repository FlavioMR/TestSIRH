function toggleProject(card) {
  const header = card.querySelector('.project-header');
  const tasks = card.querySelectorAll('.task');
  const arrow = card.querySelector('.toggle-arrow');

  const isNowCollapsed = header.classList.toggle('collapsed');

  tasks.forEach(task => {
    if (isNowCollapsed) {
      task.style.display = 'none';
    } else {
      task.style.display = 'block';
    }
  });
}
