import React, { useState, useEffect } from 'react';
import { Shuffle, RotateCcw, Eye, MoreHorizontal, Flame, Activity, Target, Zap, TrendingUp, Coffee } from 'lucide-react';
import { program, days, tagColors } from './program.js';

// --- Persistence -----------------------------------------------------------
// Browser localStorage replaces the (non-existent) window.storage API.
// Keying scheme is unchanged: `completed:${date}` where date is YYYY-MM-DD.
const storage = {
  get(key) {
    try {
      const value = localStorage.getItem(key);
      return value != null ? { value } : null;
    } catch (e) {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  },
  delete(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  },
};

export default function App() {
  const today = new Date().getDay();
  const todayKey = days[today === 0 ? 6 : today - 1];
  const [activeDay, setActiveDay] = useState(todayKey);
  const [completed, setCompleted] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const result = storage.get(`completed:${today}`);
      if (result?.value) setCompleted(JSON.parse(result.value));
    } catch (e) {}
    setLoaded(true);
  }, []);

  const toggleExercise = (key) => {
    const next = { ...completed, [key]: !completed[key] };
    setCompleted(next);
    const today = new Date().toISOString().split('T')[0];
    storage.set(`completed:${today}`, JSON.stringify(next));
  };

  const reset = () => {
    setCompleted({});
    const today = new Date().toISOString().split('T')[0];
    storage.delete(`completed:${today}`);
  };

  const day = program.days[activeDay];
  const totalExercises = day.sections.reduce((sum, s) => sum + s.exercises.length, 0);
  const completedCount = day.sections.reduce((sum, s) =>
    sum + s.exercises.filter((_, i) => completed[`${activeDay}-${s.name}-${i}`]).length, 0
  );
  const progress = totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0;
  const tc = tagColors[day.tagColor];

  return (
    <div className="min-h-screen bg-stone-100 p-3 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="text-2xl font-serif italic">Claude</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-stone-600">
            <Eye className="w-4 h-4" />
            <span>47</span>
          </div>
          <button className="p-2 bg-white rounded-lg border border-stone-200">
            <MoreHorizontal className="w-4 h-4" />
          </button>
          <button className="px-3 py-2 bg-black text-white rounded-lg flex items-center gap-1.5 text-sm">
            <Shuffle className="w-4 h-4" />
            Customize
          </button>
        </div>
      </div>

      {/* Main card */}
      <div className="bg-black rounded-3xl overflow-hidden">
        {/* Program title */}
        <div className="pt-6 pb-4 px-5 text-center border-b border-white/5">
          <div className="text-yellow-500 text-xl font-bold tracking-widest font-mono">
            {program.name}
          </div>
          <div className="text-stone-400 text-xs mt-1 font-mono uppercase tracking-wider">
            {program.subtitle}
          </div>
        </div>

        {/* Day tabs */}
        <div className="flex justify-between px-3 py-4 border-b border-white/5 overflow-x-auto">
          {days.map(d => {
            const isActive = d === activeDay;
            const isToday = d === todayKey;
            return (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`relative px-2 py-1 font-mono text-xs tracking-wider ${
                  isActive ? 'text-yellow-400' : 'text-stone-500'
                }`}
              >
                {isToday && !isActive && (
                  <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-400 rounded-full" />
                )}
                {isToday && isActive && (
                  <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-400 rounded-full" />
                )}
                {program.days[d].label}
                {isActive && <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-yellow-400" />}
              </button>
            );
          })}
          <button className="text-stone-500 px-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" strokeWidth="2"/>
              <path strokeLinecap="round" strokeWidth="2" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/>
            </svg>
          </button>
        </div>

        {/* Day header */}
        <div className="px-5 pt-5 pb-4">
          <div className="text-4xl font-bold text-white tracking-tight">
            {day.title}
          </div>
          <div className="text-yellow-500 text-sm mt-1">
            {day.subtitle}
          </div>

          <div className="flex items-center gap-2 mt-3">
            <span className={`px-2.5 py-1 text-[10px] font-mono tracking-widest ${tc.bg} ${tc.text} border ${tc.border} rounded`}>
              {day.tag}
            </span>
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest bg-white/5 text-stone-400 border border-white/10 rounded">
              {day.duration}
            </span>
          </div>

          {day.focus && (
            <div className="mt-3 text-xs text-stone-400 italic leading-relaxed">
              {day.focus}
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="px-1">
          {day.sections.map((section, sIdx) => (
            <div key={sIdx} className="mb-1">
              <div className="px-4 py-2 text-yellow-600 text-[10px] font-mono tracking-[0.2em]">
                {section.name}
              </div>
              {section.exercises.map((ex, eIdx) => {
                const key = `${activeDay}-${section.name}-${eIdx}`;
                const isDone = completed[key];
                return (
                  <button
                    key={eIdx}
                    onClick={() => toggleExercise(key)}
                    className={`w-full flex items-start gap-3 px-4 py-3.5 border-t border-white/5 text-left active:bg-white/5 transition-colors ${
                      isDone ? 'opacity-40' : ''
                    }`}
                  >
                    <div className={`mt-0.5 w-6 h-6 rounded-md border flex-shrink-0 flex items-center justify-center ${
                      isDone ? 'bg-yellow-500 border-yellow-500' : 'border-white/20'
                    }`}>
                      {isDone && (
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-white font-semibold flex items-center gap-2 ${isDone ? 'line-through' : ''}`}>
                        {ex.name}
                        {ex.priority && (
                          <Flame className="w-3.5 h-3.5 text-orange-500" />
                        )}
                      </div>
                      <div className="text-stone-500 text-xs font-mono mt-0.5">
                        {ex.sets}
                      </div>
                      {ex.note && (
                        <div className="text-yellow-600/70 text-xs italic mt-1">
                          {ex.note}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer progress */}
        {totalExercises > 0 && (
          <div className="flex items-center gap-3 px-4 py-4 border-t border-white/5">
            <span className="text-stone-400 text-sm font-mono whitespace-nowrap">
              {completedCount} / {totalExercises}
            </span>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <button
              onClick={reset}
              className="text-stone-400 text-sm px-3 py-1 border border-white/10 rounded-md flex items-center gap-1.5 active:bg-white/5"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Stats card */}
      <div className="bg-black rounded-3xl p-5 mt-3">
        <div className="text-yellow-500 text-[10px] font-mono tracking-[0.2em] mb-3">
          CUT PROTOCOL
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider mb-1">
              <Target className="w-3 h-3" />
              Target
            </div>
            <div className="text-white font-bold">74-75 kg</div>
            <div className="text-stone-500 text-xs">~14 weeks</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider mb-1">
              <TrendingUp className="w-3 h-3" />
              Rate
            </div>
            <div className="text-white font-bold">0.5 kg/wk</div>
            <div className="text-stone-500 text-xs">500 cal deficit</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider mb-1">
              <Zap className="w-3 h-3" />
              Protein
            </div>
            <div className="text-white font-bold">180g+</div>
            <div className="text-stone-500 text-xs">2.2g/kg — non-negotiable</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-wider mb-1">
              <Activity className="w-3 h-3" />
              Steps
            </div>
            <div className="text-white font-bold">8-10k</div>
            <div className="text-stone-500 text-xs">Daily floor</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-start gap-2 text-stone-400 text-xs">
            <Coffee className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-semibold">Reta protocol:</span> let appetite suppression work. Pre-workout 30g protein + black coffee. Intra: 5g creatine + electrolytes (sodium critical).
            </div>
          </div>
        </div>
      </div>

      {/* Volume comparison */}
      <div className="bg-black rounded-3xl p-5 mt-3">
        <div className="text-yellow-500 text-[10px] font-mono tracking-[0.2em] mb-3">
          WHY THIS WORKS
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="text-green-400 font-mono text-xs mt-1 whitespace-nowrap">3 DAYS</div>
            <div className="text-stone-300">
              <span className="text-white font-semibold">Less is more.</span> Down from 4 lifts + a cardio day to 3 full-body sessions, ~45 min each — about 2.5 hrs of lifting a week, total. Mon / Wed / Fri.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-yellow-400 font-mono text-xs mt-1">⅓</div>
            <div className="text-stone-300">
              <span className="text-white font-semibold">Maintenance ≈ a third of growth volume.</span> A 32-wk RCT held muscle AND strength on as little as 1/3 — even 1 set/wk — as long as the load stayed heavy. <span className="text-stone-500">(Bickel 2011)</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-orange-400 font-mono text-xs mt-1">3×</div>
            <div className="text-stone-300">
              <span className="text-white font-semibold">Side delts every session.</span> ~11 hard lateral sets/wk — your #1 priority. Frequency doesn't change size once volume's matched, so 3× just keeps them stimulated. <span className="text-stone-500">(Schoenfeld 2019)</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-red-400 font-mono text-xs mt-1">LOAD</div>
            <div className="text-stone-300">
              <span className="text-white font-semibold">Intensity is the one thing you can't cut.</span> Every working set is RPT or near failure (~75-85%+ 1RM). Drop sets, never drop the weight — that's what makes low volume work.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-blue-400 font-mono text-xs mt-1">STR</div>
            <div className="text-stone-300">
              <span className="text-white font-semibold">Your numbers barely move.</span> 1RM is far more durable than size — strength holds for months even at zero volume. Maintenance is easy mode for strength.
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 text-stone-500 text-[11px] italic leading-relaxed">
          Fine print: the maintenance + minimum-dose trials were run in energy balance on previously-untrained lifters — the deficit numbers are a sound extrapolation, not a measured guarantee. The insurance policy is protein (2.2g/kg) + brutal intensity.
        </div>
      </div>

      <div className="text-center text-stone-500 text-xs mt-4 mb-2 font-mono">
        v6.0 · 3-day minimalist cut · {totalExercises} exercises today
      </div>
    </div>
  );
}
