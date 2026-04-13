'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const questions = [
  {
    question: {
      en: "Which city does Nabil hate the most in Morocco?",
      fr: "Quelle ville Nabil déteste le plus au Maroc ?"
    },
    options: ["Marrakech", "Casablanca", "Rabat", "Tangier", "Fes"],
    answer: 1
  },
  {
    question: {
      en: "What is the thing that distinguishes Nabil's father, that he said one day?",
      fr: "Quelle est la chose qui distingue le père de Nabil, qu'il avait dit un jour ?"
    },
    options: ["Driiiiiiiink!", "Eaaaaaat!", "WakeUuuuuuup!", "Ruuuuuuun!", "Sleeeeeep!"],
    answer: 1
  },
  {
    question: {
      en: "How does Nabil pronounce the number 20?",
      fr: "Comment Nabil prononce le chiffre 20 ?"
    },
    options: ["Twenty", "Twentiiiiine", "Twennny", "Twenteh"],
    answer: 1
  }
];

export function GateEntry({ children, locale }: { children: React.ReactNode; locale: string }) {
  const [passed, setPassed] = useState<boolean | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [failed, setFailed] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const lang = locale === 'fr' ? 'fr' : 'en';

  useEffect(() => {
    try {
      if (localStorage.getItem('swefor_gate_passed') === 'true') {
        setPassed(true);
      } else {
        setPassed(false);
      }
    } catch {
      setPassed(false);
    }
  }, []);

  const handleAnswer = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);

    if (idx === questions[currentQ].answer) {
      setTimeout(() => {
        if (currentQ < questions.length - 1) {
          setCurrentQ(prev => prev + 1);
          setSelected(null);
          setShowResult(false);
        } else {
          setDoorsOpen(true);
          try { localStorage.setItem('swefor_gate_passed', 'true'); } catch {}
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setPassed(true), 800);
          }, 1500);
        }
      }, 1200);
    } else {
      setTimeout(() => setFailed(true), 800);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setFailed(false);
    setDoorsOpen(false);
    setFadeOut(false);
  };

  if (passed === null) return null;
  if (passed) return <>{children}</>;

  const q = questions[currentQ];

  return (
    <div className={`fixed inset-0 z-[9999] transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-800 to-gray-700 border-r border-blue-500/30 transition-transform duration-[1500ms] ease-in-out ${doorsOpen ? '-translate-x-full' : 'translate-x-0'}`}
          style={{ boxShadow: 'inset -20px 0 60px rgba(0,0,0,0.5)' }}
        >
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-3 h-20 rounded-full bg-blue-400/40" />
        </div>
        <div
          className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-gray-700 border-l border-blue-500/30 transition-transform duration-[1500ms] ease-in-out ${doorsOpen ? 'translate-x-full' : 'translate-x-0'}`}
          style={{ boxShadow: 'inset 20px 0 60px rgba(0,0,0,0.5)' }}
        >
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-3 h-20 rounded-full bg-blue-400/40" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="mb-8 animate-pulse">
          <Image src="/logo.png" alt="SweFOR" width={160} height={70} className="object-contain drop-shadow-2xl" priority />
        </div>

        {!failed ? (
          <div className="w-full max-w-lg">
            <div className="flex gap-2 justify-center mb-6">
              {questions.map((_, i) => (
                <div key={i} className={`h-2 w-12 rounded-full transition-colors duration-500 ${i < currentQ ? 'bg-green-500' : i === currentQ ? 'bg-blue-400' : 'bg-gray-600'}`} />
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              <p className="text-sm text-blue-300 mb-2 font-medium">
                {lang === 'fr' ? `Question ${currentQ + 1} sur ${questions.length}` : `Question ${currentQ + 1} of ${questions.length}`}
              </p>
              <h2 className="text-xl font-bold text-white mb-6 leading-relaxed">{q.question[lang]}</h2>

              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  let cls = 'w-full text-left px-5 py-3.5 rounded-xl font-medium transition-all duration-300 border ';
                  if (showResult && i === q.answer) cls += 'bg-green-500/20 border-green-400 text-green-300 scale-105';
                  else if (showResult && i === selected && i !== q.answer) cls += 'bg-red-500/20 border-red-400 text-red-300';
                  else if (selected === null) cls += 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/15 hover:border-blue-400/50 hover:scale-[1.02] cursor-pointer';
                  else cls += 'bg-white/5 border-white/10 text-gray-400';
                  return (
                    <button key={i} onClick={() => handleAnswer(i)} disabled={showResult} className={cls}>
                      <span className="inline-block w-7 h-7 rounded-full bg-white/10 text-center leading-7 mr-3 text-sm">{String.fromCharCode(65 + i)}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-6">
              {lang === 'fr' ? "Prouvez que vous connaissez Nabil pour entrer..." : "Prove you know Nabil to enter..."}
            </p>
          </div>
        ) : (
          <div className="w-full max-w-lg bg-red-500/10 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 shadow-2xl text-center">
            <div className="text-6xl mb-4">🚫</div>
            <h2 className="text-2xl font-bold text-red-300 mb-4">
              {lang === 'fr' ? "Mauvaise réponse !" : "Wrong answer!"}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {lang === 'fr' ? "On dirait que vous ne connaissez pas assez bien Nabil... Contactez-le pour obtenir les bonnes réponses !" : "Looks like you don’t know Nabil well enough... Contact him to get the right answers!"}
            </p>
            <div className="space-y-3">
              <a href="mailto:nabil.imdh@gmail.com" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
                {lang === 'fr' ? "Contacter Nabil" : "Contact Nabil"}
              </a>
              <button onClick={resetQuiz} className="block w-full bg-white/10 hover:bg-white/20 text-gray-200 font-medium py-3 rounded-xl transition-colors border border-white/10">
                {lang === 'fr' ? "Réessayer" : "Try again"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
