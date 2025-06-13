const translations = {
  en: {
    subjectPlaceholder: "e.g., A brave knight",
    actionPlaceholder: "e.g., fighting a dragon",
    expressionPlaceholder: "e.g., determined and focused",
    placePlaceholder: "e.g., inside a dark cave",
    additionalDetailsPlaceholder: "Any extra specific details...",
    generateButton: "Generate Veo 3 Prompt",
    copyButton: "Copy Prompt",
    messageCopied: "Prompt copied to clipboard!",
    manualCopyRequired: "Failed to copy automatically. Please copy manually.",
  },
  id: {
    subjectPlaceholder: "cth: Seorang ksatria pemberani",
    actionPlaceholder: "cth: melawan naga",
    expressionPlaceholder: "cth: bertekad dan fokus",
    placePlaceholder: "cth: di dalam gua yang gelap",
    additionalDetailsPlaceholder: "Setiap detail tambahan spesifik...",
    generateButton: "Buat Prompt Veo 3",
    copyButton: "Salin Prompt",
    messageCopied: "Prompt berhasil disalin!",
    manualCopyRequired: "Gagal menyalin otomatis. Silakan salin secara manual.",
  },
};

let currentLang = 'en';

function updateUI() {
  document.querySelector("#subjectInput").placeholder = translations[currentLang].subjectPlaceholder;
  document.querySelector("#actionInput").placeholder = translations[currentLang].actionPlaceholder;
  document.querySelector("#expressionInput").placeholder = translations[currentLang].expressionPlaceholder;
  document.querySelector("#placeInput").placeholder = translations[currentLang].placePlaceholder;
  document.querySelector("#additionalDetails").placeholder = translations[currentLang].additionalDetailsPlaceholder;
  document.querySelector("#generateBtn").textContent = translations[currentLang].generateButton;
  document.querySelector("#copyBtn").textContent = translations[currentLang].copyButton;
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  updateUI();
});

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("darkModeToggle").textContent =
    document.body.classList.contains("dark") ? "☀️ Mode Terang" : "🌙 Mode Gelap";
});

document.getElementById("generateBtn").addEventListener("click", () => {
  const subject = document.getElementById("subjectInput").value.trim();
  const action = document.getElementById("actionInput").value.trim();
  const expression = document.getElementById("expressionInput").value.trim();
  const place = document.getElementById("placeInput").value.trim();
  const details = document.getElementById("additionalDetails").value.trim();

  if (!subject) {
    alert(translations[currentLang].messageNoSubject || "Please enter at least the subject.");
    return;
  }

  let prompt = `Subject: ${subject}\nAction: ${action}\nExpression: ${expression}\nPlace: ${place}`;
  if (details) prompt += `\nAdditional Details: ${details}`;

  document.getElementById("generatedPrompt").textContent = prompt;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("generatedPrompt").textContent;
  navigator.clipboard.writeText(text)
    .then(() => alert(translations[currentLang].messageCopied))
    .catch(() => alert(translations[currentLang].manualCopyRequired));
});
