export type SectionText = {
  title: string
  description: string
  link?: string
  pic?: string
}

export const topSectionTexts: SectionText[] = [
  {
    title: 'RYOH KUROKI',
    description: 'Web Engineering & Design',
  },
  {
    title: 'About',
    description: '経歴・引き受けている仕事など',
    link: '/about',
    pic: '/about.jpg',
  },
  {
    title: 'Skill',
    description: '使用可能な言語・フレームワーク',
    link: '/skills',
    pic: '/skill.jpg',
  },
  {
    title: 'Works',
    description: '制作してきた作品・Github',
    link: '/works',
    pic: '/work.jpg',
  },
  {
    title: 'Contact',
    description: 'hello@kurokiryoh.com',
    link: '/contact',
    pic: '/contact.jpg',
  },
]
