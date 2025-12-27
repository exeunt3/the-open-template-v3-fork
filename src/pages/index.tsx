import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Button,
} from '@chakra-ui/react'
import {
  PageMetadata,
} from '@/components'
import { Header } from '@/components/Header'
import { useState } from 'react'

const mediaItems = [
  {
    id: 'earth-computer',
    title: 'The Earth Computer',
    subtitle: 'Poster — Research, Writing and Design',
    description: 'A visual essay mapping the planetary infrastructure of Ethereum as a world computer emerging from the Earth itself.',
    image: '/assets/Assembly_mock-full.jpg',
    href: '/earth-computer',
  },
  {
    id: 'ethereum-localism',
    title: 'Ethereum Localism',
    subtitle: 'Book — Editing, Design, and Publishing',
    description: 'Grounding the future of coordination. A collection of essays exploring how global protocols can serve local communities.',
    image: '/assets/EL_Cover-front.jpg',
    href: '/ethereum-localism-book',
  },
  {
    id: 'inverted-city',
    title: 'Inverted City',
    subtitle: 'Zine — Writing, Editing, and Publishing',
    description: 'An exploration of urban form turned inside out—where the margins become centers and infrastructure becomes visible.',
    image: '/assets/invertedCity_cover.jpg',
    href: '/inverted-city',
  },
  {
    id: 'friends-outside',
    title: 'Friends of the Outside',
    subtitle: 'Booklet — Writing, Design, and Publishing',
    description: 'A manifesto for those who build from the edges, cultivating networks that exist beyond institutional capture.',
    image: '/assets/FotO_physical-outside.jpg',
    href: '/friends-of-the-outside',
  },
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <PageMetadata
        title="The Open Machine"
        description=""
        image="https://theopenmachine.net/assets/om_substrates2.png"
      />
      <main>
        <Header />
          
        <Flex direction="column" alignItems="start" justifyContent="space-between" w="100%" h="calc(100vh - 80px)" position="relative">
            <Image src="/assets/om_substrates2.png" h="100%" w="100%" alt="The Open Machine" style={{ objectFit: 'cover', objectPosition: 'center center', overflow: "hidden"}}/>
        </Flex>

        <Flex 
          direction={['column', null, 'row']} 
          w="100%" 
          py={[10, null, 20]} 
          px={[6, null, 10]}
          bg="bg"
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
            <Text 
              fontSize="17px" 
              color="blue.600"
            >
              What We Do _
            </Text>
          </Box>
          <Box flex="1" maxW="800px">
            <Text 
              fontSize="17px" 
              lineHeight="1.5" 
              color="blue.600"
              mb={6}
            >
              The Open Machine is a creative studio, zine shop, and organizing body producing media and events at the frontier of coordination.
            </Text>
            <Text fontSize="17px" lineHeight="1.5" color="primary" mb={6}>
              We publish books, zines, and posters. We convene salons, workshops, and gatherings. We incubate tools and knowledge commons. Everything we make emerges from research and practice woven together. We work from the underground—the informal networks, experimental scenes, and temporary assemblies where new ideas originate. Institutions capture and formalize what the underground creates. We build infrastructure that lets it circulate on its own terms.
            </Text>
            <Text fontSize="17px" lineHeight="1.5" color="primary" mb={10}>
              We culturally negotiate the values of the underground with traditional and emerging technologies—finding ways to preserve what matters while engaging with new tools and systems.
            </Text>
            <Box position="relative">
              <Image 
                src="/assets/Frame_1-4_1766814770591.png" 
                alt="Four core underground values plus one formal quality" 
                w="100%"
                maxW="700px"
              />
              <Box 
                bg="white" 
                py={3} 
                px={4} 
                mt={0}
                maxW="700px"
              >
                <Text 
                  fontSize={['13px', null, '14px']} 
                  color="black" 
                  fontWeight="400"
                  fontStyle="italic"
                >
                  Four core underground values + one formal or structural quality
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Box w="100%" py={[10, null, 16]} px={[6, null, 10]}>
          <Flex direction={['column', null, 'row']} mb={8}>
            <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
              <Text 
                fontSize="17px" 
                color="blue.600"
              >
                Media _
              </Text>
            </Box>
            <Box flex="1" maxW="600px">
              <Text fontSize="17px" lineHeight="1.5" color="primary">
                The Open Machine publishes artifacts from the frontier—zines, books, posters, booklets. We share information, transmit experience, and document protocol.
              </Text>
            </Box>
          </Flex>

          <Box display={['none', null, 'block']}>
            <Flex 
              direction="row" 
              w="100%" 
              h="600px" 
              position="relative"
              overflow="hidden"
            >
              {mediaItems.map((item, index) => (
                <Box
                  key={item.id}
                  flex={activeIndex === index ? '3' : '0.5'}
                  transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  position="relative"
                  cursor="pointer"
                  overflow="hidden"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  tabIndex={0}
                  borderLeft={index > 0 ? '1px solid' : 'none'}
                  borderColor="rgba(255,255,255,0.2)"
                  role="button"
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    p={8}
                    bg="linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)"
                    opacity={activeIndex === index ? 1 : 0}
                    transition="opacity 0.4s ease"
                  >
                    <Heading 
                      as="h3" 
                      fontSize="36px" 
                      color="white" 
                      fontWeight="700"
                      mb={2}
                    >
                      {item.title}
                    </Heading>
                    <Text 
                      fontSize="16px" 
                      color="rgba(255,255,255,0.8)" 
                      mb={4}
                      maxW="500px"
                    >
                      {item.description}
                    </Text>
                    <Link
                      href={item.href}
                      display="inline-block"
                      bg="white"
                      color="black"
                      borderRadius="full"
                      px={6}
                      py={2}
                      fontWeight="500"
                      fontSize="14px"
                      _hover={{ bg: 'gray.200', textDecoration: 'none' }}
                    >
                      Explore →
                    </Link>
                  </Box>
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    p={4}
                    opacity={activeIndex === index ? 0 : 1}
                    transition="opacity 0.4s ease"
                  >
                    <Text
                      fontSize="14px"
                      color="white"
                      fontWeight="600"
                      sx={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      {item.title}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>

          <Flex 
            display={['flex', null, 'none']}
            direction="column" 
            gap={4}
          >
            {mediaItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.href}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  position="relative"
                  h="280px"
                  overflow="hidden"
                  borderRadius="md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    p={5}
                    bg="linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, transparent 100%)"
                  >
                    <Heading 
                      as="h3" 
                      fontSize="24px" 
                      color="white" 
                      fontWeight="700"
                      mb={1}
                    >
                      {item.title}
                    </Heading>
                    <Text 
                      fontSize="14px" 
                      color="rgba(255,255,255,0.7)"
                    >
                      {item.subtitle}
                    </Text>
                  </Box>
                </Box>
              </Link>
            ))}
          </Flex>
        </Box>

        <Flex 
          direction={['column', null, 'row']} 
          w="100%" 
          py={[10, null, 20]} 
          px={[6, null, 10]}
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
            <Text 
              fontSize="17px" 
              color="blue.600"
            >
              Events _
            </Text>
          </Box>
          <Box flex="1">
            <Box maxW="600px" mb={10}>
              <Text fontSize="17px" lineHeight="1.5" color="primary" mb={6}>
                The Open Machine convenes temporary assemblies where ideas meet bodies and something gets made. Salons, workshops, lecture series, unconferences, gatherings.
              </Text>
              <Image src="/assets/gfel25_salon.jpg" alt="GFEL 2025 Salon" width="100%" borderRadius="md"/>
            </Box>
            <Flex direction={['column', null, 'row']} gap={[4, null, 20]}>
              <Box flex="1">
                <Text fontSize="17px" color="blue.600" mb={4}>2025</Text>
                <Flex direction="column" gap={2}>
                  <Text fontSize="17px" lineHeight="1.5">Gathering — <em>Open Protocols Convene</em>, Boulder, Colorado</Text>
                  <Text fontSize="17px" lineHeight="1.5">Salon — <em>Open Protocols Social</em>, Portland, Oregon</Text>
                  <Text fontSize="17px" lineHeight="1.5">Workshop — <em>Polycentric Equity Swap Game</em>, Buenos Aires</Text>
                  <Text fontSize="17px" lineHeight="1.5">Workshop — <em>Assembly in Ethereum</em>, Buenos Aires</Text>
                  <Text fontSize="17px" lineHeight="1.5">Gathering — <em>GFEL II</em>, Boulder, Colorado</Text>
                </Flex>
              </Box>
              <Box flex="1">
                <Text fontSize="17px" color="blue.600" mb={4}>2023–2024</Text>
                <Flex direction="column" gap={2}>
                  <Text fontSize="17px" lineHeight="1.5">Workshop — <em>Institutions, Extitutions and the Body without Organs</em>, Belgium 2024</Text>
                  <Text fontSize="17px" lineHeight="1.5">Salon — <em>OSS: Open Salon Series</em>, Portland, Oregon 2024</Text>
                  <Text fontSize="17px" lineHeight="1.5">Lecture Series — <em>Local DAO Summer</em>, cyberspace 2024</Text>
                  <Text fontSize="17px" lineHeight="1.5">Gathering — <em>General Forum on Ethereum Localism</em>, Portland 2024</Text>
                  <Text fontSize="17px" lineHeight="1.5">Salon — <em>Cybernetics and Public Goods</em>, MCON 3 Detroit 2023</Text>
                  <Text fontSize="17px" lineHeight="1.5">Salon — <em>Decentralized Independent Publishing</em>, Istanbul 2023</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex 
          direction={['column', null, 'row']} 
          w="100%" 
          py={[10, null, 20]} 
          px={[6, null, 10]}
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
            <Text 
              fontSize="17px" 
              color="blue.600"
            >
              Research _
            </Text>
          </Box>
          <Box flex="1">
            <Box maxW="600px" mb={10}>
              <Text fontSize="17px" lineHeight="1.5" color="primary">
                The Open Machine conducts research on the characteristics of extitutional space—the spontaneous orders, open protocols, and plural ontologies of the space outside of administrative institutions.
              </Text>
            </Box>
            <Flex direction={['column', null, 'row']} gap={[6, null, 10]} flexWrap="wrap">
              <Box w={['100%', null, 'calc(50% - 20px)']}>
                <Text fontSize="17px" mb={2} color="blue.600">PCVC</Text>
                <Text fontSize="17px" lineHeight="1.5" color="primary">Research into polycentric value creation and the mechanisms of distributed coordination.</Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 20px)']}>
                <Text fontSize="17px" mb={2} color="blue.600">Hyperactive Public Goods Funding</Text>
                <Text fontSize="17px" lineHeight="1.5" color="primary">Exploring novel mechanisms for sustaining commons and public goods in networked environments.</Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 20px)']}>
                <Text fontSize="17px" mb={2} color="blue.600">Open Protocols Research Group</Text>
                <Text fontSize="17px" lineHeight="1.5" color="primary">A collaborative inquiry into the social and technical dimensions of protocol-based coordination.</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </main>
      </>
  )
}
