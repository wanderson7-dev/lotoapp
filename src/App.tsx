import { useState } from 'react';
import { Clover, Dices, X } from 'lucide-react';


interface Lottery {
  id: string;
  name: string;
  prize: string;
  color: string;
  // Modal details
  modalTitle?: string;
  rules?: string;
  drawDays?: string;
  notes?: string;
}

const lotteries: Lottery[] = [
  {
    id: 'lotofacil',
    name: 'LOTOFÁCIL',
    prize: 'R$ 1.800.000,00',
    color: '#bc4287',
    modalTitle: 'Lotofácil',
    rules: 'escolher de 15 a 20 números entre 25.',
    drawDays: 'todos os dias da semana, de segunda a sábado, às 20h.',
    notes: 'é a loteria mais frequente, junto com a Quina.'
  },
  {
    id: 'megasena',
    name: 'MEGA-SENA',
    prize: 'R$ 38.000.000,00',
    color: '#2e7d32',
    modalTitle: 'Mega-Sena',
    rules: 'escolher de 6 a 15 números entre 60.',
    drawDays: 'quartas e sábados, às 20h (horário de Brasília).',
    notes: 'em datas especiais (como a Mega da Virada), pode haver sorteios adicionais.'
  },
  {
    id: 'lotomania',
    name: 'LOTOMANIA',
    prize: 'R$ 1.600.000,00',
    color: '#f57c00',
    modalTitle: 'Lotomania',
    rules: 'marcar 50 números entre 100.',
    drawDays: 'segundas, quartas e sextas, às 20h.',
    notes: '' // No notes provided in prompt
  },
  {
    id: 'duplasena',
    name: 'DUPLA SENA',
    prize: 'R$ 2.400.000,00',
    color: '#c62828',
    modalTitle: 'Dupla Sena',
    rules: 'Escolher de 6 a 15 números entre 50. A aposta participa de dois sorteios no mesmo concurso.',
    drawDays: 'terças, quintas e sábados, às 20h (horário de Brasília).',
    notes: 'Em datas especiais ocorre a Dupla de Páscoa, com prêmio acumulado e concurso único.'
  },
  {
    id: 'diadesorte',
    name: 'DIA DE SORTE',
    prize: 'R$ 650.000,00',
    color: '#d4a017',
    modalTitle: 'Dia de Sorte',
    rules: 'escolher de 7 a 15 números entre 31, além de 1 mês da sorte (de janeiro a dezembro).',
    drawDays: 'terças, quintas e sábados, às 20h (horário de Brasília).',
    notes: 'paga prêmios para 4 a 7 acertos, além do acerto do mês sorteado.'
  },
];

function App() {
  const [selectedLottery, setSelectedLottery] = useState<Lottery | null>(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <div className="logo-icon">
            <div className="cross-bar horizontal"></div>
            <div className="cross-bar vertical"></div>
          </div>
          <span className="logo-text">LOTOAPP</span>
        </div>
      </header>

      <main className="main-content">
        <h1 className="page-title">
          Qual loteria você<br />deseja prever?
        </h1>

        <div className="lottery-list-container">
          {lotteries.map((loto) => (
            <div key={loto.id} className="lottery-item">
              <button
                className="lottery-button"
                style={{ backgroundColor: loto.color }}
                onClick={() => setSelectedLottery(loto)}
              >
                <div className="button-icon">
                  <Clover size={28} fill="currentColor" strokeWidth={2.5} />
                </div>
                <span className="button-text">{loto.name}</span>
              </button>
              <div className="prize-text">{loto.prize}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Popup Modal */}
      {selectedLottery && (
        <div className="modal-overlay" onClick={() => setSelectedLottery(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedLottery(null)}>
              <X size={20} color="#666" />
            </button>

            <h2 className="modal-title">{selectedLottery.modalTitle}</h2>

            <div className="modal-subtitle-row">
              <Dices size={20} className="modal-icon-small" />
              <span>{selectedLottery.modalTitle}</span>
            </div>

            <div className="modal-body">
              <p>
                <strong>Como jogar:</strong> {selectedLottery.rules}
              </p>
              <p>
                <strong>Dias de sorteio:</strong> {selectedLottery.drawDays}
              </p>
              {selectedLottery.notes && (
                <p>
                  <strong>Obs:</strong> {selectedLottery.notes}
                </p>
              )}
            </div>

            <button className="modal-action-btn" onClick={() => setSelectedLottery(null)}>
              CONTINUAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

