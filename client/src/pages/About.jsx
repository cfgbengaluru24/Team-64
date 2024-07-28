import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img5 from '../img/img4.jpg';
import img1 from '../img/img1.png';
import s1 from '../img/s1.png';
import Header from '../components1/Header';

const carouselImageStyle = {
  width: '100%',
  height: '800px', // Adjust the height as needed
  objectFit: 'cover', // Ensure the image covers the entire area
  borderRadius: '15px', // Rounded corners for a more polished look
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  position: 'relative',
  marginBottom: '30px' // Ensure the overlay is positioned correctly
};

export default function About() {
  return (
    <>
      <Header />
      <section id="home" className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Joining the Dots</h1>
            <p className="text-lg text-gray-600 mt-4">
              Empowering underprivileged rural graduate girls through education, skills, and opportunities.
            </p>
          </div>
          {/* Bootstrap Carousel */}
          <Carousel>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={s1}
                alt="Second slide"
                style={carouselImageStyle}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img5}
                alt="Third slide"
                style={carouselImageStyle}
              />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                style={carouselImageStyle}
              />
            </Carousel.Item>
          </Carousel>



          {/* Overview of Services */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-700">Our Programs</h2>
            <p className="text-gray-600 mt-4">
              We offer a variety of programs designed to uplift and support underprivileged rural girls, including
              scholarships, skill development workshops, and mentorship opportunities.
            </p>
          </div>

          {/* Impact Stories */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-700">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              We offer a variety of programs designed to uplift and support underprivileged rural girls, including
              scholarships, skill development workshops, and mentorship opportunities.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a href="#get-involved" className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600">
              Register as Volunteer
            </a>
          </div>
        </div>

        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="container mx-auto px-4">
            {/* Back to Top */}
            <div className="text-center mb-4">
              <a href="#top" className="text-white hover:underline">Back to Top</a>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">About Us</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Our Mission</a></li>
                  <li><a href="#" className="hover:underline">Our Team</a></li>
                  <li><a href="#" className="hover:underline">Our Impact</a></li>
                  <li><a href="#" className="hover:underline">Partners</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Get Involved</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Donate</a></li>
                  <li><a href="#" className="hover:underline">Volunteer</a></li>
                  <li><a href="#" className="hover:underline">Fundraise</a></li>
                  <li><a href="#" className="hover:underline">Events</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Resources</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Reports</a></li>
                  <li><a href="#" className="hover:underline">News</a></li>
                  <li><a href="#" className="hover:underline">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:underline">Contact Form</a></li>
                  <li><a href="#" className="hover:underline">Email Us</a></li>
                  <li><a href="#" className="hover:underline">Follow Us on Social Media</a></li>
                </ul>
              </div>
            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-600 my-4" />

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="text-sm">
                  <a href="#" className="hover:underline">Terms of Service</a>
                  <a href="#" className="ml-4 hover:underline">Privacy Policy</a>
                  <a href="#" className="ml-4 hover:underline">Disclaimer</a>
                </div>
              </div>
              <p className="text-sm text-gray-500">© 2024, Joining the Dots, All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
