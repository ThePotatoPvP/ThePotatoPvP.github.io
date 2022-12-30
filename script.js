// Yolo js time

// Cookie Consent
const closeButton = document.querySelector('.close-button');
const cookieConsent = document.querySelector('.cookie-consent');
const pageContent = document.querySelector('.page-content')
const lastVisit = localStorage.getItem('lastVisit');

closeButton.addEventListener('click', () => {
  cookieConsent.style.display = 'none';
  pageContent.classList.remove('blur');
});

if (lastVisit) {
    const now = new Date();
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = now - lastVisitDate;
    const tenMinutesInMilliseconds = 10 * 60 * 1000;
    if (timeDifference < tenMinutesInMilliseconds) {
      cookieConsent.style.display = 'none';
    } else {
        pageContent.classList.add('blur')
    }
} else {
    pageContent.classList.add('blur')
}

localStorage.setItem('lastVisit', new Date());



// Settings menu on  main page
const settingsDropdown = document.querySelector('.settings-dropdown');
const settingsLight = document.querySelector('.light-theme-settings')
const settingsDark = document.querySelector('.dark-theme-settings')

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

const themeCookie = getCookie("theme");

if (themeCookie !== "") {
  if (themeCookie === "dark") {
    themeSwitch.checked = true;
    document.body.classList.add('dark-theme');
    settingsLight.style.display = 'none';
    settingsDark.style.display = 'block';
    darkThemeIcon.style.display = 'block';
    lightThemeIcon.style.display = 'none';
    setCookie('theme', 'dark', 7);
  } else {
    themeSwitch.checked = false;
    settingsDark.style.display = 'none';
    settingsLight.style.display = 'block';
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'block';
    setCookie('theme', 'light', 7);
  }
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeSwitch.checked = true;
    document.body.classList.add('dark-theme');
    settingsLight.style.display = 'none';
    settingsDark.style.display = 'block';
    darkThemeIcon.style.display = 'block';
    lightThemeIcon.style.display = 'none';
    setCookie('theme', 'dark', 7);
  } else {
    themeSwitch.checked = false;
    settingsDark.style.display = 'none';
    settingsLight.style.display = 'block';
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'block';
    setCookie('theme', 'light', 7);
  }
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    document.body.classList.add('dark-theme');
    settingsLight.style.display = 'none';
    settingsDark.style.display = 'block';
    darkThemeIcon.style.display = 'block';
    lightThemeIcon.style.display = 'none';
    setCookie('theme', 'dark', 7);
  } else {
    document.body.classList.remove('dark-theme');
    settingsDark.style.display = 'none';
    settingsLight.style.display = 'block';
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'block';
    setCookie('theme', 'light', 7);
  }
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

function setCookie(name, value, days) {
  // Création de la date d'expiration du cookie
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  // Mise en place du cookie
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Language selector
const languageButtons = document.querySelectorAll('.language-icon');

languageButtons.forEach(button => {
  button.addEventListener('click', event => {
    const language = event.target.textContent;
    localStorage.setItem('language', language);
    location.reload();
  });
});



// Columns
const leftColumn = document.querySelector('.left-column')

leftColumn.addEventListener('click', function() {
  window.location.href = 'projects.html';
});

const rightColumn = document.querySelector('.right-column')

rightColumn.addEventListener('click', function() {
  window.location.href = 'games.html';
});

