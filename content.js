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
//  QUIZ POOLS:
//    Each module has more questions than are shown per attempt.
//    The number shown is controlled by  selectN  in each quiz.
//    On retry, a different random set is drawn from the same pool.
//
// ================================================================


// PROGRAM SETTINGS
// Change these to match your program.

const CONFIG = {
  programName:   "CASFER Pre-Arrival Learning Hub",
  organization:  "NSF Engineering Research Center for Advancing\nSustainable and Distributed Fertilizer Production (CASFER)",
  institution:   "Texas Tech University",
  programYear:   "Summer 2025",
  contactEmail:  "casfer@ttu.edu",
  contactName:   "CASFER Summer Program Coordinator",
  logoText:      "CASFER",

  formspreeId:   "xrewprbb",
};


// FINAL CONFIRMATION CHECKLIST
// These checkboxes appear right before the participant gets their
// certificate. They must check EVERY box before the certificate is issued.

const FINAL_CONFIRMATIONS = [
  "I have reviewed all six sections of this learning hub",
  "I understand the basic lab safety rules and PPE requirements covered in this hub",
  "I know what to do in common lab emergencies (spill, fire, injury)",
  "I am familiar with the basic instruments and techniques described in this hub",
  "I feel prepared to begin learning in my assigned research group",
  "I understand that formal laboratory safety clearance (EHS certification) is a separate process that I will complete in person with my supervising graduate student — this certificate does not replace that clearance",
];


// MODULES
// Each module is one section of the learning hub.
// Participants work through them in order.

const MODULES = [

  // MODULE 1 — Lab Safety & Onboarding
  {
    id:            "safety",
    title:         "Lab Safety & Onboarding",
    icon:          "🦺",
    tagline:       "Know the rules before you enter",
    description:   "Before stepping into any research lab you must know the basic safety rules. This section covers personal protective equipment (PPE), chemical safety, emergency procedures, and general lab etiquette. Read and watch everything before attempting the quiz.",
    estimatedTime: "45–60 min",

    resources: [
      {
        type:        "video",
        title:       "Lab Safety Overview",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "An introduction to laboratory safety rules, hazard categories, and emergency procedures.",
      },
      {
        type:        "video",
        title:       "Personal Protective Equipment (PPE)",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Covers correct PPE selection and proper use in a research lab setting.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: The 10 Rules Every Lab Researcher Follows",
        content: `
          <ol>
            <li><strong>Always wear your PPE:</strong> Safety glasses (or goggles), lab coat, and gloves whenever you are near chemicals or running experiments. All three, every time.</li>
            <li><strong>No food or drink:</strong> Never in any lab space, even if chemicals are stored away. Chemical contamination can be invisible.</li>
            <li><strong>Know your emergency exits:</strong> On your first day, locate the fire exits, eyewash station, and emergency shower before you do anything else.</li>
            <li><strong>Label everything:</strong> Every container must show the contents, concentration, your initials, and the date.</li>
            <li><strong>Never work alone:</strong> Especially with hazardous chemicals. Another person must be present in the building at minimum.</li>
            <li><strong>Read the SDS first:</strong> Before using any chemical for the first time, read its Safety Data Sheet. Your supervisor will show you where to find these.</li>
            <li><strong>Dispose of waste properly:</strong> Ask your graduate student supervisor about the correct disposal procedure for each waste type. Never pour chemicals down the sink without explicit approval.</li>
            <li><strong>Report every incident:</strong> Even minor spills or small cuts must be reported to your supervisor immediately.</li>
            <li><strong>Keep your workspace clean:</strong> Clean up immediately after experiments. Leave benches cleaner than you found them.</li>
            <li><strong>Ask if you are unsure:</strong> There is no such thing as a silly safety question. It is always better to ask.</li>
          </ol>
          <h4>Chemical Spill Response (Quick Reference):</h4>
          <p>For skin or eye contact: flush immediately with large amounts of water for at least 15 minutes using the eyewash station or emergency shower. Remove contaminated clothing. Notify your supervisor and seek medical attention if needed. The SDS for the specific chemical provides detailed first aid steps.</p>
        `,
      },
      {
        type:  "download",
        title: "Lab Safety Checklist (PDF)",
        url:   "#",
      },
    ],

    quiz: {
      instructions: "Answer all questions correctly to complete this section. Each attempt draws a new set of questions from the question pool.",
      selectN: 4,
      questions: [
        {
          id:   "s1q1",
          text: "Which of the following is the correct minimum personal protective equipment (PPE) for working with chemicals in a research lab?",
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
          text: "You spill a small amount of an unknown liquid chemical on your forearm. What should you do first?",
          options: [
            { text: "Wipe it off with a paper towel and continue working",                              correct: false },
            { text: "Immediately flush the affected area with large amounts of water for at least 15 minutes", correct: true },
            { text: "Apply first aid cream and cover with a bandage",                                   correct: false },
            { text: "Wait to see if it causes irritation before acting",                               correct: false },
          ],
          explanation: "For chemical skin contact, immediate flushing with large amounts of water for at least 15 minutes is always the first step — before anything else. Use the emergency eyewash or shower in your lab.",
        },
        {
          id:   "s1q3",
          text: "True or False: It is acceptable to eat a snack at your lab bench if your chemicals are stored away and the bench looks clean.",
          options: [
            { text: "True — if the bench is clean it is fine",                  correct: false },
            { text: "False — food and drink are never allowed in the lab",       correct: true  },
          ],
          explanation: "Eating or drinking is never permitted in any lab area, regardless of whether chemicals appear to be stored away. Chemical contamination can be invisible and odorless.",
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
        {
          id:   "s1q5",
          text: "On your first day in the lab, one of the most important things to do before starting any work is:",
          options: [
            { text: "Set up your workstation and begin the first experiment",    correct: false },
            { text: "Locate the fire exits, eyewash station, and emergency shower", correct: true },
            { text: "Ask a labmate to show you where the chemicals are stored",  correct: false },
            { text: "Review last semester's research results",                   correct: false },
          ],
          explanation: "Knowing the location of emergency equipment before starting work is a fundamental safety requirement. In an emergency, you will not have time to search for these locations.",
        },
        {
          id:   "s1q6",
          text: "Chemical waste generated during your experiment must be:",
          options: [
            { text: "Poured down the sink with plenty of running water",              correct: false },
            { text: "Handled following your lab's regulated waste disposal procedures", correct: true },
            { text: "Left in an unlabeled beaker for the cleaning staff",             correct: false },
            { text: "Evaporated in the fume hood to reduce volume",                  correct: false },
          ],
          explanation: "Chemical waste must follow regulated disposal procedures. It may never be poured down the drain, left unlabeled, or evaporated without specific authorization. Your supervisor will explain the exact procedures for your lab.",
        },
        {
          id:   "s1q7",
          text: "True or False: If you will only be in the lab for 5 minutes to check on an experiment, it is acceptable to skip wearing PPE.",
          options: [
            { text: "True — brief visits do not require PPE",            correct: false },
            { text: "False — PPE is required for all time spent in the lab", correct: true },
          ],
          explanation: "PPE requirements apply at all times in the lab, regardless of how brief the visit. Accidents happen without warning and often take only a fraction of a second.",
        },
        {
          id:   "s1q8",
          text: "What does SDS stand for, and when must you read it?",
          options: [
            { text: "Substance Description Sheet — read it whenever convenient",                       correct: false },
            { text: "Safety Data Sheet — read it before using any new chemical for the first time",    correct: true  },
            { text: "Sample Data Summary — read it only for highly hazardous chemicals",               correct: false },
            { text: "Standard Dilution Sheet — read it when preparing solutions",                      correct: false },
          ],
          explanation: "SDS (Safety Data Sheet) provides complete hazard information, required PPE, first aid steps, and disposal instructions for every chemical. It must be read before first use of any new substance.",
        },
      ],
    },

  },


  // MODULE 2 — Core Wet-Lab Skills
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
        title:       "How to Use a Micropipette",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Demonstrates correct micropipette technique from tip attachment to dispensing.",
      },
      {
        type:        "video",
        title:       "Making Dilutions and Solutions",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Covers serial dilutions, the C₁V₁ = C₂V₂ formula, and proper solution preparation.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: Pipetting Dos and Don'ts",
        content: `
          <h4>Before you pipette:</h4>
          <ul>
            <li>Select the right pipette for your volume. Common ranges: <strong>P20</strong> (2–20 µL), <strong>P200</strong> (20–200 µL), <strong>P1000</strong> (100–1000 µL).</li>
            <li>Attach a fresh tip — never reuse tips between different samples.</li>
            <li>Set the volume dial before attaching the tip.</li>
          </ul>
          <h4>While pipetting:</h4>
          <ul>
            <li>Hold the pipette <strong>vertically</strong> (straight up and down) when drawing liquid.</li>
            <li>Press to the <strong>first stop</strong> before inserting into liquid, then <strong>release slowly</strong> to draw up. Press to the <strong>second stop</strong> when dispensing to fully expel the liquid.</li>
            <li>Immerse the tip only <strong>2–4 mm</strong> below the surface — not all the way to the bottom.</li>
          </ul>
          <h4>After pipetting:</h4>
          <ul>
            <li>Eject the used tip immediately with the ejector button.</li>
            <li>Never lay a loaded pipette on its side — liquid can contaminate the barrel.</li>
          </ul>
          <h4>The dilution formula:</h4>
          <p>C₁V₁ = C₂V₂, where C is concentration and V is volume. Starting concentration × starting volume = final concentration × final volume. Your supervisor will walk you through this during Week 1, but it helps to have seen it before.</p>
          <h4>Example:</h4>
          <p>To prepare 50 mL of a 0.5 M solution from a 5 M stock: 5 M × V₁ = 0.5 M × 50 mL, so V₁ = 5 mL of stock. Add water to reach 50 mL total.</p>
        `,
      },
      {
        type:  "download",
        title: "Dilution Reference Sheet (PDF)",
        url:   "#",
      },
    ],

    quiz: {
      instructions: "Answer all questions correctly to unlock the next section. Each attempt draws a new set of questions.",
      selectN: 3,
      questions: [
        {
          id:   "wl1",
          text: "You need to transfer 150 µL of a solution. Which pipette should you use?",
          options: [
            { text: "P20  (range: 2–20 µL)",      correct: false },
            { text: "P200 (range: 20–200 µL)",    correct: true  },
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
            { text: "Add 1 mL sample + 1 mL water = 2 mL total",    correct: false },
            { text: "Add 1 mL sample + 9 mL water = 10 mL total",   correct: true  },
            { text: "Add 10 mL sample + 1 mL water = 11 mL total",  correct: false },
            { text: "Add 0.1 mL sample + 10 mL water",              correct: false },
          ],
          explanation: "A 1:10 dilution means 1 part sample in 10 parts total volume. So: 1 mL sample + 9 mL solvent = 10 mL final volume.",
        },
        {
          id:   "wl4",
          text: "When dispensing liquid from a micropipette, you press to the:",
          options: [
            { text: "First stop only",                                    correct: false },
            { text: "Second stop to fully expel the liquid",              correct: true  },
            { text: "Third stop to eject the tip",                        correct: false },
            { text: "Press continuously until the barrel is visibly empty", correct: false },
          ],
          explanation: "A micropipette has two stops. Press to the first stop before drawing liquid. Press to the second stop (slight extra resistance) when dispensing to fully expel the contents of the tip.",
        },
        {
          id:   "wl5",
          text: "You need 50 mL of a 0.5 M NaCl solution from a 5 M stock. Using C₁V₁ = C₂V₂, how much stock solution do you need?",
          options: [
            { text: "25 mL", correct: false },
            { text: "5 mL",  correct: true  },
            { text: "50 mL", correct: false },
            { text: "0.5 mL", correct: false },
          ],
          explanation: "C₁V₁ = C₂V₂ → 5 M × V₁ = 0.5 M × 50 mL → V₁ = 5 mL. Take 5 mL of stock and bring to 50 mL total with water.",
        },
        {
          id:   "wl6",
          text: "Why must you use a fresh pipette tip for each new sample?",
          options: [
            { text: "Tips are too fragile to use more than once",                  correct: false },
            { text: "Reuse causes cross-contamination between samples",            correct: true  },
            { text: "Tips can only draw liquid once before losing accuracy",       correct: false },
            { text: "It is only necessary to change tips between different experiments", correct: false },
          ],
          explanation: "Even tiny residue from the previous sample left in a tip will contaminate the next sample, introducing errors in measurements or invalidating results. Always use a fresh tip for each new sample.",
        },
      ],
    },

  },


  // MODULE 3 — Lab Notebook & Documentation
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
        title:       "How to Keep a Scientific Lab Notebook",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Covers scientific documentation standards and lab notebook best practices.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: What Every Lab Notebook Entry Must Include",
        content: `
          <p>Every session in the lab gets its own entry. Each entry should include all of the following:</p>
          <ol>
            <li><strong>Date and title:</strong> The full date and a descriptive title for the session (for example, "June 10, 2025 — Preparation of 100 mM NaCl stock solution").</li>
            <li><strong>Objective:</strong> One or two sentences stating what you are trying to accomplish and why.</li>
            <li><strong>Materials and reagents:</strong> Everything used, including manufacturer, lot number, and concentration. These details are critical for reproducibility.</li>
            <li><strong>Procedure:</strong> Write what you <em>actually</em> did, step by step. Note every deviation from the written protocol, no matter how small.</li>
            <li><strong>Raw data:</strong> Record all measurements directly in the notebook in real time. Never record on scratch paper first and copy over later.</li>
            <li><strong>Observations:</strong> What did you see? Did the experiment behave as expected? Note anything unusual, even if you do not understand it yet.</li>
            <li><strong>Conclusions and next steps:</strong> Brief interpretation of the results and what you will do in the next session.</li>
          </ol>
          <p><strong>The golden rule:</strong> Someone else must be able to repeat your exact experiment using only your notebook. Write for that person.</p>
          <h4>Correcting mistakes:</h4>
          <p>Draw a <strong>single line</strong> through the error so the original text remains readable. Write the correction next to it and add your initials and the date. Never erase, use white-out, or tear out pages — this destroys the integrity of the scientific record.</p>
          <h4>Why this matters:</h4>
          <p>Lab notebooks are legal documents in research. They establish when an experiment was performed, who performed it, and what was observed. In cases of patent disputes or research integrity reviews, your notebook is the primary evidence. Treating it seriously from day one is a professional expectation in every research lab.</p>
        `,
      },
    ],

    quiz: {
      instructions: "Answer all questions correctly to unlock the next section. Each attempt draws a new set of questions.",
      selectN: 3,
      questions: [
        {
          id:   "nb1",
          text: "You finish an experiment but run out of time to write your full notebook entry. The best approach is:",
          options: [
            { text: "Write the entry from memory tomorrow — it will be fine",                          correct: false },
            { text: "Record raw data and key observations right now; complete the rest as soon as possible", correct: true },
            { text: "Skip the entry — the data is saved in the instrument software",                   correct: false },
            { text: "Have a labmate fill it in since they were watching",                              correct: false },
          ],
          explanation: "Raw data and observations must be recorded in real time. Complete the write-up as soon as possible while details are fresh. Reconstructing data from memory introduces errors and is not considered valid scientific documentation.",
        },
        {
          id:   "nb2",
          text: "You write the wrong value in your lab notebook. The correct way to fix it is:",
          options: [
            { text: "Use white-out to cover the error and write the correct value on top",             correct: false },
            { text: "Tear out the page and rewrite it cleanly",                                       correct: false },
            { text: "Draw a single line through the error, write the correct value beside it, and initial it", correct: true },
            { text: "Erase it completely so the notebook looks professional",                         correct: false },
          ],
          explanation: "In scientific notebooks, errors must remain visible. Draw one line through the mistake (keeping it readable), write the correction, and add your initials and the date. This preserves the integrity of the record.",
        },
        {
          id:   "nb3",
          text: "Which information is most important to record when using a reagent from a bottle?",
          options: [
            { text: "The color of the bottle cap",                              correct: false },
            { text: "Manufacturer name, lot number, and concentration",         correct: true  },
            { text: "The shelf it came from",                                   correct: false },
            { text: "How full the bottle was",                                  correct: false },
          ],
          explanation: "Manufacturer, lot number, and concentration allow anyone to reproduce your experiment with the same materials. Different lots can have different purities, which can affect results.",
        },
        {
          id:   "nb4",
          text: "What is the primary purpose of a scientific lab notebook?",
          options: [
            { text: "To satisfy the supervisor's administrative requirements",                         correct: false },
            { text: "To create a permanent record that allows any scientist to reproduce your exact experiment", correct: true },
            { text: "To document how much time you spend on each task",                               correct: false },
            { text: "To track which reagents have been used up",                                      correct: false },
          ],
          explanation: "A lab notebook is the scientific record of your work. Its primary function is reproducibility — a complete, accurate record that allows another scientist to repeat your experiment and verify your results.",
        },
        {
          id:   "nb5",
          text: "Every lab notebook entry must begin with:",
          options: [
            { text: "Your name and student ID number",                                    correct: false },
            { text: "The full date and a descriptive title for the session",              correct: true  },
            { text: "A materials list only",                                              correct: false },
            { text: "The experiment number from your protocol sheet",                    correct: false },
          ],
          explanation: "Every entry starts with the full date and a descriptive title so any reader can immediately identify when and what was done. Missing dates make it impossible to establish the timeline of your research.",
        },
        {
          id:   "nb6",
          text: "Your notebook says you added 50 µL when you actually added 500 µL. What is the correct fix?",
          options: [
            { text: "Erase the error and write the correct amount",                       correct: false },
            { text: "Use white-out to cover the error and write over it",                 correct: false },
            { text: "Draw a single line through 50, write 500 next to it, and add your initials and the date", correct: true },
            { text: "Tear out the page and rewrite the entire entry",                     correct: false },
          ],
          explanation: "Errors must remain visible in a lab notebook. Draw one line through the mistake so it can still be read, write the correction, then add your initials and the date.",
        },
      ],
    },

  },


  // MODULE 4 — Instrumentation Basics
  {
    id:            "instruments",
    title:         "Instrumentation Basics",
    icon:          "🔬",
    tagline:       "Know the tools of the trade",
    description:   "Research labs use a range of instruments. This section introduces equipment you are likely to encounter — analytical balances, pH meters, spectrophotometers, and centrifuges — so you are not encountering them for the very first time on Day 1.",
    estimatedTime: "30–45 min",

    resources: [
      {
        type:        "video",
        title:       "How to Use an Analytical Balance",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Demonstrates correct analytical balance technique including taring and draft shield use.",
      },
      {
        type:        "video",
        title:       "Introduction to Common Lab Instruments",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "An overview of common wet-lab instruments and their proper use.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: Common Instruments You May Encounter",
        content: `
          <dl class="instrument-list">
            <dt>Analytical Balance</dt>
            <dd>Weighs chemicals to 0.0001 g accuracy. Always use weighing paper or a tared container — never put chemicals directly on the pan. Close the <strong>draft shield</strong> before reading and wait for the display to stabilize before recording your measurement.</dd>

            <dt>pH Meter</dt>
            <dd>Measures the acidity or alkalinity of a solution. The probe must be <strong>calibrated</strong> before each use with standard buffer solutions (usually pH 4, 7, and 10). Rinse the probe with deionized water between samples. Store the electrode in its designated storage solution — never dry.</dd>

            <dt>Spectrophotometer (UV-Vis)</dt>
            <dd>Measures how much light a solution absorbs at a given wavelength, used to determine concentration. Always <strong>blank</strong> the instrument first with a reference solution (the solvent with no sample). Use matched cuvettes and handle them only by the frosted sides — fingerprints on the optical faces affect readings.</dd>

            <dt>Centrifuge</dt>
            <dd>Spins samples at high speed to separate components by density. Tubes must be <strong>balanced</strong> — place tubes of equal mass directly opposite each other in the rotor. Never open the lid while spinning. If the centrifuge vibrates heavily or makes unusual noise, press stop immediately — do not wait for the run to finish.</dd>
          </dl>
          <h4>Before using any instrument:</h4>
          <p>Check that it has been properly calibrated (check the calibration log if one is posted), confirm there is no previous user's sample still inside, and read the posted SOP (standard operating procedure) if you have not used that specific instrument before. When in doubt, ask your graduate student supervisor to walk you through it the first time.</p>
        `,
      },
    ],

    quiz: {
      instructions: "Answer all questions correctly to unlock the next section. Each attempt draws a new set of questions.",
      selectN: 3,
      questions: [
        {
          id:   "inst1",
          text: "Before reading the weight on an analytical balance, you should:",
          options: [
            { text: "Tap the balance gently to help the reading settle",                  correct: false },
            { text: "Close the draft shield and wait for the display to fully stabilize", correct: true  },
            { text: "Open a window to improve ventilation",                               correct: false },
            { text: "Zero the balance after placing the chemical on the pan",             correct: false },
          ],
          explanation: "Analytical balances measure to 0.0001 g — even slight air currents affect the reading. The draft shield must be closed and you must wait for the display to stop changing before recording the measurement.",
        },
        {
          id:   "inst2",
          text: "You are loading a centrifuge with 4 tubes: two contain 1.5 mL and two contain 1.0 mL. How do you balance them?",
          options: [
            { text: "Any arrangement works — the centrifuge self-balances",                                  correct: false },
            { text: "Place the two 1.5 mL tubes opposite each other and the two 1.0 mL tubes opposite each other", correct: true },
            { text: "Fill all tubes to the same volume with water before loading",                           correct: false },
            { text: "Only run tubes of exactly identical volume",                                            correct: false },
          ],
          explanation: "For a centrifuge to be balanced, tubes of similar mass must be placed directly opposite each other. The two 1.5 mL tubes face each other and the two 1.0 mL tubes face each other across four positions.",
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
          explanation: "Blanking subtracts the background absorbance of the solvent and cuvette so that only the sample's contribution is measured. Skipping the blank gives inaccurate absorbance readings.",
        },
        {
          id:   "inst4",
          text: "Between measurements, the electrode of a pH meter should be stored in:",
          options: [
            { text: "Distilled water",                        correct: false },
            { text: "Its designated pH electrode storage solution", correct: true },
            { text: "A dry paper towel inside its cap",        correct: false },
            { text: "The buffer solution you last calibrated with", correct: false },
          ],
          explanation: "A pH electrode must be stored in its proper storage solution to keep the glass membrane hydrated and functional. Storing it dry can permanently damage the sensing element. Distilled water is not an adequate substitute.",
        },
        {
          id:   "inst5",
          text: "When weighing a substance on an analytical balance, you should place it:",
          options: [
            { text: "Directly on the balance pan for maximum accuracy",             correct: false },
            { text: "In a tared container or on weighing paper",                    correct: true  },
            { text: "In any available glassware sitting on the pan",                correct: false },
            { text: "On a piece of paper torn from your lab notebook",              correct: false },
          ],
          explanation: "Never place chemicals directly on the balance pan. Use weighing paper or a tared container (one that has been zeroed with the balance). This protects the instrument and gives accurate net measurements.",
        },
        {
          id:   "inst6",
          text: "A centrifuge begins vibrating heavily during a run. You should:",
          options: [
            { text: "Wait — vibration is normal during the acceleration phase",           correct: false },
            { text: "Stop it immediately using the stop/brake function, then check balance and inspect for damage", correct: true },
            { text: "Increase the spin speed to power through the vibration",             correct: false },
            { text: "Open the lid to see whether a tube has broken loose",               correct: false },
          ],
          explanation: "Heavy vibration usually indicates an imbalanced rotor or a broken tube. Stop immediately using the stop/brake function — never open the lid while spinning. After the rotor has fully stopped, inspect for damage before proceeding.",
        },
      ],
    },

  },


  // MODULE 5 — Data Analysis with Excel
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
        title:       "Excel Basics for Scientists",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Covers spreadsheet organization, data entry, and basic formulas for research use.",
      },
      {
        type:        "video",
        title:       "Making Charts and Graphs in Excel",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Shows how to create scatter plots, label axes correctly, and add trendlines in Excel.",
      },
      {
        type:    "guide",
        title:   "Quick Guide: Essential Excel Skills for Researchers",
        content: `
          <h4>Data Entry Rules:</h4>
          <ul>
            <li>Put one type of data per column. Use the <strong>first row</strong> for headers (variable names).</li>
            <li>Never merge cells in your data table — it breaks sorting, filtering, and formulas.</li>
            <li>Record <strong>units in the column header</strong> (e.g., "Temperature (°C)"), not inside data cells. Writing "25 °C" in a cell makes it text, not a number, and breaks all calculations.</li>
            <li>Use a blank cell or "N/A" for missing data. Never use 0 as a substitute unless 0 is the actual measured value.</li>
          </ul>
          <h4>Formulas You Will Use Often:</h4>
          <table class="formula-table">
            <tr><td><code>=AVERAGE(A2:A10)</code></td><td>Calculates the mean of a range</td></tr>
            <tr><td><code>=STDEV(A2:A10)</code></td><td>Calculates sample standard deviation</td></tr>
            <tr><td><code>=MAX(A2:A10)</code></td><td>Finds the maximum value in a range</td></tr>
            <tr><td><code>=MIN(A2:A10)</code></td><td>Finds the minimum value in a range</td></tr>
            <tr><td><code>=COUNT(A2:A10)</code></td><td>Counts how many numeric entries are in a range</td></tr>
          </table>
          <h4>Making a Scientific Chart (Scatter Plot):</h4>
          <ol>
            <li>Select your data columns including headers.</li>
            <li>Go to <strong>Insert → Chart → Scatter (XY Scatter)</strong>.</li>
            <li>Double-click each axis and add the variable name and units (e.g., "Time (minutes)").</li>
            <li>Add a descriptive chart title.</li>
            <li>To add a trendline, right-click a data point and choose "Add Trendline."</li>
          </ol>
          <h4>Reporting Uncertainty:</h4>
          <p>In scientific reporting, measurements are typically reported as the mean ± standard deviation (e.g., 4.72 ± 0.08 mM). Always report the number of replicates (n) along with your statistics. Error bars on a chart should state in the figure caption whether they represent standard deviation, standard error, or a confidence interval.</p>
        `,
      },
      {
        type:  "download",
        title: "Practice Data Spreadsheet",
        url:   "#",
      },
    ],

    quiz: {
      instructions: "Answer all questions correctly to unlock the next section. Each attempt draws a new set of questions.",
      selectN: 3,
      questions: [
        {
          id:   "xl1",
          text: "Your temperature data is in cells A2 through A20. Which formula correctly calculates the average?",
          options: [
            { text: "=MEAN(A2:A20)",     correct: false },
            { text: "=AVERAGE(A2:A20)", correct: true  },
            { text: "=AVG(A2:A20)",      correct: false },
            { text: "=SUM(A2:A20)/19",   correct: false },
          ],
          explanation: "In Excel, the correct function is =AVERAGE(). =MEAN() and =AVG() do not exist in Excel. =SUM()/COUNT() would also work but =AVERAGE() is simpler and less error-prone.",
        },
        {
          id:   "xl2",
          text: "You are plotting time (x-axis) vs. concentration (y-axis) — two continuous numeric variables. Which chart type should you use?",
          options: [
            { text: "Pie chart",                  correct: false },
            { text: "Bar chart",                  correct: false },
            { text: "Scatter plot (XY Scatter)",  correct: true  },
            { text: "3D Surface chart",           correct: false },
          ],
          explanation: "Scatter plots are the standard for two continuous numeric variables in science. Bar charts compare categories; pie charts show proportions of a whole.",
        },
        {
          id:   "xl3",
          text: "Where should units of measurement (e.g., °C, mg/L) be recorded in your spreadsheet?",
          options: [
            { text: "In every data cell next to the number (e.g., '25 °C')",       correct: false },
            { text: "In the column header (e.g., 'Temperature (°C)')",             correct: true  },
            { text: "In a separate 'Units' worksheet",                              correct: false },
            { text: "Units do not need to be recorded in the spreadsheet",         correct: false },
          ],
          explanation: "Units go in the header row. Writing '25 °C' in a data cell makes it a text string — Excel will not include it in calculations, and your averages and formulas will fail silently.",
        },
        {
          id:   "xl4",
          text: "Your absorption data is in cells B2 through B15. Which formula calculates the standard deviation?",
          options: [
            { text: "=VARIANCE(B2:B15)", correct: false },
            { text: "=STDEV(B2:B15)",   correct: true  },
            { text: "=SD(B2:B15)",       correct: false },
            { text: "=STD(B2:B15)",      correct: false },
          ],
          explanation: "In Excel, the correct function for sample standard deviation is =STDEV(). =STDEV.S() is the modern equivalent. =VARIANCE, =SD, and =STD are not valid Excel functions.",
        },
        {
          id:   "xl5",
          text: "Three data points in your dataset could not be collected due to equipment failure. In your spreadsheet, these should be recorded as:",
          options: [
            { text: "0 (zero)",                                      correct: false },
            { text: "The average of the other values",               correct: false },
            { text: "A blank cell or 'N/A'",                         correct: true  },
            { text: "The last measured value repeated",              correct: false },
          ],
          explanation: "Never use 0 for missing data unless 0 was the actual measured value. Use a blank cell or 'N/A' so that formulas like =AVERAGE() automatically exclude them rather than treating the missing values as zero measurements.",
        },
        {
          id:   "xl6",
          text: "A collaborator sends you a spreadsheet where data cells are merged across rows and columns. What problem does this cause?",
          options: [
            { text: "No problem — merging is only a formatting preference",             correct: false },
            { text: "Excel formulas, sorting, and filtering may fail on merged ranges", correct: true  },
            { text: "The data will automatically unmerge when you apply a formula",     correct: false },
            { text: "Merged cells are more accurate because they group related data",   correct: false },
          ],
          explanation: "Merged cells break Excel's sorting, filtering, and formula operations. A merged cell occupies only the top-left position; the rest are treated as empty. Always unmerge cells before performing any analysis.",
        },
      ],
    },

  },


  // MODULE 6 — Intro to CASFER Science
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
        title:       "The Global Nitrogen Problem",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "Explains the global nitrogen cycle, the Haber-Bosch process, and nutrient pollution.",
      },
      {
        type:        "video",
        title:       "Introduction to CASFER and Its Research",
        youtubeId:   "REPLACE_WITH_VIDEO_ID",
        description: "An overview of CASFER — its mission, research thrusts, and partner institutions.",
      },

      // CASFER and CETI Lab websites
      {
        type:        "link",
        title:       "CASFER — NSF Engineering Research Center",
        description: "Explore CASFER's current research projects, partner institutions, news, and team. Learn how the work you are doing this summer fits into the broader center mission.",
        url:         "https://www.casfer.us/",
        label:       "Visit CASFER",
      },
      {
        type:        "link",
        title:       "CETI Lab — Center for Electrochemical Technology and Innovation",
        description: "The CETI Lab at Texas Tech University develops electrochemical technologies for energy conversion, chemical production, and environmental remediation — including key technologies underlying CASFER's nutrient recovery work.",
        url:         "https://www.ceti-lab.com/",
        label:       "Visit CETI Lab",
      },

      // Selected Papers
      // To add more papers: copy one block and paste it. url should be a DOI link or journal page.
      {
        type:    "paper",
        title:   "Electrochemical organic waste conversion: a route toward food security and a circular economy",
        authors: "Ferreira-Garcia, D., Haque, S., Burke, B., Furst, A. L., & Botte, G. G.",
        journal: "Current Opinion in Chemical Engineering",
        year:    "2025",
        url:     "https://doi.org/10.1016/j.coche.2025.101156",
        summary: "This paper explores how electrochemical technologies can convert organic waste into valuable products — including fertilizer precursors — creating a circular economy pathway that directly supports food security. Directly relevant to CASFER's mission of sustainable, distributed nutrient recovery.",
      },

      {
        type:    "guide",
        title:   "Background Reading: CASFER, CETI Lab, and the Fertilizer Challenge",
        content: `
          <h4>What Is CASFER?</h4>
          <p>CASFER (the <strong>NSF Engineering Research Center for Advancing Sustainable and Distributed Fertilizer Production</strong>) is a multi-university research center headquartered at Texas Tech University and funded by the National Science Foundation. Its mission is to transform how fertilizer is produced and managed — moving from large, centralized, energy-intensive industrial facilities to small-scale, distributed systems that recover nutrients from local waste streams. Visit the center at <a href="https://www.casfer.us/" target="_blank" rel="noopener">www.casfer.us</a>.</p>

          <h4>What Is the CETI Lab?</h4>
          <p>The <a href="https://www.ceti-lab.com/" target="_blank" rel="noopener">Center for Electrochemical Technology and Innovation (CETI Lab)</a> at Texas Tech University is one of CASFER's core research groups. The CETI Lab develops electrochemical systems for energy conversion, chemical production, and environmental remediation — including breakthrough technologies for recovering nitrogen and phosphorus from wastewater and organic waste. If you are placed in or working with the CETI Lab this summer, you will be using cutting-edge electrochemical reactors, analytical instruments, and characterization tools.</p>

          <h4>The Nitrogen Problem</h4>
          <p>Nitrogen (N) is the nutrient most limiting to crop growth worldwide. Modern agriculture depends on synthetic nitrogen fertilizer produced by the <strong>Haber-Bosch process</strong>, which converts atmospheric nitrogen gas (N₂) into ammonia (NH₃). This process feeds roughly half the world's population, but it comes at a steep cost: it consumes about <strong>1–2% of global energy</strong> and is responsible for significant greenhouse gas emissions.</p>

          <h4>The Waste and Pollution Problem</h4>
          <p>A large fraction of applied nitrogen is never taken up by crops. It leaches into rivers and lakes, causing <strong>harmful algal blooms</strong> and oxygen-depleted "dead zones." It also escapes to the atmosphere as nitrous oxide (N₂O), a greenhouse gas roughly 300 times more potent than CO₂ over a 100-year period. This represents both an environmental crisis and a massive resource inefficiency — valuable nitrogen is being lost rather than recovered.</p>

          <h4>CASFER's Research Areas</h4>
          <p>CASFER research spans several interconnected areas:</p>
          <ul>
            <li><strong>Electrochemical Nutrient Recovery:</strong> Using electricity to selectively extract nitrogen and phosphorus from waste streams including urine, agricultural runoff, and livestock manure.</li>
            <li><strong>Membrane Technology:</strong> Designing selective membranes that allow specific ions to pass through while blocking others, enabling concentration and recovery of target nutrients.</li>
            <li><strong>Sensing and Monitoring:</strong> Building low-cost sensors to detect nutrient concentrations in the field, enabling real-time feedback and process control.</li>
            <li><strong>Microbiology:</strong> Understanding and working with microbial communities that participate in nitrogen cycling and can be coupled with engineered recovery systems.</li>
            <li><strong>Techno-Economic Analysis:</strong> Modeling the cost, scalability, and environmental impact of new technologies to guide development toward real-world deployment.</li>
          </ul>

          <h4>Why Your Summer Work Matters</h4>
          <p>Whether your summer project touches membranes, electrochemistry, sensors, microbiology, or data analysis, it connects to this mission: a more sustainable, distributed, and equitable fertilizer system. You are joining a team working on one of the most consequential engineering challenges of the coming decades. The research you contribute to this summer may one day shape how food is grown for billions of people.</p>
        `,
      },
    ],

    quiz: {
      instructions: "Answer these final questions to complete the last section — you are almost done! Each attempt draws a new set of questions.",
      selectN: 4,
      questions: [
        {
          id:   "cas1",
          text: "What is the primary environmental motivation for CASFER's research on nutrient recovery?",
          options: [
            { text: "Nitrogen is becoming scarce in the atmosphere",                                                  correct: false },
            { text: "To reduce water pollution, cut greenhouse gas emissions, and close the nutrient cycle",          correct: true  },
            { text: "To develop a new type of large industrial fertilizer plant",                                     correct: false },
            { text: "To eliminate all use of synthetic fertilizer in agriculture",                                    correct: false },
          ],
          explanation: "CASFER's goal is to recover nitrogen and phosphorus from waste streams to prevent water pollution and reduce the energy and emissions of conventional fertilizer production — closing the nutrient loop rather than eliminating fertilizer use altogether.",
        },
        {
          id:   "cas2",
          text: "The Haber-Bosch process is relevant to CASFER's mission because:",
          options: [
            { text: "CASFER uses it to produce all of its experimental fertilizer",                                                   correct: false },
            { text: "It is the energy-intensive industrial process CASFER aims to partially replace with distributed, sustainable alternatives", correct: true },
            { text: "It is the process that creates the chemical waste CASFER cleans up",                                             correct: false },
            { text: "It is used only in developing countries and has no connection to CASFER",                                        correct: false },
          ],
          explanation: "Haber-Bosch converts atmospheric N₂ to NH₃ and currently uses 1–2% of global energy. CASFER seeks distributed, low-energy alternatives that recover nitrogen from existing waste streams instead of synthesizing it from scratch.",
        },
        {
          id:   "cas3",
          text: "CASFER is headquartered at:",
          options: [
            { text: "The University of Texas at Austin", correct: false },
            { text: "Texas A&M University",              correct: false },
            { text: "Texas Tech University",             correct: true  },
            { text: "Rice University",                   correct: false },
          ],
          explanation: "CASFER is an NSF Engineering Research Center headquartered at Texas Tech University in Lubbock, Texas.",
        },
        {
          id:   "cas4",
          text: "What is the focus of the CETI Lab at Texas Tech University?",
          options: [
            { text: "Solar panel manufacturing and battery energy storage",                                   correct: false },
            { text: "Electrochemical technologies for energy conversion, chemical production, and environmental remediation", correct: true },
            { text: "Genetic engineering of nitrogen-fixing bacteria",                                        correct: false },
            { text: "Agricultural soil science and crop rotation studies",                                    correct: false },
          ],
          explanation: "The Center for Electrochemical Technology and Innovation (CETI Lab) develops electrochemical systems, including technologies directly relevant to CASFER's mission of recovering nitrogen and phosphorus from waste streams.",
        },
        {
          id:   "cas5",
          text: "Nitrous oxide (N₂O) released from farmland is environmentally significant because:",
          options: [
            { text: "It reacts with ozone to produce acid rain",                                                          correct: false },
            { text: "It is a potent greenhouse gas roughly 300 times more powerful than CO₂ over a 100-year period",     correct: true  },
            { text: "It permanently removes nitrogen from the atmosphere",                                                correct: false },
            { text: "It is directly toxic to crop plants and reduces agricultural yield",                                 correct: false },
          ],
          explanation: "N₂O is produced when soil microbes process nitrogen fertilizer. Its global warming potential is approximately 300 times that of CO₂ over a 100-year timeframe, making it a significant contributor to climate change.",
        },
        {
          id:   "cas6",
          text: "Which phrase best describes CASFER's approach to fertilizer production?",
          options: [
            { text: "Centralized, high-capacity industrial plants near major cities",                                         correct: false },
            { text: "Distributed, small-scale systems that recover nutrients from local waste streams",                       correct: true  },
            { text: "Complete elimination of synthetic fertilizer use in agriculture",                                        correct: false },
            { text: "Replacing chemical fertilizers with imported organic compost",                                           correct: false },
          ],
          explanation: "CASFER's core innovation is distributed production: small systems placed near the source of waste (farms, wastewater treatment plants) rather than large centralized industrial facilities. This reduces transportation costs, improves resource efficiency, and expands access for underserved communities.",
        },
        {
          id:   "cas7",
          text: "What does a 'circular economy' approach to nutrients mean in CASFER's context?",
          options: [
            { text: "Nutrients are produced, used, and then permanently removed from the environment",    correct: false },
            { text: "Nutrients are recovered from waste and returned to agricultural use, minimizing losses", correct: true },
            { text: "All nitrogen production is banned and replaced by natural farming",                  correct: false },
            { text: "The same fertilizer batch is reused indefinitely without adding new material",       correct: false },
          ],
          explanation: "A circular economy approach captures nitrogen and phosphorus that would otherwise be lost (in wastewater, manure, or runoff) and returns them to productive agricultural use — closing the loop rather than relying on constant energy-intensive synthesis of new fertilizer.",
        },
        {
          id:   "cas8",
          text: "The Haber-Bosch process currently consumes approximately what share of global energy?",
          options: [
            { text: "Less than 0.1%", correct: false },
            { text: "1 to 2%",        correct: true  },
            { text: "10 to 15%",      correct: false },
            { text: "Over 30%",       correct: false },
          ],
          explanation: "The Haber-Bosch process consumes roughly 1 to 2% of global energy production. This seemingly small percentage represents an enormous absolute demand and an equally large source of carbon emissions — making it a prime target for more sustainable alternatives.",
        },
      ],
    },

  },

]; // end MODULES array
