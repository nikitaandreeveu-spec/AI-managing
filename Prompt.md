You are a senior frontend engineer and product designer. Create a premium, responsive single-page landing page for a 3–4 minute executive pitch about Randstad Nederland’s AI transformation in recruitment.

Core pitch:
“Randstad can move from traditional recruitment toward AI-supported talent intelligence by using human-in-the-loop candidate-job matching.”

Important timing constraint:
This landing page must support a 3–4 minute presentation, not a long website walkthrough. Keep the page compact, focused and easy to present from top to bottom in one smooth narrative. The audience should understand the full story in 4 minutes maximum.

Tech requirements:
- Use React + Vite + Tailwind CSS.
- Build as a single-page app.
- Make it deployable on Railway without additional backend services.
- Include all required project files:
  - package.json
  - index.html
  - src/main.jsx
  - src/App.jsx
  - src/index.css
  - tailwind.config.js
  - postcss.config.js
  - vite.config.js
  - README.md with Railway deployment steps
- Use npm.
- App must run locally with:
  npm install
  npm run dev
- App must build with:
  npm run build
- Railway should be able to deploy it with:
  Build command: npm install && npm run build
  Start command: npm run start
- Add a proper start script using vite preview:
  "start": "vite preview --host 0.0.0.0 --port $PORT"

Brand and visual direction:
Design should feel aligned with Randstad’s corporate identity:
- Clean white background
- Strong Randstad blue accent
- Light grey supporting backgrounds
- Dark navy / charcoal text
- Human-centric and professional
- Premium consulting-style layout
- Generous whitespace
- Rounded cards
- Simple icons and diagrams
- Avoid neon, robots, sci-fi visuals or startup clichés
- AI should feel practical, responsible and people-focused

Presentation structure:
The page should be divided into exactly 5 compact sections, matching a 3–4 minute talk track.

Section 1: Hero / Intro, 30 seconds
Headline:
“From Recruitment Scale to Talent Intelligence”

Subheadline:
“An AI-supported transformation concept for Randstad Nederland, focused on faster, fairer and more human candidate-job matching.”

Include:
“Managing Business with AI · Group Pitch”
Team:
Remco Kuiken · Polle van Berlo · Nikita Andreev

Visual:
Clean corporate hero with abstract people/matching visual. Use CSS-based shapes or placeholder blocks, no external images required.

Section 2: Randstad at a glance, 40 seconds
Message:
“Randstad’s core business is matching people with work. But the market is shifting.”

Create 3 strategic pressure cards:
1. Digital platforms compress margins
2. Talent scarcity requires smarter sourcing
3. Clients expect faster, higher-quality placements

Add one clear takeaway:
“AI matters because matching is Randstad’s economic core.”

Section 3: The transformation idea, 60 seconds
Title:
“AI-supported candidate-job matching”

Create a clean horizontal flow:
Candidate data + Vacancy data + Historical placement data
→ AI matching engine
→ Recruiter decision
→ Better client recommendation

Key message:
“The system does not replace recruiters. It gives them a stronger decision-support layer.”

Include a small highlight card:
“Highest-leverage task: initial shortlist and ranking.”

Section 4: What changes + key challenges, 75 seconds
Use a split layout.

Left side: Before / After comparison

Before:
- Manual CV screening
- Fragmented data
- Admin-heavy workflow
- Recruiter intuition under pressure

After:
- AI-ranked shortlist
- Recruiter interpretation
- Explainable recommendations
- Stronger advisory role

Right side: 3 challenge pillars
- Workforce readiness
- Data integration
- Fairness and transparency

Each pillar should have one short sentence. Keep it concise.

Section 5: Conclusion / Governance, 45 seconds
Headline:
“Not an IT implementation. A socio-technical transformation.”

Create a simple governance triangle or 3-part model:
1. AI improves prediction
2. Recruiters keep judgment
3. Governance creates trust

Include governance mechanisms:
- Explainability protocol
- Recruiter override
- Bias monitoring
- Quarterly audit
- Clear AI ownership

Final line:
“AI predicts. Humans decide. Governance earns trust.”

Interaction and UX:
- Add a sticky top navigation with 5 anchors:
  Intro, Context, Idea, Work, Conclusion
- Add subtle scroll animations or hover states, but keep them professional.
- Add a progress-style visual or section numbering so the story feels presentation-ready.
- Keep text minimal and readable from a distance.
- The page should work well when presented on a projector.

Design quality:
- Make it look boardroom-ready.
- Use modern spacing, card shadows, rounded corners and clean typography.
- Use icons from lucide-react if you choose to install it, but keep dependencies minimal.
- If using lucide-react, include it in package.json.
- No external image dependencies.
- No paid fonts.
- No API keys.
- No backend.
- No environment variables required.

Railway deployment:
Include a README.md with:
1. Local setup
2. Build command
3. Start command
4. Railway deployment instructions
5. Notes explaining that Railway uses the PORT environment variable automatically

Output format:
Provide the complete project structure and full code for every file.
Do not skip files.
Do not provide only App.jsx.
Make sure the project can be copied into GitHub and deployed directly to Railway.