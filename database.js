// BANCO DE DADOS DE EXERCÍCIOS - CALISTENIA PRO 21 DIAS
// Estrutura: Nome, Descrição, Tipo, Tags de Perigo (quem NÃO pode fazer), Video (YouTube URL)

const exerciseDB = [
    // --- DIA 1 ---
    { id: 'd1_1', day: 1, type: 'push', name: "Flexão de Braço (Push-up)", desc: "3 séries de 12 repetições. Mãos na largura dos ombros.", avoid: ['ombro'], video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
    { id: 'd1_1_safe', day: 1, type: 'push', name: "Flexão na Parede (Wall Push-up)", desc: "3 séries de 15 repetições. Alternativa segura para proteger articulações.", avoid: [], video_url: "https://www.youtube.com/watch?v=a6YHbMCHp40" },

    { id: 'd1_2', day: 1, type: 'legs', name: "Agachamento Livre (Squat)", desc: "3 séries de 20 repetições. Desça com o peso nos calcanhares.", avoid: ['joelho'], video_url: "https://www.youtube.com/watch?v=aclHkVaku9U" },
    { id: 'd1_2_safe', day: 1, type: 'legs', name: "Agachamento Isométrico (Wall Sit)", desc: "3 séries de 30 segundos. Encoste na parede e segure.", avoid: [], video_url: "https://www.youtube.com/watch?v=y-wV4Venusw" },

    { id: 'd1_3', day: 1, type: 'core', name: "Prancha Frontal (Plank)", desc: "3 séries de 45 segundos. Mantenha o corpo reto.", avoid: ['lombar'], video_url: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
    { id: 'd1_3_safe', day: 1, type: 'core', name: "Prancha Alta (High Plank)", desc: "3 séries de 30 segundos. Braços esticados para menor pressão.", avoid: [], video_url: "https://www.youtube.com/watch?v=unI6AIn93YI" },

    { id: 'd1_4', day: 1, type: 'cardio', name: "Polichinelos (Jumping Jacks)", desc: "3 séries de 50 repetições. Mantenha o ritmo constante.", avoid: ['joelho', 'ombro'], video_url: "https://www.youtube.com/watch?v=nGaXj3kkmrU" },
    { id: 'd1_4_safe', day: 1, type: 'cardio', name: "Passada Lateral com Braços", desc: "3 séries de 20 repetições. Sem impacto nos joelhos.", avoid: [], video_url: "https://www.youtube.com/watch?v=vV77m6N-XyI" },

    // --- DIA 2 ---
    { id: 'd2_1', day: 2, type: 'push', name: "Flexão Diamante", desc: "3 séries de 10 repetições. Mãos juntas em formato de diamante.", avoid: ['ombro'], video_url: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
    { id: 'd2_1_rehab', day: 2, type: 'push', name: "Extensão de Tríceps na Parede", desc: "3 séries de 12 repetições. Foco total no tríceps.", avoid: [], video_url: "https://www.youtube.com/watch?v=a6YHbMCHp40" },

    { id: 'd2_2', day: 2, type: 'legs', name: "Afundo (Lunges)", desc: "3 séries de 12 repetições cada perna.", avoid: ['joelho'], video_url: "https://www.youtube.com/watch?v=QOVaHwm-Q6U" },
    { id: 'd2_2_safe', day: 2, type: 'legs', name: "Elevação Pélvica (Glute Bridge)", desc: "3 séries de 15 repetições. Foco em glúteos.", avoid: [], video_url: "https://www.youtube.com/watch?v=wPM8icPu6H8" },

    { id: 'd2_3', day: 2, type: 'core', name: "Mountain Climbers", desc: "3 séries de 30 segundos. Joelhos ao peito.", avoid: ['lombar', 'ombro'], video_url: "https://www.youtube.com/watch?v=nmwgirgXLYM" },
    { id: 'd2_3_safe', day: 2, type: 'core', name: "Abdominal Supra Curto", desc: "3 séries de 20 repetições. Controle total.", avoid: [], video_url: "https://www.youtube.com/watch?v=Xyd_fa5zoOG" },

    { id: 'd2_4', day: 2, type: 'cardio', name: "Burpees", desc: "3 séries de 10 repetições. Movimento explosivo.", avoid: ['joelho', 'ombro', 'lombar'], video_url: "https://www.youtube.com/watch?v=dZgVxmf6jkA" },
    { id: 'd2_4_safe', day: 2, type: 'cardio', name: "Burpee Adaptado (Sem Salto)", desc: "3 séries de 10 repetições. Sem impacto.", avoid: [], video_url: "https://www.youtube.com/watch?v=7uV8-w05_2Q" },
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
