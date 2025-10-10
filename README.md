<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://git.jubna.me/gumaa/jawab/-/raw/main/public/assets/images/jawab.webp" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white" alt="shadcn" />
    <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="firebase" />
  </div>

  <h3 align="center">CoinFutura Market</h3>

</div>

## <a name="introduction">🤖 Introduction</a>

This is a comprehensive specification for building <a href="https://coinfutura.com" target="_blank"><b>CoinFutura Market Dashboard</b></a> - a full-featured cryptocurrency market platform with multiple distinct systems including market listings, comparison tools, exchange data, airdrops, launchpad projects, and ETF tracking. The spec calls for a modern dark theme with neon-blue accents, similar to coinfutura Markets.. all built using Next.js.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Typescript
- TailwindCSS
- ShadCN

## <a name="features">🔋 Features</a>

👉 **Top trending coins**: Real-time cryptocurrency market data, comparisons, and analytics.

👉 **Exchanges**: Exchanges page with trading metrics and the detailed Coin Detail page with charts, stats, and tabs.

👉 **Admin Dashboard for Content Curation**: Administrators can manage, curate, and optimize search results to maintain accuracy and quality.

👉 **Content Flagging and Moderation**: Admins have the ability to review flagged content, ensuring that users receive safe and reliable information.

👉 **Personalized Search History and Bookmarks**: Users can save search results and access their search history to revisit past queries easily.

👉 **Community-Verified Answers**: View answers verified by the community, helping users trust the information they receive.

👉 **Complete Responsiveness**: Jawab AI is optimized for all devices, ensuring a smooth experience across different screens.

👉 **Document and Media Upload for Contextual Search**: Users can upload files for AI-powered contextual searches, with data securely stored and processed.

👉 **Performance Monitoring and Error Tracking with Sentry**: The platform uses Sentry for monitoring and detecting errors, ensuring a stable experience for all users.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://git.jubna.me/jawab/jawab-frontend
cd jawab-frontend
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm i
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_ENDPOINT=
PROJECT_ID=
API_KEY=
DATABASE_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

**Getting Started**
First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
