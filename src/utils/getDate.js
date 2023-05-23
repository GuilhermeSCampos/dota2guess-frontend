export const getDate = () => {
    // Criar um objeto de data atual
    const dataAtual = new Date();
    // Obter o deslocamento de fuso horário em minutos para o fuso horário de Brasília (UTC-3)
    const deslocamentoFusoHorario = 180; // UTC-3 é representado como +180 minutos
    // Calcular o deslocamento em milissegundos
    const deslocamentoMilissegundos = deslocamentoFusoHorario * 60 * 1000;
    // Obter a data atual no fuso horário de Brasília
    const dataFusoHorario = new Date(dataAtual.getTime() + deslocamentoMilissegundos);
    // Obter o dia, mês e ano no fuso horário de Brasília
    const dia = dataFusoHorario.getUTCDate();
    const mes = dataFusoHorario.getUTCMonth() + 1; // Os meses são indexados a partir de 0, portanto, adicionamos 1
    const ano = dataFusoHorario.getUTCFullYear();

    // Formatar a data como "dia-mês-ano"
    const dataFormatada = dia.toString() + mes.toString() + ano.toString();

    return dataFormatada;
}

export default getDate;
