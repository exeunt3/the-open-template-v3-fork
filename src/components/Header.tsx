import React from 'react'
import { Flex, Link, Heading, HStack, Box } from '@chakra-ui/react'

const navItems = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Values', href: '#values' },
  { label: 'Media', href: '#media' },
  { label: 'Events', href: '#events' },
  { label: 'Research', href: '#research' },
]

export const Header = () => {
  return (
    <Flex 
      direction="row" 
      alignItems="center" 
      justifyContent="space-between" 
      w="100%" 
      h="80px" 
      px={[5, null, 10]}
      position="sticky"
      top="0"
      bg="bg"
      zIndex="100"
      borderBottom="1px solid"
      borderColor="rgba(255,255,255,0.1)"
    >
      <Heading
        color="primary"
        fontWeight="700"
        lineHeight="0.9em"
        fontSize={['lg', null, 'xl']}
      >
        <Link href="/" _hover={{ textDecoration: 'none', opacity: 0.8 }}>The Open Machine</Link>
      </Heading>
      
      <HStack 
        spacing={[4, null, 8]} 
        display={['none', null, 'flex']}
      >
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            fontSize="12px"
            fontWeight="400"
            letterSpacing="1px"
            color="primary"
            opacity={0.7}
            _hover={{ opacity: 1, textDecoration: 'none' }}
            transition="opacity 0.2s ease"
          >
            {item.label}
          </Link>
        ))}
      </HStack>
    </Flex>
  )
}