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
      subtitle: "Heavy · Push Focus",
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
            { name: "Overhead Cable Tricep Ext", sets: "2×10-12", note: "Long head emphasis" }
          ]
        }
      ]
    },
    tue: {
      label: "TUE",
      title: "WALK",
      subtitle: "Active Recovery",
      tag: "RECOVERY",
      tagColor: "blue",
      duration: "30-40 min",
      focus: "Optional Zone 2 toward your 8-10k step floor. Or just rest — recovery IS the program now.",
      sections: [
        {
          name: "SESSION",
          exercises: [
            { name: "Incline Walk", sets: "30-40 min @ 10-12%", note: "Zone 2, fasted ideally", priority: true },
            { name: "Vacuums", sets: "3×30-45s", note: "Mid-walk or post" }
          ]
        }
      ]
    },
    wed: {
      label: "WED",
      title: "FULL BODY B",
      subtitle: "Heavy · Pull Focus",
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
            { name: "Walking Lunge", sets: "2×10 each", note: "Long stride, glute focus — maintain not grow" },
            { name: "Incline DB Curl", sets: "2×8-10", note: "Long head stretch" }
          ]
        }
      ]
    },
    thu: {
      label: "THU",
      title: "WALK",
      subtitle: "Active Recovery",
      tag: "RECOVERY",
      tagColor: "blue",
      duration: "30-40 min",
      focus: "Easy steps, sun, mobility. Keep it conversational — let Friday's session land fresh.",
      sections: [
        {
          name: "SESSION",
          exercises: [
            { name: "Outdoor Walk", sets: "30-40 min", note: "Easy pace, conversational", priority: true }
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
      title: "RUN",
      subtitle: "5km Conditioning",
      tag: "REFEED",
      tagColor: "orange",
      duration: "30-35 min",
      focus: "Cardio output + refeed. The one day carbs go up — leptin + thyroid reset before the next block.",
      sections: [
        {
          name: "SESSION",
          exercises: [
            { name: "5km Run", sets: "Steady pace", note: "Outdoor preferred — Bungan loop", priority: true }
          ]
        },
        {
          name: "REFEED PROTOCOL",
          exercises: [
            { name: "Carbs +150-200g today", sets: "Rice, potatoes, dates, honey", note: "Keeps leptin + thyroid up" }
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

export const tagColors = {
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  gray: { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/30' }
};
