import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import typography from '@tailwindcss/vite'
import forms from '@tailwindcss/vite'

import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    typography(),
    forms()
  ],
})
