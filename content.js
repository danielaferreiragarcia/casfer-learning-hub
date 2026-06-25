// ================================================================
//  CASFER PRE-ARRIVAL LEARNING HUB — CONTENT CONFIGURATION
// ================================================================
//
//  ★ THIS IS THE MAIN FILE TO EDIT ★
//
//  Everything you see on the website comes from this file.
//  You can change:
//    • The program name, year, and contact info  (CONFIG section)
//    • Module titles, descriptions, and order    (MODULES section)
//    • Videos, written guides, and downloads     (inside each module)
//    • Quiz questions and answers                (inside each module)
//    • The final confirmation checklist          (FINAL_CONFIRMATIONS)
//
//  IMPORTANT RULES:
//    1. Keep all the  { }  and  [ ]  brackets intact.
//    2. Only change text that is inside  "quotation marks".
//    3. For true/false values, use only lowercase  true  or  false.
//    4. When in doubt, ask Claude to make the edit for you!
//
//  HOW TO ADD A YOUTUBE VIDEO:
//    Find a video on YouTube. The "video ID" is the 11-character
//    code at the end of the URL after ?v=
//    Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ
//                                               ^^^^^^^^^^^
//                                             this is the ID
//    Paste that ID into the  youtubeId: "..."  field below.
//
// ================================================================


// ─── PROGRAM SETTINGS ──────────────────────────────────────────
// Change these to match your program.

const CONFIG = {
  programName:   "CASFER Pre-Arrival Learning Hub",
  organization:  "NSF Engineering Research Center for Advancing\nSustainable and Distributed Fertilizer Production (CASFER)",
  institution:   "Texas Tech University",
  programYear:   "Summer 2025",         // ← update each year
  contactEmail:  "casfer@ttu.edu",      // ← REPLACE with real coordinator email
  contactName:   "CASFER Program Coordinator",  // ← REPLACE with real name
  logoText:      "CASFER",              // displayed in the header

  // ─── COMPLETION TRACKING ───────────────────────────────────────
  // To receive email notifications when participants start or finish:
  //   1. Create a free account at formspree.io
  //   2. Create a new form called "CASFER Learning Hub Tracking"
  //   3. Copy the form ID (the short code at the end of the form URL)
  //   4. Paste it below, replacing  YOUR_FORMSPREE_ID
  //
  // Leave as "YOUR_FORMSPREE_ID" to disable tracking (no emails sent).
  formspreeId:   "YOUR_FORMSPREE_ID",   // ← REPLACE with your Formspree form ID
};


// ─── FINAL CONFIRMATION CHECKLIST ──────────────────────────────
// These checkboxes appear right before the participant gets their
// certificate. They must check EVERY box before the certificate
// is issued. Add, remove, or reword items as needed.

const FINAL_CONFIRMATIONS = [
  "I have reviewed all six sections of this learning hub",
  "I understand the basic lab safety rules and PPE requirements covered in this hub",
  "I know what to do in common lab emergencies (spill, fire, injury)",
  "I am familiar with the basic instruments and techniques described in this hub",
  "I feel prepared to begin learning in my assigned research group",
  "I understand that formal laboratory safety clearance (EHS certification) is a separate process that I will complete in person with my supervising graduate student — this certificate does not replace that clearance",
];


// ─── MODULES ───────────────────────────────────────────────────
// Each module is one "section" of the learning hub.
// Participants work through them in order; each one must be
// completed before the next one unlocks.
//
// TO REORDER modules: cut and paste an entire block (from the
//   opening  {  to the matching  },  including the comma).
// TO ADD a module: copy an existing block, paste it, edit the
//   content, and give it a unique id.
// TO REMOVE a module: delete the entire block (from  {  to  },).

const MODULES = [

  // ══════════════════════════════════════════════════════════════
  //  MODULE 1 — Lab Safety & Onboarding
  // ══════════════════════════════════════════════════════════════
  {
    id:            "safety",
    title:         "Lab Safety & Onboarding",
    icon:          "🦺",
    tagline:       "Know the rules before you enter",
    description:   "Before stepping into any research lab you must know the basic safety rules. This section covers personal protective equipment (PPE), chemical safety, emergency procedures, and general lab etiquette. Read and watch everything before attempting the quiz.",
    estimatedTime: "45–60 min",

    resources: [

      // ── VIDEOS ─────────────────────────────────────────────
      // Replace REPLACE_WITH_VIDEO_ID with the real YouTube ID.
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] Lab Safety Overview",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace this placeholder with a real YouTube video ID. Good search terms: 'undergraduate research lab safety overview'.",
      },
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] Personal Protective Equipment (PPE)",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a video covering PPE selection and proper use in a research lab.",
      },

      // ── WRITTEN GUIDES ─────────────────────────────────────
      // Change the HTML inside content: `` to rewrite the guide.
      {
        type:    "guide",
        title:   "Quick Guide: The 10 Rules Every Lab Researcher Follows",
        content: `
          <div class="replace-notice">🔴 Replace this guide with rules specific to your lab or institution.</div>
          <ol>
            <li><strong>Always wear your PPE</strong> — safety glasses (or goggles), lab coat, and gloves whenever you are near chemicals or running experiments. All three, every time.</li>
            <li><strong>No food or drink</strong> — ever, in any lab space, even if chemicals are stored away. Chemical contamination can be invisible.</li>
            <li><strong>Know your emergency exits</strong> — on your first day, locate the fire exits, eyewash station, and emergency shower.</li>
            <li><strong>Label everything</strong> — every container must show: contents, concentration, your initials, and the date.</li>
            <li><strong>Never work alone</strong> — especially with hazardous chemicals. Another person must be present in the building at minimum.</li>
            <li><strong>Read the SDS first</strong> — before using any chemical for the first time, read its Safety Data Sheet. Your supervisor will show you where to find these.</li>
            <li><strong>Dispose of waste properly</strong> — ask your graduate student supervisor about the correct disposal procedure for each waste type. Never pour chemicals down the sink without approval.</li>
            <li><strong>Report every incident</strong> — even minor spills or small cuts. Your supervisor must be informed immediately.</li>
            <li><strong>Keep your workspace clean</strong> — clean up immediately after experiments. Leave benches cleaner than you found them.</li>
            <li><strong>Ask if you are unsure</strong> — there is no such thing as a silly safety question. It is always better to ask.</li>
          </ol>
        `,
      },

      // ── DOWNLOADABLE FILES ─────────────────────────────────
      // Replace url: "#" with a Google Drive or Dropbox share link.
      {
        type: "download",
        title: "🔴 [REPLACE THIS] Lab Safety Checklist (PDF)",
        url:   "#",
        note:  "REPLACE: Upload your checklist PDF to Google Drive, set sharing to 'Anyone with the link', copy the link, and paste it here.",
      },

    ], // end resources

    quiz: {
      instructions: "Answer every question correctly to complete this section and unlock the next one. You can retry as many times as you need.",
      questions: [
        {
          id:   "s1q1",
          text: "Which of the following is the correct MINIMUM personal protective equipment (PPE) for working with chemicals in a research lab?",
          options: [
            { text: "Safety glasses only",                              correct: false },
            { text: "Safety glasses and gloves only",                   correct: false },
            { text: "Safety glasses, lab coat, and gloves",             correct: true  },
            { text: "No PPE is required if you are careful",            correct: false },
          ],
          explanation: "The minimum for chemical work is always three items together: safety glasses (or goggles), a lab coat, and gloves. Omitting any one of them is a safety violation.",
        },
        {
          id:   "s1q2",
          text: "You spill a small amount of an unknown liquid chemical on your forearm. What should you do FIRST?",
          options: [
            { text: "Wipe it off with a paper towel and continue working",                              correct: false },
            { text: "Immediately flush the affected area with large amounts of water for at least 15 minutes", correct: true },
            { text: "Apply first aid cream and cover with a bandage",                                   correct: false },
            { text: "Wait to see if it causes irritation before acting",                               correct: false },
          ],
          explanation: "For chemical skin contact, immediate flushing with large amounts of water for at least 15 minutes is always the first step — before anything else. Use the emergency eye wash or shower in your lab.",
        },
        {
          id:   "s1q3",
          text: "True or False: It is acceptable to eat a snack at your lab bench if your chemicals are stored away and your bench looks clean.",
          options: [
            { text: "True — if the bench is clean it is fine",                  correct: false },
            { text: "False — food and drink are never allowed in the lab",       correct: true  },
          ],
          explanation: "False. Eating or drinking is never permitted in any lab area, regardless of whether chemicals appear to be stored away. Chemical contamination can be invisible and odorless.",
        },
        {
          id:   "s1q4",
          text: "Before using a new chemical for the first time, you should:",
          options: [
            { text: "Ask a labmate whether it is dangerous",             correct: false },
            { text: "Read its Safety Data Sheet (SDS) first",            correct: true  },
            { text: "Just be careful and proceed",                       correct: false },
            { text: "Smell a small amount to assess it",                 correct: false },
          ],
          explanation: "Always read the Safety Data Sheet (SDS) before first use. The SDS tells you the hazards, proper PPE, first aid steps, and disposal requirements for that specific chemical.",
        },
      ],
    }, // end quiz

  }, // ── end Module 1 ──────────────────────────────────────────


  // ══════════════════════════════════════════════════════════════
  //  MODULE 2 — Core Wet-Lab Skills
  // ══════════════════════════════════════════════════════════════
  {
    id:            "wetlab",
    title:         "Core Wet-Lab Skills",
    icon:          "🧪",
    tagline:       "The hands-on fundamentals",
    description:   "These are the basic techniques you will use almost every day in the lab: accurate pipetting, making dilutions, weighing materials, and using glassware correctly. Mastering these before you arrive will save your graduate student supervisor significant training time.",
    estimatedTime: "45–60 min",

    resources: [
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] How to Use a Micropipette",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a video demonstrating correct micropipette technique.",
      },
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] Making Dilutions and Solutions",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a video on serial dilutions and solution preparation.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: Pipetting Dos and Don'ts",
        content: `
          <div class="replace-notice">🔴 Replace with guidance specific to the pipettes used in your lab.</div>
          <h4>Before you pipette:</h4>
          <ul>
            <li>Select the right pipette for your volume. Common ranges: <strong>P20</strong> (2–20 µL), <strong>P200</strong> (20–200 µL), <strong>P1000</strong> (100–1000 µL).</li>
            <li>Attach a fresh tip — never reuse tips between different samples.</li>
            <li>Set the volume dial before attaching the tip.</li>
          </ul>
          <h4>While pipetting:</h4>
          <ul>
            <li>Hold the pipette <strong>vertically</strong> (straight up and down) when drawing liquid.</li>
            <li>Press to the <strong>first stop</strong> before inserting into liquid, then <strong>release slowly</strong> to draw up. Press to the <strong>second stop</strong> to fully dispense.</li>
            <li>Immerse the tip only <strong>2–4 mm</strong> below the surface — not all the way to the bottom.</li>
          </ul>
          <h4>After pipetting:</h4>
          <ul>
            <li>Eject the used tip immediately with the ejector button.</li>
            <li>Never lay a loaded pipette on its side — liquid can contaminate the barrel.</li>
          </ul>
          <h4>The dilution formula:</h4>
          <p>C₁V₁ = C₂V₂ — this means (starting concentration × starting volume) = (final concentration × final volume). Your supervisor will walk you through this during Week 1, but it helps to have seen it before.</p>
        `,
      },
      {
        type:  "download",
        title: "🔴 [REPLACE THIS] Dilution Reference Sheet (PDF)",
        url:   "#",
        note:  "REPLACE: Link to a dilution calculation worksheet or reference card.",
      },
    ],

    quiz: {
      instructions: "Answer every question correctly to unlock the next section.",
      questions: [
        {
          id:   "wl1",
          text: "You need to transfer 150 µL of a solution. Which pipette should you use?",
          options: [
            { text: "P20  (range: 2–20 µL)",     correct: false },
            { text: "P200 (range: 20–200 µL)",   correct: true  },
            { text: "P1000 (range: 100–1000 µL)", correct: false },
            { text: "Any pipette — the range does not matter", correct: false },
          ],
          explanation: "Always use the pipette whose range includes your target volume. 150 µL falls in the P200 range. Using a P1000 for small volumes gives inaccurate results.",
        },
        {
          id:   "wl2",
          text: "When drawing liquid into a micropipette tip, the tip should be immersed:",
          options: [
            { text: "As deep as possible to avoid air gaps",         correct: false },
            { text: "Touching the bottom of the tube",               correct: false },
            { text: "Just 2–4 mm below the liquid surface",          correct: true  },
            { text: "The depth does not affect accuracy",            correct: false },
          ],
          explanation: "Immersing too deep can cause inaccurate volumes; too shallow draws in air bubbles. The correct depth is 2–4 mm below the surface.",
        },
        {
          id:   "wl3",
          text: "You need to make a 1:10 dilution starting with 1 mL of sample. How do you do it?",
          options: [
            { text: "Add 1 mL sample + 1 mL water = 2 mL total",     correct: false },
            { text: "Add 1 mL sample + 9 mL water = 10 mL total",    correct: true  },
            { text: "Add 10 mL sample + 1 mL water = 11 mL total",   correct: false },
            { text: "Add 0.1 mL sample + 10 mL water = 10.1 mL",     correct: false },
          ],
          explanation: "A 1:10 dilution means 1 part sample in 10 parts total volume. So: 1 mL sample + 9 mL solvent = 10 mL final volume.",
        },
      ],
    },

  }, // ── end Module 2 ──────────────────────────────────────────


  // ══════════════════════════════════════════════════════════════
  //  MODULE 3 — Lab Notebook & Documentation
  // ══════════════════════════════════════════════════════════════
  {
    id:            "notebook",
    title:         "Lab Notebook & Documentation",
    icon:          "📓",
    tagline:       "Science you can't reproduce didn't happen",
    description:   "A well-kept lab notebook is the foundation of reproducible science. This section covers why documentation matters, what every entry must include, and what your graduate student supervisor will expect to see in your notebook.",
    estimatedTime: "30–45 min",

    resources: [
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] How to Keep a Scientific Lab Notebook",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a video on scientific documentation and lab notebook best practices.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: What Every Lab Notebook Entry Must Include",
        content: `
          <div class="replace-notice">🔴 Replace or supplement this with your lab's specific notebook format and requirements.</div>
          <p>Every session in the lab gets its own entry. Each entry should include:</p>
          <ol>
            <li><strong>Date and title</strong> — Full date and a descriptive title for the session (e.g., "June 10, 2025 — Preparation of 100 mM NaCl stock solution").</li>
            <li><strong>Objective</strong> — 1–2 sentences: what are you trying to accomplish and why?</li>
            <li><strong>Materials and reagents</strong> — List everything used, including manufacturer, lot number, and concentration. This matters for reproducibility.</li>
            <li><strong>Procedure</strong> — Write what you <em>actually</em> did, step by step. Note every deviation from the written protocol.</li>
            <li><strong>Raw data</strong> — Record all measurements directly in the notebook in real time. Never use scratch paper first and copy over later.</li>
            <li><strong>Observations</strong> — What did you see? Did the experiment behave as expected? Note anything unusual, even if you don't understand it.</li>
            <li><strong>Conclusions and next steps</strong> — Brief interpretation of results and what you will do next.</li>
          </ol>
          <p><strong>The golden rule:</strong> Someone else must be able to repeat your exact experiment using only your notebook. Write for that person.</p>
          <h4>Mistakes in the notebook:</h4>
          <p>Draw a <strong>single line</strong> through the error (so the original text is still readable), write the correction, and add your initials and the date. Never erase, use white-out, or tear out pages.</p>
        `,
      },
    ],

    quiz: {
      instructions: "Answer every question correctly to unlock the next section.",
      questions: [
        {
          id:   "nb1",
          text: "You finish an experiment but run out of time to write your full notebook entry. The best approach is:",
          options: [
            { text: "Write the entry from memory tomorrow — it will be fine",              correct: false },
            { text: "Record raw data and key observations right now; complete the rest as soon as possible", correct: true },
            { text: "Skip the entry — the data is saved in the instrument software",       correct: false },
            { text: "Have a labmate fill it in since they were watching",                 correct: false },
          ],
          explanation: "Raw data and observations must be recorded in real time. Complete the write-up as soon as possible while details are fresh. Reconstructing data from memory introduces errors and is not considered valid scientific documentation.",
        },
        {
          id:   "nb2",
          text: "You write the wrong value in your lab notebook. The correct way to fix it is:",
          options: [
            { text: "Use white-out to cover the error and write the correct value on top",  correct: false },
            { text: "Tear out the page and rewrite it cleanly",                            correct: false },
            { text: "Draw a single line through the error, write the correct value beside it, and initial it", correct: true },
            { text: "Erase it completely so the notebook looks professional",              correct: false },
          ],
          explanation: "In scientific notebooks, you must never erase or hide errors. Draw one line through the mistake (keeping it readable), write the correction, and add your initials and date. This preserves the integrity of the record.",
        },
        {
          id:   "nb3",
          text: "Which information is MOST important to record when using a reagent from a bottle?",
          options: [
            { text: "The color of the bottle cap",                                         correct: false },
            { text: "Manufacturer name, lot number, and concentration",                   correct: true  },
            { text: "The shelf it came from",                                              correct: false },
            { text: "How full the bottle was",                                             correct: false },
          ],
          explanation: "Manufacturer, lot number, and concentration allow anyone to reproduce your experiment with the same materials. Different lots can have different purities, which can affect results.",
        },
      ],
    },

  }, // ── end Module 3 ──────────────────────────────────────────


  // ══════════════════════════════════════════════════════════════
  //  MODULE 4 — Instrumentation Basics
  // ══════════════════════════════════════════════════════════════
  {
    id:            "instruments",
    title:         "Instrumentation Basics",
    icon:          "🔬",
    tagline:       "Know the tools of the trade",
    description:   "Research labs use a range of instruments. This section introduces equipment you are likely to encounter — analytical balances, pH meters, spectrophotometers, and centrifuges — so you're not encountering them for the very first time on Day 1.",
    estimatedTime: "30–45 min",

    resources: [
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] How to Use an Analytical Balance",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a video on correct analytical balance technique.",
      },
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] Introduction to Common Lab Instruments",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with an overview video of common wet-lab instruments.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: Common Instruments You May Encounter",
        content: `
          <div class="replace-notice">🔴 Replace this list with the specific instruments used in your participant's assigned lab.</div>
          <dl class="instrument-list">
            <dt>Analytical Balance</dt>
            <dd>Weighs chemicals to 0.0001 g accuracy. Always use weighing paper or a tared container — never put chemicals directly on the pan. Close the <strong>draft shield</strong> before reading and wait for the display to stabilize.</dd>

            <dt>pH Meter</dt>
            <dd>Measures the acidity or alkalinity of a solution. The probe must be <strong>calibrated</strong> before each use with standard buffer solutions (usually pH 4, 7, and 10). Rinse the probe with deionized water between samples and store it in the storage solution, not dry.</dd>

            <dt>Spectrophotometer (UV-Vis)</dt>
            <dd>Measures how much light a solution absorbs at a given wavelength, used to determine concentration. Always <strong>blank</strong> the instrument first with a reference solution (usually just the solvent with no sample). Use matched cuvettes and handle them only by the sides.</dd>

            <dt>Centrifuge</dt>
            <dd>Spins samples at high speed to separate components by density. Tubes must be <strong>balanced</strong> — place tubes of equal weight directly opposite each other. Never open the lid while spinning. If the centrifuge vibrates or makes unusual noise, stop it immediately.</dd>
          </dl>
        `,
      },
    ],

    quiz: {
      instructions: "Answer every question correctly to unlock the next section.",
      questions: [
        {
          id:   "inst1",
          text: "Before reading the weight on an analytical balance, you should:",
          options: [
            { text: "Tap the balance gently to help the reading settle",                  correct: false },
            { text: "Close the draft shield and wait for the display to fully stabilize", correct: true  },
            { text: "Open a window to improve ventilation",                               correct: false },
            { text: "Zero the balance after placing the chemical",                        correct: false },
          ],
          explanation: "Analytical balances measure to 0.0001 g — even slight air currents affect the reading. The draft shield must be closed before reading and you must wait for the display to stop changing.",
        },
        {
          id:   "inst2",
          text: "You are loading a centrifuge with 4 tubes: two contain 1.5 mL and two contain 1.0 mL. How do you balance them?",
          options: [
            { text: "Any arrangement works — the centrifuge self-balances",                          correct: false },
            { text: "Place the two 1.5 mL tubes opposite each other and the two 1.0 mL tubes opposite each other", correct: true },
            { text: "Fill all tubes to the same volume with water before loading",                  correct: false },
            { text: "Only run tubes of exactly identical volume",                                   correct: false },
          ],
          explanation: "For a centrifuge to be balanced, tubes of similar mass must be placed directly opposite each other. The 1.5 mL pair across from each other, and the 1.0 mL pair across from each other — four slots total.",
        },
        {
          id:   "inst3",
          text: "Before measuring a sample with a spectrophotometer, you must first:",
          options: [
            { text: "Warm it up for 30 seconds",                                          correct: false },
            { text: "Blank the instrument using a reference solution (solvent only)",     correct: true  },
            { text: "Set the wavelength to 500 nm regardless of the experiment",          correct: false },
            { text: "Dilute all samples to the same color intensity",                     correct: false },
          ],
          explanation: "Blanking subtracts the background absorbance of the solvent/cuvette so that only the sample's contribution is measured. Skipping the blank gives inaccurate absorbance readings.",
        },
      ],
    },

  }, // ── end Module 4 ──────────────────────────────────────────


  // ══════════════════════════════════════════════════════════════
  //  MODULE 5 — Data Analysis with Excel
  // ══════════════════════════════════════════════════════════════
  {
    id:            "excel",
    title:         "Data Analysis with Excel",
    icon:          "📊",
    tagline:       "Turn raw numbers into insight",
    description:   "Most research data gets organized and analyzed in Microsoft Excel or Google Sheets. This section covers the skills you will actually use: entering data correctly, writing basic formulas, making scientific charts, and understanding simple statistics.",
    estimatedTime: "45–60 min",

    resources: [
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] Excel Basics for Scientists",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a YouTube video on Excel basics for science and research use.",
      },
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] Making Charts and Graphs in Excel",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a video showing how to create scatter plots and label axes in Excel.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: Essential Excel Skills for Researchers",
        content: `
          <div class="replace-notice">🔴 Supplement this with exercises specific to the data types used in your research.</div>
          <h4>Data Entry Rules:</h4>
          <ul>
            <li>Put one type of data per column. Use the <strong>first row</strong> for headers (variable names).</li>
            <li>Never merge cells in your data table — it breaks formulas.</li>
            <li>Record <strong>units in the header</strong> (e.g., "Temperature (°C)"), not inside data cells. Writing "25 °C" in a cell makes it text, not a number, and breaks all calculations.</li>
            <li>Enter "N/A" or leave a cell blank for missing data — never use 0 as a substitute unless 0 is the real measured value.</li>
          </ul>
          <h4>Formulas You Will Use Often:</h4>
          <table class="formula-table">
            <tr><td><code>=AVERAGE(A2:A10)</code></td><td>Calculates the mean of a range</td></tr>
            <tr><td><code>=STDEV(A2:A10)</code></td><td>Calculates standard deviation</td></tr>
            <tr><td><code>=MAX(A2:A10)</code></td><td>Finds the maximum value</td></tr>
            <tr><td><code>=MIN(A2:A10)</code></td><td>Finds the minimum value</td></tr>
            <tr><td><code>=COUNT(A2:A10)</code></td><td>Counts how many numbers are in a range</td></tr>
          </table>
          <h4>Making a Scientific Chart (Scatter Plot):</h4>
          <ol>
            <li>Select your data columns (including headers).</li>
            <li>Go to <strong>Insert → Chart → Scatter (X Y Scatter)</strong>.</li>
            <li>Double-click each axis and add the variable name <em>and</em> units (e.g., "Time (minutes)").</li>
            <li>Add a descriptive chart title.</li>
            <li>If your data should show a trend line, right-click a data point and choose "Add Trendline."</li>
          </ol>
        `,
      },
      {
        type:  "download",
        title: "🔴 [REPLACE THIS] Practice Data Spreadsheet",
        url:   "#",
        note:  "REPLACE: Link to a sample Excel file participants can download and practice with.",
      },
    ],

    quiz: {
      instructions: "Answer every question correctly to unlock the next section.",
      questions: [
        {
          id:   "xl1",
          text: "Your temperature data is in cells A2 through A20. Which formula calculates the average?",
          options: [
            { text: "=MEAN(A2:A20)",                           correct: false },
            { text: "=AVERAGE(A2:A20)",                        correct: true  },
            { text: "=AVG(A2:A20)",                            correct: false },
            { text: "=SUM(A2:A20) ÷ 19",                      correct: false },
          ],
          explanation: "In Excel, the correct function is =AVERAGE(). =MEAN() and =AVG() do not exist in Excel. =SUM()/COUNT() would also work but =AVERAGE() is simpler.",
        },
        {
          id:   "xl2",
          text: "You are plotting two numeric variables — time (x-axis) vs. concentration (y-axis). Which chart type should you use?",
          options: [
            { text: "Pie chart",          correct: false },
            { text: "Bar chart",          correct: false },
            { text: "Scatter plot (XY Scatter)", correct: true },
            { text: "3D Surface chart",   correct: false },
          ],
          explanation: "Scatter plots are the standard for two continuous numeric variables in science. Bar charts are for comparing categories, and pie charts are for proportions of a whole.",
        },
        {
          id:   "xl3",
          text: "Where should units of measurement (e.g., °C, mg/L) be recorded in your spreadsheet?",
          options: [
            { text: "In every data cell next to the number (e.g., '25 °C')",      correct: false },
            { text: "In the column header (e.g., 'Temperature (°C)')",            correct: true  },
            { text: "In a separate 'Units' worksheet",                             correct: false },
            { text: "Units do not need to be recorded in the spreadsheet",        correct: false },
          ],
          explanation: "Units go in the header row. Writing '25 °C' in a data cell makes it a text string — Excel will not include it in calculations, and your averages and formulas will be wrong.",
        },
      ],
    },

  }, // ── end Module 5 ──────────────────────────────────────────


  // ══════════════════════════════════════════════════════════════
  //  MODULE 6 — Intro to CASFER Science
  // ══════════════════════════════════════════════════════════════
  {
    id:            "casfer",
    title:         "Intro to CASFER Science",
    icon:          "🌱",
    tagline:       "The 'why' behind your summer work",
    description:   "Why does CASFER exist? This section introduces the global nitrogen and fertilizer challenge that motivates all of CASFER's research — so you understand the bigger picture your summer project fits into from day one.",
    estimatedTime: "30–45 min",

    resources: [
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] The Global Nitrogen Problem",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with a video explaining the global nitrogen cycle, the Haber-Bosch process, and nutrient pollution.",
      },
      {
        type:        "video",
        title:       "🔴 [REPLACE THIS] Introduction to CASFER and Its Research",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Replace with an overview video about CASFER — a recorded talk, promotional video, or faculty introduction.",
      },
      {
        type:    "guide",
        title:   "Background Reading: Why Fertilizer Recovery Matters",
        content: `
          <div class="replace-notice">🔴 Replace or expand this reading with content from CASFER's published materials, website, or faculty introductions.</div>

          <h4>The Nitrogen Problem</h4>
          <p>Nitrogen (N) is the nutrient most limiting to crop growth worldwide. Modern agriculture depends on synthetic nitrogen fertilizer produced by the <strong>Haber-Bosch process</strong> — a reaction that converts atmospheric nitrogen gas (N₂) into ammonia (NH₃). This process feeds roughly half the world's population, but it comes at a steep cost: it consumes about <strong>1–2% of global energy</strong> and produces significant greenhouse gas emissions.</p>

          <h4>The Waste and Pollution Problem</h4>
          <p>A large fraction of applied nitrogen is never taken up by crops. It leaches into rivers and lakes (causing <strong>harmful algal blooms</strong> and oxygen-depleted "dead zones") or escapes to the atmosphere as nitrous oxide (N₂O), a greenhouse gas roughly 300 times more potent than CO₂. This represents both an environmental crisis and a massive resource inefficiency.</p>

          <h4>CASFER's Approach</h4>
          <p>CASFER — the <strong>NSF Engineering Research Center for Advancing Sustainable and Distributed Fertilizer Production</strong> — develops technologies to <strong>recover nitrogen and phosphorus from waste streams</strong> (agricultural runoff, wastewater, livestock manure) and convert them back into usable fertilizer at small, local scales. This "closes the nutrient loop," reduces pollution at the source, and could make fertilizer production more sustainable and accessible to communities that currently cannot afford or access centralized supply chains.</p>

          <h4>Why Your Summer Work Matters</h4>
          <p>Whether your summer project touches membranes, electrochemistry, sensors, microbiology, or another research area, it connects to this mission: a more sustainable, distributed, and equitable fertilizer system. You are joining a team working on one of the most consequential engineering challenges of the coming decades.</p>
        `,
      },
    ],

    quiz: {
      instructions: "Answer these final questions to complete the last section — you're almost done!",
      questions: [
        {
          id:   "cas1",
          text: "What is the primary environmental motivation for CASFER's research on nutrient recovery?",
          options: [
            { text: "Nitrogen is becoming scarce in the atmosphere",                                                       correct: false },
            { text: "To reduce water pollution, cut greenhouse gas emissions, and close the nutrient cycle",               correct: true  },
            { text: "To develop a new type of industrial fertilizer plant",                                                correct: false },
            { text: "To eliminate all fertilizer use in agriculture",                                                      correct: false },
          ],
          explanation: "CASFER's goal is to recover nitrogen and phosphorus from waste streams to prevent water pollution and reduce the energy and emissions of conventional fertilizer production — closing the nutrient loop rather than eliminating fertilizer use.",
        },
        {
          id:   "cas2",
          text: "The Haber-Bosch process is relevant to CASFER's mission because:",
          options: [
            { text: "CASFER uses it to produce all of its experimental fertilizer",                                       correct: false },
            { text: "It is the energy-intensive industrial process CASFER aims to partially replace with sustainable, distributed alternatives", correct: true },
            { text: "It is the process that creates the chemical waste CASFER cleans up",                                 correct: false },
            { text: "It is used only in developing countries and has no connection to CASFER",                            correct: false },
          ],
          explanation: "Haber-Bosch converts atmospheric N₂ to NH₃ and currently uses 1–2% of global energy. CASFER seeks distributed, low-energy alternatives that recover nitrogen from existing waste streams instead of synthesizing it from scratch.",
        },
        {
          id:   "cas3",
          text: "CASFER is headquartered at:",
          options: [
            { text: "The University of Texas at Austin",  correct: false },
            { text: "Texas A&M University",               correct: false },
            { text: "Texas Tech University",              correct: true  },
            { text: "Rice University",                    correct: false },
          ],
          explanation: "CASFER is an NSF Engineering Research Center headquartered at Texas Tech University in Lubbock, Texas.",
        },
      ],
    },

  }, // ── end Module 6 ──────────────────────────────────────────

]; // ── end MODULES array ─────────────────────────────────────────
