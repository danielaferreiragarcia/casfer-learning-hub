# CASFER Pre-Arrival Learning Hub
## Guide for Non-Programmers

Welcome! This guide explains everything you need to know to maintain, update, and publish the Learning Hub — no programming experience required.

---

## What's in this folder?

```
CFEAL program/
├── README.md            ← This guide
├── project-plan.md      ← The project plan document (for faculty/directors)
└── hub/                 ← THE WEBSITE — all website files live here
    ├── index.html       ← The sign-in page (participants start here)
    ├── hub.html         ← The main learning hub
    ├── certificate.html ← The printable certificate
    ├── content.js       ← ★ THE ONE FILE YOU EDIT ★ (see below)
    └── style.css        ← Colors and visual design (rarely need to touch)
```

**The most important thing to know:** Almost everything you will ever want to change — module titles, videos, quiz questions, the program year, contact info — is in **`hub/content.js`**. You can ignore the other files most of the time.

---

## How to view the website

**Option 1 — Double-click (simplest):**
Open the `hub` folder and double-click `index.html`. It will open in your web browser. You can use the site just like a participant would.

**Option 2 — Local server (better for testing):**
Ask Claude to "start a local preview server for the hub" and it will do it for you.

**Option 3 — Published on the web (for real use):**
See "How to publish to GitHub Pages" at the bottom of this guide.

---

## How to edit content

### The only file you need: `hub/content.js`

Open `hub/content.js` in any text editor (Notepad, WordPad, or ask Claude to open it). You will see clearly labeled sections.

**To change the program year or contact info:**
Find the section near the top that says `CONFIG` and change the values in quotation marks:
```
programYear:   "Summer 2025",    ← change to "Summer 2026" etc.
contactEmail:  "casfer@ttu.edu", ← change to real email
contactName:   "CASFER Program Coordinator",  ← change to real name
```

**To change module titles or descriptions:**
Find the module you want (they are clearly labeled with comments like `MODULE 1`, `MODULE 2`, etc.) and change the text inside the quotation marks next to `title:`, `tagline:`, or `description:`.

**To change the final confirmation checklist:**
Find the section near the top that says `FINAL_CONFIRMATIONS` and add, remove, or reword the items inside the `[ ]` brackets.

---

## How to add a YouTube video

1. Go to YouTube and find the video you want.
2. Look at the URL in your browser. It will look like this:
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```
3. Copy only the 11-character code at the end (after `?v=`). In this example, that is: `dQw4w9WgXcQ`
4. Open `hub/content.js`.
5. Find the module where you want the video.
6. Find the video entry that says `youtubeId: "REPLACE_WITH_VIDEO_ID"`.
7. Replace `REPLACE_WITH_VIDEO_ID` with your 11-character code:
   ```
   youtubeId: "dQw4w9WgXcQ",
   ```
8. Also update the `title:` to describe what the video is about.
9. Save the file.

The video will now be embedded directly on that module's page.

---

## How to add a downloadable file (PDF, checklist, etc.)

1. Upload your PDF to Google Drive (or Dropbox, or any file-sharing service).
2. Set the sharing settings to "Anyone with the link can view."
3. Copy the share link.
4. Open `hub/content.js`.
5. Find the module and the download entry that says `url: "#"`.
6. Replace `"#"` with your share link:
   ```
   url: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
   ```
7. Update the `title:` to describe what the file is.
8. Save the file.

---

## How to add a new module

1. Open `hub/content.js`.
2. Find the end of the last module (look for the comment `// ── end Module 6 ──`).
3. Copy an entire module block — from the opening `{` all the way down to the closing `},`.
4. Paste it after the last module, still inside the outer `[ ]` brackets.
5. Change the `id:` to something unique (no spaces — use letters and numbers only, like `"newmodule"`).
6. Update the `title:`, `tagline:`, `description:`, `estimatedTime:`, and all the `resources` and `quiz` content.
7. Save the file.

The new module will automatically appear in the sidebar in the order it appears in the file.

**To reorder modules:** Cut an entire module block and paste it in a different position within the `MODULES = [ ... ]` list.

---

## How to change the quiz questions

Inside each module's `quiz:` section, you will find a `questions:` list. Each question looks like this:

```javascript
{
  id:   "s1q1",          ← unique ID — don't duplicate this
  text: "Your question text goes here?",
  options: [
    { text: "Wrong answer",     correct: false },
    { text: "Correct answer",   correct: true  },
    { text: "Another wrong one", correct: false },
  ],
  explanation: "This is shown after they answer, explaining why the correct answer is right.",
},
```

- Change the `text:` to your question.
- Add or remove options (keep at least 2, no more than 5 work well).
- Make sure exactly **one** option has `correct: true`.
- Update the `id:` to something unique (no spaces).

---

## How to change the colors or font

Open `hub/style.css`. Near the very top you will find a section that starts with `:root {`. The color codes (like `#005B5C`) can be changed there. If you want a different shade of blue, green, or red, just swap the hex color code.

---

## How to publish to GitHub Pages (put it live on the internet)

This is a one-time setup. After that, updating the site is as simple as uploading new files.

### Step 1 — Create a GitHub account
Go to **github.com** and create a free account if you don't have one.

### Step 2 — Create a new repository
1. After signing in, click the **+** icon in the top right corner → "New repository."
2. Name it something like `casfer-learning-hub`.
3. Set it to **Public**.
4. Click "Create repository."

### Step 3 — Upload your files
1. On your new repository page, click **"uploading an existing file"** (or the "Add file" button).
2. Drag and drop the entire contents of your `hub/` folder (all four files: `index.html`, `hub.html`, `certificate.html`, `content.js`, `style.css`).
3. Click "Commit changes" at the bottom.

### Step 4 — Turn on GitHub Pages
1. Click the **Settings** tab at the top of your repository.
2. In the left sidebar, click **Pages**.
3. Under "Branch," change it from "None" to **main**, leave the folder as `/ (root)`, and click **Save**.
4. Wait about 1 minute, then refresh the page. GitHub will show you a URL like `https://yourusername.github.io/casfer-learning-hub/`

That URL is your live website. Share it with participants!

### Updating the site in the future
To update content, edit `content.js` locally, then go back to GitHub, open the file, click the **pencil (edit) icon**, paste in your updated content, and click "Commit changes." The live site updates in about 1 minute.

---

## Getting help

If you want to make a change but aren't sure how, just describe what you want to Claude Code and it will make the edit for you. For example:

- *"Change the program year to Summer 2026"*
- *"Add a new video to Module 3 — here is the YouTube link: ..."*
- *"Add a new confirmation item to the checklist that says '...'"*
- *"Add a new module called 'Intro to Electrochemistry'"*

You don't need to touch any code yourself.

---

*Last updated: June 2025*
