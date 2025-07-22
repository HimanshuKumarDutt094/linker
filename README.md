# Linker - QR Code Generator Extension

[GitHub Repository](https://github.com/HimanshuKumarDutt094/linker)

## What is this?

Linker is a browser extension that generates a QR code for the current tab's URL. It is built with React, TypeScript, Vite, and Tailwind CSS, and is designed for Chrome, Firefox, and Edge.

## How does it work?

- When you click the extension icon, a popup appears showing a QR code for the URL of the tab you are currently viewing.
- The extension uses the browser's Tabs API to securely fetch the active tab's URL. No user input or external data is ever used.
- The QR code is generated using [qrcode.react](https://github.com/zpao/qrcode.react), and only safe http/https URLs are allowed.
- The popup supports dark/light themes and manual theme switching.

## Usage

1. Install the extension from the Chrome Web Store, Firefox Add-ons, or Edge Add-ons.
2. Click the Linker icon in your browser toolbar.
3. Scan the QR code with your mobile device to open the current page.

## Security & Compliance

- The extension never uses `innerHTML` or allows user input for QR code generation.
- All URLs are validated and sanitized before QR code generation.
- Fully compliant with Chrome/Firefox/Edge store requirements.

## Attribution

- [Project GitHub](https://github.com/HimanshuKumarDutt094/linker)
- Built by Himanshu Kumar Dutt
- Uses [qrcode.react](https://github.com/zpao/qrcode.react), [Vite](https://vitejs.dev/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and [vite-plugin-web-extension](https://github.com/aklinker1/vite-plugin-web-extension)
  {
  files: ['**/*.{ts,tsx}'],
  extends: [
  // Other configs...
  // Enable lint rules for React
  reactX.configs['recommended-typescript'],
  // Enable lint rules for React DOM
  reactDom.configs.recommended,
  ],
  languageOptions: {
  parserOptions: {
  project: ['./tsconfig.node.json', './tsconfig.app.json'],
  tsconfigRootDir: import.meta.dirname,
  },
  // other options...
  },
  },
  ])

```

```
