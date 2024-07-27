import React from 'react';
import hands from "../img/hands.jpeg";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <img src={hands} alt="Empower Girls" className="w-full h-[70vh] object-cover rounded-lg shadow-lg mb-8" />

        {/* Additional Paragraph */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            NGO based out of Bangalore focusing on education, healthcare, and environment. Area of operations in Andhra Pradesh, mainly Chittoor District. Working with 100+ government schools and 20+ government degree colleges.
          </p>
        </div>

        {/* Flex container for Mission, Values, and Impact */}
        <div className="flex flex-col md:flex-row justify-between items-stretch space-y-8 md:space-y-0 md:space-x-8 mb-8">
          {/* Mission */}
          <div className="flex-1 text-center md:text-left bg-white p-6 rounded-lg shadow-md h-80">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 mt-4">
              Our mission is to empower underprivileged rural graduate girls by providing them with the education, resources, and opportunities they need to achieve their full potential.
            </p>
          </div>

          {/* Values and Principles */}
          <div className="flex-1 text-center md:text-left bg-white p-6 rounded-lg shadow-md h-80">
            <h2 className="text-2xl font-semibold text-gray-700">Our Values</h2>
            <p className="text-gray-600 mt-4">
              We believe in integrity, compassion, and the transformative power of education. Our work is guided by these core values to ensure the highest impact.
            </p>
          </div>

          {/* Impact and Achievements */}
          <div className="flex-1 text-center md:text-left bg-white p-6 rounded-lg shadow-md h-80">
            <h2 className="text-2xl font-semibold text-gray-700">Our Impact</h2>
            <p className="text-gray-600 mt-4">
              We can empower 10,000 girls by 2034. That’s 10,000 families which would directly impact 100,000 people and indirectly impact 1 million people in a positive way.
              A revolution where every girl who would silently give up due to lack of hope becomes a career woman and most importantly her own boss.
            </p>
          </div>
        </div>

        {/* Three rows with two equal columns each */}
        <div className="flex-1 p-4 space-y-4">
          {/* Row 1 */}
          <div className="flex justify-between items-center space-x-4">
            <div className="flex-1 flex flex-col justify-center items-center bg-gray-200 p-4 h-full">
              <div className="w-full max-w-xl">
                <h2 className="text-xl font-bold mb-2">Recruiter Feedback</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ryUxrFUk6MY?si=Rqr7IHJldsqo__bz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="mt-2 text-center">
                  "We recently visited your organization and were impressed by the caliber of students we met. Their technical skills, problem-solving abilities, and enthusiasm were outstanding. We had the pleasure of recruiting several graduates, and they have demonstrated exceptional performance in their roles. We look forward to continuing our collaboration and seeing more of your talented students in the future."
                </p>
                <p className="mt-2 text-center">
                  - John Doe, Senior Recruiter at TechCorp
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center bg-gray-300 p-4 h-full">
              <div className="w-full max-w-xl">
                <h2 className="text-xl font-bold mb-2">Alumni Journey</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ryUxrFUk6MY?si=Rqr7IHJldsqo__bz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="mt-2 text-center">
                  "My journey from a rural area to becoming a software engineer at a leading tech company was made possible by the support and education I received from this organization. The skills and confidence I gained through their programs have been instrumental in my career. Today, I am proud to be leading a team of developers, and I am committed to giving back to my community by mentoring young girls."
                </p>
                <p className="mt-2 text-center">
                  - Jane Smith, Class of 2018
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-center space-x-4">
          <div className="flex-1 flex justify-center items-center bg-gray-300 p-4 h-80">“We appreciate your ability to show how your personal values match our company ones. We think you would be a great fit for the company.” If you think they've done great homework about you: “We loved how much preparation you did for this interview</div>
            <div className="flex-1 flex justify-center items-center bg-gray-200 p-4 h-80">The conveyance from a 12th standard guy to an entrepreneur was not that easy. But SIST nourished me to attain the acceleration to reach the terminal destination. A group of distinguished lecturers guided and escorted me by all means to strengthen my technical skills as well as personality. Thanks to almighty and my faculties for I have got an opportunity to see the world, start my own business, and work for will. Presently am working for NBTC-Kuwait as Engineer In-Charge and department head. Good luck to all students of Sarabhai.</div>
           
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-center space-x-4">
            <div className="flex-1 flex justify-center items-center bg-gray-200 p-4 h-80">“Your ability to communicate is outstanding, and you did a great job expressing your ideas and experiences. Your communication skills can be an asset to our department.”</div>
            <div className="flex-1 flex justify-center items-center bg-gray-300 p-4 h-80">The individual attention and care by the faculty in SIST to each student is highly commendable.

I had the opportunity to study Engineering from some of the brilliant minds of the country who had previous experiences in delivering sophisticated engineering end products to pioneering engineering organisations.

I always remember them with great respect and always be thankful. Not only that ,SIST has provided me with a number of opportunities to grow and explore my skills(both curricular and non curricular)

Some of the great memories of friendship,brotherhood and immense flow of wisdom from greatest minds of the country in the rustic beautiful campus of Sarabhai Institute of Science and Technology is something which I can never forget.</div>
          </div>
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
  );
}
