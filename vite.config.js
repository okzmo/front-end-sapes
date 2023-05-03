import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['./src/tests/**']
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, "./src") },
    ]
  }
})
