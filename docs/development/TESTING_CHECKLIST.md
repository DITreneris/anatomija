# ✅ Testavimo Checklist - Po Optimizacijų

## 🔍 Build ir Kodo Kokybė

- [x] Build sėkmingas be klaidų
- [x] Nėra linter klaidų
- [x] TypeScript kompiliuojasi be klaidų
- [x] CSS bundle sumažintas (68KB vs 376KB)

## 🎨 UI/UX Patikra

### Pagrindinis Puslapis (HomePage)
- [ ] Puslapis kraunasi be klaidų
- [ ] Progress indikatoriai rodomi teisingai
- [ ] Mygtukai veikia
- [ ] Dark mode veikia

### Modulių Sąrašas (ModulesPage)
- [ ] Visi moduliai rodomi
- [ ] Progress bar'ai veikia kiekvienam moduliui
- [ ] Locked moduliai rodomi teisingai
- [ ] Spalvos ir stiliai veikia (brand, test, practice)
- [ ] Mygtukai veikia (Pradėti/Tęsti/Peržiūrėti)
- [ ] Dark mode veikia

### Modulio Peržiūra (ModuleView)
- [ ] Moduliai kraunasi be klaidų
- [ ] Skaidrės keičiasi teisingai
- [ ] Navigacija veikia (← → klavišai)
- [ ] Progress bar'ai veikia
- [ ] Dark mode veikia

### Testo Puslapis (QuizPage)
- [ ] Klausimai rodomi teisingai
- [ ] Atsakymų pasirinkimas veikia
- [ ] Rezultatų skaičiavimas teisingas
- [ ] ≥70% riba veikia
- [ ] Dark mode veikia

### Promptų Biblioteka (PromptLibrary)
- [ ] Promptai rodomi
- [ ] Kopijavimas veikia
- [ ] Dark mode veikia

## 🧪 Funkcionalumo Testavimas

### Progreso Sekimas
- [ ] localStorage išsaugo progresą
- [ ] Progresas atsikrauna po refresh
- [ ] Modulių atrakinimas veikia (1→2→3)
- [ ] Testo rezultatai išsaugomi

### Auto-save
- [ ] Praktinėse užduotyse auto-save veikia
- [ ] Debounce veikia (ne per daug save)
- [ ] Duomenys neprarandami

### Navigacija
- [ ] Klaviatūros navigacija veikia (← →)
- [ ] Escape grįžta atgal
- [ ] Mygtukai veikia

### Dark/Light Mode
- [ ] Perjungimas veikia
- [ ] Išsaugo pasirinkimą
- [ ] Visi komponentai atrodo gerai abiejuose režimuose

## 📱 Responsive Dizainas

- [ ] Mobile (< 640px) veikia
- [ ] Tablet (640px - 1024px) veikia
- [ ] Desktop (> 1024px) veikia
- [ ] Visi komponentai responsive

## ♿ Accessibility

- [ ] ARIA labels yra
- [ ] Focus ring veikia
- [ ] Klaviatūros navigacija veikia
- [ ] Kontrastas pakankamas

## 🎉 Animacijos

- [ ] Confetti veikia (užduočių/modulių/testo užbaigimas)
- [ ] Transitions veikia
- [ ] Loading states veikia

## 🐛 Klaidų Valdymas

- [ ] Error Boundary veikia
- [ ] Klaidų pranešimai aiškūs
- [ ] Retry funkcija veikia

## 📊 Performance

- [ ] Initial load < 3s
- [ ] Lazy loading veikia
- [ ] Bundle size < 500KB (gzipped)

---

**Pastaba:** Šis checklist yra perkeltas į `docs/development/` katalogą kaip dalis dokumentacijos organizavimo.
