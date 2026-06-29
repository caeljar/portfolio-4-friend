Role & Objective:
Act as an Expert React.js Developer and UX/UI Designer. Your task is to build a modern, high-performance, single-page minimalist design portfolio for an Industrial Designer.

Design System & Tech Stack:

    Build Tool: Vite (React + TypeScript template).

    Framework: React.js (Functional components, Hooks).

    Styling: Tailwind CSS.

    Animations: Framer Motion (use this extensively for professional, smooth UX).

    Color Palette: Strictly minimalist. Primary colors are "Bone" (e.g., #E3DAC9 or #F9F6F0) and "Black" (e.g., #121212). Use these for backgrounds, text, and accents to create high contrast and elegance.

    Typography: Clean, geometric sans-serif (e.g., Inter, Helvetica Neue, or Roobert).

Dev Environment & Network Access (CRITICAL):

    The app must be configured to broadcast across my local Wi-Fi network so I can test mobile responsiveness live.

    Provide the exact vite.config.ts code explicitly setting server: { host: true, port: 5173 }.

    Ensure the package.json dev script is set to "dev": "vite --host" so running the standard start command automatically exposes the http://<my-local-ip>:5173 address in the terminal.

Architecture & Data Management:
All descriptions, names, skill lists, social links, and image routes MUST be read from a single, separate TypeScript configuration file named portfolioData.ts. Do not hardcode content into the React components. Provide the complete code for portfolioData.ts alongside the components.

Required Sections & Features:
The application must be a Single Page Application (SPA) with the following sections. Use react-scroll or native browser smooth scrolling to navigate between them.

0. Navbar (Sticky/Fixed)

    Must remain at the top of the screen or appear on scroll up.

    Contains links to all sections.

    Animations: Smooth fade-in on load; subtle underline or color inversion on hover.

1. Landing Section (Hero)

    Must include the author's name, a brief impactful description of their design philosophy, and links to personal social media (use SVG icons).

    Animations: Staggered fade-up text reveal on initial load. Magnetic hover effect on social icons.

2. Curriculum (About Me)

    Layout must feature a placeholder for the author's photo, their name, a brief bio, and clean, structured lists of skills and abilities (e.g., CAD software, prototyping, materials).

    Animations: Parallax scroll effect on the photo. Skills should slide in from the side as they enter the viewport (use Framer Motion's whileInView).

3. Projects (The Core)

    Create a vertical carousel interface.

    Include a side menu or tab list that controls the carousel. Clicking a project name in the menu should smoothly slide the carousel up or down to the respective project.

    Each project view must include: Project title, description, and an image placeholder.

    Animations: Smooth vertical layout transitions. When switching projects, the old image should fade out/slide down while the new one slides in. Image placeholders should have a subtle zoom effect on hover.

4. Contact

    Include an embedded map placeholder pointing to "UVM Azcapotzalco, Mexico City".

    Include a clean, minimalist contact form (Name, Email, Message, Submit button) acting as a static placeholder (no backend logic needed, just e.preventDefault()).

    Animations: Form fields should have a bottom-border expand animation on focus. The submit button should have a "press" scale effect.

5. Footer

    Minimalist footer with copyright info and a "Back to top" button.

Instructions for Output:
Please provide the complete, usable code. Start with the vite.config.ts and package.json scripts, then the portfolioData.ts file, followed by the main App.tsx structure, and finally the individual section components. Ensure all Framer Motion variants are clearly defined to demonstrate top-tier creativity and UX design.
