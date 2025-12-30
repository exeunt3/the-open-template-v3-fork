import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import {
  PageMetadata,
} from '@/components'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
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
          id="what-we-do"
          direction={['column', null, 'row']} 
          w="100%" 
          py={[10, null, 20]} 
          px={[6, null, 10]}
          bg="bg"
          scrollMarginTop="100px"
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
            <Box w="40px" h="1px" bg="primary" opacity={0.3} mb={3} />
            <Text 
              fontSize="14px" 
              fontWeight="500" 
              letterSpacing="2px"
              color="primary"
              fontFamily="'Inter', sans-serif"
            >
              〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>What We Do</Box> 〉
            </Text>
          </Box>
          <Box flex="1" maxW="800px">
            <Box bg="#1a1a1a" p={4} borderRadius="md" mb={8}>
              <Text fontSize="17px" lineHeight="1.85" color="primary" fontWeight="600" fontFamily="'Inter', sans-serif">
                The Open Machine is a creative outpost for scaling <Link href="#values"><Box as="span" bg="#e8e8e8" color="bg" px={1} cursor="pointer" _hover={{ opacity: 0.8 }}>underground values</Box></Link> alongside, within and through emerging technologies. We produce media & events and stage research on the actualization of extitutional social forms in the twenty first century.
              </Text>
            </Box>
            <Text fontSize="15px" lineHeight="1.85" color="primary" opacity={0.85} mb={6}>
              Institutions (in their dominant form as centralized, administrative bureaucracies) are known to concentrate power, homogenize culture, enshittify technology, obscure empirical conditions in favor of party lines and, worse of all, generate cultures of complacency where direct empirical engagement with reality is sidelined for the opiate coziness of a protected inside.
            </Text>
            <Text fontSize="15px" lineHeight="1.85" color="primary" opacity={0.85} mb={6}>
              That structural logic may be dominant, but it's far from the only means of organizing bodies.
            </Text>
            <Text fontSize="15px" lineHeight="1.85" color="primary" opacity={0.85} mb={6}>
              The Open Machine is premised on an alternative mode of social organization, a semi-formal set of values and operational principles we refer to as the{' '}
              <Tooltip 
                label="This refers to a collective of actors with no shared identity or structure beyond the open protocols that synchronize them in acts of discovery and interparticipation. See 'Sketches for a Theory of the Protocol Underground' for the origins of this term."
                bg="white"
                color="black"
                fontSize="13px"
                p={3}
                maxW="320px"
                hasArrow
                placement="top"
              >
                <Box as="span" bg="#e8e8e8" color="bg" px={1} cursor="help" borderBottom="1px dashed" borderColor="bg">protocol underground</Box>
              </Tooltip>.
            </Text>
            <Text fontSize="15px" lineHeight="1.85" color="primary" opacity={0.85} mb={6}>
              In an age of ascendant{' '}
              <Tooltip 
                label="See Bogna Konior 'Existential Technologies' — existentialtech.antikythera.org"
                bg="white"
                color="black"
                fontSize="13px"
                p={3}
                maxW="320px"
                hasArrow
                placement="top"
              >
                <Box as="span" bg="#e8e8e8" color="bg" px={1} cursor="help" borderBottom="1px dashed" borderColor="bg">existential technologies</Box>
              </Tooltip>, the emergent principles of the underground are in a position to scale to conspicuous dominance as cynical actors and obsolete formulas fall beneath the compounding increase in degrees of freedom the new forms provide.
            </Text>
            <Text fontSize="15px" lineHeight="1.85" color="primary" opacity={0.85} mb={10}>
              The Open Machine is here to midwife that process. Our work is to discover alignment and build coalitions (and lineages) around key underground values. This also means recognizing the open, public and{' '}
              <Tooltip 
                label="This final claim is a nod to the broader underground sense that intelligence itself is a network phenomena, multiparty discovery in non-coercive process."
                bg="white"
                color="black"
                fontSize="13px"
                p={3}
                maxW="320px"
                hasArrow
                placement="top"
              >
                <Box as="span" bg="#e8e8e8" color="bg" px={1} cursor="help" borderBottom="1px dashed" borderColor="bg">horizontally determined</Box>
              </Tooltip>{' '}
              nature of the values themselves.
            </Text>
          </Box>
        </Flex>

        <Box id="media" w="100%" py={[10, null, 16]} px={[6, null, 10]} scrollMarginTop="100px">
          <Flex direction={['column', null, 'row']} mb={8}>
            <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
              <Box w="40px" h="1px" bg="primary" opacity={0.3} mb={3} />
              <Text 
                fontSize="14px" 
                fontWeight="500" 
                letterSpacing="2px"
                color="primary"
                fontFamily="'Inter', sans-serif"
              >
                〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>Media</Box> 〉
              </Text>
            </Box>
            <Box flex="1" maxW="600px">
              <Text fontSize="15px" lineHeight="1.7" color="primary" opacity={0.85}>
                Open Machine media takes the form of zines, books, posters, and other web content. All work is licensed Creative Commons. In some cases, our work is commissioned by aligned actors in technology or the academic space.
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
                      bg="#e8e8e8"
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
          id="events"
          direction={['column', null, 'row']} 
          w="100%" 
          py={[10, null, 20]} 
          px={[6, null, 10]}
          scrollMarginTop="100px"
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
            <Box w="40px" h="1px" bg="primary" opacity={0.3} mb={3} />
            <Text 
              fontSize="14px" 
              fontWeight="500" 
              letterSpacing="2px"
              color="primary"
              fontFamily="'Inter', sans-serif"
            >
              〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>Events</Box> 〉
            </Text>
          </Box>
          <Box flex="1">
            <Box maxW="600px">
              <Text fontSize="15px" lineHeight="1.7" color="primary" opacity={0.85}>
                To the end of bringing underground values and strategies to the emerging technology space, and vice versa, The Open Machine has produced or participated in salons, workshops, unconferences, meetups, and the rare{' '}
                <Tooltip 
                  label="We have shunned the latter whenever possible in order to emphasize events optimized for emergence, especially w/r/t tran-sector or -disciplinary coalition, novel or complex emergent subjectivities, etc."
                  bg="white"
                  color="black"
                  fontSize="13px"
                  p={3}
                  maxW="320px"
                  hasArrow
                  placement="top"
                >
                  <Box as="span" bg="#e8e8e8" color="bg" px={1} cursor="help" borderBottom="1px dashed" borderColor="bg">lecture</Box>
                </Tooltip>.
              </Text>
            </Box>
          </Box>
        </Flex>

        <Box w="100%" overflow="hidden" mb={6}>
          <Flex
            overflowX="auto"
            gap={4}
            px={[6, null, 10]}
            pb={4}
            css={{
              '&::-webkit-scrollbar': { height: '8px' },
              '&::-webkit-scrollbar-track': { background: 'transparent' },
              '&::-webkit-scrollbar-thumb': { background: '#ccc', borderRadius: '4px' },
              scrollSnapType: 'x mandatory',
            }}
          >
            {[
              { src: '/assets/gfel25_salon.jpg', alt: 'GFEL 2025 Salon' },
              { src: '/assets/event_1.jpeg', alt: 'Open Machine Event' },
              { src: '/assets/event_2.jpeg', alt: 'Open Machine Gathering' },
              { src: '/assets/event_3.jpeg', alt: 'Open Machine Workshop' },
              { src: '/assets/event_4.jpeg', alt: 'Open Machine Evening' },
              { src: '/assets/event_5.jpeg', alt: 'Open Machine Outdoor Session' },
            ].map((img, i) => (
              <Box 
                key={i} 
                flexShrink={0} 
                w={['85vw', null, '60vw']} 
                h={['50vw', null, '35vw']}
                maxH="500px"
                css={{ scrollSnapAlign: 'start' }}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  w="100%" 
                  h="100%" 
                  objectFit="cover"
                />
              </Box>
            ))}
          </Flex>
        </Box>

        <Flex 
          direction={['column', null, 'row']} 
          w="100%" 
          pb={[10, null, 20]} 
          px={[6, null, 10]}
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]} />
          <Box flex="1">
            <Flex direction={['column', null, 'row']} gap={[3, null, 4]}>
              <Box flex="1" bg="#1a1a1a" p={4} borderRadius="md">
                <Text fontSize="10px" fontWeight="500" textTransform="uppercase" letterSpacing="1px" mb={3} opacity={0.5} fontFamily="'Inter', sans-serif">2025</Text>
                <Flex direction="column" gap={2}>
                  <Text fontSize="13px">Gathering — <em>Open Protocols Convene</em>, Boulder, Colorado</Text>
                  <Text fontSize="13px">Salon — <em>Open Protocols Social</em>, Portland, Oregon</Text>
                  <Text fontSize="13px">Workshop — <em>Polycentric Equity Swap Game</em>, Buenos Aires</Text>
                  <Text fontSize="13px">Workshop — <em>Assembly in Ethereum</em>, Buenos Aires</Text>
                  <Text fontSize="13px">Gathering — <em>GFEL II</em>, Boulder, Colorado</Text>
                </Flex>
              </Box>
              <Box flex="1" bg="#1a1a1a" p={4} borderRadius="md">
                <Text fontSize="10px" fontWeight="500" textTransform="uppercase" letterSpacing="1px" mb={3} opacity={0.5} fontFamily="'Inter', sans-serif">2023–2024</Text>
                <Flex direction="column" gap={2}>
                  <Text fontSize="13px">Workshop — <em>Institutions, Extitutions and the Body without Organs</em>, Belgium 2024</Text>
                  <Text fontSize="13px">Salon — <em>OSS: Open Salon Series</em>, Portland, Oregon 2024</Text>
                  <Text fontSize="13px">Lecture Series — <em>Local DAO Summer</em>, cyberspace 2024</Text>
                  <Text fontSize="13px">Gathering — <em>General Forum on Ethereum Localism</em>, Portland 2024</Text>
                  <Text fontSize="13px">Salon — <em>Cybernetics and Public Goods</em>, MCON 3 Detroit 2023</Text>
                  <Text fontSize="13px">Salon — <em>Decentralized Independent Publishing</em>, Istanbul 2023</Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex 
          id="research"
          direction={['column', null, 'row']} 
          w="100%" 
          py={[10, null, 20]} 
          px={[6, null, 10]}
          scrollMarginTop="100px"
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
            <Box w="40px" h="1px" bg="primary" opacity={0.3} mb={3} />
            <Text 
              fontSize="14px" 
              fontWeight="500" 
              letterSpacing="2px"
              color="primary"
              fontFamily="'Inter', sans-serif"
            >
              〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>Research</Box> 〉
            </Text>
          </Box>
          <Box flex="1">
            <Box maxW="600px" mb={10}>
              <Text fontSize="15px" lineHeight="1.7" color="primary" opacity={0.85}>
                The Open Machine conducts research on the spontaneous orders, open protocols, and plural ontologies of the space outside of administrative institutions, and its clashes with an emerging front of social capture, enclosure and control. As an{' '}
                <Tooltip 
                  label="Extitutions are small, often ephemeral organizational bodies that use the benefits of institutional legibility to secure, protect and formalize the open empiricism of protocol undergrounds. The name was chosen to emphasize that they are discrete, atomic counterparts to the field-like and process forward phenomena of extitutional dynamics. Extitutions generally serve two roles: a) bundling technical protocols with open cultural values to shield them from capture, b) erecting or facilitating temporary autonomous zones to aid the crystallization of those values. They can be thought of as institutional avatars of protocol undergrounds, strategically deployed to fill power vacuums and keep institutional capture at bay. This often means taking on a trickster character, making deliberately disingenuous and playful use of institutional structures, running distract while the extitutional networks they serve remain in a state of illegibility."
                  bg="white"
                  color="black"
                  fontSize="13px"
                  p={3}
                  maxW="320px"
                  hasArrow
                  placement="top"
                >
                  <Box as="span" bg="#e8e8e8" color="bg" px={1} cursor="help" borderBottom="1px dashed" borderColor="bg">extitution</Box>
                </Tooltip>, our goal is to produce practical, materially grounded knowledge-sets that might evolve into open protocols adequate to the new technological landscape.
              </Text>
            </Box>
            <Flex direction={['column', null, 'row']} gap={[3, null, 4]} flexWrap="wrap">
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading fontSize="15px" mb={2} fontWeight="600">PCVC</Heading>
                <Text fontSize="13px" opacity={0.85}>Contracted project in collaboration with Open Civics Labs to identify strategies for ethical venture capital that exploit the legitimacy crisis of late stage capitalism and anticipate a post-capitalist transition. Final product forthcoming for Allo Capital.</Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading fontSize="15px" mb={2} fontWeight="600">Hyperactive Public Goods Funding</Heading>
                <Text fontSize="13px" opacity={0.85}>Research project bundling web3 capital allocation mechanisms into a modular apparatus to effectively fund public goods projects from early stage to end-cycle verification. Made possible with the help of Public Nouns.</Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading fontSize="15px" mb={2} fontWeight="600">Open Protocols Research Group</Heading>
                <Text fontSize="13px" opacity={0.85}>Multi-year cohort working in the context of <Link href="https://www.ethereumlocalism.xyz/" isExternal textDecoration="underline" _hover={{ opacity: 0.8 }}>Ethereum Localism</Link> to find formal isomorphism between open source web protocols and open protocols of urban cultural spaces. Made possible with funding from Arbitrum Grants and Ethereal Forest.</Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading fontSize="15px" mb={2} fontWeight="600">Intensive Protocols</Heading>
                <Text fontSize="13px" opacity={0.85}>Ongoing research looking into underground technologies for affective, nondual or nonordinary experience. This project engages neurophenomenology and computational modeling of qualia in order to develop digital renderings of underground assemblages.</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex 
          id="values"
          direction={['column', null, 'row']} 
          w="100%" 
          py={[10, null, 20]} 
          px={[6, null, 10]}
          bg="bg"
          scrollMarginTop="100px"
        >
          <Box w={['100%', null, '200px']} flexShrink={0} mb={[4, null, 0]}>
            <Box w="40px" h="1px" bg="primary" opacity={0.3} mb={3} />
            <Text 
              fontSize="14px" 
              fontWeight="500" 
              letterSpacing="2px"
              color="primary"
              fontFamily="'Inter', sans-serif"
            >
              〈 <Box as="span" bg="#e8e8e8" color="bg" px={1}>Values</Box> 〉
            </Text>
          </Box>
          <Box flex="1" maxW="800px">
            <Text fontSize="15px" lineHeight="1.85" color="primary" opacity={0.85} mb={8}>
              Our engagement with the archive and ethnographic study of underground communities alerted us to five principles (or four key values + one major operational principle) that animate the underground. They are as follows:
            </Text>
            <Box position="relative" mb={10}>
              <Image 
                src="/assets/Frame_1-4_1766814770591.png" 
                alt="Four core underground values plus one formal quality" 
                w="100%"
                maxW="700px"
              />
            </Box>
            <Flex direction={['column', null, 'row']} gap={[3, null, 4]} flexWrap="wrap" mb={10}>
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading as="h3" fontSize="15px" fontWeight="600" mb={2}>High Agency</Heading>
                <Text fontSize="13px" opacity={0.85}>
                  Participants actively shape situations, infrastructures, and outcomes through situated and emergent decision-making. Agency circulates rather than concentrates, expressed through improvisation, responsibility, and the capacity to act without delegated authority.
                </Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading as="h3" fontSize="15px" fontWeight="600" mb={2}>Open Aesthetic</Heading>
                <Text fontSize="13px" opacity={0.85}>
                  Aesthetic coherence is dynamic, arising and changing with the gestalt of the network. Subjection to an aesthetic condition is forsaken for a challenge to participate and codetermine a{' '}
                  <Tooltip 
                    label="Distinguished from a spectacle, which requires spectators, a performance is a deliberate cultivation of a vibe (or what Deleuze & Guattari would call a 'plateau') optimized for luring in new influences or affects."
                    bg="white"
                    color="black"
                    fontSize="13px"
                    p={3}
                    maxW="320px"
                    hasArrow
                    placement="top"
                  >
                    <Box as="span" bg="#e8e8e8" color="bg" px={1} cursor="help" borderBottom="1px dashed" borderColor="bg">performance</Box>
                  </Tooltip>.
                </Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading as="h3" fontSize="15px" fontWeight="600" mb={2}>Consent Forward</Heading>
                <Text fontSize="13px" opacity={0.85}>
                  Coordination is grounded in explicit, situated agreements that are continuously renegotiated. Boundaries, roles, and intensities remain legible to participants, enabling trust, experimentation, and mutual care under conditions of risk and transformation.
                </Text>
              </Box>
              <Box w={['100%', null, 'calc(50% - 8px)']} bg="#1a1a1a" p={4} borderRadius="md">
                <Heading as="h3" fontSize="15px" fontWeight="600" mb={2}>Process Oriented</Heading>
                <Text fontSize="13px" opacity={0.85}>
                  Attention is directed toward unfolding, qualitative dynamics rather than quantitative, static outcomes. This means emphasis on intensive experience or "qualia" - affect, epiphany, synchronicity, the nondual, and most importantly the experience of dissolution into larger subjectivities that may be determined by social, material, technological dynamics or (more likely) all of the above.
                </Text>
              </Box>
              <Box w="100%" bg="#1a1a1a" p={4} borderRadius="md">
                <Heading as="h3" fontSize="15px" fontWeight="600" mb={2}>(Open Protocolized)</Heading>
                <Text fontSize="13px" opacity={0.85}>
                  Practices crystallize into reusable patterns through a kind of natural selection in the "cold exterior" of the extitutional realm, where practical empiricism and novelty-infatuation reign. Weathered by the exterior, open protocols develop an acute, open empiricism, manifested as (a) availability to appropriation, forking, recombination to whatever material ends, & (b) resistance and circumvention to any system that compromises (a), and (c) compact and compelling enough form to facilitate free & open circulation.
                </Text>
              </Box>
            </Flex>
            <Text fontSize="15px" lineHeight="1.85" color="primary" opacity={0.85}>
              The underground is a recessive organism, resisting formalization or categorization even as it generates abundant protocols that depend on both of those tactics to persist. We generate this formal account not in order to enclose the underground, but because we our confident in our position that <em>it cannot be enclosed</em>.
            </Text>
          </Box>
        </Flex>

        <Footer />
      </main>
      </>
  )
}
