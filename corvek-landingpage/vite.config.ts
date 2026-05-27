import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const cnamePlugin = () => {
    return {
      name: 'generate-cname',
      closeBundle() {
        const domain = env.VITE_CUSTOM_DOMAIN
        if (domain) {
          const cnamePath = path.resolve(__dirname, 'dist', 'CNAME')
          fs.writeFileSync(cnamePath, domain.trim())
          console.log(`\n✓ CNAME generated successfully for domain: ${domain}`)
        }
      }
    }
  }

  return {
    plugins: [tailwindcss(), react(), cnamePlugin()],
    base: env.VITE_BASE_URL || '/',
  }
})
