// nextConfigがNext.jsの設定オブジェクトの型（NextConfig）であることを明示します。
// これにより、設定のプロパティ名などを間違えた場合にVS Codeが教えてくれるようになります！
import type { NextConfig } from 'next';

// Next.jsの設定オブジェクトを定義します
const nextConfig: NextConfig = {
  // 'export'設定: この設定により、Next.jsのアプリケーションを静的なHTMLファイルとして
  // エクスポート（書き出し）できるようになります。これにより、Vercelだけでなく
  // どんな静的ファイルホスティングサービスでも動かせるようになります。
  output: 'export',

  // 'images'設定: 画像の最適化に関する設定です
  images: {
    // 'unoptimized: true': Next.jsの画像最適化機能を無効にします。
    // 'output: export'を使う場合、この設定が必要になることが多いです。
    unoptimized: true,
  },

  // 'trailingSlash: true'設定: URLの最後にスラッシュ（/）を自動で追加する設定です。
  // 例: /about が /about/ のように扱われます。
  trailingSlash: true,
};

// Next.jsの設定オブジェクトを外に公開します（ESモジュール形式の書き出し）
export default nextConfig;
