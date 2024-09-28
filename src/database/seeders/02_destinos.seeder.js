const { QueryInterface, Sequelize } = require("sequelize");
const Destino = require("../../models/Destino");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Destino.bulkCreate([
            {
                usuario_id: "1",             
                nome_do_destino: "Praia da Joaquina",
                descricao: `A Praia da Joaquina ou 'Joaca', como é apelidada pelos moradores, é a praia 
                das 'altas' ondas, geralmente muito frias. No verão, as areias da Joaca se tornam palco 
                de eventos, muitos deles esportivos. O aglomerado de rochas, situado à esquerda, chama a 
                atenção pelo tamanho das pedras e beleza. Além da praia e do surfe, as dunas também são 
                famosas, consideradas as melhores do sul do país. Lá se criou o sandboard, uma espécie 
                de surfe, mas na areia. Hoje é a atração principal dos que não se arriscam a pegar ondas 
                no mar.`,
                localidade: "Lagoa da Conceição, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.6282456", "lon": "-48.4478486"}`
            },
            {
                usuario_id: "1",             
                nome_do_destino: "Fundação Projeto TAMAR ",
                descricao: `A Fundação Projeto TAMAR trabalha na conscientização e educação ambiental de 
                visitantes, comunidades e pescadores. O Centro de Visitantes de Florianópolis conta com 
                infraestrutura que inclui cinco tanques de observação com exemplares de quatro das cinco 
                espécies de tartarugas marinhas que desovam no Brasil, sala de vídeo e exposições, espaço 
                infantil e loja para venda de produtos TAMAR.`,
                localidade: "Barra da Lagoa, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.5721853", "lon": "-48.427658"}`
            },
            {
                usuario_id: "2",             
                nome_do_destino: "Praia Daniela",
                descricao: `Praia da Daniela é uma mini-península - uma ponta de areia com vegetação - 
                que se estende para o mar, avançando sobre as águas. Uma comunidade onde residências de 
                luxo se misturam com casas tradicionais e que conserva a tranquilidade de quem procura 
                ficar longe da excessiva movimentação turística. É banhada pelas águas calmas e mornas 
                da baía norte, perfeitas para quem frequenta a praia com crianças e idosos.`,
                localidade: "Daniela, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.447123", "lon": "-48.5310831"}`
            },
            {
                usuario_id: "2",             
                nome_do_destino: "Morro da Coroa",
                descricao: `É um mirante natural que é acessado apenas por trilha ou barco, esse paraíso 
                é realmente um dos pontos mais belos do litoral catarinense e brasileiro. As rochas 
                dispostas no alto do morro são responsáveis pelo seu nome, já que estão dispostas de uma 
                maneira que lembra as pontas de uma coroa. A vista do Morro da Corona até a praia da 
                Lagoinha é impressionante.`,
                localidade: "Parque Municipal da Lagoinha do Leste - Pântano do Sul, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.7821894", "lon": "-48.4885886"}`
            }
        ])
    },

    down: async (QueryInterface, Sequelize) => {
        await Destino.destroy({
            usuario_id: [
                "1", 
                "2"
            ] 
        })
    }
}