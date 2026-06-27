Nancy Rana - Portfolio Website

A personal portfolio website built to showcase my projects, skills, education, and work experience. Built with React, Vite, and Tailwind CSS.

About

This is a single-page portfolio site with a soft pink theme. It includes sections for an introduction, about me, skills, projects, work experience, education, certifications, and a contact form. The site supports both light and dark mode.

Live site: https://portfolio-nancyrana1s-projects.vercel.app/

Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React (icons)
- Supabase (contact form backend)

Sections

- Hero - Introduction with name, role, and photo
- About - Background and a short bio
- Skills - Programming languages, web technologies, tools, and ML/data science skills
- Projects - Featured projects with links to GitHub and live demos
- Experience - Work experience and internships, click on a card to see full details
- Education - Academic background
- Certifications - Certificates and campus involvement
- Contact - Contact form and direct contact information

Getting Started

1. Clone the repository

   git clone https://github.com/Nancyrana1/your-repo-name.git
   cd your-repo-name

2. Install dependencies

   npm install

3. Add environment variables

   Create a .env file in the root folder with the following:

   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Run the project locally

   npm run dev

Folder Structure

src/components - All page sections and reusable UI components
src/data - Content for projects, experience, education, certifications, and skills
src/context - Theme context for dark/light mode
public - Static files like images and resume

Editing Content

To update the information shown on the site, edit the files inside src/data:

- personalInfo.js - name, email, phone, location, resume link, social links
- projects.js - project details
- experience.js - work experience and internships
- education.js - education details
- certifications.js - certifications list

Contact

Nancy Rana
Email: nancyrana0341@gmail.com
Location: New Delhi, India
LinkedIn: https://www.linkedin.com/in/nancy-rana-2441942a4/
GitHub: https://github.com/Nancyrana1
