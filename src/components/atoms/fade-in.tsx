'use client'

import { AnimatePresence as PrimitiveAnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { createContext, useContext } from 'react'

const FadeInStaggerContext = createContext(false)


export const FadeIn = (props: React.ComponentPropsWithoutRef<typeof motion.div> & { fromTopToBottom?: boolean }) => {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 , y: shouldReduceMotion ? 0 : props.fromTopToBottom ? 100 : -100 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: shouldReduceMotion ? 0 : props.fromTopToBottom ? 100 : -700},
      }}
      transition={{ duration: 0.3 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            exit: 'exit',
            
          })}
      {...props}
    />
  )
}

export const FadeInStagger = ({ faster = false, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div initial='hidden' whileInView='visible' exit='exit'  transition={{ staggerChildren: faster ? 0.12 : 0.2 }} {...props} />
    </FadeInStaggerContext.Provider>
  )
}

export const AnimatePresence = (props: React.ComponentPropsWithoutRef<typeof PrimitiveAnimatePresence>) => {
  return <PrimitiveAnimatePresence {...props} />
}
