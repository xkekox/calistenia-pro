// ============================================================
// BANCO DE DADOS - CALISTENIA PRO 21 DIAS
// Auto-gerado: 21 dias x 4 tipos x variações por restrição
// Total: ~210 exercícios adaptados
// ============================================================
// avoid: 'none'   = exercício normal (sem restrição)
// avoid: 'ombro'  = versão adaptada para ombros
// avoid: 'joelho' = versão adaptada para joelhos
// avoid: 'lombar' = versão adaptada para lombar
// ============================================================

(function () {
    const tipos = ['push', 'legs', 'core', 'cardio'];

    const nomesBase = {
        push: ['Flexao de Braco', 'Mergulho em Cadeira', 'Flexao Diamante', 'Pike Pushup'],
        legs: ['Agachamento Livre', 'Afundo Frontal', 'Agachamento Sumo', 'Elevacao de Panturrilha'],
        core: ['Prancha Frontal', 'Abdominal Supra', 'Elevacao de Pernas', 'Russian Twist'],
        cardio: ['Polichinelo', 'Burpee Completo', 'Mountain Climber', 'Corrida Estacionaria']
    };

    const nomesAdapt = {
        ombro: { push: 'Flexao na Parede (Protecao Ombro)', cardio: 'Polichinelo Bracos Baixos (Protecao Ombro)' },
        joelho: { legs: 'Isometria de Pernas (Protecao Joelho)', cardio: 'Passada Lateral (Protecao Joelho)' },
        lombar: { core: 'Abdominal com Apoio (Protecao Lombar)', legs: 'Agachamento Parcial (Protecao Lombar)' }
    };

    const descNormal = {
        push: '3 series de 12-15 reps. Maos na largura dos ombros, core contraido.',
        legs: '3 series de 15-20 reps. Peso nos calcanhares, joelhos alinhados.',
        core: '3 series de 45 segundos. Coluna neutra, respiracao controlada.',
        cardio: '3 series de 45 segundos. Mantenha ritmo e postura ereta.'
    };

    const descAdapt = {
        ombro: {
            push: 'Variacao sem impacto no ombro — foco no triceps e peitoral.',
            cardio: 'Movimento com bracos abaixo do ombro — zero stress articular.'
        },
        joelho: {
            legs: 'Isometria controlada — zero impacto na articulacao do joelho.',
            cardio: 'Sem salto — passadas lentas e controladas para proteger o joelho.'
        },
        lombar: {
            core: 'Coluna totalmente apoiada no chao — sem arqueamento lombar.',
            legs: 'Amplitude reduzida — controle total para proteger a lombar.'
        }
    };

    // IDs de video YouTube. Substitua pelos seus videos reais.
    const videosNormal = {
        push: ['IODxDxX7oi4', 'IODxDxX7oi4', 'IODxDxX7oi4', 'IODxDxX7oi4'],
        legs: ['aclHkVaku9U', 'QOVaHwm-Q6U', 'aclHkVaku9U', 'aclHkVaku9U'],
        core: ['pSHjTRCQxIw', 'Xyd_fa5zoOG', 'pSHjTRCQxIw', 'pSHjTRCQxIw'],
        cardio: ['nGaXj3kkmrU', 'dZgVxmf6jkA', 'nmwgirgXLYM', 'nGaXj3kkmrU']
    };
    const videosAdapt = {
        ombro: { push: 'a6YHbMCHp40', cardio: 'vV77m6N-XyI' },
        joelho: { legs: 'y-wV4Venusw', cardio: 'vV77m6N-XyI' },
        lombar: { core: 'unI6AIn93YI', legs: 'wPM8icPu6H8' }
    };

    var db = [];

    for (var dia = 1; dia <= 21; dia++) {
        tipos.forEach(function (tipo) {
            var idx = (dia - 1) % 4;
            var idBase = 'd' + dia + '_' + tipo;

            // --- EXERCICIO NORMAL ---
            db.push({
                id: idBase + '_normal',
                day: dia,
                type: tipo,
                avoid: 'none',
                name: nomesBase[tipo][idx] + ' - Dia ' + dia,
                desc: descNormal[tipo],
                video_url: videosNormal[tipo][idx] ? 'https://www.youtube.com/watch?v=' + videosNormal[tipo][idx] : ''
            });

            // --- VARIACAO OMBRO ---
            if (nomesAdapt.ombro[tipo]) {
                db.push({
                    id: idBase + '_ombro',
                    day: dia,
                    type: tipo,
                    avoid: 'ombro',
                    name: nomesAdapt.ombro[tipo] + ' - Dia ' + dia,
                    desc: descAdapt.ombro[tipo],
                    video_url: videosAdapt.ombro[tipo] ? 'https://www.youtube.com/watch?v=' + videosAdapt.ombro[tipo] : ''
                });
            }

            // --- VARIACAO JOELHO ---
            if (nomesAdapt.joelho[tipo]) {
                db.push({
                    id: idBase + '_joelho',
                    day: dia,
                    type: tipo,
                    avoid: 'joelho',
                    name: nomesAdapt.joelho[tipo] + ' - Dia ' + dia,
                    desc: descAdapt.joelho[tipo],
                    video_url: videosAdapt.joelho[tipo] ? 'https://www.youtube.com/watch?v=' + videosAdapt.joelho[tipo] : ''
                });
            }

            // --- VARIACAO LOMBAR ---
            if (nomesAdapt.lombar[tipo]) {
                db.push({
                    id: idBase + '_lombar',
                    day: dia,
                    type: tipo,
                    avoid: 'lombar',
                    name: nomesAdapt.lombar[tipo] + ' - Dia ' + dia,
                    desc: descAdapt.lombar[tipo],
                    video_url: videosAdapt.lombar[tipo] ? 'https://www.youtube.com/watch?v=' + videosAdapt.lombar[tipo] : ''
                });
            }
        });
    }

    window.exerciseDB = db;
    console.log('[Calistenia Pro] Banco carregado: ' + db.length + ' exercicios.');
})();

// ============================================================
// SELECAO DE TREINO POR DIA E RESTRICAO
// Logica: busca variacao especifica para a restricao.
// Se nao existir, usa o exercicio normal.
// ============================================================
function getWorkoutForDay(day, restrictions) {
    // Aceita string ou array de restricoes
    if (!restrictions) restrictions = [];
    if (!Array.isArray(restrictions)) restrictions = [restrictions];

    var tipos = ['push', 'legs', 'core', 'cardio'];
    return tipos.map(function (tipo) {
        var specific = null;
        var normal = null;

        for (var i = 0; i < window.exerciseDB.length; i++) {
            var e = window.exerciseDB[i];
            if (e.day === day && e.type === tipo) {
                // Busca variacao adaptada para qualquer restricao do usuario
                if (restrictions.indexOf(e.avoid) >= 0) {
                    specific = e;
                }
                if (e.avoid === 'none') normal = e;
            }
        }

        // Prioridade: variacao adaptada > normal
        return specific || normal;
    });
}
