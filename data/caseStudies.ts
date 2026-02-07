export type CaseStudyCategory =
  | "corporate"
  | "conference"
  | "educational"
  | "collaboration"
  | "custom"
  | "social";

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: CaseStudyCategory;
  theirAsk: string;
  experienceTailored: string;
  theExperience: string;
  theConnection?: string;
  theOutcome: string;
  teamDescription?: string;
  image?: string; // Placeholder for now
  images?: string[]; // Gallery images placeholder
}

export const caseStudies: CaseStudy[] = [
  // ==================== CORPORATE WALKS ====================
  {
    id: "google-colonial-crawl",
    slug: "google-colonial-crawl",
    title: "Google – Colonial Crawl & Creative Connections",
    client: "Google",
    category: "corporate",
    theirAsk: "Team-building experience that is beyond the usual offsite.",
    experienceTailored: "Colonial Crawl - Team Building Edition",
    image: "/tours/corporate-experiences/google-colonial-crawl/1.jpeg",
    images: [
      "/tours/corporate-experiences/google-colonial-crawl/1.jpeg",
      "/tours/corporate-experiences/google-colonial-crawl/2.jpeg",
    ],
    theExperience:
      "Google wanted a team-building experience that went beyond the usual offsite. They were looking for something immersive, informal, and deeply connected to the city. Gully Tours suggested our signature Colonial Crawl - a heritage walk that brings alive Bengaluru's colonial past through stories, architecture, and hidden anecdotes.\n\nSeema, our guide for the day, is a traveler, nature lover, and an ardent fan of mystery stories. Her warmth, curiosity, and knack for connecting the past with the present made her the perfect fit for Google's group. She led the team through the city's colonial landmarks - from the red-bricked High Court to the tree-lined paths of Cubbon Park - peppering her narration with tales of old Bangalore, British intrigue, and lesser-known nuggets that had everyone hooked.\n\nPost-walk, the group gathered on the lawns of Cubbon Park for a creative reflection session. Armed with paint, brushes, and blank canvases, each participant created a small piece inspired by the walk and their own connection to the city. The activity naturally evolved into a storytelling circle - people shared childhood memories, the cities they grew up in, and their personal love stories with Bengaluru.",
    theOutcome:
      "Strengthened team bonds through shared stories and creative expression. Encouraged deeper cultural appreciation of Bengaluru among participants. Created a memorable, personal experience that combined history, creativity, and connection.\n\nGoogle's Takeaway: Heritage and history can be powerful tools for team building — when presented with warmth, creativity, and space for personal stories.",
  },
  {
    id: "cred-pete-by-night",
    slug: "cred-pete-by-night",
    title: "CRED – Pete by Night",
    client: "CRED",
    category: "corporate",
    theirAsk:
      "To curate a unique, hassle-free cultural walk as an engaging offsite experience for their team.",
    experienceTailored: "Pete By Night - Cultural Walk Edition",
    image: "/tours/corporate-experiences/cred-pete-by-night/1.jpeg",
    images: ["/tours/corporate-experiences/cred-pete-by-night/1.jpeg"],
    teamDescription:
      "Eight members from different corners of India brought together a vibrant mix of cultures and professions. From software testing engineers and a QA specialist to a product analyst, software engineers, and a product manager it was a perfectly balanced, cross-functional crew.",
    theExperience:
      "As the CRED team wound their way through the narrow lanes of Cubbonpete, they stepped into a world where centuries-old markets and modern commerce live side by side. Guided by our storyteller, they uncovered tales of merchants, goldsmiths, and the communities that have kept this part of Bangalore buzzing for generations.",
    theConnection:
      "The Pete by Night tour became more than just a walk. Between tasting local snacks, laughing over quirky stories, and seeing hidden corners of the city, the team found new ways to connect with each other and with Bangalore itself.",
    theOutcome:
      "A night of discovery, shared memories, and a renewed appreciation for the city they work in.",
  },
  {
    id: "hyatt-centric-death-by-dosa",
    slug: "hyatt-centric-death-by-dosa",
    title: "Hyatt – Death by Dosa",
    client: "Hyatt",
    category: "corporate",
    theirAsk:
      "To curate the Death by Dosa experience as a personality development program for their in-house staff.",
    experienceTailored: "Death by Dosa - Personality Building Walk Edition",
    image: "/tours/corporate-experiences/hyatt-centric-death-by-dosa/1.jpeg",
    images: [
      "/tours/corporate-experiences/hyatt-centric-death-by-dosa/1.jpeg",
      "/tours/corporate-experiences/hyatt-centric-death-by-dosa/2.jpeg",
    ],
    teamDescription:
      "A lively group of professionals from Hyatt Bangalore came together for a morning unlike any other. With members from different departments from front office to culinary, sales to operations the team brought a mix of skills, perspectives, and personalities, united by a love for new experiences and good food.",
    theExperience:
      "They set out on our much-loved Death by Dosa walk - a morning trail through Bangalore's iconic dosa haunts. The city was just waking up as the group stepped into bustling breakfast joints, each with its own loyal following. From soft, fluffy set dosas served with fragrant chutneys to crisp golden masala dosas sizzling on hot tawas, every stop revealed a delicious slice of the city's food culture. Alongside the flavours came stories of century-old kitchens, family legacies, and how a simple breakfast became a Bangalore institution.",
    theConnection:
      "The gentle pace of the morning allowed for conversations to flow naturally. In between bites, the team shared childhood memories of weekend breakfasts, swapped hometown food stories, and laughed over the quirks of their own dosa preferences. The fresh morning air, aroma of filter coffee, and warm chatter made for a perfect setting to bond outside the hotel's walls.",
    theOutcome:
      "By the end of the walk, the group had not only discovered why Bangalore is obsessed with its dosas but had also created new memories together. The experience blended history, flavour, and friendship proving that sometimes the best way to start the day is with good company and a plate of something unforgettable.",
  },
  {
    id: "plansee-tipus-trail",
    slug: "plansee-tipus-trail",
    title: "Plansee – Tipu's Trail",
    client: "Plansee",
    category: "corporate",
    theirAsk:
      "A meaningful, engaging experience that goes beyond a regular corporate outing, allowing the team to connect, learn, and share across cultures.",
    experienceTailored:
      "Tipu's Trail - Cultural exchange & Team Bonding Walk Edition",
    image: "/tours/corporate-experiences/plansee-tipus-trail/1.jpeg",
    images: [
      "/tours/corporate-experiences/plansee-tipus-trail/1.jpeg",
      "/tours/corporate-experiences/plansee-tipus-trail/2.jpeg",
    ],
    teamDescription:
      "A group of 20 international clients from Plansee set out on a journey through time, ready to experience more than just a corporate outing. With members hailing from different countries and backgrounds, the group brought a vibrant mix of perspectives, making the day as much about cultural exchange as it was about exploration.",
    theExperience:
      "The adventure unfolded in Srirangapatna, walking in the footsteps of the legendary Tipu Sultan. The trail wove through ancient forts, temples, and battle sites, each corner revealing a story of courage, strategy, and legacy. The team learned about Tipu's innovative military tactics, his vision for the kingdom, and the events that shaped India's history. Between historic landmarks, they paused to share stories, reflect on the past, and draw parallels to their own journeys.",
    theConnection:
      "The rich heritage of Srirangapatna became the perfect stage for building deeper bonds. Away from meeting rooms and conference calls, the group connected over shared awe at centuries-old architecture, moments of quiet reflection in temple courtyards, and the thrill of uncovering stories that linked them across cultures.",
    theOutcome:
      "By the end of the day, the team left with more than photographs they carried a shared sense of discovery and connection. The walk transformed history into a living experience, strengthening relationships and sparking conversations that would last far beyond the trail.",
  },
  {
    id: "nike-tipus-trail",
    slug: "nike-tipus-trail",
    title: "Nike – Tipu's Trail & Mysore Palace",
    client: "Nike",
    category: "corporate",
    theirAsk:
      "A cultural and historical experience that blended exploration with team bonding.",
    experienceTailored: "Tipu's Trail & Mysore Palace - Cultural Walk Edition",
    image: "/tours/corporate-experiences/nike-tipus-trail/1.jpg",
    images: [
      "/tours/corporate-experiences/nike-tipus-trail/1.jpg",
      "/tours/corporate-experiences/nike-tipus-trail/2.jpg",
    ],
    teamDescription:
      "A dynamic group of Nike team members came together for a cultural deep dive in Mysore, blending their professional synergy with a shared curiosity for history and heritage. Each brought their own perspective, creating a vibrant mix of energy and insight.",
    theExperience:
      "The journey began at the magnificent Mysore Palace, where its ornate architecture and royal tales set the tone for the day. From there, the group travelled to Srirangapatna to follow Tipu's Trail — exploring forts, temples, and historic battle sites. Along the way, they uncovered stories of Tipu Sultan's strategic brilliance, leadership, and the pivotal role he played in shaping Indian history.",
    theConnection:
      "What started as a cultural outing evolved into moments of genuine bonding. As they walked through palace corridors, ancient fort walls, and quiet riversides, the team shared stories, laughter, and reflections — drawing parallels between historical resilience and their own collaborative journeys.",
    theOutcome:
      "The combination of Mysore's royal grandeur and Srirangapatna's revolutionary past created a memorable shared experience. The team returned with a deeper appreciation of Karnataka's heritage and renewed camaraderie — proof that history has a way of sparking connection.",
  },

  // ==================== CONFERENCE WALKS ====================
  {
    id: "entrepreneurs-organization-conference",
    slug: "entrepreneurs-organization-conference",
    title: "Entrepreneurs Organization Conference",
    client: "Entrepreneurs Organization",
    category: "conference",
    theirAsk:
      "A group of international delegates visiting Bangalore for a conference wanted a cultural, immersive experience that catered to varied groups and diverse interests.",
    experienceTailored:
      "Death By Dosa - Malleshwaram, Nandi Trail, Pub Crawl.",
    image: "/tours/corporate-experiences/entrepreneurs-organization-conference/1.jpg",
    images: [
      "/tours/corporate-experiences/entrepreneurs-organization-conference/1.jpg",
      "/tours/corporate-experiences/entrepreneurs-organization-conference/2.jpg",
    ],
    theExperience:
      "We curated three distinct experiences to showcase different facets of the city. The Death by Dosa – Malleshwaram Edition highlighted Bangalore's culinary heritage through iconic eateries and market stories. The Nandi Trail blended history, mythology, and nature in a serene countryside setting. To capture the city's modern spirit, the Pub Crawl introduced delegates to Bangalore's thriving craft beer culture and nightlife. Together, these experiences offered a balanced mix of food, history, culture, and leisure.",
    theOutcome:
      "Delegates discovered Bangalore from multiple perspectives, each finding elements that resonated with their personal interests. The experiences encouraged camaraderie, meaningful exchanges, and a deeper connection with the city. They returned not just with conference learnings, but with memorable stories and an authentic sense of Bangalore's spirit.",
  },
  {
    id: "nimhans-night-trail",
    slug: "nimhans-night-trail",
    title: "NIMHANS Night Trail",
    client: "NIMHANS",
    category: "conference",
    theirAsk:
      "To curate an engaging walking tour experience for delegates attending a Women's Mental Health Conference in March.",
    experienceTailored: "Bangalore Night Trail - Heritage Walk Edition",
    image: "/tours/corporate-experiences/nimhans-night-trail/1.jpg",
    images: [
      "/tours/corporate-experiences/nimhans-night-trail/1.jpg",
      "/tours/corporate-experiences/nimhans-night-trail/2.png",
    ],
    theExperience:
      "For delegates attending the Women's Mental Health Conference, we designed the Bangalore Night Trail – Heritage Walk Edition, offering them an engaging way to unwind while exploring the city's layered history. Set against the backdrop of twilight, the walk led participants through iconic streets, colonial-era buildings, and vibrant local pockets that reveal Bangalore's unique cultural and architectural heritage. With stories that intertwined the city's past and present, the trail provided a reflective yet lively experience—balancing history with the atmosphere of the city by night. It served not only as a heritage exploration but also as a mindful, communal activity, allowing delegates to connect with each other and with Bangalore in a memorable way.",
    theOutcome:
      "The Bangalore Night Trail gave delegates a refreshing break from the conference, blending relaxation with discovery. Exploring the city's heritage under twilight added a unique sense of calm and connection. The experience fostered meaningful conversations and left participants with memorable impressions of Bangalore's culture and spirit.",
  },
  {
    id: "world-coffee-conference",
    slug: "world-coffee-conference",
    title: "World Coffee Conference",
    client: "Ministry of Commerce & Industry, GOI",
    category: "conference",
    theirAsk:
      "To curate and conduct city tours for delegates of the World Coffee Conference, providing an immersive experience of Bangalore's culture and coffee heritage through expert-led sessions and guided explorations.",
    experienceTailored:
      "We designed a series of curated city walks and experiences exclusively for the delegates of the World Coffee Conference. Each walk was crafted to offer a sensory and cultural journey through Bangalore — tracing its evolution from a quiet colonial town to a global coffee hub.",
    theExperience:
      "Through the walk, delegates gained a deeper understanding of the city's rich history, architectural heritage, and vibrant local traditions. They experienced first-hand the stories behind Bangalore's coffee culture, exploring its evolution, significance, and unique practices. Delegates also engaged interactively with local artisans, baristas, and cultural experts, participating in demonstrations, tastings, and discussions that brought the city's culture to life. This combination of storytelling, hands-on experiences, and cultural engagement resulted in a memorable, insightful, and holistic immersion into Bangalore's heritage and coffee legacy.",
    theOutcome:
      "The curated experiences became a defining highlight of the conference, allowing international delegates to connect meaningfully with the host city beyond formal sessions. The initiative received widespread appreciation for its authenticity, creativity, and immersive storytelling. It not only showcased Bangalore's deep-rooted connection to coffee but also positioned the city as a cultural destination — where tradition, craftsmanship, and contemporary identity blend seamlessly.",
  },
  {
    id: "cii-colonial-crawl",
    slug: "cii-colonial-crawl",
    title: "Confederation of Indian Industry",
    client: "Confederation of Indian Industry",
    category: "conference",
    theirAsk:
      "Delegates visiting Bangalore wanted an exclusive experience that explored the city's colonial past — specifically a curated walk combining the Colonial Crawl with a guided exploration of Bangalore Palace, retracing stories from the British era and the city's royal connections.",
    experienceTailored:
      "We designed the Colonial Crawl + Bangalore Palace experience as an evocative journey through Bangalore's colonial-era charm and royal grandeur.",
    image: "/tours/corporate-experiences/cii-colonial-crawl/1.jpg",
    images: [
      "/tours/corporate-experiences/cii-colonial-crawl/1.jpg",
      "/tours/corporate-experiences/cii-colonial-crawl/2.jpg",
    ],
    theExperience:
      "Through the walk, delegates immersed themselves in Bangalore's layered past, moving beyond the surface of heritage landmarks to uncover the human stories that defined an era. They discovered the intersections of colonial administration and local culture, gaining a nuanced understanding of how these influences continue to shape the city's identity today. The guided experience balanced factual storytelling with reflective engagement, allowing participants to connect personally with the city's evolution.",
    theOutcome:
      "The walk received enthusiastic feedback from participants for its depth, storytelling, and immersive approach. Delegates appreciated how the experience went beyond conventional sightseeing to present Bangalore's colonial narrative with authenticity and perspective. The collaboration helped strengthen the city's image as a hub of culture and history, while reinforcing the role of curated walks as meaningful touchpoints in business and diplomatic visits.",
  },

  // ==================== EDUCATIONAL WALKS ====================
  {
    id: "inventure-malleswaram-art",
    slug: "inventure-malleswaram-art",
    title: "Inventure Academy – Malleswaram Art & Culture Walk",
    client: "Inventure Academy",
    category: "educational",
    theirAsk:
      "To provide 8th and 9th-grade students with an educational yet engaging experience that connects with their academic theme, while immersing them in local art, history, and culture.",
    experienceTailored: "Malleswaram Art & Culture Walk - Art & Cultural Walk Edition",
    image: "/tours/educational-walks/inventure-academy/1.jpg",
    images: [
      "/tours/educational-walks/inventure-academy/1.jpg",
      "/tours/educational-walks/inventure-academy/2.jpg",
    ],
    theExperience:
      "To align with the academic themes of 8th and 9th-grade students while keeping the experience engaging, we curated the Malleswaram Art & Culture Walk. This immersive trail guided students through the vibrant bylanes of Malleswaram, a neighborhood where tradition and creativity thrive. They explored heritage homes, bustling markets, and local temples, while also engaging with artisans and performers who keep age-old practices alive. Through stories, demonstrations, and interactive discussions, students discovered how history, culture, and art shape the identity of the neighborhood and connect back to their classroom learning. The walk blended education with exploration, allowing students to see the living links between what they study and the world around them.",
    theOutcome:
      "The Malleswaram Art & Culture Walk helped students see their curriculum come alive through real stories, spaces, and traditions. Meeting local artisans and exploring heritage landmarks deepened their appreciation for history, art, and community. The experience made learning interactive, memorable, and personally meaningful.",
  },
  {
    id: "inventure-green-space-challenge",
    slug: "inventure-green-space-challenge",
    title: "Inventure Academy – BLR Green Space Challenge",
    client: "Inventure Academy",
    category: "educational",
    theirAsk:
      "To create an immersive learning experience for Grade 8 students where they step into the role of interns for the District Collector of Bangalore. The activity should help them understand the challenges of a rapidly growing city, particularly the issue of reduced green spaces, by connecting the city's origins under Kempegowda to its present-day transformation.",
    experienceTailored: "Colonial Crawl - Green Space Walk Edition",
    image: "/tours/educational-walks/inventure-academy/3.jpg",
    images: [
      "/tours/educational-walks/inventure-academy/3.jpg",
      "/tours/educational-walks/inventure-academy/4.jpg",
    ],
    theExperience:
      "To transform classroom learning into real-world engagement, we designed an immersive activity where Grade 8 students became \"interns\" for the District Collector of Bangalore. Through the Green Space Walk Edition of our Colonial Crawl, students traced the city's journey from its origins under Kempegowda to its colonial expansions and today's urban sprawl. Walking through historic neighborhoods, parks, and civic landmarks, they observed firsthand how green spaces have evolved and, in many cases, diminished with rapid growth. Along the way, they engaged in role-play exercises—debating policy decisions, balancing development needs with environmental concerns, and imagining solutions for a more sustainable city. The walk not only connected history to the present but also empowered students to think critically about their role in shaping Bangalore's future.",
    theOutcome:
      "The Green Space Walk gave students a fresh perspective on Bangalore's evolution, linking Kempegowda's vision to today's urban challenges. Stepping into the role of decision-makers made them think critically about balancing growth with sustainability. The experience left them more aware, responsible, and inspired to reimagine their city's future.",
  },
  {
    id: "inventure-world-war-1",
    slug: "inventure-world-war-1",
    title: "Inventure Academy – World War I Trail",
    client: "Inventure Academy",
    category: "educational",
    theirAsk:
      "To design an experience for Grade 8 students that connects their curriculum to real-world learning by uncovering the stories of Indian soldiers in World War I—exploring key events, their contributions and sacrifices, and incorporating oral histories from local families with ancestral ties to the British Army.",
    experienceTailored: "MOD Foundation - World War I Trail",
    image: "/tours/educational-walks/inventure-academy/2.jpg",
    images: [
      "/tours/educational-walks/inventure-academy/1.jpg",
      "/tours/educational-walks/inventure-academy/2.jpg",
    ],
    theExperience:
      "To bring history alive for Grade 8 students, we curated the World War I Trail in partnership with the MOD Foundation. The trail was designed to move beyond textbooks, immersing the students in stories of Indian soldiers who fought on distant battlefields under the British Army. Through guided storytelling, archival photographs, and memorial visits, the students traced the journey of these soldiers—their courage, struggles, and sacrifices. Adding depth to the experience, oral histories from local families with ancestral ties to the war were shared, offering a deeply personal perspective on how global events shaped individual lives. The trail created a powerful bridge between curriculum and lived history, helping students understand the human side of war and inspiring empathy, reflection, and respect for the past.",
    theOutcome:
      "The World War I Trail helped students see history beyond textbooks, connecting facts to real human stories. Listening to oral histories made them empathize with the sacrifices of Indian soldiers and their families. The experience sparked curiosity, reflection, and a deeper respect for India's role in global history.",
  },

  // ==================== COLLABORATIONS ====================
  {
    id: "govt-karnataka-vidhana-soudha",
    slug: "govt-karnataka-vidhana-soudha",
    title: "Government of Karnataka – Vidhana Soudha Walk",
    client: "Government of Karnataka",
    category: "collaboration",
    theirAsk: "Designing and Training and Leading a new guided walk of the monument.",
    experienceTailored:
      "Design, train, and lead set of new guided walking experience at Vidhana Soudha.",
    image: "/collab-vidhana-soudha.jpg",
    theExperience:
      "We curated a 90-minute guided walking tour of Vidhana Soudha, led by expertly trained storytellers. The walk offered participants an immersive journey through the monument's architectural grandeur and historical significance, highlighting both its legislative importance and cultural legacy. Through carefully crafted narratives, visitors could connect with the stories behind its construction, the vision of its architects, and the role it plays in Karnataka's governance today. Each guide was trained to blend historical accuracy with engaging storytelling, ensuring a rich and memorable experience for all participants.",
    theOutcome:
      "The guided walks elevated visitors' understanding and appreciation of Vidhana Soudha, turning a landmark into a living narrative. Participants responded positively to the interactive storytelling, which made history accessible and engaging. Beyond visitor satisfaction, the initiative strengthened cultural tourism in Bangalore and provided a replicable model for future heritage walks across civic landmarks. By combining training, design, and execution, the collaboration created an enduring framework for meaningful cultural engagement at one of Karnataka's most iconic sites.",
  },
  {
    id: "blr-lit-fest-bookmarking",
    slug: "blr-lit-fest-bookmarking",
    title: "Bangalore Literature Fest – Bookmarking BLR Literary Walk",
    client: "Bangalore Literature Fest",
    category: "collaboration",
    theirAsk: "A collaborative walk celebrating Bangalore's vibrant reading culture.",
    experienceTailored: "Bookmarking BLR Literary Walk",
    theExperience:
      "We designed the Bookmarking BLR Literary Walk, an immersive experience that took participants through the literary heartbeat of Bangalore. The walk highlighted iconic bookstores, hidden reading corners, and spaces that have nurtured the city's reading and writing communities. Through engaging stories, anecdotes, and interactions with local authors and literary enthusiasts, participants discovered the city's rich literary history and its evolving contemporary scene. Each storyteller was trained to create a seamless blend of culture, history, and literary insight, ensuring a deeply engaging experience for participants of all ages.",
    theOutcome:
      "The literary walk successfully brought Bangalore's reading culture to life, sparking curiosity and appreciation among participants. Visitors not only connected with the city's literary heritage but also engaged in conversations that deepened their understanding of local authors, literary movements, and the evolving book culture. The collaboration strengthened the festival's community engagement efforts and established a model for future literary explorations, leaving participants with lasting memories and a renewed love for Bangalore's literary landscape.",
  },
  {
    id: "general-items-cantt-night",
    slug: "general-items-cantt-night",
    title: "General Items – Cantt by Night",
    client: "General Items",
    category: "collaboration",
    theirAsk: "Discovering hidden gems with General Items on this curated walk.",
    experienceTailored: "Cantt by Night X General Items",
    theExperience:
      "Cantt by Night X General Items was designed as an atmospheric evening walk through Bangalore's historic Cantonment — a neighbourhood where colonial charm meets contemporary subculture. The experience celebrated the area's layered past through stories of its architecture, nightlife, and evolving urban identity. Participants explored secret bylanes, century-old facades, and spaces that continue to inspire artists and creators today. The collaboration seamlessly merged General Items' sensibility for design and culture with our narrative-driven approach to city exploration, creating an experience that was as stylish as it was soulful.",
    theOutcome:
      "The walk drew a diverse, culture-curious audience and sparked fresh appreciation for the Cantonment's character and charm. Participants described it as an evocative blend of discovery and nostalgia — an invitation to see familiar spaces in a new light. The collaboration deepened community engagement around local history and independent cultural expression, while positioning General Items as a brand that champions meaningful, place-based experiences in Bangalore's creative landscape.",
  },
  {
    id: "sabha-cantt-night",
    slug: "sabha-cantt-night",
    title: "SABHA – Cantt by Night",
    client: "SABHA",
    category: "collaboration",
    theirAsk: "A Walk in Collaboration with SABHA – Celebrating Arts & Culture",
    experienceTailored: "Cantt by Night X SABHA",
    theExperience:
      "Cantt by Night X SABHA was envisioned as an immersive evening walk through the Bangalore Cantonment — where heritage, art, and contemporary culture intersect. The experience invited participants to explore the city's creative undercurrents, from old theatres and colonial facades to spaces that continue to nurture artistic expression today. Each stop on the walk was carefully curated to spark reflection and dialogue on the evolving relationship between art, place, and people. With SABHA's ethos rooted in arts appreciation and cultural dialogue, the collaboration transformed the cityscape into a living gallery — blending stories, performance, and conversation into a memorable cultural evening.",
    theOutcome:
      "The collaboration with SABHA deepened engagement with Bangalore's artistic heritage while creating a fresh platform for cultural storytelling. Participants left with a renewed appreciation for the city's creative ecosystem and its spaces of inspiration. The walk fostered community connections between artists, audiences, and storytellers, positioning SABHA as a vibrant catalyst for cultural experiences beyond the studio — and reaffirming the power of collaboration in keeping the city's artistic pulse alive.",
  },

  // ==================== CUSTOM WALKS ====================
  {
    id: "77th-birthday-walk",
    slug: "77th-birthday-walk",
    title: "77th Birthday Walk",
    client: "Group of Friends",
    category: "custom",
    theirAsk:
      "To celebrate their mother's 77th birthday in a unique and meaningful way — by gifting her an offbeat, experiential walk through the city that combines nostalgia, food, and storytelling.",
    experienceTailored: "Death by Dosa Walk",
    image: "/tours/custom-walks/77th-birthday-walk/1.jpg",
    images: [
      "/tours/custom-walks/77th-birthday-walk/1.jpg",
      "/tours/custom-walks/77th-birthday-walk/2.jpg",
    ],
    theExperience:
      "The birthday walk transformed into a heartwarming celebration of food, memory, and togetherness. As the group explored age-old dosa joints and hidden culinary gems, the experience sparked conversations about old Bangalore, changing neighbourhoods, and shared traditions. Guided by engaging storytellers, the walk balanced fun with nostalgia — creating an atmosphere that was both festive and deeply personal.",
    theOutcome:
      "The experience became more than just a birthday celebration — it turned into a memory the family and friends would cherish for years. The walk was appreciated for its thoughtful design, warmth, and ability to bring people closer through stories and shared experiences. It also highlighted how city walks can be reimagined as intimate, meaningful celebrations, blending the joy of exploration with the beauty of personal milestones.",
  },
  {
    id: "french-consulate-confluence",
    slug: "french-consulate-confluence",
    title: "French Consulate – Confluence of Religion Walk",
    client: "French Consulate",
    category: "custom",
    theirAsk:
      "To design an immersive experience that allowed delegates to explore and understand Bangalore's diverse cultural and religious landscape.",
    experienceTailored:
      "We curated the Confluence of Religion Walk, an experiential journey through Bangalore's spiritual and architectural diversity.",
    image: "/tours/custom-walks/french-consulate-confluence/1.jpg",
    images: [
      "/tours/custom-walks/french-consulate-confluence/1.jpg",
      "/tours/custom-walks/french-consulate-confluence/2.jpg",
    ],
    theExperience:
      "Led by expert storytellers Vinay and Nishitha, the walk offered participants a thoughtful exploration of Bangalore's religious and cultural fabric. Delegates experienced not just the architectural beauty of these sacred spaces but also the narratives of tolerance, exchange, and evolution that define them. The route encouraged reflection on the city's pluralism, while interactive discussions deepened understanding of how these traditions continue to thrive in modern Bangalore.",
    theOutcome:
      "The walk was met with enthusiastic appreciation from the French Consulate delegates, who found it an insightful introduction to Bangalore's spiritual and cultural heritage. The experience fostered meaningful cross-cultural dialogue and highlighted the city's unique blend of history, harmony, and diversity. It reinforced the value of storytelling-led experiences in building cultural understanding and showcased Bangalore as a city where tradition and modernity coexist seamlessly.",
  },
  {
    id: "architectural-trail",
    slug: "architectural-trail",
    title: "Architectural Trail",
    client: "Department of Science & Technology",
    category: "custom",
    theirAsk:
      "To explore Bangalore's most significant architectural landmarks, spanning different styles, eras, and architects, through a curated and insightful walking experience.",
    experienceTailored:
      "We designed the Architectural Trail, a guided walk that showcased the city's architectural diversity — from colonial-era buildings to modernist landmarks and contemporary design marvels.",
    image: "/tours/custom-walks/french-consulate-confluence/1.jpg",
    images: [
      "/tours/custom-walks/french-consulate-confluence/1.jpg",
    ],
    theExperience:
      "During the trail, Shri Sahay and his group engaged deeply with the city's built environment, uncovering stories behind iconic monuments, lesser-known gems, and celebrated architectural projects. The guides provided insights into historical influences, stylistic transitions, and innovative approaches adopted by different architects, creating a rich narrative that blended technical knowledge with cultural context. The walk encouraged dialogue, observation, and an appreciation for how architecture shapes urban identity and everyday experiences.",
    theOutcome:
      "The Architectural Trail left participants with a renewed understanding of Bangalore's architectural landscape and its layered history. The experience reinforced the importance of storytelling in interpreting built heritage and highlighted the city as a living classroom for design and architecture enthusiasts. Feedback emphasized the trail's depth, engagement, and ability to make architectural exploration accessible, insightful, and inspiring.",
  },
  {
    id: "rv-university-textile-trail",
    slug: "rv-university-textile-trail",
    title: "RV University – Textile Trail",
    client: "RV University",
    category: "custom",
    theirAsk:
      "To provide a hands-on learning experience for first-year Undergraduate Liberal Arts students as part of a Value Education course. The objective is to take the students to Chickpet to understand Bangalore's textile ecosystem, its evolution, and its cultural and economic significance.",
    experienceTailored:
      "We curated the Chickpet Textile Trail, a guided walk through one of Bangalore's oldest and most vibrant textile hubs.",
    image: "/tours/custom-walks/rv-university-textile-trail/1.jpg",
    images: [
      "/tours/custom-walks/rv-university-textile-trail/1.jpg",
      "/tours/custom-walks/rv-university-textile-trail/2.jpg",
    ],
    theExperience:
      "Students explored saree weaving units, observed jacquard looms in action, and learned about the intricate processes behind fabric creation. A unique highlight of the trail was seeing Puneeth Raj Kumar's face woven into a saree, demonstrating the blend of traditional craftsmanship with contemporary creativity. The walk was designed to be interactive, allowing students to engage directly with weavers, merchants, and artisans, connecting theoretical learning with real-world craft practices.",
    theOutcome:
      "The Textile Trail left students with a deeper appreciation for Bangalore's rich textile heritage and the skill involved in traditional and modern weaving techniques. It enhanced their observational and analytical skills, fostering curiosity about craft, culture, and commerce. By connecting classroom learning to real-world practice, the walk created an immersive, memorable, and educational experience that complemented the Value Education curriculum.",
  },
  {
    id: "singapore-university-startup-trail",
    slug: "singapore-university-startup-trail",
    title: "Singapore University – Startup Trail",
    client: "Singapore University",
    category: "custom",
    theirAsk:
      "An immersive learning journey that combines innovation, entrepreneurship, and social impact, from makerspace exploration to community workshops, startup visits, and real-world business exposure.",
    experienceTailored:
      "Startup Trail through Bangalore, from a design studio to a co-working hub and an electric mobility startup.",
    image: "/tours/educational-walks/singapore-university-startup-trail/1.jpg",
    images: [
      "/tours/educational-walks/singapore-university-startup-trail/1.jpg",
      "/tours/educational-walks/singapore-university-startup-trail/2.jpg",
    ],
    theExperience:
      "On 11th March, a group of 28 embarked on a unique Startup Trail designed to spark creativity and highlight the role of innovation in shaping a better world. The day began at a design studio, where participants explored the creative process from concept to prototype and saw how design thinking can be used to address real-world challenges. They then visited a vibrant co-working space, a hub where entrepreneurs, creators, and freelancers come together to collaborate and exchange ideas. The final stop was an electric mobility startup, where they learned how cutting-edge technology is driving sustainable transport solutions and reimagining urban mobility and ended the whole experience with an authentic South Indian Lunch.",
    theOutcome:
      "By exploring spaces that nurture ideas and innovation, participants gained a deeper understanding of how creativity, technology, and collaboration can be harnessed to serve both the community and the planet. The trail left them inspired to think beyond conventional solutions and approach challenges with a fresh, purpose-driven mindset.",
  },
  {
    id: "us-air-force-mysore",
    slug: "us-air-force-mysore",
    title: "US Air Force – Full Day Mysore Tour",
    client: "US Air Force",
    category: "custom",
    theirAsk:
      "To curate a full-day tour of Mysore that showcases the region's royalties, culture, politics, and economics. The group specifically wanted to cover all the iconic landmarks, including Mysore Palace and Chamundi Hills, within the constraints of a one-day trip from Bengaluru.",
    experienceTailored: "Full Day Mysore Tour - Historical & Cultural Walk Edition",
    image: "/tours/custom-walks/us-air-force-mysore/1.jpg",
    images: [
      "/tours/custom-walks/us-air-force-mysore/1.jpg",
      "/tours/custom-walks/us-air-force-mysore/2.jpg",
    ],
    theExperience:
      "For a group of US Air Force Officials keen to experience Mysore's grandeur in just one day, we curated a Full Day Historical & Cultural Walk Edition that seamlessly blended royalty, culture, politics, and economics. The journey began with a drive from Bengaluru and an ascent to Chamundi Hills, where students learned about the goddess Chamundeshwari and the city's mythological roots. At the heart of Mysore, the group explored the Mysore Palace, marveling at its Indo-Saracenic architecture while uncovering stories of the Wadiyars and their role in shaping the region's politics and economy. The walk extended into bustling markets, old neighborhoods, and heritage landmarks that showcased the city's vibrant culture and trade history. Balancing iconic highlights with immersive storytelling, the tour offered a rich, panoramic view of Mysore's layered identity—all within a single unforgettable day.",
    theOutcome:
      "The full-day Mysore tour gave the guests a sweeping glimpse of the city's royal grandeur, cultural vibrancy, and historical depth. Visiting iconic landmarks like Chamundi Hills and Mysore Palace within a single day left them with a sense of wonder and connection to the region's legacy. The experience turned a short trip into a rich journey of discovery and storytelling.",
  },
  {
    id: "university-sydney-food-walk",
    slug: "university-sydney-food-walk",
    title: "University of Sydney – Death By Dosa Malleshwaram",
    client: "Authentica - Enriching Global Immersions",
    category: "custom",
    theirAsk:
      "To organize a food walk experience for a group of 22 participants, showcasing Bangalore's rich culinary heritage in an engaging and authentic way.",
    experienceTailored: "Death By Dosa - Malleshwaram - Food Walk Edition",
    image: "/tours/educational-walks/university-sydney-food-walk/1.jpg",
    images: [
      "/tours/educational-walks/university-sydney-food-walk/1.jpg",
      "/tours/educational-walks/university-sydney-food-walk/2.jpg",
    ],
    theExperience:
      "For a group of 22 participants eager to explore Bangalore through its flavors, we curated the Death By Dosa – Malleshwaram Food Walk Edition. The walk took them through the bustling lanes of Malleshwaram, a neighborhood steeped in tradition and culinary heritage. From iconic dosa joints to hidden gems serving local sweets, snacks, and filter coffee, each stop offered not just food but also the stories, histories, and cultural significance behind the dishes. The experience was interactive and lively, with participants engaging with vendors, learning about age-old recipes, and savoring the aromas and tastes that define Bangalore's food culture. More than just a tasting trail, it was a journey that celebrated the city's vibrant street food legacy while creating shared memories around the table.",
    theOutcome:
      "The Malleshwaram Food Walk gave participants an authentic taste of Bangalore's culinary heritage beyond restaurants and menus. Tasting local favorites while hearing the stories behind them made the city's culture come alive in every bite. The shared laughter, flavors, and discoveries turned the walk into a memorable bonding experience for the entire group.",
  },
  {
    id: "singapore-tuk-tuk-tour",
    slug: "singapore-tuk-tuk-tour",
    title: "Singapore Group – Tuk Tuk Tour",
    client: "Singapore Group",
    category: "custom",
    theirAsk:
      "To arrange engaging tours in Mysore and Bangalore between 26th February and 2nd March 2025, during their visit for a wedding in Bangalore. The group wanted fun, immersive experiences that would let them explore the city in a unique and memorable way.",
    experienceTailored: "Tuk Tuk Tour: Fun Ricksaw Ride Edition",
    image: "/tours/custom-walks/singapore-tuk-tuk-tour/1.jpg",
    images: [
      "/tours/custom-walks/singapore-tuk-tuk-tour/1.jpg",
      "/tours/custom-walks/singapore-tuk-tuk-tour/2.jpg",
    ],
    theExperience:
      "Between wedding celebrations, the group was eager to discover the spirit of Bangalore and Mysore in a lighthearted, immersive way. We designed a Tuk Tuk Tour—a playful ride through the city aboard brightly painted auto rickshaws, the quintessential local mode of transport. With the wind in their hair and the buzz of the streets around them, the group zipped through bustling markets, historic neighborhoods, and hidden bylanes that many visitors rarely get to see. Along the way, they made stops to sample local snacks, interact with shopkeepers, and soak in stories of the city's culture and heritage. The rides were filled with laughter, friendly banter with drivers, and spontaneous discoveries, making it more than just a sightseeing tour—it was an adventure that connected them with the everyday rhythm of the city. By the end of the journey, the group not only explored Bangalore and Mysore but also created a joyful shared memory that became a highlight of their wedding trip.",
    theOutcome:
      "The Tuk Tuk Tour gave the guests a refreshing break from wedding festivities, letting them experience the cities with playfulness and curiosity. Riding through bustling streets and hidden corners made them feel like locals, not just visitors. The laughter, stories, and spontaneous discoveries turned the tour into one of the most memorable parts of their trip.",
  },
  {
    id: "cheers-before-whistle",
    slug: "cheers-before-whistle",
    title: "Cheers Before the Whistle – Bengaluru FC Edition",
    client: "Group of Friends celebrating birthday",
    category: "custom",
    theirAsk:
      "To celebrate our dear friend Gaurav's birthday in a unique way. As an ardent Bengaluru FC supporter, the gift had to capture his passion for the game and his love for the team.",
    experienceTailored: "Cheers before the whistle - Bengaluru FC Edition",
    theExperience:
      "The celebration began with an energetic pub crawl, where friends gathered to soak in the pre-match buzz and set the tone for the evening. From lively conversations to chants echoing the spirit of Bengaluru FC, it was the perfect way to build anticipation before heading to the stadium.\n\nAt the stadium gates, the excitement only grew as the group had the exclusive opportunity to welcome the teams on arrival, a moment that brought them up close to the players and electrified the atmosphere. Stepping inside the stadium, the energy of the crowd was palpable as they settled in to watch the much-awaited match unfold.\n\nThe highlight of the evening came when Gaurav was invited onto the field to present the Man of the Match award to the winning player. This once-in-a-lifetime opportunity turned a birthday gift into an unforgettable memory. To cap it all off, the group received a signed poster by Sunil Chhetri, a cherished keepsake from the captain himself, sealing the night as one of extraordinary experiences, camaraderie, and football magic.",
    theOutcome:
      "For Gaurav's circle of friends, the experience went far beyond just a birthday surprise, it became a shared memory that deepened their bond. From laughing and singing during the pub crawl to standing shoulder-to-shoulder while welcoming the team, every moment carried a sense of collective joy. Watching their friend step onto the field to present the Man of the Match was not only a proud moment for Gaurav but also for everyone who made it possible. The signed poster by Sunil Chhetri became a symbol of the evening, a reminder of the magic they had all been part of together. The tour turned into a story they would recount for years to come, one of friendship, celebration, and the thrill of experiencing football in the most personal way.",
  },

  // ==================== SOCIAL COMMITMENT ====================
  {
    id: "enable-india-death-by-dosa",
    slug: "enable-india-death-by-dosa",
    title: "Enable India – Death By Dosa Trail",
    client: "Enable India",
    category: "social",
    theirAsk:
      "Enable India wanted a hands-on, immersive learning experience for visually impaired participants. The goal was to combine cultural exploration, local history, and skill-building to foster confidence, independent mobility, and social engagement.",
    experienceTailored:
      "We designed Death By Dosa: A History and Food Walk through Chikpete, one of Bangalore's oldest neighborhoods. The walk combined historical storytelling, food experiences, skill-building, and inclusive engagement.",
    image: "/gully-cares-1.jpg",
    theExperience:
      "On 6th September 2025, 18 participants and 2 trainers with vision impairment joined 20 volunteers for a 4-hour journey through Chikpete. Volunteers guided the participants through busy streets, provided audio descriptions of surroundings, shared fun historical facts, and encouraged exploration. Participants navigated street corners, interacted with local vendors, and experienced the neighborhood's culture and culinary richness firsthand. It was an active, immersive experience where everyone was not just observing, but fully engaging with the environment.",
    theOutcome:
      "The walk empowered participants with vision impairment by building confidence in independent mobility and urban exploration. It fostered social inclusion, teamwork, and empathy between volunteers and participants. Additionally, everyone gained a deeper appreciation for Chikpete's heritage, culture, and street food. Beyond skills and knowledge, the walk created memorable experiences and reinforced the power of inclusive, experiential learning.",
  },
];

// Helper functions
export function getCaseStudiesByCategory(category: CaseStudyCategory): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === category);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.id === id);
}

export const categoryLabels: Record<CaseStudyCategory, string> = {
  corporate: "Corporate Walks",
  conference: "Conference Walks",
  educational: "Educational Walks",
  collaboration: "Collaborations",
  custom: "Custom Walks",
  social: "Social Commitment",
};

export const categoryColors: Record<CaseStudyCategory, string> = {
  corporate: "#B23F27",
  conference: "#4F8C7D",
  educational: "#DE6D11",
  collaboration: "#4F8C7D",
  custom: "#4F8C7D",
  social: "#4F8C7D",
};
