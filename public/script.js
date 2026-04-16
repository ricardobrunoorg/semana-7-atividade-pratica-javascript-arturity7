// =============================================
// Simulador Simples de Orçamento Pessoal
// =============================================

// ── 1. DADOS INICIAIS ──────────────────────

// Nome do usuário
const nome = prompt("Qual é o seu nome?");

// Renda mensal 
let rendaInput;
do {
  rendaInput = Number(prompt("Qual é a sua renda mensal? (R$)"));
} while (isNaN(rendaInput) || rendaInput === null);
const renda = rendaInput;

// Quantidade de despesas (entre 1 e 5)
let qtdInput;
do {
  qtdInput = Number(prompt("Quantas despesas você vai informar? (1 a 5)"));
} while (isNaN(qtdInput) || qtdInput === null);

// Aplica o limite: mínimo 1, máximo 5
const quantidade = qtdInput < 1 ? 1 : qtdInput > 5 ? 5 : qtdInput;

// ── 2 & 3. LANÇAMENTO DE DESPESAS COM for ──

let totalDespesas = 0;

for (let i = 1; i <= quantidade; i++) {
  let despesaInput;

  // Validação com while para cada despesa
  do {
    despesaInput = Number(prompt(`Despesa ${i}: qual o valor? (R$)`));
  } while (isNaN(despesaInput) || despesaInput === null);

  totalDespesas += despesaInput;
}

// ── 4. ANÁLISE COM if / else ───────────────

const sobra = renda - totalDespesas;
let mensagem;

if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.30) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

// ── 5. SAÍDA FINAL ─────────────────────────

const resultado =
  `===== RESUMO DO ORÇAMENTO =====\n` +
  `Nome:              ${nome}\n` +
  `Renda:             R$ ${renda.toFixed(2)}\n` +
  `Total de despesas: R$ ${totalDespesas.toFixed(2)}\n` +
  `Sobra:             R$ ${sobra.toFixed(2)}\n` +
  `Situação:          ${mensagem}`;

// Exibe no alert
alert(resultado);

// Exibe no console
console.log(resultado);