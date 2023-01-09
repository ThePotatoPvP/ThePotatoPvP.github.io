// Settings menu
const settingsDropdown = document.querySelector('.settings-dropdown');
const settingsLight = document.querySelector('.light-theme-settings')
const settingsDark = document.querySelector('.dark-theme-settings')

function backHome() {
  window.location.href = '../index.html'
}

function openSettingsDropdown() {
  settingsDropdown.style.display = 'block';
}

settingsLight.addEventListener('click', openSettingsDropdown);
settingsDark.addEventListener('click', openSettingsDropdown);

document.body.addEventListener('click', (event) => {
  if (!settingsDropdown.contains(event.target) 
  && event.target !== settingsDark && event.target !== settingsLight) {
    settingsDropdown.style.display = 'none';
  }
});



// Theme selector in menu
const themeSwitch = document.querySelector('#theme-switch');
const lightThemeIcon = document.querySelector('#sun-icon');
const darkThemeIcon = document.querySelector('#moon-icon');

function toggleDarkTheme() {
  document.body.classList.add('dark-theme');
  settingsLight.style.display = 'none';
  settingsDark.style.display = 'block';
  darkThemeIcon.style.display = 'block';
  lightThemeIcon.style.display = 'none';
}

function toggleLightTheme() {
  document.body.classList.remove('dark-theme');
  settingsDark.style.display = 'none';
  settingsLight.style.display = 'block';
  darkThemeIcon.style.display = 'none';
  lightThemeIcon.style.display = 'block';
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitch.checked = true;
    toggleDarkTheme();
} else {
    themeSwitch.checked = false;
    settingsDark.style.display = 'none';
    settingsLight.style.display = 'block';
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'block';
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    toggleDarkTheme();
  } else {
    toggleLightTheme();
  }
});