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
            〈 Newsletter 〉
          </Text>
          <Text fontSize="15px" lineHeight="1.6" color="primary" opacity={0.8} mb={6}>
            Stay up to date with transmissions from the frontier—new publications, events, and research.
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
              bg="primary"
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
            〈 Navigate 〉
          </Text>
          <VStack align="start" spacing={2}>
            <Link href="#what-we-do" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>What We Do</Link>
            <Link href="#media" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Media</Link>
            <Link href="#events" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Events</Link>
            <Link href="#research" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Research</Link>
            <Link href="/library" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Library</Link>
            <Link href="/transmissions" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Transmissions</Link>
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
            〈 Connect 〉
          </Text>
          <VStack align="start" spacing={2}>
            <Link href="https://twitter.com" isExternal fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Twitter</Link>
            <Link href="https://instagram.com" isExternal fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Instagram</Link>
            <Link href="mailto:theopenmachine@protonmail.com" fontSize="14px" color="primary" opacity={0.7} _hover={{ opacity: 1 }}>Contact</Link>
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
          <Text fontSize="12px" color="primary" opacity={0.4}>
            © 2025 The Open Machine. All rights reserved.
          </Text>
          <Text fontSize="12px" color="primary" opacity={0.4}>
            Built from the underground.
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}
