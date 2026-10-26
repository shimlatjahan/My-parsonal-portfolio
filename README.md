# Shimlat Jahan Sonia — Personal Portfolio

A responsive personal portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. It introduces my background, highlights the technologies I'm learning, showcases my web development projects, and provides ways to get in touch.

**Aspiring Frontend Developer** · Public Administration student at the **University of Barishal**, Bangladesh

## ✨ Features

- Responsive layout for mobile, tablet, and desktop screens
- Navigation to Home, About, Skills, Education, Projects, and Contact sections
- Hero section with a profile photo and downloadable résumé
- Skills and education sections
- Three featured projects, each with a dedicated details page
- Project demo and GitHub repository links
- Email contact button and optional social media links
- Dark navy and violet design using Tailwind CSS

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| Next.js (App Router) | Routing and application structure |
| React | User interface components |
| TypeScript | Typed application code |
| Tailwind CSS | Responsive styling |
| Next.js Image | Optimized images |

## 🚀 Featured Projects

### 1. Dev Stack Builder

An interactive React application for exploring web development technologies and creating a personalized technology stack.

**Technologies:** React, TypeScript, Tailwind CSS, DaisyUI, React Toastify, Vite  
**Live Demo:** https://elaborate-fenglisu-aa15c6.netlify.app/  
**GitHub:** https://github.com/shimlatjahan/reacts-5th-assignment

### 2. FitLog — Workout Library

A workout browsing and planning application with exercise details, saved workouts, and activity tracking features.

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, REST API  
**Live Demo:** https://my-6th-assingnments-projects.vercel.app/  
**GitHub:** https://github.com/shimlatjahan/my-6th-assingnments-projects

### 3. BazarDor — Grocery Price Tracker

A Bengali-first grocery price information platform for exploring, sorting, and comparing market prices.

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, MongoDB, Better Auth, REST API  
**Live Demo:** https://my-7th-assignment-bs3j.vercel.app/  
**GitHub:** https://github.com/shimlatjahan/my-7th-assignment

## 📂 Project Structure

```text
my-sonia-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── ProjectCard.tsx
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── lib/
│   └── data.ts
├── public/
│   ├── Sonia2.jpeg
│   ├── resume.pdf
│   └── projects/
│       ├── dev-stack-builder.png
│       ├── fitlog.png
│       └── bazardor.png
├── package.json
└── README.md
```

> The images shown above are the expected filenames. Ensure that these files actually exist in `public/`; otherwise image previews may fail to load.

## 💻 Getting Started

### Prerequisites

Install **Node.js** (an LTS version recommended) and **npm**.

### Installation

1. Open your existing portfolio project in VS Code, or clone **your own GitHub repository** first. Open a terminal in the `my-sonia-portfolio` project root (the folder containing `package.json`).

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open **http://localhost:3000** in your browser.

### Production Build

```bash
npm run build
npm run start
```

## 🖼️ Adding Project Screenshots

Save a screenshot of each actual project website inside `public/projects/` with these **exact names**:

| Project | File | Image path in `lib/data.ts` |
| --- | --- | --- |
| Dev Stack Builder | `dev-stack-builder.png` | `/projects/dev-stack-builder.png` |
| FitLog | `fitlog.png` | `/projects/fitlog.png` |
| BazarDor | `bazardor.png` | `/projects/bazardor.png` |

Example configuration inside a project object in `lib/data.ts`:

```ts
image: "/projects/dev-stack-builder.png",
```

To check whether an image is available, open `http://localhost:3000/projects/dev-stack-builder.png` (or the corresponding filename) in a browser. If an image file is not available yet, use `image: ""` for that project so the placeholder preview is displayed instead of a broken image.

## ⚙️ Customization

Most editable portfolio content lives in **`lib/data.ts`**:

- `personalInfo` — name, title, portrait, résumé, email, and social links
- `skillGroups` — skill categories and items
- `projects` — project text, screenshots, technologies, and links

To update the portrait, replace `public/Sonia2.jpeg` or change `personalInfo.profileImage`. To update the résumé, place a **valid PDF file** at `public/resume.pdf` and keep `personalInfo.resume` set to `"/resume.pdf"`.

> Important: Do not paste plain text into a file named `.pdf`. Copy the actual PDF file into `public/`.

## 🌐 Deployment

This portfolio can be deployed on **Vercel**:

1. Push the project to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the default Next.js build settings, if correctly detected.
4. Deploy, then test the project images, links, and résumé download on the live site.

## 👩‍💻 About Me

I'm **Shimlat Jahan Sonia**, an aspiring frontend developer and a Public Administration student at the University of Barishal. I'm exploring modern web development and learning by building practical projects.

- **GitHub:** https://github.com/shimlatjahan
- **Email:** shimlatjahansonia@gmail.com

---

Made with Next.js, TypeScript, and Tailwind CSS.
