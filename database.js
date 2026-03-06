const exerciseDB = [
  { id: 'd1_1', day: 1, type: 'push', name: "Flexao de Braco (Push-up)", desc: "3 series de 12 repeticoes. Maos na largura dos ombros.", avoid: ['ombro'] },
  { id: 'd1_1_safe', day: 1, type: 'push', name: "Flexao na Parede (Wall Push-up)", desc: "3 series de 15 repeticoes. Alternativa segura para proteger articulacoes.", avoid: [] },
  { id: 'd1_2', day: 1, type: 'legs', name: "Agachamento Livre (Squat)", desc: "3 series de 20 repeticoes. Desca com o peso nos calcanhares.", avoid: ['joelho'] },
  { id: 'd1_2_safe', day: 1, type: 'legs', name: "Agachamento Isometrico (Wall Sit)", desc: "3 series de 30 segundos. Encoste na parede e segure.", avoid: [] },
  { id: 'd1_3', day: 1, type: 'core', name: "Prancha Frontal (Plank)", desc: "3 series de 45 segundos. Mantenha o corpo reto.", avoid: ['lombar'] },
  { id: 'd1_3_safe', day: 1, type: 'core', name: "Prancha Alta (High Plank)", desc: "3 series de 30 segundos. Bracos esticados para menor pressao.", avoid: [] },
  { id: 'd1_4', day: 1, type: 'cardio', name: "Polichinelos (Jumping Jacks)", desc: "3 series de 50 repeticoes. Mantenha o ritmo constante.", avoid: ['joelho', 'ombro'] },
  { id: 'd1_4_safe', day: 1, type: 'cardio', name: "Passada Lateral com Bracos", desc: "3 series de 20 repeticoes. Sem impacto nos joelhos.", avoid: [] },
  ];

function getWorkoutForDay(day, restriction) {
      const types = ['push', 'legs', 'core', 'cardio'];
      let dailyWorkout = [];
      types.forEach(type => {
                let options = exerciseDB.filter(e => e.type === type && (e.day === (day % 2 === 0 ? 2 : 1)));
                let safeOption = options.find(e => !e.avoid.includes(restriction));
                if (!safeOption) {
                              safeOption = exerciseDB.find(e => e.type === type && (!e.avoid || e.avoid.length === 0));
                }
                dailyWorkout.push(safeOption);
      });
      return dailyWorkout;
}
