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
// V6.0 — Minimum Effective Dose rebuild. 3 full-body sessions (Mon/Wed/Fri),
// each muscle trained ~3x/week at maintenance volume, intensity kept high.
// Rationale: maintenance needs ~1/3 of growth volume if load stays heavy
// (Bickel 2011, 32-wk RCT); frequency is irrelevant once volume is matched
// (Lasevicius/Schoenfeld 2019; Pelland 2025). Side delts kept high on purpose.
// ---------------------------------------------------------------------------

export const program = {
  name: "GREEK ATHLETE OS V6.0",
  subtitle: "Minimalist Cut — 3-Day Full Body",
  philosophy: "Minimum effective dose. Maximum intensity. The physique on 3 hours a week.",
  days: {
    mon: {
      label: "MON",
      title: "FULL BODY A",
      subtitle: "Heavy Push + Posterior",
      tag: "HEAVY",
      tagColor: "yellow",
      duration: "45-50 min",
      focus: "Heaviest day — every working set near failure. Delts first, then heavy push + vertical pull, one hinge for the legs.",
      sections: [
        {
          name: "DELTS",
          exercises: [
            { name: "Seated Machine Shoulder Press", sets: "1×6-8, 1×8-10", note: "RPT, slight forward lean for side bias", priority: true },
            { name: "Cable Lateral Raise (heavy)", sets: "3×8-12", note: "Behind back, controlled stretch — your #1 muscle", priority: true }
          ]
        },
        {
          name: "CHEST + BACK",
          exercises: [
            { name: "Incline DB Press 30°", sets: "1×5-6, 1×7-8", note: "RPT — upper chest priority", priority: true },
            { name: "Weighted Pull-Up (wide grip)", sets: "1×4-6, 1×6-8", note: "RPT — lat width, lean back slightly", priority: true }
          ]
        },
        {
          name: "POSTERIOR + ARMS",
          exercises: [
            { name: "Romanian Deadlift", sets: "1×6-8, 1×8-10", note: "RPT — hammies + glutes, whole leg in one move" },
            { name: "Overhead Cable Tricep Ext", sets: "2×10-12", note: "Long head emphasis" },
            { name: "Cable Tricep Pushdown", sets: "2×10-12", note: "Squeeze at the bottom" }
          ]
        }
      ]
    },
    tue: {
      label: "TUE",
      title: "WALK",
      subtitle: "Zone 2 Base",
      tag: "ZONE 2",
      tagColor: "blue",
      duration: "30-40 min",
      focus: "The easy 80%. Nasal-breathing, conversational pace — builds the aerobic base that lets Saturday's intervals hit harder. Also feeds your 8-10k step floor.",
      sections: [
        {
          name: "SESSION",
          exercises: [
            { name: "Incline Walk", sets: "30-40 min @ 10-12%", note: "Zone 2, fasted ideally — HR ~60-70% max, still able to talk", priority: true },
            { name: "Vacuums", sets: "3×30-45s", note: "Mid-walk or post" }
          ]
        }
      ]
    },
    wed: {
      label: "WED",
      title: "FULL BODY B",
      subtitle: "Heavy Pull + Legs",
      tag: "HEAVY",
      tagColor: "yellow",
      duration: "45-50 min",
      focus: "Pull-biased. Second delt hit, heavy row for thickness, light legs. In and out.",
      sections: [
        {
          name: "DELTS",
          exercises: [
            { name: "DB Lateral Raise", sets: "3×12-15", note: "Strict, no swing — last set drop to failure", priority: true },
            { name: "Reverse Pec Deck", sets: "2×12-15", note: "Rear delt, slow eccentric" }
          ]
        },
        {
          name: "BACK + CHEST",
          exercises: [
            { name: "Chest-Supported DB Row", sets: "1×6-8, 1×8-10", note: "RPT — no momentum, thickness", priority: true },
            { name: "Incline Cable Fly (low to high)", sets: "2×10-12", note: "Upper chest, squeeze 1s at top" }
          ]
        },
        {
          name: "LEGS + BICEPS",
          exercises: [
            { name: "Walking Lunge", sets: "3×10-12 each", note: "Long stride, glute focus" },
            { name: "Incline DB Curl", sets: "2×8-10", note: "Long head stretch" },
            { name: "Cable/EZ-Bar Curl", sets: "2×10-12", note: "Strict, no momentum" }
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
      focus: "More easy aerobic base. Steps, sun, mobility — keep it conversational so Friday's lift and Saturday's intervals both land fresh.",
      sections: [
        {
          name: "SESSION",
          exercises: [
            { name: "Outdoor Walk", sets: "30-40 min", note: "Easy pace, conversational — recovery, not a workout", priority: true }
          ]
        },
        {
          name: "OPTIONAL FINISHER",
          exercises: [
            { name: "10× Hill Sprints", sets: "10-15s all-out, walk down to recover", note: "Only if fresh — pure power + capillary density, near-zero interference with lifting" }
          ]
        }
      ]
    },
    fri: {
      label: "FRI",
      title: "FULL BODY C",
      subtitle: "Delt Spec + Detail",
      tag: "DELTS",
      tagColor: "green",
      duration: "50 min",
      focus: "Highest side-delt volume of the week, plus the details that round out the look. The kitchen-sink day.",
      sections: [
        {
          name: "DELTS (PRIORITY)",
          exercises: [
            { name: "Cable Lateral Raise (single arm)", sets: "3×12-15", note: "Behind back, drop last set", priority: true },
            { name: "Machine Lateral Raise", sets: "2×15", note: "Burnout, partials at the end", priority: true }
          ]
        },
        {
          name: "BACK + CHEST",
          exercises: [
            { name: "Lat Pulldown (lengthened bias)", sets: "2×10-12", note: "Stretch at top, no shrug — width", priority: true },
            { name: "Weighted Dips", sets: "1×6-8, 1×8-10", note: "RPT — chest + tri, lean forward, full ROM" }
          ]
        },
        {
          name: "LEGS + DETAIL",
          exercises: [
            { name: "Leg Extension", sets: "2×12-15", note: "Quad sweep, controlled" },
            { name: "Standing Calf Raise", sets: "2×12-15", note: "Heavy, full stretch + pause" },
            { name: "Cable Crunch", sets: "2×15", note: "Round the spine, full contraction" },
            { name: "Neck Extension", sets: "2×15-20", note: "Aesthetic — don't skip" }
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
  gray: { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/30' }
};
