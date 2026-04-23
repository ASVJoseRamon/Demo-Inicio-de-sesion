# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# INSTALLS
# NODE MODULES
npm install 
# TAILWIND CSS
npm install tailwindcss @tailwindcss/vite

#   vite.config.js
        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
        plugins: [
            tailwindcss(),
        ],
        })

#  css
        @import "tailwindcss";

#   html
        ...<head>
        <link href="/src/style.css" rel="stylesheet">
        ...</head>


# ZUSTAND
npm install zustand

# REACT ROUTER
npm i react-router

# SHADCN

#   JavaScript
#       components.json
        {
        "style": "default",
        "tailwind": {
        "css": "src/routes/layout.css"
        },
        "typescript": false,
        "aliases": {
        "utils": "$lib/utils",
        "components": "$lib/components",
        "hooks": "$lib/hooks",
        "ui": "$lib/components/ui"
        },
        "registry": "https://shadcn-svelte.com/registry"
        }
#       jsconfig.json
        {
        "compilerOptions": {
        "paths": {
        "$lib/*": ["./src/lib/*"]
        }
        }
        }
# INSTALACION
npx shadcn-svelte@latest init

# ZOD
npm install zod
