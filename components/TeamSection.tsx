"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TeamMember from "./TeamMember";

interface TeamMemberData {
  name: string;
  image: string;
  role: string;
  description: string[];
  bio: string;
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers: TeamMemberData[] = [
    {
      name: "Vinay Parameswarappa",
      image: "/team/vinay.jpeg",
      role: "Founder",
      description: ["Leadership Coach", "Adventurer", "Trivia Buff"],
      bio: "Vinay is a passionate trivia buff who loves diving down fascinating rabbit holes. He enjoys urban exploration and connecting with people over conversations. At Gully Tours, he curates and leads walks that make people think and reflect. Over the years, he has led walks for Oscar-winning celebrities, Heads of State, CXOs, and loves leading walks for students. A certified scuba diver and an avid trekker, he loves brewing his daily coffee and enjoys a good single malt. An engineer from SJCE Mysore and an MBA from the University of Oxford, Vinay is currently pursuing a master's in Organisational Psychology.\n\nFavourite walk at Gully - Tipu's Trail in Srirangapatna.\nMost memorable travel experience - A midnight tour of the Colosseum in Rome under a full moon.\nOn the bucket list - To go on a hot air balloon safari in the Serengeti to see the Great Wildebeest Migration.",
    },
    {
      name: "Shruthi Preetham",
      image: "/team/shruthi.jpeg",
      role: "Operations & Business Head",
      description: ["Captain of Gully", "People-connector", "Problem Solver"],
      bio: "Shruthi brings heart, humour, and hustle to everything she does. Having worked across diverse sectors from research and medical sector to NGOs, fundraising, she thrives on connecting people, ideas, and impact. At Gully Tours, Shruthi wears many hats as the Head of Operations and Business. With an instinct for people and an eye for detail, she thrives on bringing order to the whirlwind balancing creativity with structure. Selling, managing teams, and crafting memorable experiences come naturally to her, it's where her extroverted energy meets her love for problem-solving. Fun-loving and endlessly curious, Shruthi loves to travel and meet new people yet equally treasures her moments of solitude. On a quiet Sunday, you'll find her building LEGO sets (sometimes solo, sometimes with her daughter) and music in the background.\n\nFavourite walk at Gully - Death by Dosa, where the stories are as flavourful as the food.\nMost memorable travel experience – Her heart belongs to Africa, where every corner is alive with stories and adventure. Italy also holds a special place for her — maybe it's the food, maybe it's the stories.\nOn the bucket list – To chase the Northern Lights in a caravan, somewhere between adventure and stills, making the journey as magical as the destination.",
    },
    {
      name: "Sneha Merlin",
      image: "/team/sneha.jpeg",
      role: "Ops Manager",
      description: ["Vice-Captain of Gully", "Dog aficionado", "Bird Watcher"],
      bio: "Sneha is the giggling part of Gully, more like Snehaha! True to her name, which means love, she brings warmth, laughter, and an easy sense of joy into everything she does. At Gully Tours, she is part of the Operations team, where she brings together people, places, and stories to create seamless, memorable experiences. From coordinating walks to making sure every little detail runs just right, Sneha keeps the heart of Gully alive behind the scenes with her cheerful energy and care. A nature and bird lover, she spends early mornings birdwatching with her dad and has even been part of several bird surveys. She holds a B.Com in Professional Accounting and an MBA in HR from Bharathiar University.\n\nFavourite walk at Gully - Cantonment by Night, for its quiet charm and stories that come alive under the city lights.\nMost memorable travel experience - Waking up to the quiet, misty hills of Marayur, Kerala, a morning that felt like pure serenity.\nOn the bucket list - To take a gondola ride in Venice and visit the beautiful beaches of the Philippines.",
    },
    {
      name: "Gladys D'souza",
      image: "/team/gladys.jpeg",
      role: "Ops Manager",
      description: ["Creative Captain", "Curious Explorer", "Culture Enthusiast"],
      bio: "Gladys is full of energy and curiosity, always eager to explore the world around her and uncover its hidden stories. A proud Bangalorean and a Roman Catholic with a twist, because she has visited countless temples in and around the city, deepening her love for heritage, culture, and the tales that make each place unique. She thrives on meeting new people, sharing discoveries, and creating experiences that spark joy and connection. A self-proclaimed big yapper, she loves striking up conversations, swapping stories, and turning every encounter into an adventure. She holds a B.Voc in Hospitality and Tourism and a Master's in Advertising and Public Relations, and combines both in her role as Ops Manager at Gully Tours, where she ensures every walk is seamless, engaging, and full of local flavor. When she's not planning experiences, she's exploring new places, or making creative projects that bring her joy.\n\nFavourite walk at Gully – Malleshwaram Hogona, as it perfectly captures her love for culture, stories, and the little surprises that make the city special.\nMost memorable travel experience – Soaring over the treetops on a zipline in Coorg.\nOn the bucket list – Skydiving in Italy with friends.",
    },
    {
      name: "Aafreen Fathima",
      image: "/team/aafreen.jpeg",
      role: "Travel Storyteller",
      description: ["Mechanical Engineer", "Baker", "Explorer"],
      bio: "Aafreen is a mechanical engineer who enjoys solving problems by day and leading stories by dusk. At Gully Tours, she leads walking tours across Bangalore and Mysore, bringing local tales, hidden corners, and delicious bites to life. A self-taught baker and an incurable curious soul, Aafreen tends to tumble down delightful rabbit holes whenever something catches her interest! Be it food, history, or a random conversation with a stranger. She believes everyone has a story to tell, even if they're not a storyteller, and that belief shapes every tour she leads. When she's not guiding guests through city streets, she's usually experimenting in the kitchen, hunting down new cafés, or planning her next culinary adventure.\n\nFavourite walk at Gully – The Bangalore Pete by Night walk, where every turn smells of spice, silk, and stories.\nMost memorable travel experience – A family trip to the highest hotel in Wayanad, waking up to a sunrise above clouds was pure magic!\nOn the bucket list – To take a food trail across Europe, one croissant and cannoli at a time.",
    },
    {
      name: "Ananya Vats",
      image: "/team/ananya.jpeg",
      role: "Travel Storyteller",
      description: ["Technologist", "Poet", "Reader"],
      bio: "Ananya is a compulsive reader who loves knowing the stories behind people and places. A huge believer of bringing travel home, she loves trying new experiences and hosting themed parties. She is a published poet and multidisciplinary artist who is currently experimenting with capturing her travel stories. She runs a travel book club where the group randomly chooses a new country every month to explore. She also publishes a weekly Substack newsletter. A Btech in Computer Science and an MBA from FMS, Delhi, She is currently a product manager at Google Maps and Bangalore chapter lead for 'Women in Product'. At Gully Tours, she gets to combine her two favorite things - stories and walking and is looking forward to discovering the city together with curious guests!\n\nFavourite walk at Gully - Bookmarking BLR!\nMost memorable travel experience - Driving through the otherworldly landscapes in Iceland, under the Northern lights!\nOn the bucket list - To go bachata dancing in Colombia",
    },
    {
      name: "Anju Marina Lobo",
      image: "/team/anju.png",
      role: "Travel Storyteller",
      description: ["IT Professional", "Storyteller", "Empath"],
      bio: "Anju Marina Lobo is an IT project manager, freelance storyteller, and passionate explorer who loves uncovering stories hidden in plain sight. Driven by curiosity and connection, she finds joy in understanding how people, places, and experiences intertwine — whether she's managing a project or leading a walk through her city. At Gully Tours, Anju brings warmth and energy to every experience, transforming facts into feelings and streets into stories. For her, every walk is a chance to meet new people, exchange ideas, and see her city through fresh eyes.\n\nHer favourite Gully walk – The Devaraja Market Walk, for its vibrant colours, aromas, and ever-changing energy that makes each experience unique.\nMost memorable travel moment – Watching sunsets by the beach, where time seems to slow down and small pauses feel infinite.\nOn the bucket list – To see the Northern Lights, a dreamlike mix of magic, colour, and calm.",
    },
    {
      name: "Anjali Melina Lobo",
      image: "/team/anjali.jpeg",
      role: "Travel Storyteller",
      description: ["Storyteller", "Music Lover", "Foodie"],
      bio: "Anjali Melina Lobo is a storyteller at heart, curious, observant, and always seeking to understand life in all its simple, beautiful chaos. She believes not every question needs a deep answer sometimes, all it takes is a plate of pani puri to make everything feel right again. At Gully Tours, Anjali finds joy in sharing stories about the city she calls home. Every walk is an opportunity to meet people from around the world, exchange experiences, and discover fresh perspectives. For her, storytelling isn't just about places — it's about the people who bring them to life. In her free time You'll find Anjali watching series, experimenting in the kitchen, listening to all kinds of music, or learning the guitar, one tune at a time.\n\nHer favourite Gully Walk? – The Culinary Walk in Mysore, where food becomes a bridge to culture and connection. From the bustling lanes of Devaraja Market to cooking and sharing a meal together, it's an experience that perfectly captures her belief that food is the most authentic way to understand a place.",
    },
    {
      name: "Arathi Varghese",
      image: "/team/arathi.jpeg",
      role: "Travel Storyteller",
      description: ["Researcher", "Designer", "Observer"],
      bio: "Arathi is a researcher and a self-described jack of many trades, but her truest calling lies in delighting in life's side quests. From being the child who shared dreams at school bus stops to becoming a storyteller of Bengaluru's gullies, she believes we always find our way back to what our younger selves loved most. Curious and reflective by nature, Arathi delights in exploring new food, observing the quirks of people, and unraveling history — in that particular order. At Gully Tours, she hopes to spark curiosity and help others see familiar streets with fresh eyes. Arathi is a Human-Centered Design Researcher, educated at the Srishti School of Design, and spent many of her formative years in Bahrain, experiences that shaped her deep interest in people and place.\n\nHer favourite Gully walk - Malleswaram Hogna, captures everything she loves about the city its rhythms, stories, and serendipitous moments tucked into everyday life.\nMost memorable travel experience – Standing inside the Virupaksha Temple in Hampi, she recalls how the sudden sound of temple bells drew her gaze to sunbeams filtering between ancient stone pillars — and there, perfectly framed, stood the temple elephant lifting its trunk in prayer. Simple, yet profoundly beautiful.\nOn the bucket list – To share travel adventures around the world with her family.",
    },
    {
      name: "Aishwarya Kirit",
      image: "/team/aishwarya.jpeg",
      role: "Travel Storyteller",
      description: ["Hoovu Gatherer", "Archivist", "Feline enthusiast"],
      bio: "Aishwarya is a museum professional, and is happiest researching and writing about history and culture. Walking with Gully Tours is a way to retrace the steps of people who've walked these same streets for centuries, a way to connect ourselves to the never-ending march of time. When I'm not working, I'm reading about work, when I'm not reading about work, I'm watching things about work, all other times, I'm drinking coffee in the sun with my cat. Aside from studying how to run a museum, I went to Mount Carmel College for a degree in Communication Studies. This one time, I did a walk for a group of women from Germany, some of whom had some ancestral connections to India. They braved the streets and museums of the city with me, and allowed me small glimpses into their rich lives. I now have more goals for myself as I grow older, and it happens every time I get to walk with slightly older women who have seen more of the world and are so open to sharing their knowledge and their joy.\n\nFavourite walk at Gully - Pete Walk\nMost memorable travel experience - The time I got food poisoning in Calcutta because it was raining, we got a sandwich from a nearby mall rather than venturing out into the city. Never again, pushes me to find good, local food everywhere.\nOn the bucket list - Time travel (what else could possibly make sense for someone like me?)",
    },
    {
      name: "Bhavana Jain",
      image: "/team/bhavana.jpeg",
      role: "Travel Storyteller",
      description: ["Historian", "Teacher", "Dosa-Lover"],
      bio: "Bhavana Jain—history teacher, oral historian, storyteller, and unapologetic dosa devotee—has spent over 16 years turning history lessons into stories that breathe. Passionate about material memory and family oral histories, she finds the extraordinary in the ordinary. A proud Bangalorean, Bhavana grew up on Commercial Street, developing a deep affection for its layered histories—a love that naturally led her to Gully Tours. She created the Cantt by Night Walk to share the city's quirks, charm, and colonial echoes with fellow wanderers. When she's not teaching or leading walks, she's chasing the perfect filter coffee, savoring a crispy dosa, or uncovering the next hidden story in the city's bylanes. Her storytelling extends into the kitchen through her Rajasthani food pop-up, where family recipes and heritage come alive.\n\nFavourite walk at Gully - Death by Dosa—obviously.\nMost memorable travel experience - One of her most memorable travel moments was a three-day train journey to Gujarat with friends.\nOn the bucket list – His ultimate bucket list is an adventure trek at Roopkund, where legend and landscape meet.",
    },
    {
      name: "Dhiren Kanted",
      image: "/team/dhiren.jpg",
      role: "Travel Storyteller",
      description: ["Scientist", "Quizzer", "Adventurer"],
      bio: "Dhiren is an explorer, investigator, thinker and an overall curious person. This curiosity makes him want to know more about different things ranging from astrophysics to sports. Being associated with Gully tours is an extension of his need to explore and find new stories. It brings him immense joy to share and hear untold stories and lore. A history and trivia buff Dhiren loves learning facts and origin stories. One other thing he enjoys is having deep conversations with people which leaves him and others with an existential crisis. Having a Master of Technology in Industrial Biotechnology from NIT Surathkal he works in biopharma development as a scientist who develops manufacturing processes.\n\nFavourite walk at Gully: Malleswaram Hogona!\nMost memorable travel experience: Hitchhiking through Rajasthan and Gujarat in the most economical way.\nOn the bucket list: Travelling across South and Southeast Asia trying to hunt for relatively unknown fruits and other plants.",
    },
    {
      name: "Ipsita Herlekar",
      image: "/team/ipsita.jpeg",
      role: "Travel Storyteller",
      description: ["Wildlife Biologist", "Writer", "Gardener"],
      bio: "Ipsita Herlekar is a wildlife biologist and science writer by training who enjoys deconstructing complex science so that everyone can understand it. Born and brought up in Mysore, she loves discovering new stories about her home city and sharing them with others. A passionate reader, she's drawn to books on history, nature, humour, and travel, and when not travelling, she escapes through travelogues instead. Ipsita also loves gardening and old-fashioned hobbies like writing letters.\n\nMost memorable travel experience - Are from Kyoto in autumn and the old city of Istanbul\nOn the bucket list – To trek up to Machu Picchu someday.",
    },
    {
      name: "Mradula Hegde",
      image: "/team/mradula.jpeg",
      role: "Travel Storyteller",
      description: ["Copy Writer", "Pop Culture Buff", "Chai Lover"],
      bio: "Mradula is a self-proclaimed Bollywood junkie. When not sipping cups of chai or consuming pop culture on the phone, she leads walks. A Bombay girl in Bengaluru, she loves to meet new people, try local street food, and learn more about spaces and cultures. A copywriter by profession and a biotech graduate by degree, her love for stories and spaces brought her to Gully tours. She will urge you to try solo travel at least once and encourages you to teach her a few key phrases in your mother tongue on walks with her. In return she will tell you the best vada pav and chai joints in the city.",
    },
    {
      name: "Nevin Sabu",
      image: "/team/nevin.jpeg",
      role: "Travel Storyteller",
      description: ["Educator", "Explorer", "Guitarist"],
      bio: "Nevin works with U&I, a non-profit that creates learning opportunities for underserved children, but somehow still has energy left to chase Bangalore's hidden stories, potholes, and the occasional perfect dosa. Fueled by curiosity about people, places, facts, and stories, he loves connecting the dots between small details and big stories, and he's happiest spotting hidden murals while sharing the strange, funny, and wonderful things that make Bangalore tick. He got into Gully Tours because he loves stories, fun facts, and meeting people—and what better way to combine all three than walking the city and uncovering its quirks while making others laugh along the way? Nevin holds a BSc in Physics with a minor in Education, which reflects his love for learning and exploring the world around him. When he's not on a walk, he's hunting for the best biryani in town, strumming his guitar, watching movies, debating something completely unnecessary just for fun, or planning his next adventure.\n\nFavourite walk at Gully - His favourite walk is the Colonial Crawl.\nMost memorable travel experience - One of his most memorable travel moments was rafting through the wild waters of the Teesta River.\nOn the bucket list – His ultimate bucket list is packed with adventure sports like surfing, skydiving, and wingsuiting.",
    },
    {
      name: "Nishitha Krishnaswamy",
      image: "/team/nishita.jpeg",
      role: "Travel Storyteller",
      description: ["Academic", "Performer", "Adventurer"],
      bio: "Nishitha sees life as an adventure — whether she's scaling a cliff face or free-falling from the sky, she finds joy in every thrill that comes her way. Her curiosity fuels her, driving her to learn something new each day through books, travel, and conversations. A lover of classical music, dance, theatre, technology, history, and the ocean, Nishitha finds inspiration in the vastness of both art and the world around her. She joined Gully Tours for the joy of storytelling — to share the tales of her beloved Mysuru and connect with people who love discovering the soul of a city through its stories. When she isn't leading a walk, you'll find her training in Carnatic Classical and light music, practising Bharatanatyam, performing in plays, or watching offbeat films. Nishitha holds a PhD in Journalism and Communication, with research focused on working with sex workers in Southern Karnataka to assess the effectiveness of health communication interventions.\n\nFavourite walk at Gully – Tipu's Trail, which fills her with pride as she narrates the story of the warrior who once had the British on their knees.\nMost memorable travel experience – Exploring the rock-cut cave temples of Badami, Aiholé, and Pattadkal, where she stood in awe at the cradle of Indian temple architecture.\nOn the bucket list – Joining an ocean conservation expedition in the Mariana Trench and conducting research from an underwater station.",
    },
    {
      name: "Prathyush Mandar",
      image: "/team/prathyush.jpeg",
      role: "Travel Storyteller",
      description: ["Social Worker", "Storyteller", "Vintage-Enthusiast"],
      bio: "Prathyush is a storyteller, social worker, and vintage clothes enthusiast. Born in Chikmagalur and raised on coffee and curiosity, he now calls Bengaluru home, where he heads corporate partnerships at a non-profit. Whether he's building collaborations or leading a city walk, Prathyush is at his best when he's telling stories that connect people — to causes, places, and each other. At Gully Tours, he turns Bengaluru's streets into living stories, bringing hidden histories and everyday spaces to life. A small-town kid with a soft spot for old buildings, strong filter coffee, and long conversations, Prathyush believes the most meaningful journeys often start in familiar streets.\n\nHis favourite Gully walk – Bookmarking Bangalore, perfectly captures his love for discovering forgotten corners and connecting them to the city's evolving narrative.\nMost memorable travel experience – His solo trip to Mahabalipuram, a perfect blend of beachside calm, 1300-year-old temple architecture, delicious seafood, and surf adventures.\nOn the bucket list – Trekking and camping at Son Doong Cave in Vietnam, the world's largest cave hidden deep within lush jungles.",
    },
    {
      name: "Preethika Sabu",
      image: "/team/preethika.jpeg",
      role: "Travel Storyteller",
      description: ["Impact Investor", "Reader", "Swimmer"],
      bio: "Preethika has a love for cities, stories, and the small surprises tucked into familiar corners. She joined Gully Tours to rediscover the city she grew up in, one hidden lane and stray piece of lore at a time, and to share the joy of discovery with others. She dislikes waking up early but loves swimming in the morning, so most days you'll find her either cocooned in bed or doing laps in the pool, with the weather usually deciding which. A devoted browser of used and independent bookstores, she picks up everything from feminist theory and thrillers to books on how companies are built and brands evolve. Anything within reach can become a bookmark, and earrings collected over the years are her most treasured keepsakes. She loves warm beverages, especially a good filter coffee or tea from her favourite corners of the city. Preethika holds a Master's in Public Policy from St. Xavier's College, Mumbai, and works as an impact investor with a soft spot for enterprises in waste-to-value, clean energy, and sustainable mobility.\n\nFavourite walk at Gully – Death by Dose, Chickpete, for its unexpected stories and delicious stops.\nMost memorable travel experience – Getting partially lost in Shimla, sipping hot tea and eating Maggi under tall deciduous trees.\nOn the bucket list – To try every water sport possible and, one day, swim across the English Channel.",
    },
    {
      name: "Raji Sunderkrishnan",
      image: "/team/raji.jpeg",
      role: "Travel Storyteller",
      description: ["Dreamer", "Writer", "Photographer"],
      bio: "Raji is a dreamer, eternally optimistic about the world and its people. She is moved by words and images and peeved by discrimination. A slow travel enthusiast, she considers travel her lifelong teacher. Life took her out of Bombay, but hasn't yet taken Bombay or the craving for ladi pav out of her. Bangalore is her second home, and she enjoyed discovering a quieter version of the city earlier, and is now rediscovering things as part of the explorations for Gully Tours. Raji loves meeting people, having interesting conversations, and trying local food. Storytelling has always been her passion and she can talk for hours about the things that excite her. Raji has had careers in architecture, teaching, photography, writing, and editing.\n\nFavourite walk at Gully: Currently, Colonial Crawl.\nMost memorable travel experience: Too many to recount, but the common thread is that most of them occurred before the smartphone and social media age ;)\nOn the bucket list: To travel along ancient trading routes, or maybe in the intrepid footsteps of travellers like Ibn Battuta.",
    },
    {
      name: "Raksha Shenoy",
      image: "/team/raksha.jpeg",
      role: "Travel Storyteller",
      description: ["Facilitator", "Entrepreneur", "Veena-Player"],
      bio: "Raksha is a facilitator, entrepreneur, and storyteller who loves bringing ideas and communities to life. She wears many hats between running a rural foods startup and leading walking tours that celebrate the soul of Bangalore. At Gully Tours, she leads walks that celebrate Bangalore's heart and culture. For Raksha, every walk is a chance to know the city a little more deeply and with each story uncovered, her bond with Bangalore grows stronger. When not walking the gullies of Bengaluru, she enjoys playing the Veena, exploring markets and parks, journaling, and spending quiet time in nature, always with her two doggos by her side. A Master's degree in Management and certified MBTI practitioner, Raksha brings her background in HR, facilitation, and entrepreneurship into everything she does.\n\nFavourite walk at Gully: Malleshwaram Hogona, for its beautiful mix of culture, heritage, and glorious impact of art on public behaviour.\nMost memorable travel experience: Watching the sunrise over the Ganga in Rishikesh, a timeless and deeply grounding moment.\nOn the bucket list: To learn the traditional art of Mysore-style painting.",
    },
    {
      name: "Rohith Siingh",
      image: "/team/rohith.jpeg",
      role: "Travel Storyteller",
      description: ["Wealth Manager", "Quizzer", "Foodie"],
      bio: "Rohith Siingh - Yes you read that right - 2 i's in his surname and that's a story best heard from him. Rohith is someone who bleeds Bengaluru! The fact that 4 generations of his family have lived in this city, is at the core of his love for all things Bengaluru - may it be RCB or DBC. His love for history, trivia and stories make him an avid quizzer. A foodie by heart he swears by a crispy Ooru style Masala Dose and has a sweet tooth. Thanks to his profession of being a wealth manager he loves speaking to people and knowing their stories. Apart from this he's a swimmer (water baby alert!) and a singer. What brings him to Gully is his passion for discovering the stories hidden under the surface and learning more about not just the city but also the people that have made it what it is. With a background in CA as well as an MBA, the world of finance has always intrigued him. He's also someone who enjoys soulful poetry and riveting history.\n\nFavourite walk at Gully - Bookmarking Bangalore & Death By Dose (no brainer best dosas)\nMost memorable travel experience - Witnessing the blue waters turn golden at sunrise in the silence of Koh Phi Phi\nBucket list - Northern Lights (Of course!)",
    },
    {
      name: "Seema Pai",
      image: "/team/seema.jpg",
      role: "Travel Storyteller",
      description: ["Biotechnologist", "Nature-Lover", "Reader"],
      bio: "A travel lover and foodie who's hopelessly hooked on mystery stories and thrillers. When she's not devouring books or binge-watching shows, you'll find her chatting away with plants, trees, bugs, and pretty much any animal (she swears it's normal!). She's a fan of all things old and simple, from red oxide floors, tiled roofs to grandma's sarees. With a master's in biotechnology, Seema now leads leadership programs at a well-known Clinical Research Organization but stays endlessly curious about India's rich culture, art, and stories. What drives her? Finding stories everywhere - whether traveling, painting, trekking, or just sipping coffee in Malleswaram's tree-lined streets.\n\nFavourite walk at Gully - Her favorite walk is the Malleshwaram Hogona.\nMost memorable travel experience - Stargazing in the Thar Desert, catching sunrises on volcanoes, and moon-gazing on bamboo-covered mountains.\nOn the bucket list – An adventure in Mongolia!",
    },
    {
      name: "Tanusha Murthy",
      image: "/team/tanusha.jpeg",
      role: "Travel Storyteller",
      description: ["Architect", "Designer", "Explorer"],
      bio: "Tanusha is an explorer at heart — always diving into places like a local, uncovering hidden corners, vibrant colors, and untold stories. Driven by curiosity and creativity, she finds joy in observing the textures, patterns, and quiet rhythms that give spaces their soul. An alumna of the Wadiyar Center for Architecture and currently pursuing History at IGNOU, she blends design thinking with a love for storytelling and discovery. At Gully Tours, Tanusha brings her keen eye for detail and wonder to every walk, helping people notice the beauty tucked into everyday life. She believes that history hums in every corner and that each walk is a chance to connect stories, perspectives, and people.\n\nHer favourite Gully walk – the ones where stories and perspectives intersect, revealing unexpected connections across cultures and lives.\nMost memorable travel experience – Boulder-hopping along a forest trail to a waterfall in Sirsi, where she stumbled upon a hidden cave and a secret fountain — a place alive with quiet magic.\nOn the bucket list – To dive off the rocky cliffs of Hvar into the turquoise Adriatic, chasing the thrill of the jump and the freedom of the sea below.",
    },
    {
      name: "Venkat Prasad",
      image: "/team/venkat.jpeg",
      role: "Travel Storyteller",
      description: ["Filmmaker", "Designer", "Foodie"],
      bio: "Venkat is a filmmaker and a designer. He works on writing movies, big and short, by day, and occasionally tinkers with countless art projects in his studio. A self-proclaimed nerd of all things, with history being at the top of the list. He is a die-hard foodie and claims to know all the best spots in town (ask for recommendations). A love for learning and sharing knowledge brings him to Gully. He believes that there's a serene sense of beauty in showing people a side road they didn't know existed or sharing a fact that blows their minds. He watches a boatload of TV shows and movies, tries to read as much as possible, and works on his board games whenever he has spare time. After attending school in Bangalore for most of his life, he went to study design at a film school in Bombay.\n\nFavourite walk at Gully - He personally loves Pub Crawls. They have all the things he looks for in a good night out: history, great company & alcohol.\nMost memorable travel experience - Discovering a beautiful woman in Sonargachi whose image had been on his tin box for years.\nOn the bucket list – Have a wine & cheese picnic in Cubbon Park and not get kicked out.",
    },
    {
      name: "Yamini Prakash",
      image: "/team/yamini.jpeg",
      role: "Travel Storyteller",
      description: ["Explorer", "Storyteller", "Yogi"],
      bio: "Yamini is a curious soul who wears many hats — explorer, storyteller, and eternal learner. Life feels most exciting to her when she's discovering something new, whether it's a hidden café, a great book (or more often, a binge-worthy series), or an offbeat corner of the city. A self-confessed foodie with an ever-growing appetite, she's always chasing bold flavours and quirky eateries. At Gully Tours, Yamini has found the perfect blend of her passions — meeting people, exploring stories, and seeing the world through a curious, open lens. What began as a way to connect with fellow wanderers has turned into a deeper journey of discovery through Bengaluru's streets, its people, and its untold tales. With a background in Commerce and Computer Science, Yamini has dabbled in project management, entrepreneurship, and storytelling. She's also a certified Ashtanga Vinyasa Yoga instructor — finding balance both on and off the mat.\n\nHer favourite Gully walks – The Food Tour and The Palace Tour, where every step is layered with flavour and history.\nOn the bucket list – To ride the waves surfing, dive deep scuba style, and master Kalaripayattu in Kerala — because, as she says, why not?",
    },
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#EDEDE7] px-4 py-20">
      {/* Content Container */}
      <div className="relative z-10 flex w-full max-w-[1368px] flex-col items-center gap-16">
        {/* Title */}
        <motion.h2
          className="w-full max-w-[777px] text-center font-rajdhani text-6xl font-bold uppercase leading-none text-[#262626] md:text-7xl lg:text-[84px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={slideUpVariants}
        >
          THE TRIBE THAT WALKS WITH YOU
        </motion.h2>

        {/* Team Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} onClick={() => setSelectedMember(member)} className="cursor-pointer">
              <TeamMember
                name={member.name}
                image={member.image}
                role={member.role}
                description={member.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[#F7F8DF] p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#262626]/10 text-2xl text-[#262626] transition-colors hover:bg-[#262626]/20"
              >
                ×
              </button>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-rajdhani text-4xl font-bold text-[#262626]">
                    {selectedMember.name}
                  </h3>
                  <p className="font-rajdhani text-2xl font-semibold text-[#247DA6]">
                    {selectedMember.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.description.map((desc, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#247DA6]/10 px-3 py-1 font-dm-sans text-sm text-[#262626]"
                      >
                        {desc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="whitespace-pre-line font-dm-sans text-base leading-relaxed text-[#262626]">
                  {selectedMember.bio}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
