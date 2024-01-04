import * as Part from './partials'

import { LuActivitySquare } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { LuSquareCode } from "react-icons/lu";
import { LuTerminalSquare } from "react-icons/lu";

export const allActivity = [
  {
    title: 'Activity',
    desc: 'Uncover the dynamics of my coding activity with a breakdown of dedicated work hours and insightful metrics. Track my progress and delve into the quantitative side of my coding endeavors.',
    slug: 'activity',
    component: Part.Activity,
    icon: LuActivitySquare
  },
  {
    title: 'Languages',
    desc: 'Explore the dynamic array of coding languages that shaped my projects this week. From the robust TypeScript to the versatile JavaScript, and a spectrum ranging from JSON to CSS, witness the diverse linguistic landscape influencing my coding endeavors. Dive into the variety, and discover the languages that contribute to the rich tapestry of my weekly coding journey.',
    slug: ' ',
    component: Part.Languages,
    icon: LuTerminalSquare
  },
  {
    title: 'Code Editor',
    desc: 'Get to know the tools of my trade! Peek into my coding sanctuary and discover the preferred code editors that streamline my development process. From feature-rich IDEs to minimalist text editors, find out what fuels my coding creativity.',
    slug: 'code-editor',
    component: Part.CodeEditor,
    icon: LuSquareCode
  },
  {
    title: 'Systems',
    desc: "Navigate the digital realms with a glimpse into the operating systems influencing my coding environment. Whether it's the stability of Linux or the familiarity of Windows, explore the diverse landscapes shaping my coding experiences.",
    slug: 'operating-systems',
    component: Part.OperatingSystems,
    icon: LuCpu
  }
]
