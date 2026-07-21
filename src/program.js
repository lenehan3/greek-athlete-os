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
// AESTHETIC SPLIT V1.0 — Will's own build. 5 lifting days (Pull-width / Push /
// Legs / Delts+Arms / Pull-thickness) engineered for a best-ever physique while
// carrying a high work load. Autoregulated: Friday is gated by sleep + work,
// waking HR is watched, RIR keeps failure off the table except the last iso set,
// deload wk6. Machine-led pressing + no overhead until the shoulder clears.
// Built to lower cortisol, not just add volume. Recovery IS the program.
// ---------------------------------------------------------------------------

export const program = {
  name: "AESTHETIC SPLIT V1.0",
  subtitle: "Pull · Push · Legs · Delts · Autoregulated Cut",
  philosophy: "Best physique of my life while working hard. Autoregulate the load, protect recovery, keep cortisol down. Show up, don't grind yourself into the ground.",
  days: {
    mon: {
      label: "MON",
      title: "PULL",
      subtitle: "Width",
      tag: "WIDTH",
      tagColor: "green",
      duration: "50-55 min",
      focus: "Width first. Pull with the elbows, lean into the stretch. RPT the pulldown while fresh, then feed the lats and rear delts. 1-2 RIR on compounds.",
      sections: [
        {
          name: "VERTICAL",
          exercises: [
            { name: "Pulldown (→ weighted pull-up)", sets: "RPT 3×6/8/10", note: "Heaviest set first, drop ~10% each set. +weight when set 1 hits 6 twice running.", priority: true },
            { name: "Half-kneeling 1-arm Pulldown", sets: "3×10-12", note: "Big stretch overhead, drive the elbow to the hip" }
          ]
        },
        {
          name: "HORIZONTAL",
          exercises: [
            { name: "Chest-Supported Row", sets: "3×10-12", note: "No momentum, squeeze the mid-back", priority: true },
            { name: "DB Pullover", sets: "3×12-15", note: "3s eccentric, feel the lat stretch" }
          ]
        },
        {
          name: "REAR + SPINE",
          exercises: [
            { name: "Reverse Pec Deck", sets: "3×15", note: "Rear delts, slow and strict" },
            { name: "Jefferson Curl (light)", sets: "2×8", note: "Spinal decompression, roll down slow. Light." }
          ]
        }
      ]
    },
    tue: {
      label: "TUE",
      title: "PUSH",
      subtitle: "Chest · Delts · Triceps",
      tag: "PUSH",
      tagColor: "yellow",
      duration: "50-55 min",
      focus: "Machine-led to spare the shoulder. Nothing overhead until cleared. RPT the incline, then pump the delts and tris.",
      sections: [
        {
          name: "PRESS",
          exercises: [
            { name: "Incline Machine Press", sets: "RPT 3×6/8/10", note: "Upper chest. Heaviest first, +weight when set 1 hits 6 twice.", priority: true },
            { name: "Flat Machine Press", sets: "3×8-12", note: "Controlled, full ROM, no lockout rest" }
          ]
        },
        {
          name: "DELTS",
          exercises: [
            { name: "Cross-body Cable Lateral", sets: "4×12-15", note: "Constant tension, your #1 muscle. Last set 0-1 RIR.", priority: true }
          ]
        },
        {
          name: "TRICEPS + FINISH",
          exercises: [
            { name: "Overhead Cable Tricep Ext", sets: "3×10-12", note: "Long head on stretch" },
            { name: "Single-arm Pushdown", sets: "2×12-15", note: "Squeeze the bottom, last set to failure" },
            { name: "Light DB Pullover", sets: "2×12", note: "Ribcage + lat stretch" },
            { name: "Incline Walk", sets: "20 min", note: "Zone 2 finish" }
          ]
        }
      ]
    },
    wed: {
      label: "WED",
      title: "LEGS + CORE",
      subtitle: "Quads · Hams · Calves",
      tag: "LEGS",
      tagColor: "orange",
      duration: "55-60 min",
      focus: "One hard leg day. RPT the hinge, machine the squat pattern so the lower back stays fresh. Core and neck to finish.",
      sections: [
        {
          name: "HINGE + SQUAT",
          exercises: [
            { name: "Romanian Deadlift", sets: "RPT 3×6/8/10", note: "Hams + glutes. Hinge, don't squat it. Heaviest first.", priority: true },
            { name: "Hack Squat / Leg Press", sets: "3×8-12", note: "Full depth, controlled", priority: true }
          ]
        },
        {
          name: "DETAIL",
          exercises: [
            { name: "Seated Leg Curl", sets: "3×12-15", note: "Squeeze hard, pairs with the RDL" },
            { name: "Walking Lunges", sets: "3×12-15", note: "Long stride, glute focus" },
            { name: "Calf Raise", sets: "4×12-15", note: "Full stretch + 1s pause" }
          ]
        },
        {
          name: "CORE + NECK",
          exercises: [
            { name: "Hanging Leg Raise", sets: "3×10-15", note: "No swing, curl the pelvis" },
            { name: "Vacuums", sets: "3×20s", note: "Tighter waist" },
            { name: "Neck", sets: "2×15", note: "Aesthetic detail" },
            { name: "Forward Fold Hang", sets: "2×60s", note: "Decompress the spine" }
          ]
        }
      ]
    },
    thu: {
      label: "THU",
      title: "DELTS + ARMS",
      subtitle: "The Star Day ⭐",
      tag: "SHOW",
      tagColor: "purple",
      duration: "50-55 min",
      focus: "The one you look forward to. Highest side-delt volume, biggest arm pump. Push the last sets, drop sets and partials welcome. This is the look.",
      sections: [
        {
          name: "DELTS (PRIORITY)",
          exercises: [
            { name: "Machine Lateral Raise", sets: "4×10-15", note: "Drop + partials on the last set. Your #1 muscle.", priority: true },
            { name: "Incline Y-Raise", sets: "3×12-15", note: "Upper back + rear/side delt tie-in" },
            { name: "Cable Rear Delt Flye", sets: "4×15", note: "3D shoulder, high reps" }
          ]
        },
        {
          name: "ARMS",
          exercises: [
            { name: "Bayesian Curl", sets: "4×8-12", note: "Cable behind the body = long-head stretch. Last set drop.", priority: true },
            { name: "Rope Hammer Curl", sets: "4×10-12", note: "Brachialis + forearm, thickens the arm" },
            { name: "Overhead Rope Extension", sets: "3×12-15", note: "Long-head triceps stretch" },
            { name: "Wrist + Reverse Curls", sets: "3×15-20", note: "Forearms, don't skip" }
          ]
        },
        {
          name: "CARRY",
          exercises: [
            { name: "Farmer's Carry", sets: "2×40m", note: "Traps, grip, core. + 2 min nasal breathing after." }
          ]
        }
      ]
    },
    fri: {
      label: "FRI",
      title: "PULL",
      subtitle: "Thickness 🚦",
      tag: "AUTO",
      tagColor: "red",
      duration: "25-45 min",
      focus: "🚦 GATE — check before you drive in. 🟢 Slept 7+ AND work OK: full session. 🟡 One failed: pulldown + row only, 3× each, 25 min. 🔴 Both failed: 45 min walk, no gym. This day is the pressure valve. Use it honestly.",
      sections: [
        {
          name: "BACK",
          exercises: [
            { name: "Neutral-grip Pulldown", sets: "4×8-12", note: "Thickness bias, squeeze the mid-back", priority: true },
            { name: "Single-arm Machine Row", sets: "3×10-12", note: "Full stretch, elbow back", priority: true },
            { name: "DB Pullover", sets: "2×15", note: "Lat stretch finish" }
          ]
        },
        {
          name: "DELTS",
          exercises: [
            { name: "Lateral Raise", sets: "2×15", note: "+ drop set on the last one" },
            { name: "Reverse Pec Deck", sets: "3×15", note: "Rear delts, slow" }
          ]
        }
      ]
    },
    sat: {
      label: "SAT",
      title: "RUN + REFEED",
      subtitle: "Easy 5km",
      tag: "REFEED",
      tagColor: "blue",
      duration: "30-35 min",
      focus: "Easy aerobic output, NOT hard intervals (keeps cortisol down on a big week). The one day carbs go up: leptin + thyroid reset.",
      sections: [
        {
          name: "SESSION",
          exercises: [
            { name: "5km Run", sets: "Easy pace", note: "Conversational, nasal if you can. Bungan loop.", priority: true }
          ]
        },
        {
          name: "REFEED",
          exercises: [
            { name: "Carbs +150-250g", sets: "Rice, potatoes, dates, honey", note: "Keeps leptin + thyroid up on the cut" }
          ]
        }
      ]
    },
    sun: {
      label: "SUN",
      title: "REST",
      subtitle: "Recovery",
      tag: "OFF",
      tagColor: "gray",
      duration: "45-60 min",
      focus: "Recovery IS the program. Walk, sun, mobility. This is where cortisol drops and the physique gets built.",
      sections: [
        {
          name: "RECOVERY",
          exercises: [
            { name: "Walk", sets: "45-60 min", note: "Easy, outdoors, morning light if you can", priority: true },
            { name: "Box Breathing", sets: "5 min", note: "4-4-4-4. Down-regulate the nervous system." }
          ]
        }
      ]
    }
  }
};

export const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Cut plan — drives the CUT TRACKER card. Edit these to retarget the cut.
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
