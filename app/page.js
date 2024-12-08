"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("workExperience");

  const renderContent = () => {
    switch (activeTab) {
      case "educationalExperience":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Educational Experience</h2>
            <Image src="/separator.jpeg" alt="Separator" width={400} height={3} className="mx-auto mb-4" />
            <p className="text-lg font-bold">University of Illinois at Chicago</p>
            <p className="text-sm mb-4">Bachelor of Science in Computer Science, Expected May 2025</p>
            <p className="text-sm">
              Through comprehensive coursework, I’ve cultivated expertise in data structures, algorithms, operating systems,
              database management, and cybersecurity. My education emphasizes innovative problem-solving, effective teamwork,
              and a deep understanding of modern software development practices.
            </p>
            <p className="font-semibold mt-4">Relevant Coursework:</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Cybersecurity Foundations</li>
              <li>Web Development</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-bold">Association for Computing Machinery</h3>
              <p className="text-sm text-gray-600">University of Illinois Chapter | September 2023 – Current</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Managed server operations, ensuring 99% uptime for student projects and events.</li>
                <li>Organized workshops, fostering skill development and member engagement.</li>
                <li>Promoted computing interests through SIG events and hackathons.</li>
                <li>Strengthened community through technical and social events.</li>
              </ul>
            </div>
            <section id="skills" className="mt-6">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <ul className="list-disc ml-6 mt-4 text-sm">
                <li>
                  <strong>Certifications:</strong> Foundations of Security (Google), Responsive Web Design (freeCodeCamp),
                  Back End Development and APIs (freeCodeCamp)
                </li>
                <li>
                  <strong>Languages:</strong> Python, C, C++, C#, Java, JavaScript, SQL, F#, Ruby
                </li>
                <li>
                  <strong>Developer and Design Tools:</strong> Git, GitHub, Jira, Maven, HTML, CSS, Google Test, Figma,
                  Arduino
                </li>
                <li>
                  <strong>Frameworks & Technologies:</strong> AWS, MySQL, React, Hibernate, RESTful API, Azure, Unity, Ruby
                  on Rails
                </li>
              </ul>
            </section>
          </div>
        );

      case "workExperience":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Work Experience</h2>
            <Image src="/separator.jpeg" alt="Separator" width={400} height={3} className="mx-auto mb-4" />
            {/* Digital Cash */}
            <div className="mb-6">
              <h3 className="font-bold text-lg">Digital Cash for Information Technology</h3>
              <p className="text-sm text-gray-600">Back End Cybersecurity Intern | May 2024 – August 2024</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Improved Java backend development for financial apps, boosting performance by 30%.</li>
                <li>Integrated RESTful APIs with Postman, enhancing system performance.</li>
                <li>Implemented AES and RSA encryption for financial data.</li>
                <li>Streamlined team collaboration via Jira and agile sprints.</li>
              </ul>
            </div>
            {/* J.P. Morgan */}
            <div className="mb-6">
              <h3 className="font-bold text-lg">J.P. Morgan Chase</h3>
              <p className="text-sm text-gray-600">Software Engineering Fellow | January 2024 – February 2024</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Built a Python and React environment to analyze stock data.</li>
                <li>Enhanced data visualization outputs by fixing TypeScript code.</li>
                <li>Optimized repository reliability for internal analysis tools.</li>
                <li>Integrated proprietary frameworks for project improvements.</li>
              </ul>
            </div>
            {/* Paris Baguette */}
            <div className="mb-6">
              <h3 className="font-bold text-lg">Paris Baguette</h3>
              <p className="text-sm text-gray-600">Barista | April 2024 – November 2024</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Handled over 400 daily orders, including catering and custom cakes.</li>
                <li>Provided excellent customer service and ensured high satisfaction levels.</li>
                <li>Maintained inventory and ensured efficient daily stocking.</li>
                <li>Supported operational efficiency by managing the morning shift effectively.</li>
              </ul>
            </div>
            {/* The North Face */}
            <div className="mb-6">
              <h3 className="font-bold text-lg">The North Face</h3>
              <p className="text-sm text-gray-600">Sales Associate | April 2023 – June 2024</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Averaged $3,000 in daily sales at a high-traffic Michigan Avenue location.</li>
                <li>Provided personalized recommendations to enhance customer experience.</li>
                <li>Collaborated on visual merchandising projects to boost sales.</li>
                <li>Consistently exceeded sales goals through effective communication and teamwork.</li>
              </ul>
            </div>
            {/* Planet Fitness */}
            <div className="mb-6">
              <h3 className="font-bold text-lg">Planet Fitness</h3>
              <p className="text-sm text-gray-600">Sales Associate | May 2023 – July 2023</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Assisted members with personalized fitness plans and membership queries.</li>
                <li>Managed front-desk responsibilities, ensuring seamless gym operations.</li>
                <li>Conducted tours to showcase the facility's amenities and services.</li>
              </ul>
            </div>
          </div>
        );

      case "technicalProjects":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Technical Projects</h2>
            <Image src="/separator.jpeg" alt="Separator" width={400} height={3} className="mx-auto mb-4" />
            <ul className="list-disc ml-6 text-sm">
              <li>
                <strong>CTA Database App</strong>: A Python-SQL console application for analyzing Chicago Transit Authority
                data. Leveraging Python for front-end and SQL for back-end data retrieval, it showcases advanced database
                management and visualization skills.
                <ul className="ml-4 mt-2 list-disc">
                  <li>Created a Python-SQL console application for analyzing CTA data.</li>
                  <li>Utilized SQL for back-end data retrieval, showcasing database management skills.</li>
                </ul>
              </li>
              <li>
                <strong>Encrypted Messenger</strong>: A secure messaging system with AES encryption using Java and MySQL. It
                ensures real-time, encrypted client-server communication with Hibernate persistence.
                <ul className="ml-4 mt-2 list-disc">
                  <li>Designed a secure system for encrypted communication.</li>
                  <li>Integrated Hibernate for seamless database operations.</li>
                </ul>
              </li>
              <li>
                <strong>Fast Food Frenzy</strong>: Built a Unity-based game featuring AI mechanics and custom shaders.
                <ul className="ml-4 mt-2 list-disc">
                  <li>Developed game mechanics using C# and Unity’s AI constructs.</li>
                  <li>Incorporated custom shaders for an engaging visual experience.</li>
                </ul>
              </li>
              <li>
                <strong>Smart Alarm Clock</strong>: Created an Arduino-based device for real-time environmental monitoring and
                alerts.
                <ul className="ml-4 mt-2 list-disc">
                  <li>Designed a clock using C/C++ for real-time updates and environmental monitoring.</li>
                  <li>Enabled serial communication between Arduino devices.</li>
                </ul>
              </li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Backdrop Image */}
      <div className="max-w-8xl mx-auto px-6 bg-white">
        <div className="relative w-full">
          <Image
            src="/backdrop.jpeg"
            alt="Chicago Backdrop"
            layout="responsive"
            width={3000}
            height={2096}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto min-h-screen">
        {/* Left Section */}
        <div className="w-2/5 p-10 bg-gray-100 flex flex-col space-y-8">
          <div className="text-center">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h1 className="text-3xl font-bold mt-6">Ceasar Attar</h1>
            <p className="text-xl mt-4">
              University of Illinois at Chicago<br />
              Bachelor of Science, 2025
            </p>
          </div>
                    {/* About Me */}
                    <section id="about" className="mt-6">
            <p className="text-sm mt-4">
              I am a senior Computer Science student passionate about backend development, cybersecurity, and solving
              complex problems through efficient software solutions. I thrive in collaborative environments and excel at
              adapting to challenges under pressure. My work on the CTA Database App and Encrypted Messenger exemplifies
              my ability to deliver impactful projects.
            </p>
          </section>

          <div className="space-y-6 mt-8 text-lg">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-black" />
              <span>Chicago, IL</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black" />
              <a href="mailto:ceasarattar03@gmail.com" className="text-blue-500 underline">
                Email
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700" />
              <a
                href="https://linkedin.com/in/ceasarattar"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-black" />
              <a
                href="https://github.com/ceasarattar"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaFileDownload className="text-black" />
              <a
                href="/resume.pdf"
                download
                className="text-blue-500 underline"
              >
                Resume
              </a>
            </div>
          </div>


        </div>

        {/* Right Section */}
        <div className="w-3/5 p-12">
          {/* Tabs */}
          <div className="flex justify-center gap-6 p-4 bg-gray-200 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab("educationalExperience")}
              className={`text-lg font-medium ${
                activeTab === "educationalExperience" ? "text-black" : "text-gray-500"
              }`}
            >
              Educational Experience
            </button>
            <button
              onClick={() => setActiveTab("workExperience")}
              className={`text-lg font-medium ${
                activeTab === "workExperience" ? "text-black" : "text-gray-500"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("technicalProjects")}
              className={`text-lg font-medium ${
                activeTab === "technicalProjects" ? "text-black" : "text-gray-500"
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
