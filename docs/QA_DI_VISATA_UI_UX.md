# QA: DI Visata skaidrės UI/UX atitikimas

> **Data:** 2026-02-07  
> **Tikslas:** Patikrinti, ar „DI Visata: kaip viskas susiję“ skaidrė atitinka projekto spalvas, stilių ir UX gaires.

---

## 1. Projekto dizaino sistema

| Elementas | Reikšmė |
|-----------|---------|
| **Brand** | Navy (#627d98) – pasitikėjimas, profesionalumas |
| **Accent** | Auksas (#d4a520) – pasiekimai, CTA |
| **Slate** | Neutralus pilkas – UI elementai |
| **Šriftas** | Plus Jakarta Sans |
| **Radius** | rounded-xl (kortelės), rounded-2xl (hero) |
| **Border** | border-l-4 – paryškintas kairys kraštas blokams |

---

## 2. Patikrinta atitiktis

| Komponentas | Projekto pattern | Statusas |
|-------------|------------------|----------|
| **Esminė žinutė (accent blokas)** | `bg-brand-50 dark:bg-brand-900/20 border-l-4 border-l-brand-500` | ✅ Atitinka (kaip AllSlides kiti brand blokai) |
| **Terminai (terms blokas)** | `bg-slate-50 dark:bg-slate-800/60` – atskirtas nuo brand | ✅ Atitinka |
| **Atpažinimo pratimas** | `bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500` | ✅ Atitinka (kaip PracticalTask, CTA) |
| **Pasirinkimų badge'ai** | `bg-brand-100 dark:bg-brand-900/30 text-brand-700` | ✅ Atitinka badge-brand |
| **Palyginimo vaizdai** | `rounded-xl border-gray-200 dark:border-gray-700` | ✅ Atitinka |
| **Šaltiniai** | `text-xs text-gray-500 dark:text-gray-400 italic` | ✅ Atitinka |

---

## 3. UX gairės (iš TEST_REPORT)

- **Vizualinė hierarchija** – accent blokas (brand) viršuje, terminai (slate) žemiau, praktika (accent) – CTA
- **Skenuojamumas** – antraštės (font-bold text-lg), bullet points, **bold** svarbiems žodžiams
- **Touch targets** – badge'ai min 44px (py-1.5 px-3 – pakanka)
- **Dark mode** – visi blokai turi dark: variantus

---

## 4. Pataisymai (2026-02-07)

- Pašalintos nestandartinės opacity: `/50`, `/30`, `/15` → naudojami safelist klasės
- Accent blokas: pridėta `border border-brand-200` vietoj `border-brand-800/50`
- Pasirinkimai: badge-brand stilius (brand-100, brand-700) vietoj neutralios pilkos
- Slate klasės pridėtos į tailwind safelist

---

## 5. CHECKS

- [x] Spalvos atitinka brand / accent / slate paletę
- [x] Blokų stiliai suderinti su kitomis skaidrėmis (WarmUpQuiz, PracticalTask, DiModalities)
- [x] Dark mode palaikomas
- [x] Safelist atnaujintas
