//getIconParent
const homeAnchor = document.getElementById('homeAnchor');
const abouta = document.getElementById('loga');
const seta = document.getElementById('seta');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

//getIcon
const boutIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 24px; height: 24px; flex-shrink: 0;">
  <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25A.75.75 0 0 1 8 7.5h2.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM5.75 9.5a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 0-1.5H5.75Z" />
  <path fill-rule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clip-rule="evenodd" />
</svg>`;

const settingi = `<svg
  width="28"
  height="28"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="transform: rotate(-20deg);"  <!-- tilt -->
>
  <!-- bigger left plate -->
  <rect x="6" y="20" width="8" height="24" rx="2" fill="currentColor"/>
  <rect x="14" y="24" width="4" height="16" rx="1" fill="currentColor"/>

  <!-- bar -->
  <rect x="18" y="30" width="28" height="4" rx="2" fill="currentColor"/>

  <!-- bigger right plate -->
  <rect x="46" y="20" width="8" height="24" rx="2" fill="currentColor"/>
  <rect x="42" y="24" width="4" height="16" rx="1" fill="currentColor"/>
</svg>
`

const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 28px; height: 24px; flex-shrink: 0;">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>
`;

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 28px; height: 24px; flex-shrink: 0;">
  <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
</svg>
`;

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style="width: 25px; height: 25px; flex-shrink: 0;">
  <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
</svg>
`;

//addIcon
homeAnchor.innerHTML = homeIcon + 'Home';
abouta.innerHTML = boutIcon + 'Log';
seta.innerHTML = settingi + 'Workout';
toggleThemeBtn.innerHTML = sunIcon + 'Theme';

const html = document.documentElement;
const theme = localStorage.getItem('theme') || 'light';

window.onload = () => {
  html.setAttribute('data-theme', theme);
  if (theme === 'light') {
    toggleThemeBtn.innerHTML = sunIcon + 'Theme';
  } else {
    toggleThemeBtn.innerHTML = moonIcon + 'Theme';
  }
};

function toggleTheme() {
  const current = html.getAttribute('data-theme');
  html.setAttribute(
    'data-theme',
    current === 'light' ? 'dark' : 'light'
  );
  if (current === 'dark') {
    toggleThemeBtn.innerHTML = sunIcon + 'Theme';
  } else {
    toggleThemeBtn.innerHTML = moonIcon + 'Theme';
  }
  localStorage.setItem('theme', 
  current === 'light' ? 'dark' : 'light');
}

let pieval = Math.floor(Math.random() * 100);
document.documentElement.style.setProperty("--pct", pieval);

const logcont = document.getElementById("logcont");

window.addEventListener('load', () => {
  const logs = JSON.parse(localStorage.getItem('workoutLog') || '[]');
  logcont.innerHTML = '';
  logs.forEach(item => {
    const p = document.createElement('p');
    const safeDate = item.date ? item.date.slice(0, 10) : (new Date()).toISOString().slice(0,10);
    p.textContent = `${safeDate} - ${item.workout} – ${item.set} x ${item.rep}`;
    p.style.color = 'var(--text)';
    logcont.appendChild(p);
  });
  logcont.style.opacity = '1';
   
  const today = new Date();
  console.log(logs);
});

function addlog() {
const today = new Date().toISOString().slice(0, 10);
const workout = document.getElementById("inwrkout").value;
const sets = document.getElementById("insts").value;
const reps = document.getElementById("inrps").value;

const logs = JSON.parse(localStorage.getItem('workoutLog') || '[]');

  logs.push({
    date: today,
    workout: workout,
    set: sets,
    rep: reps
  });

  localStorage.setItem('workoutLog', JSON.stringify(logs));

const p = document.createElement('p');
    p.textContent = `${today} – ${workout} - ${sets} x ${reps}`;
    p.style.color = 'var(--text)';
    logcont.appendChild(p);
}

//localStorage.clear();
