#!/usr/bin/env node

/**
 * Auto-create full src/ project structure (non-destructive).
 * - Does NOT touch /app folder.
 * - Does NOT delete anything.
 * - Only creates missing directories and placeholder files.
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();

// ---- Ensure root-level .env / .env.example ----
const envFile = path.join(root, ".env");
const envExampleFile = path.join(root, ".env.example");

if (!fs.existsSync(envFile)) {
  fs.writeFileSync(envFile, "API_URL=\nTOKEN=\n");
  console.log("✔️ Created .env");
}

if (!fs.existsSync(envExampleFile)) {
  fs.writeFileSync(envExampleFile, "API_URL=<YOUR_API_URL>\nTOKEN=<YOUR_TOKEN>\n");
  console.log("✔️ Created .env.example");
}

// ---- Ensure /scripts/reset-project.js ----
const scriptsDir = path.join(root, "scripts");
const resetScript = path.join(scriptsDir, "reset-project.js");

if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir);
  console.log("📁 Created /scripts directory");
}

if (!fs.existsSync(resetScript)) {
  fs.writeFileSync(resetScript, `#!/usr/bin/env node
// Reset script placeholder — non-destructive
console.log("Project reset script placeholder. Customize if needed.");
`);
  console.log("✔️ Created scripts/reset-project.js");
}

// ---- SRC Folder Structure Definition ----
const tree = {
  "src": {
    "index.tsx": "// entry point",
    "App.tsx": "// root providers + navigation bootstrap",

    "navigation": {
      "AppNavigator.tsx": "// App root navigator",
      "MainTabNavigator.tsx": "// Bottom tabs",
      "AuthStackNavigator.tsx": "// Auth flow"
    },

    "screens": {
      "SplashScreen.tsx": "// splash screen",
      "NotFoundScreen.tsx": "// 404 fallback",
      "LoginScreen.tsx": "// login screen",
      "SignInScreen.tsx": "// register screen",
      "Home": {
        "HomeScreen.tsx": "// home screen"
      },
      "Dashboard": {
        "DashboardScreen.tsx": "// dashboard screen"
      }
    },

    "pages": {
      "AboutPage.tsx": "// About Page",
      "ProfilePage.tsx": "// Profile Page",
      "SettingsPage.tsx": "// Settings Page"
    },

    "components": {
      "shared": {
        "Button.tsx": "// Button component",
        "Header.tsx": "// Header component",
        "Icon.tsx": "// Icon component",
        "Loader.tsx": "// Loader component",
        "index.ts": "// re-exports shared components"
      },
      "ui": {}
    },

    "hooks": {
      "useAuth.ts": "// auth hook",
      "useFetch.ts": "// fetch hook"
    },

    "services": {
      "api": {
        "client.ts": "// axios instance / baseURL",
        "auth.ts": "// login / logout / register"
      },
      "storage.ts": "// AsyncStorage / MMKV wrapper"
    },

    "store": {
      "index.ts": "// zustand / redux store setup"
    },

    "constants": {
      "index.ts": "// global constants"
    },

    "utils": {
      "format.ts": "// format helpers"
    },

    "theme": {
      "colors.ts": "// color palette",
      "typography.ts": "// font sizes",
      "spacing.ts": "// spacing scale"
    },

    "assets": {
      "images": {
        "logo.png": ""
      },
      "json": {
        "sample-data.json": "{}"
      },
      "fonts": {
        "Inter-Regular.ttf": ""
      },
      "loaders": {
        "spinner.json": "{}"
      }
    },

    "types": {
      "index.d.ts": "// global types"
    }
  },

  "tests": {
    "__tests__": {
      "App.test.tsx": "// app test",
      "components": {
        "Button.test.tsx": "// button test"
      }
    },
    "setupTests.ts": "// jest setup"
  }
};

// ---- Recursive Builder ----
function createTree(base, obj) {
  for (const name in obj) {
    const fullPath = path.join(base, name);

    if (typeof obj[name] === "string") {
      if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, obj[name]);
        console.log("✔️ File created:", fullPath);
      }
    } else {
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log("📁 Folder created:", fullPath);
      }
      createTree(fullPath, obj[name]);
    }
  }
}

// ---- RUN ----
console.log("\n🚀 Creating project structure...\n");
createTree(root, tree);
console.log("\n✅ Completed — No existing files were modified.\n");
