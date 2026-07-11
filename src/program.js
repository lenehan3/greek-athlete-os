// ---------------------------------------------------------------------------
// Workout program data.
//
// Edit THIS file to change workout content. All program / day / exercise data
// lives here; the rendering logic lives in src/App.jsx and reads from these
// exports. Keep the shape consistent:
//
//   program.days[<dayKey>] = {
//     label, title, subtitle, tag, tagColor, duration, focus,
//     sections: [ { name, exercises: [ { name, sets, note, priority? } ] } ]
//   }
//
// `tagColor` must be one of the keys in `tagColors` below.
// `days` is the ordered list of day keys (controls tab order).
//
// V7.0 — The Aesthetic Split. 4 lifting days (Push / Pull / Legs / Delts+Arms)
// built around exercises that FEEL good and keep you coming back: dumbbell,
// cable and machine work in the 8-15 pump range, compounds where they earn
// their place, one dedicated delts+arms day (your #1 look). Intensity still
// there (1-2 reps in reserve, last set often to failure) but not grim RPT on
// everything. Cardio kept: Zone 2 walk (Thu) + VO2 4×4 (Sat). Enjoy it and
// you'll do it — adherence beats the "optimal" program you dread.
// ---------------------------------------------------------------------------

export const program = {
  name: "GREEK ATHLETE OS V7.0",
  subtitle: "The Aesthetic Split — Push / Pull / Legs / Delts",
  philosophy: "The best program is the one you actually enjoy. Good exercises, real variety, chase the pump — show up because you want to.",
  days: {
    mon: {
      label: "MON",
      title: "PUSH",
      subtitle: "Chest · Shoulders · Triceps",
      tag: "PUSH",
      tagColor: "yellow",
      duration: "50-55 min",
      focus: "Upper-chest led, delts close behind. Press heavy while you're fresh, then chase the pump with cables and machines. Leave 1-2 reps in the tank except the last set of each move.",
      sections: [
        {
          name: "PRESS",
          exercises: [
            { name: "Incline DB Press 30°", sets: "3×6-10", note: "Upper chest — the money maker. Full stretch at the bottom.", priority: true },
            { name: "Seated Machine Shoulder Press", sets: "3×8-12", note: "Slight forward lean for side-delt bias, controlled" }
          ]
        },
        {
          name: "SHAPE",
          exercises: [
            { name: "Cable Lateral Raise", sets: "3×12-15", note: "Behind the back, constant tension — your #1 muscle, feel every rep", priority: true },
            { name: "Cable Fly / Pec Deck", sets: "3×12-15", note: "Squeeze 1s at the peak, slow negative — best chest pump there is" }
          ]
        },
        {
          name: "TRICEPS",
          exercises: [
            { name: "Overhead Cable Extension", sets: "3×10-12", note: "Long head on stretch — the mass of the arm" },
            { name: "Rope Pushdown", sets: "2×12-15", note: "Spread the rope at the bottom, last set to failure" }
          ]
        }
      ]
    },
    tue: {
      label: "TUE",
      title: "PULL",
      subtitle: "Back · Rear Delts · Biceps",
      tag: "PULL",
      tagColor: "green",
      duration: "50-55 min",
      focus: "Width first, then thickness, then the fun stuff. Think about pulling with the elbows, not the hands — let the back do the work and the biceps grow anyway.",
      sections: [
        {
          name: "WIDTH",
          exercises: [
            { name: "Pull-Up / Lat Pulldown", sets: "3×6-10", note: "Wide-ish grip, lean back slightly, drive elbows to hips — lat width", priority: true },
            { name: "Chest-Supported DB Row", sets: "3×8-12", note: "No momentum, squeeze the mid-back — thickness with zero lower-back strain", priority: true }
          ]
        },
        {
          name: "DETAIL",
          exercises: [
            { name: "Cable Row (neutral grip)", sets: "3×10-12", note: "Big stretch forward, elbows back — feels amazing" },
            { name: "Reverse Pec Deck", sets: "3×15-20", note: "Rear delts — high reps, the 3D-shoulder detail most people skip" }
          ]
        },
        {
          name: "BICEPS",
          exercises: [
            { name: "Incline DB Curl", sets: "3×8-12", note: "Arms behind the body = long-head stretch, the peak", priority: true },
            { name: "Cable / Hammer Curl", sets: "2×12-15", note: "Constant tension, last set drop to failure" }
          ]
        }
      ]
    },
    wed: {
      label: "WED",
      title: "LEGS",
      subtitle: "Quads · Hams · Calves",
      tag: "LEGS",
      tagColor: "orange",
      duration: "45-50 min",
      focus: "Machine-led so you can push hard without a spotter or a fried lower back. Enough to build athletic, proportioned legs — not so much you can't walk Thursday.",
      sections: [
        {
          name: "PRIMARY",
          exercises: [
            { name: "Leg Press / Hack Squat", sets: "3×8-12", note: "Full depth, controlled — all the quad, none of the barbell grind", priority: true },
            { name: "Romanian Deadlift", sets: "3×8-10", note: "Hams + glutes, hinge at the hips, feel the stretch — light-ish, high control", priority: true }
          ]
        },
        {
          name: "DETAIL",
          exercises: [
            { name: "Seated Leg Curl", sets: "3×12-15", note: "Hamstrings, squeeze hard — pairs with the RDL" },
            { name: "Leg Extension", sets: "3×12-15", note: "Quad sweep, pause at the top, last set partials to failure" },
            { name: "Standing Calf Raise", sets: "3×12-15", note: "Full stretch + 1s pause at the bottom, heavy" }
          ]
        }
      ]
    },
    thu: {
      label: "THU",
      title: "WALK",
      subtitle: "Zone 2 Base",
      tag: "ZONE 2",
      tagColor: "blue",
      duration: "30-40 min",
      focus: "Easy aerobic base + recovery from legs. Conversational pace, sun, mobility — this is the easy 80% that keeps Saturday's intervals sharp and feeds your step floor.",
      sections: [
        {
          name: "SESSION",
          exercises: [
            { name: "Outdoor / Incline Walk", sets: "30-40 min", note: "Zone 2 — HR ~60-70% max, still able to talk. Recovery, not a workout.", priority: true }
          ]
        }
      ]
    },
    fri: {
      label: "FRI",
      title: "DELTS + ARMS",
      subtitle: "The Pump Day",
      tag: "SHOW",
      tagColor: "purple",
      duration: "45-50 min",
      focus: "The fun one. Highest side-delt volume of the week plus the arms — the muscles you actually see in the mirror. Superset, chase the burn, enjoy it. Nothing heavy, everything felt.",
      sections: [
        {
          name: "DELTS (PRIORITY)",
          exercises: [
            { name: "Cable Lateral Raise (single arm)", sets: "4×12-15", note: "One arm at a time = better stretch + focus. Drop the last set.", priority: true },
            { name: "Machine Lateral Raise", sets: "3×15", note: "Burnout, partials at the end — cap-delt roundness", priority: true },
            { name: "Reverse Pec Deck", sets: "3×15-20", note: "Rear delts again — the more the better for 3D shoulders" }
          ]
        },
        {
          name: "ARMS (SUPERSET)",
          exercises: [
            { name: "EZ-Bar Curl", sets: "3×10-12", note: "Superset with the pushdown — strict, no swing", priority: true },
            { name: "Rope Pushdown", sets: "3×12-15", note: "Superset with the curl, minimal rest — arm pump city" },
            { name: "Cable / Hammer Curl", sets: "2×12-15", note: "Brachialis + forearm, thickens the whole arm" },
            { name: "Overhead Tricep Extension", sets: "2×12-15", note: "Long-head stretch to finish" }
          ]
        },
        {
          name: "FINISH",
          exercises: [
            { name: "Cable Crunch", sets: "3×15", note: "Round the spine, full contraction — abs" },
            { name: "Neck Extension", sets: "2×15-20", note: "Aesthetic detail — don't skip" }
          ]
        }
      ]
    },
    sat: {
      label: "SAT",
      title: "VO2 MAX",
      subtitle: "Norwegian 4×4",
      tag: "VO2",
      tagColor: "red",
      duration: "35-40 min",
      focus: "The one session that actually builds VO2 max — you have to spend minutes NEAR your ceiling to raise it. Four hard 4-min efforts is the minimum effective dose. Paired with the refeed: max output, then carbs up.",
      sections: [
        {
          name: "WARM-UP",
          exercises: [
            { name: "Easy Jog", sets: "8-10 min", note: "Build to a light sweat — do NOT skip, cold intervals wreck the first rep", priority: true }
          ]
        },
        {
          name: "MAIN — 4×4",
          exercises: [
            { name: "4 min HARD @ 90-95% HRmax", sets: "×4 intervals", note: "~8-9/10 effort — can't hold a conversation, but sustainable to the 4-min mark. Bungan loop or any hill.", priority: true },
            { name: "3 min easy jog recovery", sets: "between each", note: "Let HR drop to ~70% — the recovery is what lets the next rep hit VO2 max" }
          ]
        },
        {
          name: "COOL-DOWN + REFEED",
          exercises: [
            { name: "Easy Jog / Walk", sets: "5 min", note: "Flush the legs, drop HR gradually" },
            { name: "Carbs +150-200g today", sets: "Rice, potatoes, dates, honey", note: "Refeed — keeps leptin + thyroid up after the hard output" }
          ]
        }
      ]
    },
    sun: {
      label: "SUN",
      title: "REST",
      subtitle: "Full recovery",
      tag: "OFF",
      tagColor: "gray",
      duration: "—",
      focus: "Walk, beach, surf. No structured training. Muscle is repaired on rest days — not built in extra sets.",
      sections: []
    }
  }
};

export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Cut plan — drives the CUT TRACKER card. Edit these to retarget the cut.
//   journeyStartKg : where the whole cut began (for the full progress bar)
//   startKg        : weight on startDate, the anchor for the on-track schedule
//   startDate      : YYYY-MM-DD the 0.5kg/wk schedule is measured from
//   targetKg       : numeric goal used for the math (midpoint of the range)
//   targetLabel    : how the goal is shown
//   rateKgPerWeek  : planned loss rate
export const cutPlan = {
  journeyStartKg: 93,
  startKg: 80,
  startDate: "2026-06-26",
  targetKg: 74.5,
  targetLabel: "74-75 kg",
  rateKgPerWeek: 0.5
};

export const tagColors = {
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  gray: { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/30' }
};
