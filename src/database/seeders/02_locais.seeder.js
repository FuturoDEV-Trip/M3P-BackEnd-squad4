const { QueryInterface, Sequelize } = require("sequelize");
const Local = require("../../models/Local");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Local.bulkCreate([
            {
                usuario_id: "1",             
                nome: "Praia da Joaquina",
                descricao: `A Praia da Joaquina ou 'Joaca', como é apelidada pelos moradores, é a praia das 'altas' ondas, geralmente muito frias. No verão, as areias da Joaca se tornam palco de eventos, muitos deles esportivos. O aglomerado de rochas, situado à esquerda, chama a  atenção pelo tamanho das pedras e beleza. Além da praia e do surfe, as dunas também são famosas, consideradas as melhores do sul do país. Lá se criou o sandboard, uma espécie de surfe, mas na areia. Hoje é a atração principal dos que não se arriscam a pegar ondas no mar.`,
                localidade: "Lagoa da Conceição, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.6282456", "lon": "-48.4478486"}`
            },
            {
                usuario_id: "1",             
                nome: "Fundação Projeto TAMAR ",
                descricao: `A Fundação Projeto TAMAR trabalha na conscientização e educação ambiental de visitantes, comunidades e pescadores. O Centro de Visitantes de Florianópolis conta com infraestrutura que inclui cinco tanques de observação com exemplares de quatro das cinco espécies de tartarugas marinhas que desovam no Brasil, sala de vídeo e exposições, espaço infantil e loja para venda de produtos TAMAR.`,
                localidade: "Barra da Lagoa, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.5721853", "lon": "-48.427658"}`
            },
            {
                usuario_id: "2",             
                nome: "Praia Daniela",
                descricao: `Praia da Daniela é uma mini-península - uma ponta de areia com vegetação - que se estende para o mar, avançando sobre as águas. Uma comunidade onde residências de luxo se misturam com casas tradicionais e que conserva a tranquilidade de quem procura ficar longe da excessiva movimentação turística. É banhada pelas águas calmas e mornas da baía norte, perfeitas para quem frequenta a praia com crianças e idosos.`,
                localidade: "Daniela, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.447123", "lon": "-48.5310831"}`
            },
            {
                usuario_id: "2",             
                nome: "Morro da Coroa",
                descricao: `É um mirante natural que é acessado apenas por trilha ou barco, esse paraíso é realmente um dos pontos mais belos do litoral catarinense e brasileiro. As rochas dispostas no alto do morro são responsáveis pelo seu nome, já que estão dispostas de uma maneira que lembra as pontas de uma coroa. A vista do Morro da Corona até a praia da Lagoinha é impressionante.`,
                localidade: "Parque Municipal da Lagoinha do Leste - Pântano do Sul, Florianópolis - SC",
                cep: "88062426",
                coordenadas_geograficas: `{"lat": "-27.7821894", "lon": "-48.4885886"}`
            },
            {
                usuario_id: 5,
                nome: "Lagoa da Conceição",
                descricao: "A Lagoa da Conceição é conhecida por sua beleza natural e pela variedade de atividades que oferece. É um destino popular para esportes como windsurf e stand-up paddle, além de ser um ponto de encontro para a vida noturna.",
                localidade: "Lagoa da Conceição, Florianópolis - SC",
                cep: "88062-040",
                coordenadas_geograficas: "{\"lat\": \"-27.5969\", \"lon\": \"-48.4743\"}"
            },
            {
                usuario_id: 5,
                nome: "Ilha do Campeche",
                descricao: "A Ilha do Campeche é conhecida por suas águas azul-turquesa e pela rica herança arqueológica, com inscrições rupestres datando de milênios atrás. É acessível por barco e oferece passeios ecológicos.",
                localidade: "Campeche, Florianópolis - SC",
                cep: "88063-193",
                coordenadas_geograficas: "{\"lat\": \"-27.6939\", \"lon\": \"-48.4917\"}"
            },
            {
                usuario_id: 5,
                nome: "Praia Mole",
                descricao: "A Praia Mole é um ponto de encontro para surfistas e jovens que buscam uma praia com boa infraestrutura e ambiente descontraído. É conhecida por suas festas à beira-mar e paisagens deslumbrantes.",
                localidade: "Lagoa da Conceição, Florianópolis - SC",
                cep: "88061-701",
                coordenadas_geograficas: "{\"lat\": \"-27.6102\", \"lon\": \"-48.4391\"}"
            },
            {
                usuario_id: 4,
                nome: "Praia Brava",
                descricao: "A Praia Brava oferece ondas fortes e é bastante frequentada por surfistas. Além disso, a praia conta com bares e restaurantes que garantem uma boa infraestrutura para os visitantes.",
                localidade: "Norte da Ilha, Florianópolis - SC",
                cep: "88056-000",
                coordenadas_geograficas: "{\"lat\": \"-27.4156\", \"lon\": \"-48.4144\"}"
            },
            {
                usuario_id: 4,
                nome: "Costa da Lagoa",
                descricao: "Costa da Lagoa é um local isolado e tranquilo, onde os visitantes podem desfrutar de trilhas, cachoeiras e restaurantes que servem pratos típicos da ilha. É acessível por barco ou por uma longa trilha pela mata atlântica.",
                localidade: "Lagoa da Conceição, Florianópolis - SC",
                cep: "88062-040",
                coordenadas_geograficas: "{\"lat\": \"-27.6009\", \"lon\": \"-48.4798\"}"
            },
            {
                usuario_id: 3,
                nome: "Praia de Jurerê Internacional",
                descricao: "Jurerê Internacional é uma das praias mais sofisticadas de Florianópolis, com mansões à beira-mar, beach clubs e uma vida noturna agitada. É um destino popular entre turistas de alto padrão.",
                localidade: "Jurerê, Florianópolis - SC",
                cep: "88053-301",
                coordenadas_geograficas: "{\"lat\": \"-27.4358\", \"lon\": \"-48.4851\"}"
            },
            {
                usuario_id: 3,
                nome: "Cachoeira do Poção",
                descricao: "Localizada em meio à natureza, a Cachoeira do Poção é um refúgio tranquilo para quem deseja se conectar com a natureza e se refrescar nas águas cristalinas.",
                localidade: "Ratones, Florianópolis - SC",
                cep: "88052-237",
                coordenadas_geograficas: "{\"lat\": \"-27.5363\", \"lon\": \"-48.4769\"}"
            },
            {
                usuario_id: 3,
                nome: "Fortaleza de São José da Ponta Grossa",
                descricao: "A Fortaleza de São José da Ponta Grossa é uma construção do século XVIII que oferece uma visão panorâmica da Baía Norte. É um local repleto de história e cultura.",
                localidade: "Praia do Forte, Florianópolis - SC",
                cep: "88053-410",
                coordenadas_geograficas: "{\"lat\": \"-27.4381\", \"lon\": \"-48.5009\"}"
    }
        ])
    },

    down: async (QueryInterface, Sequelize) => {
        await Local.destroy({
            usuario_id: [
                "1", 
                "2"
            ] 
        })
    }
}