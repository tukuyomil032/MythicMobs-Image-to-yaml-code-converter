// vite.config.ts (新規作成 または 修正)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // ▼▼▼ GitHub Pagesのためにこの設定を追加 ▼▼▼
  // 'YOUR_REPOSITORY_NAME' の部分を、あなたのGitHubリポジトリ名に書き換えてください。
  // (例: 'https://YourName.github.io/mm-image-converter/' のようにするため)
  base: '/YOUR_REPOSITORY_NAME/', 
  // ▲▲▲ GitHub Pagesのためにこの設定を追加 ▲▲▲
})

