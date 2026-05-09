import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ra2581392523035/', // substitua pelo nome do seu repositório
  build: {
    outDir: 'docs',
  },
})