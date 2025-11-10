# React Native / Expo Application (Structured & Scalable Architecture)

This project is built using **Expo** and organized with a clean and scalable **SRC-based architecture**.  
The default `app/` directory used by Expo Router remains **untouched**, and the project can be developed entirely from `src/`.

---

## 🧱 Project Goals

- Maintain **clean folder separation**
- Support **long-term scalable development**
- Keep onboarding **easy for new developers**
- Allow optional usage of **Expo Router** or **React Navigation**

---

## 🚀 Tech Stack

| Category | Technology |
|---------|------------|
| Framework | Expo + React Native |
| Language | TypeScript |
| Package Manager | **pnpm** (recommended) |
| Navigation | React Navigation |
| API Client | Fetch / Axios (client wrapper in `services/api/client.ts`) |
| Storage | AsyncStorage / MMKV (wrapper in `services/storage.ts`) |
| Testing | Jest + React Testing Library |

---

## 📦 Installation

```bash
pnpm install
pnpm expo start


---

## 🧱 Git
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.
git remote set-url origin https://github.com/navi4347/ReactNative_myapp.git
git status
git branch
git push --set-upstream origin master
git push

## Folder Stcture
MY-APP/
│
├─ .env
├─ .env.example
├─ .gitignore
├─ app.json
├─ package.json
├─ eslint.config.js
├─ tsconfig.json
├─ README.md
│
├─ app/                          # Expo Router (not modified)
│
├─ src/
│  ├─ index.tsx                  # App entry file
│  ├─ App.tsx                    # Root wrapper for navigation/theme/providers
│  │
│  ├─ navigation/
│  │  ├─ AppNavigator.tsx
│  │  ├─ MainTabNavigator.tsx
│  │  └─ AuthStackNavigator.tsx
│  │
│  ├─ screens/
│  │  ├─ SplashScreen.tsx
│  │  ├─ NotFoundScreen.tsx
│  │  ├─ LoginScreen.tsx
│  │  ├─ SignInScreen.tsx
│  │  │
│  │  ├─ Home/
│  │  │  └─ HomeScreen.tsx
│  │  └─ Dashboard/
│  │     └─ DashboardScreen.tsx
│  │
│  ├─ pages/
│  │  ├─ AboutPage.tsx
│  │  ├─ ProfilePage.tsx
│  │  └─ SettingsPage.tsx
│  │
│  ├─ components/
│  │  ├─ shared/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ Icon.tsx
│  │  │  ├─ Loader.tsx
│  │  │  └─ index.ts
│  │  └─ ui/
│  │     └─ (add UI primitives later)
│  │
│  ├─ hooks/
│  │  ├─ useAuth.ts
│  │  └─ useFetch.ts
│  │
│  ├─ services/
│  │  ├─ api/
│  │  │  ├─ client.ts
│  │  │  └─ auth.ts
│  │  └─ storage.ts
│  │
│  ├─ store/
│  │  └─ index.ts
│  │
│  ├─ constants/
│  │  └─ index.ts
│  │
│  ├─ utils/
│  │  └─ format.ts
│  │
│  ├─ theme/
│  │  ├─ colors.ts
│  │  ├─ typography.ts
│  │  └─ spacing.ts
│  │
│  ├─ assets/
│  │  ├─ images/logo.png
│  │  ├─ fonts/Inter-Regular.ttf
│  │  ├─ json/sample-data.json
│  │  └─ loaders/spinner.json
│  │
│  └─ types/
│     └─ index.d.ts
│
├─ server/                      # Optional local backend mock
│  └─ (extend when backend needed)
│
├─ tests/
│  ├─ __tests__/
│  └─ setupTests.ts
│
└─ scripts/
   ├─ folderstructure.js         # Creates missing folders only (non-destructive)
   └─ reset-project.js           # Removes generated structure (safe reset)

