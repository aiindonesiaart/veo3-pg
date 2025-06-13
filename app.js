// === CONFIGURATION ===
const STORAGE_KEY_SUBJECTS = 'veo3_saved_subjects';
const STORAGE_KEY_PLACE = 'veo3_saved_place';

// === TRANSLATIONS ===
const uiTranslations = {
  en: {
    pageTitle: "Veo 3 Prompt Generator",
    mainTitle: "Veo 3 Prompt Generator",
    pageDescription: "Craft detailed and effective prompts for Veo 3 with ease.",
    addSubject: "Add Subject",
    saveSubjects: "Save Subjects",
    loadSubjects: "Load Subjects",
    clearSubjects: "Clear Subjects",
    savePlace: "Save Place",
    loadPlace: "Load Place",
    clearPlace: "Clear Place",
    generateButton: "Generate Veo 3 Prompt",
    copyButton: "Copy Prompt",
    randomizeButton: "Randomize Prompt",
    clearAllInputsButton: "Clear All",
    messageNoSubject: "Please enter at least the subject to create a basic prompt.",
    messageCopied: "Prompt copied to clipboard!",
    manualCopyRequired: "Failed to copy automatically. Please copy manually.",
    inputsSaved: "Inputs saved successfully!",
    noSavedInputs: "No saved inputs found.",
    inputsLoaded: "Inputs loaded successfully!",
    savedInputsCleared: "Saved inputs cleared!",
    darkModeText: "Dark Mode",
    languageText: "Language",
    generatedPromptOutputLabel: "Generated Prompt:",
    additionalDetailsLabel: "12. Additional Details (optional):"
  },
  id: {
    pageTitle: "Generator Prompt Veo 3",
    mainTitle: "Generator Prompt Veo 3",
    pageDescription: "Buat prompt yang detail dan efektif untuk Veo 3 dengan mudah.",
    addSubject: "Tambah Subjek",
    saveSubjects: "Simpan Subjek",
    loadSubjects: "Muat Subjek",
    clearSubjects: "Hapus Subjek",
    savePlace: "Simpan Tempat",
    loadPlace: "Muat Tempat",
    clearPlace: "Hapus Tempat",
    generateButton: "Buat Prompt Veo 3",
    copyButton: "Salin Prompt",
    randomizeButton: "Acak Prompt",
    clearAllInputsButton: "Hapus Semua",
    messageNoSubject: "Harap isi setidaknya Subjek untuk membuat prompt dasar.",
    messageCopied: "Prompt berhasil disalin!",
    manualCopyRequired: "Gagal menyalin otomatis. Silakan salin secara manual.",
    inputsSaved: "Input berhasil disimpan!",
    noSavedInputs: "Tidak ada input tersimpan.",
    inputsLoaded: "Input berhasil dimuat!",
    savedInputsCleared: "Input tersimpan dihapus!",
    darkModeText: "Mode Gelap",
    languageText: "Bahasa",
    generatedPromptOutputLabel: "Prompt yang Dihasilkan:",
    additionalDetailsLabel: "12. Detail Tambahan (opsional):"
  }
};

// === PROMPT CONTENT TRANSLATIONS ===
const promptContentTranslations = {
  en: {
    "A brave knight": "A brave knight",
    "fighting a dragon": "fighting a dragon",
    "determined and focused": "determined and focused",
    "inside a dark cave": "inside a dark cave",
    "The scene depicts": "The scene depicts",
    "with a": "with a",
    "in a": "in a",
    "in": "in"
  },
  id: {
    "A brave knight": "Seorang ksatria pemberani",
    "fighting a dragon": "melawan naga",
    "determined and focused": "bertekad dan fokus",
    "inside a dark cave": "di dalam gua yang gelap",
    "The scene depicts": "Adegan menggambarkan",
    "with a": "dengan",
    "in a": "dalam sebuah",
    "in": "di"
  }
};

// === SELECT OPTIONS ===
const timeOptions = [
  { value: "", en: "-- Select Time --", id: "-- Pilih Waktu --" },
  { value: "day", en: "Day", id: "Siang" },
  { value: "morning", en: "Morning", id: "Pagi" },
  { value: "afternoon", en: "Afternoon", id: "Sore" },
  { value: "evening", en: "Evening", id: "Malam" },
  { value: "night", en: "Night", id: "Malam" },
  { value: "golden hour", en: "Golden Hour", id: "Jam Emas" },
  { value: "blue hour", en: "Blue Hour", id: "Jam Biru" }
];

const cameraMovementOptions = [
  { value: "", en: "-- Select Camera Movement --", id: "-- Pilih Gerakan Kamera --" },
  { value: "pan", en: "Pan", id: "Pan" },
  { value: "tilt", en: "Tilt", id: "Tilt" },
  { value: "dolly", en: "Dolly", id: "Dolly" },
  { value: "zoom in", en: "Zoom In", id: "Zoom In" },
  { value: "zoom out", en: "Zoom Out", id: "Zoom Out" },
  { value: "tracking shot", en: "Tracking Shot", id: "Shot Pelacakan" },
  { value: "crane shot", en: "Crane Shot", id: "Shot Derek" },
  { value: "handheld", en: "Handheld", id: "Genggam" },
  { value: "static shot", en: "Static Shot", id: "Shot Statis" },
  { value: "dutch angle", en: "Dutch Angle", id: "Sudut Belanda" },
  { value: "POV (Point of View)", en: "POV (Point of View)", id: "POV (Sudut Pandang)" }
];

const lightingOptions = [
  { value: "", en: "-- Select Lighting --", id: "-- Pilih Pencahayaan --" },
  { value: "soft natural light", en: "Soft Natural Light", id: "Cahaya Alami Lembut" },
  { value: "dramatic chiaroscuro", en: "Dramatic Chiaroscuro", id: "Chiaroscuro Dramatis" },
  { value: "neon glow", en: "Neon Glow", id: "Cahaya Neon" },
  { value: "backlight", en: "Backlight", id: "Cahaya Belakang" },
  { value: "rim light", en: "Rim Light", id: "Cahaya Tepi" },
  { value: "low key", en: "Low Key", id: "Low Key" },
  { value: "high key", en: "High Key", id: "High Key" }
];

const videoStyleOptions = [
  { value: "", en: "-- Select Video Style --", id: "-- Pilih Gaya Video --" },
  { value: "Studio Ghibli inspired", en: "Studio Ghibli inspired", id: "Terinspirasi Studio Ghibli" },
  { value: "cyberpunk", en: "Cyberpunk", id: "Cyberpunk" },
  { value: "hyperrealistic", en: "Hyperrealistic", id: "Hiperrealistis" },
  { value: "impressionistic", en: "Impressionistic", id: "Impresionistik" },
  { value: "anime", en: "Anime", id: "Anime" },
  { value: "cinematic", en: "Cinematic", id: "Sinematik" },
  { value: "documentary", en: "Documentary", id: "Dokumenter" },
  { value: "vintage film", en: "Vintage Film", id: "Film Vintage" },
  { value: "stop motion", en: "Stop Motion", id: "Stop Motion" }
];

const videoAtmosphereOptions = [
  { value: "", en: "-- Select Atmosphere --", id: "-- Pilih Atmosfer --" },
  { value: "serene", en: "Serene", id: "Tenang" },
  { value: "intense", en: "Intense", id: "Intens" },
  { value: "whimsical", en: "Whimsical", id: "Aneh/Fantasi" },
  { value: "melancholic", en: "Melancholic", id: "Melankolis" },
  { value: "mysterious", en: "Mysterious", id: "Misterius" },
  { value: "thrilling", en: "Thrilling", id: "Mendebarkan" },
  { value: "peaceful", en: "Peaceful", id: "Damai" },
  { value: "chaotic", en: "Chaotic", id: "Kacau" }
];

// === RANDOM EXAMPLES ===
const randomSubjects = ["A brave knight", "A curious scientist", "An adventurous explorer"];
const randomActions = ["fighting a dragon", "discovering an ancient artifact", "exploring a forgotten temple"];
const randomExpressions = ["determined and focused", "curious and excited", "calm and composed"];
const randomPlaces = ["inside a dark cave", "on a floating island", "in a futuristic city"];

// === DOM ELEMENTS ===
const subjectInputsContainer = document.getElementById('subjectInputsContainer');
const actionInput = document.getElementById('action');
const expressionInput = document.getElementById('expression');
const placeInput = document.getElementById('place');

const timeSelect = document.getElementById('timeSelect');
const cameraMovementSelect = document.getElementById('cameraMovementSelect');
const lightingSelect = document.getElementById('lightingSelect');
const videoStyleSelect = document.getElementById('videoStyleSelect');
const videoAtmosphereSelect = document.getElementById('videoAtmosphereSelect');

const outputElement = document.getElementById('output');
const messageBox = document.getElementById('messageBox');

const addSubjectBtn = document.getElementById('addSubjectBtn');
const saveSubjectsBtn = document.getElementById('saveSubjectsBtn');
const loadSubjectsBtn = document.getElementById('loadSubjectsBtn');
const clearSubjectsBtn = document.getElementById('clearSubjectsBtn');

const savePlaceBtn = document.getElementById('savePlaceBtn');
const loadPlaceBtn = document.getElementById('loadPlaceBtn');
const clearPlaceBtn = document.getElementById('clearPlaceBtn');

const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const randomizeBtn = document.getElementById('randomizeBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

const darkModeTogglers = document.querySelectorAll('.dark-mode-toggle');
const languageTogglers = document.querySelectorAll('.language-toggle');

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const stackedMobileMenuContainer = document.getElementById('stackedMobileMenuContainer');
const mobileMenuIcon = document.getElementById('mobileMenuIcon');

let currentLang = 'en';

// === FUNCTIONS ===
function populateSelect(selectElement, options) {
  selectElement.innerHTML = '';
  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option[currentLang];
    selectElement.appendChild(opt);
  });
}

function getPromptContentTranslation(key, lang) {
  return promptContentTranslations[lang]?.[key] || key;
}

function updateUI() {
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.getAttribute('data-i18n-key');
    if (uiTranslations[currentLang][key]) {
      el.textContent = uiTranslations[currentLang][key];
    }
  });

  // Update placeholders
  document.querySelector('#subjectInputsContainer input').placeholder = getPromptContentTranslation("cth: Seorang ksatria pemberani", currentLang);
  actionInput.placeholder = getPromptContentTranslation("cth: melawan naga", currentLang);
  expressionInput.placeholder = getPromptContentTranslation("cth: bertekad dan fokus", currentLang);
  placeInput.placeholder = getPromptContentTranslation("cth: di dalam gua yang gelap", currentLang);

  // Repopulate selects with translated labels
  populateSelect(timeSelect, timeOptions);
  populateSelect(cameraMovementSelect, cameraMovementOptions);
  populateSelect(lightingSelect, lightingOptions);
  populateSelect(videoStyleSelect, videoStyleOptions);
  populateSelect(videoAtmosphereSelect, videoAtmosphereOptions);
}

function showMessageBox(message) {
  messageBox.textContent = message;
  messageBox.classList.remove('hidden');
  setTimeout(() => {
    messageBox.classList.add('hidden');
  }, 3000);
}

function saveSubjects() {
  const subjects = Array.from(document.querySelectorAll('.subject-input')).map(input => input.value.trim());
  localStorage.setItem(STORAGE_KEY_SUBJECTS, JSON.stringify(subjects));
  showMessageBox(uiTranslations[currentLang].inputsSaved);
}

function loadSubjects() {
  const savedSubjects = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBJECTS));
  if (!savedSubjects || savedSubjects.length === 0) {
    showMessageBox(uiTranslations[currentLang].noSavedInputs);
    return;
  }

  while (subjectInputsContainer.children.length > 1) {
    subjectInputsContainer.removeChild(subjectInputsContainer.lastChild);
  }

  const firstInput = subjectInputsContainer.querySelector('.subject-input');
  firstInput.value = savedSubjects[0];

  for (let i = 1; i < savedSubjects.length; i++) {
    addSubjectInput(savedSubjects[i]);
  }

  showMessageBox(uiTranslations[currentLang].inputsLoaded);
}

function clearSubjects() {
  while (subjectInputsContainer.children.length > 1) {
    subjectInputsContainer.removeChild(subjectInputsContainer.lastChild);
  }
  subjectInputsContainer.querySelector('.subject-input').value = '';
  localStorage.removeItem(STORAGE_KEY_SUBJECTS);
  showMessageBox(uiTranslations[currentLang].savedInputsCleared);
}

function savePlace() {
  const place = placeInput.value.trim();
  if (!place) return showMessageBox("Please enter a place to save.");
  localStorage.setItem(STORAGE_KEY_PLACE, place);
  showMessageBox("Place saved!");
}

function loadPlace() {
  const savedPlace = localStorage.getItem(STORAGE_KEY_PLACE);
  if (!savedPlace) return showMessageBox("No saved place found.");
  placeInput.value = savedPlace;
  showMessageBox("Place loaded!");
}

function clearPlace() {
  placeInput.value = '';
  localStorage.removeItem(STORAGE_KEY_PLACE);
  showMessageBox("Place cleared!");
}

function addSubjectInput(value = '') {
  const newDiv = document.createElement('div');
  newDiv.className = 'flex items-center gap-2';
  newDiv.innerHTML = `
    <input class="flex-1 p-2 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-200 shadow-sm subject-input" type="text" value="${value}" />
    <button class="btn-red remove-btn px-2 py-1 rounded hover:bg-red-600">Hapus</button>
  `;
  subjectInputsContainer.appendChild(newDiv);

  newDiv.querySelector('.remove-btn').addEventListener('click', () => {
    if (subjectInputsContainer.children.length > 1) {
      subjectInputsContainer.removeChild(newDiv);
    } else {
      newDiv.querySelector('.subject-input').value = '';
    }
  });

  newDiv.querySelector('.subject-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      generateAndDisplayPrompt();
    }
  });
}

function generateAndDisplayPrompt() {
  const subjects = Array.from(document.querySelectorAll('.subject-input')).map(i => i.value.trim()).filter(Boolean);
  const action = actionInput.value.trim();
  const expression = expressionInput.value.trim();
  const place = placeInput.value.trim();
  const time = timeSelect.value;
  const cameraMovement = cameraMovementSelect.value;
  const lighting = lightingSelect.value;
  const videoStyle = videoStyleSelect.value;
  const videoAtmosphere = videoAtmosphereSelect.value;
  const additionalDetails = document.getElementById('additionalDetails').value.trim();

  if (subjects.length === 0) {
    alert(uiTranslations[currentLang].messageNoSubject);
    return;
  }

  let prompt = `${getPromptContentTranslation("The scene depicts", currentLang)} ${subjects.join(', ')}`;
  if (action) prompt += `, ${getPromptContentTranslation("with a", currentLang)} ${action}`;
  if (expression) prompt += `, ${getPromptContentTranslation("in a", currentLang)} ${expression} manner`;
  if (place) prompt += `, ${getPromptContentTranslation("in", currentLang)} ${place}`;
  if (time) prompt += `. Time: ${timeSelect.options[timeSelect.selectedIndex].textContent}`;
  if (cameraMovement) prompt += `. Camera: ${cameraMovementSelect.options[cameraMovementSelect.selectedIndex].textContent}`;
  if (lighting) prompt += `. Lighting: ${lightingSelect.options[lightingSelect.selectedIndex].textContent}`;
  if (videoStyle) prompt += `. Style: ${videoStyleSelect.options[videoStyleSelect.selectedIndex].textContent}`;
  if (videoAtmosphere) prompt += `. Atmosphere: ${videoAtmosphereSelect.options[videoAtmosphereSelect.selectedIndex].textContent}`;
  if (additionalDetails) prompt += `. ${getPromptContentTranslation("Additional details:", currentLang)} ${additionalDetails}`;

  outputElement.textContent = prompt;
}

function copyToClipboard() {
  const text = outputElement.textContent;
  navigator.clipboard.writeText(text)
    .then(() => showMessageBox(uiTranslations[currentLang].messageCopied))
    .catch(() => alert(uiTranslations[currentLang].manualCopyRequired));
}

function randomizePrompt() {
  actionInput.value = getRandomElement(randomActions);
  expressionInput.value = getRandomElement(randomExpressions);
  placeInput.value = getRandomElement(randomPlaces);
  timeSelect.value = getRandomElement(timeOptions.filter(o => o.value !== '')).value;
  cameraMovementSelect.value = getRandomElement(cameraMovementOptions.filter(o => o.value !== '')).value;
  lightingSelect.value = getRandomElement(lightingOptions.filter(o => o.value !== '')).value;
  videoStyleSelect.value = getRandomElement(videoStyleOptions.filter(o => o.value !== '')).value;
  videoAtmosphereSelect.value = getRandomElement(videoAtmosphereOptions.filter(o => o.value !== '')).value;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  darkModeTogglers.forEach(btn => {
    btn.querySelector('.dark-mode-icon').textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  updateUI();
}

function setupEventListeners() {
  addSubjectBtn.addEventListener('click', addSubjectInput);
  saveSubjectsBtn.addEventListener('click', saveSubjects);
  loadSubjectsBtn.addEventListener('click', loadSubjects);
  clearSubjectsBtn.addEventListener('click', clearSubjects);

  savePlaceBtn.addEventListener('click', savePlace);
  loadPlaceBtn.addEventListener('click', loadPlace);
  clearPlaceBtn.addEventListener('click', clearPlace);

  generateBtn.addEventListener('click', generateAndDisplayPrompt);
  copyBtn.addEventListener('click', copyToClipboard);
  randomizeBtn.addEventListener('click', randomizePrompt);
  clearAllBtn.addEventListener('click', () => {
    document.querySelectorAll('input, textarea, select').forEach(el => {
      if (el.type === 'text' || el.tagName.toLowerCase() === 'textarea') {
        el.value = '';
      } else if (el.tagName.toLowerCase() === 'select') {
        el.selectedIndex = 0;
      }
    });
    while (subjectInputsContainer.children.length > 1) {
      subjectInputsContainer.removeChild(subjectInputsContainer.lastChild);
    }
    subjectInputsContainer.querySelector('.subject-input').value = '';
    showMessageBox(uiTranslations[currentLang].savedInputsCleared);
  });

  darkModeTogglers.forEach(btn => {
    btn.addEventListener('click', toggleDarkMode);
  });

  languageTogglers.forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });

  mobileMenuToggle.addEventListener('click', () => {
    stackedMobileMenuContainer.classList.toggle('is-open');
    if (stackedMobileMenuContainer.classList.contains('is-open')) {
      stackedMobileMenuContainer.classList.remove('hidden');
      setTimeout(() => {
        mobileMenuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
      }, 10);
    } else {
      mobileMenuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`;
      setTimeout(() => {
        stackedMobileMenuContainer.classList.add('hidden');
      }, 300);
    }
  });
}

// === INITIALIZATION ===
function initApp() {
  populateSelect(timeSelect, timeOptions);
  populateSelect(cameraMovementSelect, cameraMovementOptions);
  populateSelect(lightingSelect, lightingOptions);
  populateSelect(videoStyleSelect, videoStyleOptions);
  populateSelect(videoAtmosphereSelect, videoAtmosphereOptions);
  updateUI();
  setupEventListeners();
}

initApp();
