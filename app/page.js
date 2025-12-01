"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [activeTab, setActiveTab] = useState("educationalExperience");

  const renderContent = () => {
    switch (activeTab) {
      case "educationalExperience":
        return (
          <div className="p-6">
            {/* Title */}
            <h2 className="text-4xl font-semibold text-center mb-4">Educational Experience</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />

            {/* Georgia Tech Section */}
            <div className="text-center mb-8">
              <Image
                src="/images/gatech.png"
                alt="Georgia Institute of Technology Logo"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>

            <div className="mb-8">
              <p className="text-xl text-gray-600 text-center mb-4">Master of Science in Computer Science, Specialization in Artificial Intelligence | Expected May 2027</p>
              <p className="text-xl leading-relaxed" style={{ textAlign: 'justify' }}>
                I'm pursuing a Master's in Computer Science with a focus on Artificial Intelligence at Georgia Tech.
                The program builds on my undergraduate foundation while diving deeper into machine learning, neural networks,
                and AI systems. Through coursework and research, I'm working on applying these technologies to solve
                practical problems in areas like natural language processing, computer vision, and intelligent automation.
              </p>
            </div>

            {/* UIC Section */}
            <div className="text-center mb-8 mt-12">
              <Image
                src="/images/uic.png"
                alt="University of Illinois at Chicago Logo"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-xl text-gray-600 text-center mb-4">Bachelor of Science in Computer Science | 2021 - 2025</p>
              <p className="text-xl leading-relaxed mb-4" style={{ textAlign: 'justify' }}>
                I graduated from UIC with a B.S. in Computer Science, where I built a strong foundation in algorithms,
                operating systems, database management, and software design. My coursework included video game development,
                physical computing, and systems architecture, which gave me hands-on experience connecting theory to practice.
                Through various projects and team assignments, I learned to analyze complex systems, optimize performance,
                and work effectively with others. I was honored to receive the 52nd Annual Chancellor's Student Service and
                Leadership Award for my campus contributions.
              </p>
            </div>

            {/* Hackillinois Section */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90" style={{ marginTop: '6rem' }}>
                <Image
                  src="/images/hackillinois.jpg"
                  alt="Hackillinois Picture"
                  width={200}
                  height={200}
                  className="mr-6"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold"><br /><br /><br />Hackillinois '25</h4>
                <p className="text-xl text-gray-600 mb-2">University of Illinois at Urbana-Champaign | Solana Track | March 2025</p>
                <p className="text-xl" style={{ textAlign: 'justify' }}>
                Participating in HackIllinois 2025 gave me the opportunity to collaborate intensively with a peers 
                from a  diverse technical background in a fast-paced, high-pressure, and innovation-driven environment. 
                Competing in the Solana blockchain track, I contributed to designing a decentralized AR experience while 
                navigating tight deadlines, evolving project scope, and new technologies. The hackathon challenged me to 
                adapt quickly, communicate effectively, and apply my software development skills in unfamiliar territory. 
                Beyond technical growth, the experience deepened my appreciation for creative problem-solving and teamwork 
                in a fast-paced setting.
                </p>
              </div>
            </div>
            
            {/* ACM Section */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90" style={{ marginTop: '6rem' }}>
                <Image
                  src="/images/acm.png"
                  alt="ACM Logo"
                  width={200}
                  height={200}
                  className="mr-6"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold"><br /><br /><br />Association for Computing Machinery</h4>
                <p className="text-xl text-gray-600 mb-2">University of Illinois Chapter | September 2023 – May 2025</p>
                <p className="text-xl" style={{ textAlign: 'justify' }}>
                  As a member of ACM, I actively contributed to building a community of computing enthusiasts on campus.
                  I performed systems engineering to ensure 99% server uptime for student projects and chapter-hosted events,
                  and organized technical workshops on API development, enabling students to gain practical experience in GraphQL
                  and REST. I mentored junior members in fundamental software engineering practices, contributing to higher project
                  quality and collaboration. My role in organizing Special Interest Group events and hackathons promoted collaboration
                  and innovation among peers while addressing real-world technical challenges. Through social events and hackathons,
                  I boosted recruitment and engagement, increasing membership growth and promoting collaboration across the chapter.
                </p>
              </div>
            </div>

            {/* NAAMA Section */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90" style={{ marginTop: '6rem' }}>
                <Image
                  src="/images/naama.png"
                  alt="NAAMA Logo"
                  width={200}
                  height={200}
                  className="mr-6"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold"><br /><br /><br />NAAMA NextGen</h4>
                <p className="text-xl text-gray-600 mb-2">University of Illinois Chapter | August 2023 – Current</p>
                <p className="text-xl" style={{ textAlign: 'justify' }}>
                  As a dedicated member of NAAMA NextGen at the University of Illinois Chicago (UIC), I actively
                  contribute to a vibrant community of Arab American healthcare students. Our mission is to empower
                  members through professional development events, mentorship programs, and philanthropic initiatives,
                  all aimed at fostering personal and professional growth. My involvement in NAAMA stems from my strong
                  connection to the Arab American community. Being part of NAAMA has allowed me to engage with a network
                  that values cultural heritage and mutual support. This involvement is important to me as it reinforces
                  the significance of representation, collaboration, and building bridges between diverse
                  professional fields, including technology and healthcare.
                </p>
              </div>
            </div>

            {/* AAMCC Section */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90" style={{ marginTop: '6rem' }}>
                <Image
                  src="/images/aamcc.png"
                  alt="AAMCC Logo"
                  width={200}
                  height={200}
                  className="mr-6"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold"><br /><br /><br />Arab American Cultural Center</h4>
                <p className="text-xl text-gray-600 mb-2">University of Illinois Chapter | September 2021 – Current</p>
                <p className="text-xl" style={{ textAlign: 'justify' }}>
                  As an active member of the Arab American Cultural Center at the University of Illinois Chicago (UIC),
                  I engage with a dynamic community dedicated to promoting the social and academic well-being of Arab American
                  students, staff, and faculty. Our center fosters cultural awareness, facilitates dialogue, and encourages interaction
                  among UIC's diverse groups. Through various cultural and educational programs, we strive to create an inclusive campus
                  environment where human differences are embraced. Being part of this pioneering center—the first and only Arab American
                  Cultural Center on a U.S. college campus—has enriched my understanding of cultural diversity and strengthened my commitment
                  to fostering inclusivity.
                </p>
              </div>
            </div>

            {/* Community Involvement */}
            <section id="community-involvement" className="mt-12">
              <h2 className="text-4xl font-semibold text-center mb-4">Community Involvement</h2>
              <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />

              {/* Earth Day Cleanup Volunteer */}
              <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
                <div className="ml-auto pr-90" style={{ marginTop: '6rem' }}>
                  <Image
                    src="/images/earthday.png"
                    alt="Earth Day Cleanup"
                    width={200}
                    height={200}
                    className="mr-6"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold"><br /><br /><br />Earth Day Cleanup Volunteer</h4>
                  <p className="text-xl text-gray-600 mb-2">Chicago Park District | Aug 2021 – Present</p>
                  <p className="text-xl leading-relaxed" style={{ textAlign: 'justify' }}>
                    As a volunteer for the annual Earth Day Cleanup, I have actively contributed to maintaining and improving Chicago’s
                    parks in collaboration with the Chicago Park District and Friends of the Parks. My responsibilities have included
                    picking up litter, mulching trees, and caring for plants to support a cleaner, greener environment. Working alongside
                    local residents and other volunteers, I have helped promote sustainability efforts and raise awareness about the
                    importance of protecting public spaces. This experience has strengthened my teamwork and leadership skills while
                    deepening my understanding of environmental conservation.
                  </p>
                </div>
              </div>

              {/* Shelter Volunteer */}
              <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
                <div className="ml-auto pr-90" style={{ marginTop: '6rem' }}>
                  <Image
                    src="/images/caninerescue.png"
                    alt="Chicago Canine Rescue"
                    width={200}
                    height={200}
                    className="mr-6"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold"><br /><br /><br />Shelter Volunteer</h4>
                  <p className="text-xl text-gray-600 mb-2">Chicago Canine Rescue | Sep 2021 – Present</p>
                  <p className="text-xl leading-relaxed" style={{ textAlign: 'justify' }}>
                    As a dedicated volunteer at Chicago Canine Rescue, I have played a key role in ensuring the well-being of shelter
                    dogs by walking, feeding, and engaging them in enrichment activities. Beyond direct animal care, I have assisted
                    with essential in-shelter tasks such as cleaning kennels, washing dishes, and organizing supplies to maintain a
                    hygienic and comfortable space for the animals. Through my time at the shelter, I have developed strong communication
                    skills by working closely with staff and fellow volunteers to ensure the best possible care for rescued dogs. This
                    role has reinforced my commitment to animal welfare and taught me the importance of patience and responsibility in
                    a fast-paced environment.
                  </p>
                </div>
              </div>

              {/* Ronald McDonald House Volunteer */}
              <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
                <div className="ml-auto pr-90" style={{ marginTop: '6rem' }}>
                  <Image
                    src="/images/rmhc.png"
                    alt="Ronald McDonald House Charities"
                    width={200}
                    height={200}
                    className="mr-6"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold"><br /><br /><br />Volunteer</h4>
                  <p className="text-xl text-gray-600 mb-2">Ronald McDonald House Charities | Sep 2021 – Present</p>
                  <p className="text-xl leading-relaxed" style={{ textAlign: 'justify' }}>
                    Through my work at Ronald McDonald House Charities, I have contributed to creating a warm and welcoming environment for
                    families staying at the house during difficult times. I have helped prepare fresh-baked cookies and nutritious snacks to
                    provide families with a sense of comfort and belonging. Additionally, I have assembled and distributed care packages
                    and goody bags to brighten the days of children receiving medical treatment. By working alongside other volunteers, I have
                    helped maintain a supportive and uplifting atmosphere, gaining valuable experience in teamwork, empathy, and community service.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case "workExperience":
        return (
          <div className="p-6">
            <h2 className="text-4xl font-semibold text-center mb-4">Work Experience</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />

            {/* Raila and Associates */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/raila.png"
                  alt="Raila and Associates Logo"
                  width={190}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl">Raila & Associates</h3>
                <p className="text-xl text-gray-600">Database Management Analyst | May 2025 – Present</p>
                <p className="mt-2 text-xl text-justify">
                  As a Database Management Analyst, I have significantly improved the reliability and performance of critical
                  data systems by analyzing performance bottlenecks and instability in legacy VBA components, enhancing consistency
                  across core workflows. I built Python scripts and structured queries to automate repetitive operations, reducing
                  error rates and manual processing time while conducting systematic validation of data workflows to identify edge-case
                  failures and reinforce system reliability. A major achievement was migrating a high-volume query engine from legacy
                  infrastructure to FileMaker, enabling efficient data computation across 2M+ records. Through optimizing database schemas,
                  indexing, and concurrent batch query execution, I have reduced latency and improved overall data throughput,
                  ensuring the system can handle growing data demands with enhanced performance and stability.
                </p>
              </div>
            </div>

            {/* Digital Cash */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/digitalcash.png"
                  alt="Digital Cash Logo"
                  width={190}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl">Digital Cash for Information Technology</h3>
                <p className="text-xl text-gray-600">Back End Cybersecurity Intern | May 2024 – August 2024</p>
                <p className="mt-2 text-xl text-justify">
                  As a backend cybersecurity intern, I enhanced API performance by profiling behavior under load and applying
                  targeted optimizations to resolve bottlenecks. I optimized backend infrastructure to support CI/CD pipelines
                  for scalable and high-volume data workflows, reducing system latency while implementing lightweight RSA and
                  AES-GCM encryption protocols for API transaction security, validated through comprehensive testing. I collaborated
                  with engineers to reproduce defects and verify fixes, gaining experience in structured debugging and validation
                  workflows. Additionally, I increased throughput in distributed backend workflows by optimizing connection pooling,
                  cache utilization, and multi-threaded pipelines, significantly improving overall system performance and reliability.
                </p>
              </div>
            </div>
            {/* J.P. Morgan */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-9">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/chase.png"
                  alt="J.P. Morgan Logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl">J.P. Morgan Chase</h3>
                <p className="text-xl text-gray-600">Software Engineering Virtual Experience | December 2024</p>
                <p className="mt-2 text-xl text-justify">
                  Built a transaction queue system using Spring Boot and Kafka to handle communication between frontend and backend
                  components. Integrated an H2 in-memory database for real-time transaction validation and testing. Developed RESTful
                  APIs with Spring Boot RestTemplate to improve backend service communication. Implemented comprehensive testing with
                  JUnit and embedded Kafka to validate system reliability under load.
                </p>
              </div>
            </div>
            {/* Paris Baguette */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/parisbaguette.png"
                  alt="Paris Baguette Logo"
                  width={190}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl">Paris Baguette</h3>
                <p className="text-xl text-gray-600">Barista | April 2024 – November 2024</p>
                <p className="mt-2 text-xl text-justify">
                  As a barista and cashier, I efficiently managed over 500 orders per shift, demonstrating exceptional
                  customer service and operational skills. I oversaw stock and inventory, ensuring supplies were well-organized
                  and readily available, which was crucial for maintaining the flow of a busy environment. Additionally, I was
                  responsible for opening the store, organizing and displaying baked goods on the floor, and ensuring everything ran smoothly from the start of each day.
                  This role required meticulous attention to detail and the ability to meet precise customer specifications consistently.
                </p>
              </div>
            </div>
            {/* The North Face */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/thenorthface.png"
                  alt="The North Face Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl">The North Face</h3>
                <p className="text-xl text-gray-600">Sales Associate | April 2023 – June 2024</p>
                <p className="mt-2 text-xl text-justify">
                  As a sales associate in a busy location on Michigan Avenue, I consistently achieved high sales, averaging
                  over $3,000 daily. My role included opening and closing the store, handling online orders, and managing stock
                  to ensure availability. I was also responsible for creating visually appealing merchandise displays
                  and providing personalized customer recommendations. This dynamic environment boosted my
                  ability to excel through teamwork and effective communication, consistently surpassing sales targets and meeting goals.
                </p>
              </div>
            </div>
            {/* Planet Fitness */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/planetfitness.png"
                  alt="Planet Fitness Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl">Planet Fitness</h3>
                <p className="text-xl text-gray-600">Sales Associate | May 2023 – July 2023</p>
                <p className="mt-2 text-xl text-justify">
                  My role involved opening the gym each morning and preparing the space to ensure it was clean and well-organized
                  for the day ahead. I supported gym members by creating personalized fitness plans, explaining membership options, and leading
                  detailed tours of our facilities. At the front desk, I managed daily operations, efficiently handling inquiries and maintaining
                  schedules. These responsibilities were key to providing a seamless and welcoming environment, enhancing member satisfaction and
                  ensuring a strong community atmosphere.
                </p>
              </div>
            </div>
          </div>
        );

      case "technicalProjects":
        return (
          <div className="p-6">
            <h2 className="text-4xl font-semibold text-center mb-4">Technical Projects</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />

            {/* Chain Quest Game */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-4">
              <Image
                src="/images/AstronautGame.png"
                alt="Chain Quest"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Chain Quest</h3>
                <p className="mt-2 text-xl text-justify">
                  Chain Quest is a 3D navigation and exploration game developed using the Mapbox Unity SDK, offering
                  players an immersive experience in a dynamically rendered city environment. Players assume the role
                  of an astronaut, navigating urban landscapes with real-time pathfinding facilitated by Mapbox's Directions
                  API. The game supports both real-time geolocation tracking and standard map placement, allowing players to
                  explore their surroundings dynamically or interact with a fixed environment using intuitive player controls.
                  The game features dynamic traffic simulations, achieved through animated car textures on roads, enhancing the
                  realism of the urban setting. Designed for versatility, Chain Quest supports WebGL deployment, making it
                  accessible across various platforms and browsers. This project showcases proficiency in integrating
                  real-world map data into interactive applications, utilizing Mapbox's AbstractMap component to render
                  3D cityscapes. It demonstrates skills in real-time pathfinding, dynamic texture animation, geolocation-based
                  interactions, and adaptable game design, reflecting a comprehensive understanding of Unity development and
                  geospatial data integration.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/ChainQuest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>


            {/* Music Mood Analysis */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-4">
              <Image
                src="/images/spotify.png"
                alt="Music Mood Analysis"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Musical Mood Analyzer</h3>
                <p className="mt-2 text-xl text-justify">
                  The Musical Mood Analyzer is a machine learning pipeline that replicates Spotify Wrapped by analyzing user listening habits
                  and predicting their preferred music styles with high accuracy. Built using Python, Pandas, and NumPy, I preprocessed Spotify
                  audio features for mood classification, handling data cleaning, outlier removal, and feature engineering. I trained multiple
                  models, including Logistic Regression, Random Forest, and XGBoost, achieving 75% accuracy in predicting song moods such as Happy,
                  Sad, Energetic, and Chill by analyzing acoustic attributes including tempo, loudness, and valence. Applied StandardScaler and
                  LabelEncoder in Scikit-learn to standardize features and optimize model convergence for mood classification. The system also
                  processes raw audio files with pyaudio, pydub, and Essentia while extracting playlist data and audio features through the
                  Spotify API, demonstrating advanced techniques in machine learning, API integration, and data analysis.
                </p>
                <p className="mt-4 text-lg">
                  <a
                    href="https://github.com/ceasarattar/MusicAnalysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* CTA Database App */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-4">
              <Image
                src="/images/cta.png"
                alt="CTA Database App"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">CTA Database App</h3>
                <p className="mt-2 text-xl text-justify">
                  The CTA Database App is a Python-based console application that leverages SQL for backend data
                  management and Matplotlib for dynamic data visualization. This utility enables users to interact
                  with Chicago Transit Authority (CTA) data through nine versatile commands, allowing for advanced
                  querying and analysis through parameterized SQL queries. The application uses Python for implementing
                  user input based features such as ridership breakdowns by day type, station color, and stop name.
                  SQLite's relational database capabilities are utilized to aggregate and join data across multiple tables,
                  enabling efficient retrieval of ridership trends, station statistics, and stop details. This tool demonstrates
                  the integration of data engineering and visualization techniques to provide valuable insights into CTA's
                  transit system, making it a powerful resource for operational analysis.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/CTA-Database-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Encrypted Messenger */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-5">
              <Image
                src="/images/messenger.png"
                alt="Encrypted Messenger"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Encrypted Messaging System</h3>
                <p className="mt-2 text-xl text-justify">
                  The Encrypted Messaging System is a secure communication application developed using object-oriented design (OOD)
                  principles and integrated with JUnit test cases. Built with a multi-threaded architecture to handle high-frequency
                  real-time communication, ensuring low-latency performance and smooth user interaction. The application employs a
                  RESTful API architecture using the Spring Framework, facilitating operations such as POST, GET, and DELETE, which
                  can be tested using tools like Postman. Data persistence is managed through Hibernate ORM, with optimized database
                  queries that improve read/write efficiency across high-traffic message storage, interfacing with a MySQL database.
                  The application features a client-server model where messages are encrypted using the Advanced Encryption Standard
                  (AES) before transmission, ensuring data confidentiality during transit. Upon reaching the server, messages are
                  decrypted and stored securely in the database.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/ServerClientSpring"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Fridge Inventory */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-5">
              <Image
                src="/images/fridge.png"
                alt="Fridge Inventory"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Fridge Inventory</h3>
                <p className="mt-2 text-xl text-justify">
                  The Fridge Inventory application is designed to help users efficiently manage the contents of a shared refrigerator,
                  such as those found in restaurants. Developed using JavaScript with Node.js and Express.js for the backend, and React
                  for the frontend, it provides a seamless interface for tracking and organizing fridge items. The application utilizes
                  a MySQL database to store information about users and fridge items, ensuring data consistency and integrity. Users can
                  log the addition or removal of items, which are categorized (e.g., fruits, vegetables) to facilitate easy tracking. Each
                  item entry is associated with the user who added it, promoting accountability and transparency. This system enhances the
                  management of shared refrigerator contents by providing clear insights into inventory status and user interactions.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/FridgeInventory/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Fast Food Frenzy */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-5">
              <Image
                src="/images/pizza.png"
                alt="Fast Food Frenzy"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Fast Food Frenzy</h3>
                <p className="mt-2 text-xl text-justify">
                  Fast Food Frenzy is a Unity-based simulation game developed in C# that challenges players to manage a
                  fast-food restaurant under increasing levels of difficulty. The game leverages AI constructs to control
                  customer behavior and game mechanics, creating a dynamic and engaging experience. Advanced game development
                  techniques were utilized, including the use of custom shaders, maps, colliders, and sound and visual effects,
                  to deliver an immersive and interactive environment. Throughout development, multiple testing sessions were
                  conducted with user feedback to refine gameplay mechanics, ensuring a smooth and enjoyable experience across alpha, beta, and final releases.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/FastFoodFrenzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Smart Alarm Clock */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-5">
              <Image
                src="/images/smartclock.png"
                alt="Smart Alarm Clock"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Smart Alarm Clock — Embedded System</h3>
                <p className="mt-2 text-xl text-justify">
                  The Smart Alarm Clock is an Arduino-based embedded system designed to combine real-time environmental monitoring with
                  customizable alarm functionalities. I developed firmware in C++ for the Arduino-based alarm system, integrating temperature
                  and light sensors via ADC for timed triggers. Through debugging signal noise, jitter, and timing drift using serial logging
                  and calibration, I improved accuracy by 30% and reduced latency significantly. The system works with hardware timers, ADC
                  sampling, and I²C communication to coordinate sensor input and display output. The clock continuously measures and displays
                  temperature and light levels, allowing users to set alarms based on specific times or environmental thresholds, enhancing
                  its utility beyond traditional alarm clocks. The user interface, presented on an LCD screen, ensures clear interaction and
                  control, while wireless communication modules enable remote sensor data collection and alarm triggering. This project
                  highlights expertise in embedded systems, microcontroller programming, and hardware-software development.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/SmartAlarmClock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Battleship */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-5">
              <Image
                src="/images/battleship.png"
                alt="Battleship"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Battleship Game</h3>
                <p className="mt-2 text-xl text-justify">
                  The Battleship Client-Server Application is a Java-based implementation of the classic Battleship game,
                  designed to facilitate multiplayer gameplay over a network using a client-server architecture. The server
                  component manages game sessions and player interactions, while the client provides an intuitive interface
                  for users to place ships and execute moves. Communication between the client and server is handled via sockets,
                  ensuring real-time responsiveness. The application employs the Model-View-Controller (MVC) design pattern to separate
                  game logic from the user interface, enhancing maintainability and scalability. This project demonstrates proficiency
                  in network programming, concurrent processing, and software design principles, offering an engaging platform for users
                  to enjoy the Battleship game remotely.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/BattleshipClientServer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Blackjack Game */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-5">
              <Image
                src="/images/blackjack.png"
                alt="Blackjack Game"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Blackjack Game</h3>
                <p className="mt-2 text-xl text-justify">
                  The Blackjack Game is a Java-based application that simulates the classic card game, featuring an
                  interactive JavaFX GUI for an engaging user experience. Developed using object-oriented programming
                  principles, the project includes modular design with distinct classes for the deck, players, and game logic.
                  The game adheres to standard Blackjack rules, enabling players to perform actions such as hitting, standing,
                  and doubling down, while the program handles card shuffling, dealing, and score calculations. The JavaFX GUI
                  enhances gameplay by providing an intuitive interface, complete with dynamic visuals for cards, scores,
                  and player actions, creating an immersive experience.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/BlackjackGame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>{/* Billboard Analysis */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-5">
              <Image
                src="/images/billboardanalysis.png"
                alt="Billboard Analysis"
                width={150}
                height={150}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Billboard Analysis</h3>
                <p className="mt-2 text-xl text-justify">
                  The Billboard Analysis Program is a C++ application designed to analyze Billboard chart data from 1960 to 2020,
                  offering insights into musical trends, artist performance, and song popularity across decades. The program utilizes
                  structured data management with structs to represent entries and integrates CSV parsing for seamless data import.
                  It provides an interactive menu-driven interface, enabling users to perform detailed analysis such as identifying
                  songs with the most number-one occurrences, determining the longest-charting songs, and examining the steepest weekly
                  climbs. Users can filter results by decade, year, or artist name, enhancing the flexibility of the tool. By leveraging
                  efficient data structures, the program delivers actionable insights into chart performance.
                </p>
                <p className="mt-4 text-xl">
                  <a
                    href="https://github.com/ceasarattar/Billboard-Analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>Ceasar Attar's Portfolio</title>
        <meta name="description" content="Ceasar Attar's personal portfolio showcasing work experience, technical projects, and educational background." />
      </Head>
      {/* Backdrop Image */}
      <div className="max-w-8xl mx-auto px-6 bg-white">
        <div className="relative w-full">
          <Image
            src="/images/backdrop.jpeg"
            alt="Chicago Backdrop"
            layout="responsive"
            width={3000}
            height={2096}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex max-w-full mx-7 min-h-screen">
        {/* Left Section */}
        <div className="w-2/5 p-10 bg-gray-100 flex flex-col space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <div className="w-96 h-96 rounded-full overflow-hidden mx-auto relative"> {/* Ensures it's a perfect circle */}
              <Image
                src="/images/profilepicture.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                objectFit="cover" // Ensures it fills the circular frame
                objectPosition="center top" // Crops the top slightly
                className="rounded-full transform translate-y-[10px] translate-x-[75px] scale-150" // Moves the image up to crop the top
              />
            </div>
            <h1 className="text-5xl font-bold mt-6">Ceasar Attar</h1>
            <p className="text-2xl mt-4">
              Georgia Institute of Technology<br />
              Master of Science in Computer Science<br />
              Specialization in Artificial Intelligence<br />
              Expected Graduation May 2027
            </p>
          </div>


          {/* About Me */}
          <section id="about" className="text-xl mt-6">
            <p className="text-justify" style={{ textAlignLast: 'center' }}>
              I'm a Computer Science graduate student specializing in AI at Georgia Tech. My work focuses on backend development,
              database optimization, and building intelligent systems. I enjoy solving performance problems, debugging complex workflows,
              and working with teams that value clean, efficient code.
            </p>
          </section>

          {/* Skills and Expertise */}
          <section id="skills" className="mt-6">
            <h2 className="text-3xl font-semibold text-center mb-2">Skills and Expertise</h2>
            <hr className="w-80 mx-auto border-black mb-4" />
            <div className="flex flex-col items-center text-center w-full">
              <p className="text-xl justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Skills:</strong> Embedded Systems, Microcontroller Programming, Database Optimization, Performance Profiling,
                Workflow Automation, System Debugging
              </p>
              <p className="text-xl justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Certifications:</strong> Foundations of Security (Google), Responsive Web Design (freeCodeCamp),
                Back End Development and APIs (freeCodeCamp)
              </p>
              <p className="text-xl justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Languages:</strong> C, C++, Python, Java, C#, Go, JavaScript, TypeScript, R, SQL, F#, Ruby, VBA
              </p>
              <p className="text-xl justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Developer Tools:</strong> Git, GitHub, Jira, Postman, FileMaker, Docker, Figma, Arduino, RStudio, Altair AI Studio
              </p>
              <p className="text-xl justify w-3/4 mx-auto" style={{ textAlignLast: "center" }}>
                <strong>Frameworks & Technologies:</strong> AWS, Azure, MySQL, PostgreSQL, React, Hibernate, RESTful API, Spring Boot, Kafka, Node.js, Express.js, Next.js
              </p>
            </div>
          </section>

          {/* Contact and Profiles */}
          <section id="contact" className="mt-8">
            <h2 className="text-3xl font-semibold text-center mb-2">Contact and Profiles</h2>
            <hr className="w-80 mx-auto border-black mb-4" />
            <div className="flex flex-col items-center text-2xl center w-full">
              <div className="flex items-center justify-center w-full mb-4">
                <FaEnvelope className="text-black mr-3" />
                <a href="mailto:ceasarattar03@gmail.com" className="text-blue-500 underline">
                  Email
                </a>
              </div>
              <div className="flex items-center justify-center w-full mb-4">
                <FaLinkedin className="text-blue-700 mr-3" />
                <a
                  href="https://linkedin.com/in/ceasarattar"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center justify-center w-full mb-4">
                <FaGithub className="text-black mr-3" />
                <a
                  href="https://github.com/ceasarattar"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center justify-center w-full">
                <FaFileDownload className="text-black mr-3" />
                <a
                  href="/CeasarAttar.pdf"
                  download
                  className="text-blue-500 underline"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Right Section */}
        <div className="w-3/5 p-2">
          {/* Tabs */}
          <div className="flex justify-center gap-6 p-4 bg-gray-200 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab("educationalExperience")}
              className={`text-xl font-medium ${activeTab === "educationalExperience" ? "text-black" : "text-gray-500"
                }`}
            >
              Educational Experience
            </button>
            <button
              onClick={() => setActiveTab("workExperience")}
              className={`text-xl font-medium ${activeTab === "workExperience" ? "text-black" : "text-gray-500"
                }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("technicalProjects")}
              className={`text-xl font-medium ${activeTab === "technicalProjects" ? "text-black" : "text-gray-500"
                }`}
            >
              Technical Projects
            </button>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
