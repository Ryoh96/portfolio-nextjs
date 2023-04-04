export const works = [
  {
    title: 'Portfolio',
    url: '/thumb-portofolio.jpg',
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
] as {
  title: string
  url: string
  list: {
    term: string
    desc: string
  }[]
}[]
