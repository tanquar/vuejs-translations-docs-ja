import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
  {
    text: 'ドキュメント',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'ガイド', link: '/guide/introduction' },
      { text: 'チュートリアル', link: '/tutorial/' },
      { text: 'サンプル', link: '/examples/' },
      { text: 'クイックスタート', link: '/guide/quick-start' },
      { text: 'スタイルガイド', link: '/style-guide/' },
      {
        text: 'Vue 2 からの移行',
        link: 'https://v3-migration.vuejs.org/'
      }
    ]
  },
  {
    text: 'API',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: 'サンドボックス',
    link: 'https://sfc.vuejs.org'
  },
  {
    text: 'エコシステム',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'リソース',
        items: [
          { text: 'パートナー', link: '/ecosystem/partners' },
          { text: 'テーマ', link: '/ecosystem/themes' },
          { text: '求人', link: 'https://vuejobs.com/?ref=vuejs' },
          { text: 'T シャツショップ', link: 'https://vue.threadless.com/' }
        ]
      },
      {
        text: '動画コース',
        items: [
          {
            text: 'Vue マスタリー',
            link: 'https://www.vuemastery.com/courses/'
          },
          {
            text: 'Vue スクール',
            link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
          }
        ]
      },
      {
        text: 'ヘルプ',
        items: [
          {
            text: 'Discord チャットルーム',
            link: 'https://discord.com/invite/HBherRA'
          },
          { text: 'フォーラム', link: 'https://forum.vuejs.org/' },
          { text: '開発コミュニティー', link: 'https://dev.to/t/vue' }
        ]
      },
      {
        text: '最新情報',
        items: [
          { text: 'ブログ', link: 'https://blog.vuejs.org/' },
          { text: 'Twitter', link: 'https://twitter.com/vuejs' },
          { text: 'ニュースレター', link: 'https://news.vuejs.org/' },
          { text: 'イベント', link: 'https://events.vuejs.org/' }
        ]
      }
    ]
  },
  {
    text: 'Vueについて',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'チーム', link: '/about/team' },
      { text: 'リリース', link: '/about/releases' },
      {
        text: 'コミュニティーガイド',
        link: '/about/community-guide'
      },
      { text: '行動規範', link: '/about/coc' },
      {
        text: 'ドキュメンタリー',
        link: 'https://www.youtube.com/watch?v=OrxmtDw4pVI'
      }
    ]
  },
  {
    text: 'スポンサー',
    link: '/sponsor/'
  }
]

export const sidebar = {
  '/guide/': [
    {
      text: '使ってみる',
      items: [
        { text: 'はじめに', link: '/guide/introduction' },
        {
          text: 'クイックスタート',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: '基礎',
      items: [
        {
          text: 'アプリケーションの作成',
          link: '/guide/essentials/application'
        },
        {
          text: 'テンプレート構文',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'リアクティブの基本',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: '算出プロパティ',
          link: '/guide/essentials/computed'
        },
        {
          text: 'クラスとスタイルのバインディング',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: '条件付きレンダリング',
          link: '/guide/essentials/conditional'
        },
        { text: 'リストレンダリング', link: '/guide/essentials/list' },
        {
          text: 'イベントハンドリング',
          link: '/guide/essentials/event-handling'
        },
        { text: 'フォーム入力バインディング', link: '/guide/essentials/forms' },
        {
          text: 'ライフサイクルフック',
          link: '/guide/essentials/lifecycle'
        },
        { text: 'ウォッチャー', link: '/guide/essentials/watchers' },
        { text: 'テンプレート参照', link: '/guide/essentials/template-refs' },
        {
          text: 'コンポーネントの基本',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: 'コンポーネントの詳細',
      items: [
        {
          text: '登録',
          link: '/guide/components/registration'
        },
        { text: 'プロパティー', link: '/guide/components/props' },
        { text: 'イベント', link: '/guide/components/events' },
        {
          text: 'フォールスルー属性',
          link: '/guide/components/attrs'
        },
        { text: 'スロット', link: '/guide/components/slots' },
        {
          text: 'Provide / Inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: '非同期コンポーネント',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: '再利用性',
      items: [
        {
          text: 'コンポーザブル',
          link: '/guide/reusability/composables'
        },
        {
          text: 'カスタムディレクティブ',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'プラグイン', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: '内蔵コンポーネント',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'スケールアップ',
      items: [
        { text: '単一ファイルコンポーネント', link: '/guide/scaling-up/sfc' },
        { text: 'ツール', link: '/guide/scaling-up/tooling' },
        { text: 'ルーティング', link: '/guide/scaling-up/routing' },
        {
          text: '状態管理',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'テスト', link: '/guide/scaling-up/testing' },
        {
          text: 'サーバーサイドレンダリング (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'ベストプラクティス',
      items: [
        {
          text: '本番デプロイ',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'パフォーマンス',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'アクセシビリティー',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'セキュリティー',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: '概要', link: '/guide/typescript/overview' },
        {
          text: 'Composition API で TS を使用する',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'Options API で TS を使用する',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'その他のトピック',
      items: [
        {
          text: 'Vue の用途',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'Composition API のよくある質問',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'リアクティブの詳細',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'レンダリングの仕組み',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'レンダリング関数と JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue と Web コンポーネント',
          link: '/guide/extras/web-components'
        },
        {
          text: 'アニメーションのテクニック',
          link: '/guide/extras/animation'
        },
        {
          text: 'リアクティブのトランスフォーム',
          link: '/guide/extras/reactivity-transform'
        }
        // {
        //   text: 'Vue 用のライブラリの開発',
        //   link: '/guide/extras/building-a-library'
        // },
        // { text: 'カスタムのレンダラー', link: '/guide/extras/custom-renderer' },
        // {
        //   text: 'React 開発で Vue を使用する',
        //   link: '/guide/extras/vue-for-react-devs'
        // }
      ]
    }
  ],
  '/api/': [
    {
      text: 'グローバル API',
      items: [
        { text: 'アプリケーション', link: '/api/application' },
        {
          text: '全般',
          link: '/api/general'
        }
      ]
    },
    {
      text: 'Composition API',
      items: [
        { text: 'setup()', link: '/api/composition-api-setup' },
        {
          text: 'リアクティブ: コア',
          link: '/api/reactivity-core'
        },
        {
          text: 'リアクティブ: ユーティリティー',
          link: '/api/reactivity-utilities'
        },
        {
          text: 'リアクティブ: 詳細',
          link: '/api/reactivity-advanced'
        },
        {
          text: 'ライフサイクルフック',
          link: '/api/composition-api-lifecycle'
        },
        {
          text: '依存性注入',
          link: '/api/composition-api-dependency-injection'
        }
      ]
    },
    {
      text: 'Options API',
      items: [
        { text: 'Options API: 状態', link: '/api/options-state' },
        { text: 'Options API: レンダリング', link: '/api/options-rendering' },
        {
          text: 'Options API: ライフサイクル',
          link: '/api/options-lifecycle'
        },
        {
          text: 'Options API: コンポジション',
          link: '/api/options-composition'
        },
        { text: 'Options API: Misc', link: '/api/options-misc' },
        {
          text: 'コンポーネントインスタンス',
          link: '/api/component-instance'
        }
      ]
    },
    {
      text: 'ビルトイン',
      items: [
        { text: 'ディレクティブ', link: '/api/built-in-directives' },
        { text: 'コンポーネント', link: '/api/built-in-components' },
        {
          text: '特殊な要素',
          link: '/api/built-in-special-elements'
        },
        {
          text: '特殊な属性',
          link: '/api/built-in-special-attributes'
        }
      ]
    },
    {
      text: '単一ファイルコンポーネント',
      items: [
        { text: '構文仕様', link: '/api/sfc-spec' },
        { text: '<script setup>', link: '/api/sfc-script-setup' },
        { text: 'CSS 機能', link: '/api/sfc-css-features' }
      ]
    },
    {
      text: '高度な API',
      items: [
        { text: 'レンダリング関数', link: '/api/render-function' },
        { text: 'サーバーサイドレンダリング', link: '/api/ssr' },
        { text: 'TypeScript ユーティリティー型', link: '/api/utility-types' },
        { text: 'カスタムレンダラー', link: '/api/custom-renderer' }
      ]
    }
  ],
  '/examples/': [
    {
      text: '基本的なサンプル',
      items: [
        {
          text: 'Hello World',
          link: '/examples/#hello-world'
        },
        {
          text: 'ユーザー入力を扱う',
          link: '/examples/#handling-input'
        },
        {
          text: '属性バインディング',
          link: '/examples/#attribute-bindings'
        },
        {
          text: '条件とループ',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'フォームバインディング',
          link: '/examples/#form-bindings'
        },
        {
          text: 'シンプルなコンポーネント',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: '実用的なサンプル',
      items: [
        {
          text: 'マークダウンエディター',
          link: '/examples/#markdown'
        },
        {
          text: 'データの取得',
          link: '/examples/#fetching-data'
        },
        {
          text: 'ソートとフィルタを備えたグリッド',
          link: '/examples/#grid'
        },
        {
          text: 'ツリービュー',
          link: '/examples/#tree'
        },
        {
          text: 'SVG グラフ',
          link: '/examples/#svg'
        },
        {
          text: 'トランジション付きのモーダル',
          link: '/examples/#modal'
        },
        {
          text: 'トランジション付きのリスト',
          link: '/examples/#list-transition'
        },
        {
          text: 'Todo MVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: 'GUI のサンプル 7 つ',
      items: [
        {
          text: 'カウンター',
          link: '/examples/#counter'
        },
        {
          text: '温度変換',
          link: '/examples/#temperature-converter'
        },
        {
          text: '航空券の予約',
          link: '/examples/#flight-booker'
        },
        {
          text: 'タイマー',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: '円を描画',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'セル',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'スタイルガイド',
      items: [
        {
          text: '概要',
          link: '/style-guide/'
        },
        {
          text: 'A - 必須',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - 強く推奨',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - 推奨',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - 注意して使用',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'ja-JP',
  title: 'Vue.js',
  description: 'Vue.js - プログレッシブな JavaScript フレームワーク',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://vuejs.org/images/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://sponsors.vuejs.org'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    socialLinks: [
      { icon: 'languages', link: '/translations/' },
      { icon: 'github', link: 'https://github.com/vuejs/' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    editLink: {
      repo: 'vuejs/docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} Evan You`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
