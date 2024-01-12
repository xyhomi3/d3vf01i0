import * as Part from './partials'

import { SiCodeium, SiGnometerminal } from 'react-icons/si';

export const allActivity = [
  {
    title: 'Activity',
    desc: 'Uncover the dynamics of my coding activity with a breakdown of dedicated work hours and insightful metrics. Track my progress and delve into the quantitative side of my coding endeavors.',
    slug: '',
    component: Part.Activity,
    icon: SiCodeium
  },
  {
    title: 'Languages',
    desc: 'Explore the dynamic array of coding languages that shaped my projects this week. From the robust TypeScript to the versatile JavaScript, and a spectrum ranging from JSON to CSS, witness the diverse linguistic landscape influencing my coding endeavors. Dive into the variety, and discover the languages that contribute to the rich tapestry of my weekly coding journey.',
    slug: 'languages',
    component: Part.Languages,
    icon: SiGnometerminal
  }
]
