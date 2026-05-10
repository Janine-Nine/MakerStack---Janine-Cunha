"use client";

import { useState } from "react";

const perguntas = [

  {
    id: 1,
    pergunta: "Você prefere trabalhar em equipe?",
    opcoes: [
      "Sim",
      "Não",
      "Depende do projeto"
    ]
  },

  {
    id: 2,
    pergunta: "Como você lida com pressão?",
    opcoes: [
      "Muito bem",
      "Moderadamente",
      "Preciso melhorar"
    ]
  },

  {
    id: 3,
    pergunta: "Você gosta de liderança?",
    opcoes: [
      "Sim",
      "Não",
      "Às vezes"
    ]
  },

  {
    id: 4,
    pergunta: "Qual perfil combina mais com você?",
    opcoes: [
      "Analítico",
      "Criativo",
      "Executor"
    ]
  }

];

export default function StepperTest() {

  const [step, setStep] =
    useState(0);

  const [respostas, setRespostas] =
    useState<string[]>([]);

  const perguntaAtual =
    perguntas[step];

  function responder(resposta: string) {

    const novasRespostas =
      [...respostas];

    novasRespostas[step] = resposta;

    setRespostas(novasRespostas);

    if (step < perguntas.length - 1) {

      setStep(step + 1);

    }

  }

  function voltar() {

    if (step > 0) {
      setStep(step - 1);
    }

  }

  const progresso =
    ((step + 1) / perguntas.length) * 100;

  return (

    <div className="stepper-container">

      <div className="stepper-header">

        <h1>
          Teste Psicométrico
        </h1>

        <p>
          Etapa {step + 1} de {perguntas.length}
        </p>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${progresso}%`
          }}
        />

      </div>

      <div className="question-card">

        <h2>
          {perguntaAtual.pergunta}
        </h2>

        <div className="options">

          {perguntaAtual.opcoes.map(
            (opcao, index) => (

              <button
                key={index}
                onClick={() => responder(opcao)}
                className="option-btn"
              >
                {opcao}
              </button>

            )
          )}

        </div>

      </div>

      <div className="stepper-actions">

        <button
          onClick={voltar}
          disabled={step === 0}
          className="back-btn"
        >
          Voltar
        </button>

      </div>

      {step === perguntas.length - 1 &&
        respostas.length === perguntas.length && (

        <div className="result-box">

          <h3>
            Teste Finalizado ✅
          </h3>

          <p>
            Suas respostas foram enviadas
            para análise da IA.
          </p>

        </div>

      )}

    </div>

  );
}