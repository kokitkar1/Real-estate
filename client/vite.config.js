import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1994',
        secure:false,
      }
    }
  },
  plugins: [react()],
    // server: {
    //   host: '127.0.0.1',
    //   open: 'index.html',
    // }
    // server: {
    //   host: '127.0.0.1',
    //   port: 8000
    // }
    // server: {
    //   https: { // https => https://localhost:3000 | http => http://localhost:3000
    //     maxSessionMemory: 100
    //   }
    // }
  //   server: {
  //     hmr: {
  //         host: 'localhost',
  //     },
  // }
  
})