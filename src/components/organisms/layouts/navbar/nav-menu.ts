
export const getNavMenu = () => [
  {
    name: '_h0m3',
    path: '/'
  },
  {
    name: '_ab0ut-m3',
    child: [
      {
        name: 'personal.ts',
        path: '/about/personal.ts'
      },
      {
        name: 'work.ts',
        path: '/about/work.ts'
      },
      {
        name: 'gear.ts',
        path: '/about/gear.ts'
      }
    ]
  },
  {
    name: '_pr0j3cts',
    child: [
      {
        name: 'All Projects',
        path: '/projects'
      },
      {
        name: 'React',
        path: '/projects?tag=react'
      },
      {
        name: 'Next',
        path: '/projects?tag=next'
      },
      {
        name: 'HTML',
        path: '/projects?tag=html'
      }
    ]
  },
  {
    name: '_gu3st-b00k',
    path: '/guest-book'
  },
  {
    name: '_articl3s',
    path: '/articles'
  },
  {
    name: '_coding-activity',
    child: [
      {
        name: 'Weekly',
        path: '/coding-activity'
      },
      {
        name: 'Languages',
        path: '/coding-activity/languages'
      }
    ]
  },
  {
    name: '_contact',
    child: [
      {
        name: 'Email',
        path: 'mailto:loua@0000.codes'
      },
      {
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/lucien-loua/'
      },
      {
        name: 'X',
        path: 'https://www.x.com/xyhomi3/'
      }
    ]
  },
  {
    name: '_s0unds',
    path: '/sounds'
  }
]
