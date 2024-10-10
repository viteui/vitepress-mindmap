# vitepress-generate mindmap

- install
```bash
npm install vitepress-generate
```

- use
```js
import { defineConfig } from 'vitepress'
import { generateMindmap } from 'vitepress-generate'

export default defineConfig({
  // ...
  plugins: [
    generateMindmap({
      // ...
    })
  ]
})
```