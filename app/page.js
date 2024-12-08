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
            <Image src="/separator.jpeg" alt="Separator" width={600} height={10} className="mx-auto mb-4" />
            <p className="text-lg font-medium">University of Illinois at Chicago</p>
            <p className="text-sm mb-4">Bachelor of Science in Computer Science, Expected May 2025</p>
            <p className="text-sm">I have completed coursework in:</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Cybersecurity Foundations</li>
              <li>Web Development</li>
            </ul>
            <p className="font-semibold mt-4">Certifications:</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Google Foundations of Security</li>
              <li>freeCodeCamp Responsive Web Design</li>
              <li>Back End Development and APIs (freeCodeCamp)</li>
            </ul>
          </div>
        );

      case "workExperience":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Work Experience</h2>
            <Image src="/separator.jpeg" alt="Separator" width={150} height={10} className="mx-auto mb-4" />
            {/* Experience Entries */}
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
            <div className="mb-6">
              <h3 className="font-bold text-lg">J.P. Morgan Chase</h3>
              <p className="text-sm text-gray-600">Software Engineering Fellow | January 2024 – February 2024</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Developed Python and React tools for analyzing stock data.</li>
                <li>Improved visualization outputs by debugging TypeScript code.</li>
                <li>Optimized repository reliability and functionality.</li>
                <li>Contributed to improved project outcomes by integrating proprietary frameworks.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-lg">Paris Baguette</h3>
              <p className="text-sm text-gray-600">Barista | April 2024 – November 2024</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Managed 400+ daily orders, including catering and custom cakes.</li>
                <li>Maintained inventory levels and ensured operational efficiency.</li>
                <li>Delivered exceptional customer service and resolved issues efficiently.</li>
                <li>Led the morning shift, ensuring smooth opening and peak-time operations.</li>
              </ul>
            </div>
          </div>
        );

      case "technicalProjects":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Technical Projects</h2>
            <Image src="/separator.jpeg" alt="Separator" width={150} height={10} className="mx-auto mb-4" />
            <ul className="list-disc ml-6 mt-4 text-sm">
              <li>
                <strong>CTA Database App:</strong> Python and SQL application for analyzing and visualizing CTA data.
              </li>
              <li>
                <strong>Encrypted Messenger:</strong> Secure Java-based messaging system using AES encryption and MySQL.
              </li>
              <li>
                <strong>Fast Food Frenzy:</strong> Unity-based interactive game with AI mechanics and custom shaders.
              </li>
              <li>
                <strong>Smart Alarm Clock:</strong> Arduino-based environmental monitoring and timekeeping system.
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
          {/* Profile Section */}
          <div className="text-center">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h1 className="text-3xl font-bold mt-6">Ceasar Attar</h1>
            <p className="text-xl mt-4">University of Illinois at Chicago</p>
            <p className="text-sm mt-2">Bachelor of Science, 2025</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-lg">
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

          {/* About Me */}
          <section id="about" className="mt-6">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-sm mt-4">
              I am a senior Computer Science student specializing in backend development and cybersecurity.
              I have a passion for creating robust and efficient software systems. With strong problem-solving
              and collaboration skills, I thrive in high-pressure environments and excel at implementing creative
              solutions. My work spans secure messaging systems, real-time data analysis tools, and interactive
              gaming projects, showcasing my versatility and dedication to innovation.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="mt-6">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <ul className="list-disc ml-6 mt-4 text-sm">
              <li>Languages: Python, C++, Java, JavaScript, SQL</li>
              <li>Frameworks: React, Hibernate, Ruby on Rails</li>
              <li>Tools: Git, Postman, Figma, Unity</li>
              <li>Certifications: Google Foundations of Security</li>
            </ul>
          </section>
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
