"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import DiscTest from "./disc";
import MBTITest from "./mbti";
import EnneagramTest from "./enneagram";

type Step = "disc" | "mbti" | "enneagram" | "done";

export default function TestsPage() {
  const [step, setStep] = useState<Step>("disc");
  const [answers, setAnswers] = useState<any>({
    disc: [],
    mbti: [],
    enneagram: []
  });

  function next() {
    if (step === "disc") setStep("mbti");
    else if (step === "mbti") setStep("enneagram");
    else setStep("done");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">
        Testes de Personalidade
      </h1>

      {step === "disc" && (
        <DiscTest answers={answers} setAnswers={setAnswers} />
      )}

      {step === "mbti" && (
        <MBTITest answers={answers} setAnswers={setAnswers} />
      )}

      {step === "enneagram" && (
        <EnneagramTest answers={answers} setAnswers={setAnswers} />
      )}

      {step !== "done" && (
        <Button className="mt-6" onClick={next}>
          Próximo
        </Button>
      )}

      {step === "done" && (
        <pre>{JSON.stringify(answers, null, 2)}</pre>
      )}
    </div>
  );
}