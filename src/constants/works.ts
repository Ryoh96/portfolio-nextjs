export type WorkType = {
  title: string
  url: string
  list: {
    term: string
    desc: string
  }[]
}


export const works: WorkType[] = [
  {
    title: 'Jamstackブログ',
    url: '/thumb-tekrog.jpg',
    list: [
      {
        term: 'URL',
        desc: 'https://tekrog.com',
      },
      {
        term: '開発フレームワーク・言語',
        desc: 'Next.js / TypeScript',
      },
      {
        term: 'その他使用技術',
        desc: 'GraphQL / styled-components / WordPress',
      },
      {
        term: '使用ソフト',
        desc: 'Illustrator / PhotoShop',
      },
    ],
  },
  {
    title: 'WordPressブログ',
    url: '/tekrog-old.jpg',
    list: [
      {
        term: '開発フレームワーク・言語',
        desc: 'HTML5 / Sass / JavaScript / PHP',
      },
      {
        term: 'その他使用技術',
        desc: 'WordPress',
      },
      {
        term: '使用ソフト',
        desc: 'Illustrator / PhotoShop',
      },
    ],
  },
  {
    title: 'Portfolio(ver.3)',
    url: '/portfolio3.png',
    list: [
      {
        term: '開発フレームワーク・言語',
        desc: 'Next.js / TypeScript',
      },
      {
        term: '使用ライブラリ',
        desc: 'GSAP / Three.js / styled-components',
      },
      {
        term: '使用ソフト',
        desc: 'Illustrator / PhotoShop',
      },
    ],
  },
  {
    title: 'Portfolio(ver.2)',
    url: '/thumb-portofolio.jpg',
    list: [
      {
        term: '開発フレームワーク・言語',
        desc: 'Vue.js / TypeScript',
      },
      {
        term: '使用ライブラリ',
        desc: 'GSAP / Three.js',
      },
      {
        term: '使用ソフト',
        desc: 'Illustrator / PhotoShop',
      },
    ],
  },
  {
    title: 'Portfolio(ver.1)',
    url: '/thumb-portofolio.jpg',
    list: [
      {
        term: '開発フレームワーク・言語',
        desc: 'HTML5 / Sass / JavaScript',
      },
      {
        term: '使用ライブラリ',
        desc: 'GSAP / Barba.js',
      },
      {
        term: '使用ソフト',
        desc: 'Illustrator / PhotoShop',
      },
    ],
  },
] 