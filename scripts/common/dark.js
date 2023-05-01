function toggleDarkMode() {
  if (document.body.classList.contains('dark-mode')) {
    toLightTheme();
  } else {
    toDarkTheme();
  }
}

function toLightTheme() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
}

function toDarkTheme() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
}

if (localStorage.getItem('theme')) {
  const theme = localStorage.getItem('theme');
  if (theme == 'dark') {
    toDarkTheme();
  } else {
    toLightTheme();
  }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toDarkTheme();
} else {
  toLightTheme();
}