# GramSetu

> **One Voice. One Photo. One Connected Village.**

GramSetu is a Smart India Hackathon prototype that turns a rural citizen's local issue into a structured, visible case for the responsible department. It combines evidence capture, native-language voice input, GPS consent, transparent triage, cloud storage, and a geographic authority dashboard.

## What the prototype does

- Captures a complaint photo and stores it in **Supabase Storage**.
- Accepts typed reports and browser voice-to-text in Telugu, Hindi, Tamil, Kannada, Malayalam, and English where the browser supports those speech-recognition languages.
- Captures GPS only after the citizen grants permission; the report retains the coordinates in its description and appears at an approximate position on the map.
- Suggests a category, priority, and department route from the complaint text.
- Saves reports to the shared **Supabase** database.
- Gives the authority side a live case queue, status actions, category distribution, and problem-map hotspot signal.
- Provides an immersive 3D rural interface with depth, landscape layers, hover tilt, terrain contours, and view transitions—without a heavyweight 3D dependency.
- Adds a lightweight **4D-style village scene**: camera-parallax movement, firefly/harvest particles, monsoon rainfall, a moving light sweep, and a cinematic portal transition into the command centre. The atmosphere controls work locally in the browser and add no external API cost.

## Important prototype boundary

This is a hackathon implementation database. It does **not** connect to Government of India, ministry, state, or department databases, and it must not be presented as doing so. Its routing names are recommendations for the prototype workflow. A production deployment would require formal government agreements, authenticated officer roles, security review, audit trails, integrations, and accessibility/localisation validation.

The browser speech feature is a voice-input convenience, not a claim that the current prototype fully understands every Indian language or dialect. A production AI layer should use professionally evaluated multilingual speech-to-text, translation, and human-review workflows.

## Technology

- Static HTML/CSS/JavaScript delivered by Vite
- Supabase Postgres REST API and Supabase Storage
- Browser Geolocation API
- Browser Web Speech API
- Vercel static deployment

## Database setup

1. Open your Supabase project.
2. Go to **SQL Editor** → **New query**.
3. Copy the entire contents of [supabase/schema.sql](supabase/schema.sql) into the editor and select **Run**.

This creates the `complaints` table, enables the demo policies, and creates the `complaint-images` bucket. The supplied policies are deliberately low-friction for the SIH demo; do not use them unchanged for a public launch.

## Deploy on Vercel

1. Upload the contents of this project to the **root** of your GitHub repository. Keep `index.html`, `package.json`, `public/`, and `supabase/` at the root.
2. Import the repository in Vercel.
3. Under **Settings → Environment Variables**, create these values for Production, Preview, and Development:

   ```text
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-publishable-key
   ```

4. Use these project settings:

   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. Deploy. Vercel uses HTTPS, which is required by most browsers before they allow microphone and GPS permissions.

The app entry is the root `index.html`; it intentionally has **no** `/src/main.tsx` import. This avoids the build error caused by repositories where the `src` folder was not uploaded.

## SIH demo flow

1. Open **Citizen portal** and add a photo.
2. Select Telugu (or another listed language), use **Speak**, or type a complaint.
3. Tap **Capture exact GPS location** and allow location permission.
4. Submit the case; the prototype previews its category, urgency, and suggested department route.
5. Switch to **Authority command** and show the report, photo evidence, map marker, issue distribution, and status change.

## Suggested routing in the prototype

| Issue category | Prototype queue |
| --- | --- |
| Water | Rural Water Supply |
| Roads | Public Works Department |
| Electricity | Electricity Board |
| Sanitation | Panchayat Sanitation |
| Other | Village Panchayat |

## Local development

```bash
npm install
npm run dev
```

For the best voice-demo support, use Chrome on Android or desktop Chrome. Grant microphone and location permissions only during the demonstration.

---

Built for Smart India Hackathon 2026.
