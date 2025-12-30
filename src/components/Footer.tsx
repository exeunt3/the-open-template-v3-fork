import React from 'react'
import { Box, Flex, Text, Input, Button, Link, VStack } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box as="footer" w="100%" bg="bg" borderTop="1px solid" borderColor="rgba(255,255,255,0.1)">
      <Flex 
        direction={['column', null, 'row']} 
        w="100%" 
        py={[12, null, 16]} 
        px={[6, null, 10]}
        gap={[10, null, 20]}
      >
        <Box flex="1" maxW="400px">
          <Text 
            fontSize="12px" 
            fontWeight="400" 
            letterSpacing="2px"
            color="primary"
            opacity={0.6}
            mb={4}
          >
            〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>Newsletter</Box> 〉
          </Text>
          <Text fontSize="15px" lineHeight="1.6" color="primary" opacity={0.8} mb={6}>
            Stay up to date with transmissions from The Open Machine.
          </Text>
          <Flex gap={2} direction={['column', 'row']}>
            <Input 
              placeholder="your@email.com"
              bg="transparent"
              border="1px solid"
              borderColor="rgba(255,255,255,0.3)"
              borderRadius="none"
              color="primary"
              fontSize="14px"
              px={4}
              py={2}
              _placeholder={{ color: 'rgba(255,255,255,0.4)' }}
              _hover={{ borderColor: 'rgba(255,255,255,0.5)' }}
              _focus={{ borderColor: 'primary', boxShadow: 'none' }}
            />
            <Button
              bg="#e8e8e8"
              color="bg"
              borderRadius="none"
              px={6}
              fontSize="12px"
              fontWeight="500"
              letterSpacing="1px"
              _hover={{ opacity: 0.9 }}
            >
              Subscribe
            </Button>
          </Flex>
        </Box>

        <Box flex="1">
          <Text 
            fontSize="12px" 
            fontWeight="400" 
            letterSpacing="2px"
            color="primary"
            opacity={0.6}
            mb={4}
          >
            〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>Navigate</Box> 〉
          </Text>
          <VStack align="start" spacing={2}>
            <Link href="#what-we-do" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>What We Do</Link>
            <Link href="#values" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Values</Link>
            <Link href="#media" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Media</Link>
            <Link href="#events" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Events</Link>
            <Link href="#research" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Research</Link>
          </VStack>
        </Box>

        <Box flex="1">
          <Text 
            fontSize="12px" 
            fontWeight="400" 
            letterSpacing="2px"
            color="primary"
            opacity={0.6}
            mb={4}
          >
            〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>Connect</Box> 〉
          </Text>
          <VStack align="start" spacing={2}>
            <Link href="https://x.com/theopenmachine" isExternal fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Twitter</Link>
            <Link href="mailto:theopenmachine@protonmail.com" isExternal fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>theopenmachine@protonmail.com</Link>
          </VStack>
        </Box>
      </Flex>

      <Box 
        w="100%" 
        py={6} 
        px={[6, null, 10]}
        borderTop="1px solid"
        borderColor="rgba(255,255,255,0.05)"
      >
        <Flex 
          direction={['column', null, 'row']} 
          justify="space-between" 
          align={['start', null, 'center']}
          gap={4}
        >
          <Flex align="center" gap={2}>
            <Link href="https://creativecommons.org/licenses/by-sa/4.0/" isExternal display="flex" alignItems="center" gap={2} _hover={{ opacity: 1 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 42" width="80" height="28" fill="currentColor" opacity="0.5">
                <path d="M16.8 38.5c-9.6 0-16.8-7.2-16.8-17.3C0 11.4 7.2 4 16.8 4c5.1 0 9.3 1.8 12.6 5.1l-4.5 4.8c-2.1-2.1-4.8-3.3-8.1-3.3-5.7 0-10.2 4.8-10.2 10.5s4.5 10.5 10.2 10.5c3.3 0 6-1.2 8.1-3.6l4.5 4.5c-3.3 3.6-7.5 6-12.6 6z"/>
                <path d="M45.6 38.5c-9.6 0-16.8-7.2-16.8-17.3C28.8 11.4 36 4 45.6 4c5.1 0 9.3 1.8 12.6 5.1l-4.5 4.8c-2.1-2.1-4.8-3.3-8.1-3.3-5.7 0-10.2 4.8-10.2 10.5s4.5 10.5 10.2 10.5c3.3 0 6-1.2 8.1-3.6l4.5 4.5c-3.3 3.6-7.5 6-12.6 6z"/>
              </svg>
            </Link>
            <Text fontSize="12px" color="primary" opacity={0.4}>
              2025 The Open Machine
            </Text>
          </Flex>
          <Text fontSize="12px" color="primary" opacity={0.4}>
            Built from the underground.
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
