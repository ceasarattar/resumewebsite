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
            <h2 className="text-3xl font-semibold text-center mb-4">Educational Experience</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />

            {/* UIC Logo */}
            <div className="text-center mb-8">
              <Image
                src="/images/uic.png"
                alt="University of Illinois at Chicago Logo"
                width={400}
                height={300}
                className="mx-auto"
              />
            </div>

            {/* Description */}
            <div className="mb-8" style={{ textAlign: 'justify' }}>
              <p className="text-md leading-relaxed mb-4">
                As a student at the University of Illinois at Chicago pursuing a Bachelor of Science in Computer Science,
                I have immersed myself in an academically rigorous environment that prioritizes both theoretical knowledge and
                practical skills. My coursework has covered a wide range of topics from algorithms and operating systems to database
                management, each pushing me to sharpen my problem-solving skills and embrace a thorough approach to software development.
              </p>
              <p className="text-md leading-relaxed">
                My studies have also provided hands-on experience in video game development, physical computing, and systems architecture,
                enabling me to connect theory to real-world applications. Through projects and collaborative assignments, I have
                developed technical skills in analyzing complex systems, optimizing performance, and maintaining scalability.
                These experiences have not only expanded my technical skillset but also developed my ability to collaborate effectively
                within my team.
              </p>
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
                <h4 className="text-lg font-bold"><br /><br /><br />Association for Computing Machinery</h4>
                <p className="text-sm text-gray-600 mb-2">University of Illinois Chapter | September 2023 – Current</p>
                <p className="text-md" style={{ textAlign: 'justify' }}>
                  As a member of ACM, I have actively contributed to building a community of computing enthusiasts on campus.
                  I have managed server operations, ensuring high uptime for student projects and events, and organized workshops
                  to enhance members' technical skills. My role in organizing Special Interest Group events and hackathons has promoted collaboration
                  and innovation among peers while addressing real-world technical challenges. This involvement has significantly enhanced my leadership
                  and technical skills, preparing me to make impactful contributions in the tech industry.
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
                <h4 className="text-lg font-bold"><br /><br /><br />NAAMA NextGen</h4>
                <p className="text-sm text-gray-600 mb-2">University of Illinois Chapter | August 2023 – Current</p>
                <p className="text-md" style={{ textAlign: 'justify' }}>
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
                <h4 className="text-lg font-bold"><br /><br /><br />Arab American Cultural Center</h4>
                <p className="text-sm text-gray-600 mb-2">University of Illinois Chapter | September 2021 – Current</p>
                <p className="text-md" style={{ textAlign: 'justify' }}>
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
          </div>
        );
      case "workExperience":
        return (
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-center mb-4">Work Experience</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />
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
                <h3 className="font-bold text-xl">Digital Cash for Information Technology</h3>
                <p className="text-sm text-gray-600">Back End Cybersecurity Intern | May 2024 – August 2024</p>
                <p className="mt-2 text-justify">
                  As a backend cybersecurity intern, I significantly enhanced the security and performance of financial
                  applications by implementing advanced encryption protocols and integrating RESTful APIs. My solutions
                  included using AES and RSA encryption methods for secure handling of financial data, alongside utilizing
                  the Spring framework and Hibernate to improve system architecture and responsiveness. Throughout my time at
                  Digital Cash, I collaborated effectively with team members using Jira and agile sprints, focusing
                  on optimizing backend code and maintaining high security standards across all projects.
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
                <h3 className="font-bold text-xl">J.P. Morgan Chase</h3>
                <p className="text-sm text-gray-600">Software Engineering Virtual Experience | December 2024</p>
                <p className="mt-2 text-justify">
                  During this experience, I built an efficient transaction queue system using Spring Boot and Kafka to enable
                  smooth communication between frontend and backend components, ensuring scalability and independent operation
                  of processes. I integrated an in-memory H2 database to store and validate transaction records in real-time,
                  allowing for quick data storage while reducing reliance on external databases during testing. To optimize
                  backend interactions, I developed and enhanced RESTful APIs with Spring Boot RestTemplate, enabling faster
                  and more reliable communication between backend services. To ensure system reliability, I implemented rigorous
                  testing using JUnit and embedded Kafka, simulating real-world message flows to validate data accuracy and performance
                  under load. This project enhanced my ability to design scalable systems, improve backend workflows, and test data-driven applications.
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
                <h3 className="font-bold text-xl">Paris Baguette</h3>
                <p className="text-sm text-gray-600">Barista | April 2024 – November 2024</p>
                <p className="mt-2 text-justify">
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
                <h3 className="font-bold text-xl">The North Face</h3>
                <p className="text-sm text-gray-600">Sales Associate | April 2023 – June 2024</p>
                <p className="mt-2 text-justify">
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
                <h3 className="font-bold text-xl">Planet Fitness</h3>
                <p className="text-sm text-gray-600">Sales Associate | May 2023 – July 2023</p>
                <p className="mt-2 text-justify">
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
            <h2 className="text-3xl font-semibold text-center mb-4">Technical Projects</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />


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
                <h3 className="text-xl font-bold">Music Mood Analysis</h3>
                <p className="mt-2 text-justify">
                  The Music Mood Analysis project replicates Spotify Wrapped by analyzing user listening habits and predicting their preferred music styles
                  with high accuracy. Developed using Python, it processes raw audio files with pyaudio, pydub, and Essentia while extracting playlist data
                  and audio features through the Spotify API. Using machine learning models such as Random Forest and Neural Networks, it categorizes songs
                  into moods like Happy, Sad, Energetic, and Chill by analyzing acoustic attributes, including tempo, loudness, and valence. NumPy and Pandas
                  handle data preprocessing, outlier removal, and feature engineering to improve prediction accuracy, ensuring meaningful insights from structured
                  datasets. The system also applies silence detection and segmentation techniques to enhance audio analysis. This project demonstrates advanced
                  techniques in machine learning, API integration, and data analysis, providing a data-driven approach to understanding user music preferences.
                </p>
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">CTA Database App</h3>
                <p className="mt-2 text-justify">
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
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">Encrypted Messenger</h3>
                <p className="mt-2 text-justify">
                  The Encrypted Messenger is a secure communication application developed using the Spring Framework, adhering
                  to the Single Responsibility Principle to ensure each class has a distinct function. It employs a RESTful API
                  architecture, facilitating operations such as POST, GET, and DELETE, which can be tested using tools like Postman.
                  Data persistence is managed through Hibernate ORM, interfacing with a MySQL database to store messages and user
                  information. The application features a client-server model where messages are encrypted using the Advanced Encryption
                  Standard (AES) before transmission, ensuring data confidentiality during transit. Upon reaching the server, messages
                  are decrypted and stored securely in the database.
                </p>
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">Fridge Inventory</h3>
                <p className="mt-2 text-justify">
                  The Fridge Inventory application is designed to help users efficiently manage the contents of a shared refrigerator,
                  such as those found in restaurants. Developed using JavaScript with Node.js and Express.js for the backend, and React
                  for the frontend, it provides a seamless interface for tracking and organizing fridge items. The application utilizes
                  a MySQL database to store information about users and fridge items, ensuring data consistency and integrity. Users can
                  log the addition or removal of items, which are categorized (e.g., fruits, vegetables) to facilitate easy tracking. Each
                  item entry is associated with the user who added it, promoting accountability and transparency. This system enhances the
                  management of shared refrigerator contents by providing clear insights into inventory status and user interactions.
                </p>
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">Fast Food Frenzy</h3>
                <p className="mt-2 text-justify">
                  Fast Food Frenzy is a Unity-based simulation game developed in C# that challenges players to manage a
                  fast-food restaurant under increasing levels of difficulty. The game leverages AI constructs to control
                  customer behavior and game mechanics, creating a dynamic and engaging experience. Advanced game development
                  techniques were utilized, including the use of custom shaders, maps, colliders, and sound and visual effects,
                  to deliver an immersive and interactive environment. Throughout development, multiple testing sessions were
                  conducted with user feedback to refine gameplay mechanics, ensuring a smooth and enjoyable experience across alpha, beta, and final releases.
                </p>
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">Smart Alarm Clock</h3>
                <p className="mt-2 text-justify">
                  The Smart Alarm Clock is an Arduino-based project designed to combine real-time environmental monitoring with customizable alarm functionalities.
                  Developed using C++ for microcontroller programming, the system integrates components such as an LCD display, temperature and humidity sensors,
                  and wireless communication modules to provide users with timely environmental data and notifications. The clock continuously measures and displays
                  temperature and humidity levels, allowing users to set alarms based on specific times or environmental thresholds, enhancing its utility beyond
                  traditional alarm clocks. The user interface, presented on an LCD screen, ensures clear interaction and control, while wireless communication modules
                  enable remote sensor data collection and alarm triggering. This project highlights expertise in embedded systems and hardware-software development,
                  offering a practical example of leveraging environmental data to create a smarter and more responsive alarm clock.
                </p>
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">Battleship Game</h3>
                <p className="mt-2 text-justify">
                  The Battleship Client-Server Application is a Java-based implementation of the classic Battleship game,
                  designed to facilitate multiplayer gameplay over a network using a client-server architecture. The server
                  component manages game sessions and player interactions, while the client provides an intuitive interface
                  for users to place ships and execute moves. Communication between the client and server is handled via sockets,
                  ensuring real-time responsiveness. The application employs the Model-View-Controller (MVC) design pattern to separate
                  game logic from the user interface, enhancing maintainability and scalability. This project demonstrates proficiency
                  in network programming, concurrent processing, and software design principles, offering an engaging platform for users
                  to enjoy the Battleship game remotely.
                </p>
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">Blackjack Game</h3>
                <p className="mt-2 text-justify">
                  The Blackjack Game is a Java-based application that simulates the classic card game, featuring an
                  interactive JavaFX GUI for an engaging user experience. Developed using object-oriented programming
                  principles, the project includes modular design with distinct classes for the deck, players, and game logic.
                  The game adheres to standard Blackjack rules, enabling players to perform actions such as hitting, standing,
                  and doubling down, while the program handles card shuffling, dealing, and score calculations. The JavaFX GUI
                  enhances gameplay by providing an intuitive interface, complete with dynamic visuals for cards, scores,
                  and player actions, creating an immersive experience.
                </p>
                <p className="mt-4">
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
                <h3 className="text-xl font-bold">Billboard Analysis</h3>
                <p className="mt-2 text-justify">
                  The Billboard Analysis Program is a C++ application designed to analyze Billboard chart data from 1960 to 2020,
                  offering insights into musical trends, artist performance, and song popularity across decades. The program utilizes
                  structured data management with structs to represent entries and integrates CSV parsing for seamless data import.
                  It provides an interactive menu-driven interface, enabling users to perform detailed analysis such as identifying
                  songs with the most number-one occurrences, determining the longest-charting songs, and examining the steepest weekly
                  climbs. Users can filter results by decade, year, or artist name, enhancing the flexibility of the tool. By leveraging
                  efficient data structures, the program delivers actionable insights into chart performance.
                </p>
                <p className="mt-4">
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
            <h1 className="text-3xl font-bold mt-6">Ceasar Attar</h1>
            <p className="text-xl mt-4">
              University of Illinois at Chicago<br />
              Bachelor of Science in Computer Science<br />
              Expected Graduation May 2025
            </p>
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-black" />
              <span>Chicago, IL</span>
            </div>
          </div>


          {/* About Me */}
          <section id="about" className="mt-6">
            <p className="text-justify" style={{ textAlignLast: 'center' }}>
              As a senior Computer Science student, my academic and professional journey centers
              around backend development and cybersecurity. With a strong foundation in software and
              program design, I excel at enhancing system performance and integrating advanced security protocols.
              I aim to contribute to dynamic teams that prioritize advanced and efficient software solutions.
            </p>
          </section>

          {/* Skills and Expertise */}
          <section id="skills" className="mt-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Skills and Expertise</h2>
            <hr className="w-80 mx-auto border-black mb-4" />
            <div className="flex flex-col items-center text-center w-full">
              <p className="text-justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Skills:</strong> Project Management, Time Management, Teamwork and Collaboration,
                Critical Thinking, Problem Solving, Attention to Detail, Creativity
              </p>
              <p className="text-justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Certifications:</strong> Foundations of Security (Google), Responsive Web Design (freeCodeCamp),
                Back End Development and APIs (freeCodeCamp)
              </p>
              <p className="text-justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Languages:</strong> Python, Go, C, C++, C#, Scala, Java, JavaScript, TypeScript, Kotlin, SQL, F#, Ruby
              </p>
              <p className="text-justify w-3/4 mx-auto mb-4" style={{ textAlignLast: "center" }}>
                <strong>Developer and Design Tools:</strong> Git, GitHub, Docker, Jira, Postman, Scikit-learn, SciPy, Pandas, NumPy, Maven, Terraform, Jenkins, Ansible, HTML, CSS, Figma, Arduino
              </p>
              <p className="text-justify w-3/4 mx-auto" style={{ textAlignLast: "center" }}>
                <strong>Frameworks & Technologies:</strong> AWS, Azure, MySQL, React, Hibernate, RESTful API, Spring Boot, Kafka, Next.js, Express.js, Node.js, Google Test, JUnit, Unity, TensorFlow, PyTorch, Ruby on Rails
                on Rails
              </p>
            </div>
          </section>

          {/* Community Involvement */}
          <section id="community-involvement" className="mt-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Community Involvement</h2>
            <hr className="w-80 mx-auto border-black mb-4" />
            <div className="flex flex-col items-center text-center w-full">

              {/* Earth Day Cleanup Volunteer */}
              <div className="w-3/4 mx-auto mb-6 flex items-start space-x-4">
                <img src="/images/earthday.png" alt="Earth Day Cleanup" className="w-12 h-12 rounded-full" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Earth Day Cleanup Volunteer</h3>
                  <p className="text-sm text-gray-600">Chicago Park District | Aug 2021 – Present</p>
                  <p className="text-justify">
                    Volunteered with the Chicago Park District and Friends of the Parks for the annual Earth Day Cleanup.
                    Helped improve local parks by picking up litter, mulching, and caring for plants to support a healthier environment.
                    Worked alongside community members to keep public spaces clean and spread awareness about sustainability.
                  </p>
                </div>
              </div>

              {/* Shelter Volunteer */}
              <div className="w-3/4 mx-auto mb-6 flex items-start space-x-4">
                <img src="/images/caninerescue.png" alt="Chicago Canine Rescue" className="w-12 h-12 rounded-full" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Shelter Volunteer</h3>
                  <p className="text-sm text-gray-600">Chicago Canine Rescue | Sep 2021 – Present</p>
                  <p className="text-justify">
                    Spent time caring for shelter dogs at Chicago Canine Rescue by walking, feeding, and playing with them to support
                    their well-being. Helped with daily shelter tasks like cleaning, laundry, and dishwashing to maintain a safe and comfortable
                    space for the animals. Followed shelter protocols and worked with staff to provide the best care possible.
                  </p>
                </div>
              </div>

              {/* Ronald McDonald House Volunteer */}
              <div className="w-3/4 mx-auto mb-6 flex items-start space-x-4">
                <img src="/images/rmhc.png" alt="Ronald McDonald House Charities" className="w-12 h-12 rounded-full" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Volunteer</h3>
                  <p className="text-sm text-gray-600">Ronald McDonald House Charities | Sep 2021 – Present</p>
                  <p className="text-justify">
                    Helped create a welcoming space for families staying at Ronald McDonald House by baking cookies and preparing snacks
                    to bring a sense of home. Assembled and handed out care packages for children to brighten their day. Worked with other
                    volunteers to maintain a warm and supportive atmosphere for families going through difficult times.
                  </p>
                </div>
              </div>

            </div>
          </section>




          {/* Contact and Profiles */}
          <section id="contact" className="mt-8">
            <h2 className="text-2xl font-semibold text-center mb-2">Contact and Profiles</h2>
            <hr className="w-80 mx-auto border-black mb-4" />
            <div className="flex flex-col items-center text-center w-full">
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
                  href="/sweResume.pdf"
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
              className={`text-lg font-medium ${activeTab === "educationalExperience" ? "text-black" : "text-gray-500"
                }`}
            >
              Educational Experience
            </button>
            <button
              onClick={() => setActiveTab("workExperience")}
              className={`text-lg font-medium ${activeTab === "workExperience" ? "text-black" : "text-gray-500"
                }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("technicalProjects")}
              className={`text-lg font-medium ${activeTab === "technicalProjects" ? "text-black" : "text-gray-500"
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
