# GramSetu

### One Voice. One Photo. One Connected Village.

GramSetu is a Smart India Hackathon prototype that helps rural citizens report local infrastructure problems and helps Panchayat authorities identify, prioritise and act on recurring issues.

## Problem Statement

Rural residents often face civic problems—damaged roads, water leakage, faulty streetlights, garbage dumping and non-working handpumps—but may not know the correct department or reporting process. Individual complaints are also difficult to monitor when many reports point to the same underlying issue.

## Our Solution

GramSetu gives citizens a simple reporting experience. A user can upload a photo, describe an issue in Telugu or English, record a voice message and capture their location. The prototype classifies the complaint, estimates its priority, recommends the responsible department and displays it on an authority dashboard.

The core innovation is the **Problem Map**, which visualises related reports in the same locality as a potential infrastructure hotspot. It gives officials actionable insight instead of a disconnected list of complaints.

## Key Features

- Photo capture and upload for evidence-based reporting
- Telugu/English text input and Telugu voice-to-text in supported Chrome browsers
- GPS location capture with user permission
- Persistent photo-evidence upload using Supabase Storage
- Automatic problem category and priority inference
- Department-routing recommendation
- Authority dashboard with complaint status and category overview
- Interactive problem map with hotspot visualisation
- Browser-based data persistence for a dependable demo experience

## Supported Categories

| Category | Suggested authority |
| --- | --- |
| Water | Rural Water Supply |
| Roads | Public Works Department |
| Electricity | Electricity Board |
| Sanitation | Panchayat Sanitation Team |
| Other | Village Panchayat |

## Technology Stack

- React + TypeScript
- Vite
- Responsive CSS interface
- Web Speech API for browser speech recognition
- Geolocation API for location capture
- Local Storage for prototype data
- Vercel for static deployment

## Local Setup

### Prerequisites

- Node.js 18 or newer
- Google Chrome is recommended for the Telugu voice demo

### Run the project

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Allow microphone and location access when prompted.

## Deploy on Vercel

1. Create a GitHub repository and upload this project to the repository root.
2. Visit [Vercel](https://vercel.com/new) and import the repository.
3. In Supabase, open **SQL Editor** → **New query**, paste the complete contents of `supabase/schema.sql`, then click **Run**. This creates the shared complaints table, the `complaint-images` Storage bucket and its demo policies. It is safe to run even if you applied an earlier schema version.
4. In Vercel → **Project Settings** → **Environment Variables**, add:

   - `VITE_SUPABASE_URL` = your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase publishable/anon key

5. Use these build settings:

   - **Framework Preset:** Vite
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

6. Click **Deploy**.

Vercel serves the application over HTTPS, which is necessary for microphone and location access on most devices.

## SIH Demonstration Flow

1. A villager uploads a photo and records or enters a complaint.
2. GramSetu captures the approximate location.
3. The system identifies the category, priority and suggested department.
4. The report appears on the authority dashboard.
5. Nearby reports are visible through the Problem Map hotspot view.

## Prototype Scope and Roadmap

This version uses Supabase as a shared cloud database. It intentionally uses public report submission and dashboard policies for a low-friction SIH demonstration. Before a public launch, replace the public update policy with authenticated officer roles and add moderation, rate limiting and audit logs.

## Team

Built for Smart India Hackathon 2026.

> GramSetu turns local voices into visible, actionable village development data.
