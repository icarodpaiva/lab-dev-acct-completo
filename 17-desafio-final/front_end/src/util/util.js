export const ingredientUnit = [
  'Grama(s)',
  'Ml(s)',
  'Xícara(s)',
  'Colher(es) de Sopa',
  'Colher(es) de Chá',
  'Pitada(s)',
  'Unidade(s)',
  'Caixa(s)'
].sort()
export const tools = [
  {
    tool: 'Batedeira',
    toolUrl:
      'https://www.pontofrio-imagens.com.br/html/conteudo-produto/73/50004211/imagens/batedeira_2_.png'
  },
  {
    tool: 'Forno',
    toolUrl:
      'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/19/1019449_fogao-electrolux-4-bocas-forno-de-57-litros-50spb-bivolt-branco_m4_636653051700999669'
  },
  {
    tool: 'Liquidificador',
    toolUrl:
      'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1281780435'
  },
  {
    tool: 'Micro-ondas',
    toolUrl:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/183B1/production/_113494299_gettyimages-489937746.jpg'
  },
  {
    tool: 'Processador',
    toolUrl:
      'https://cdn.leroymerlin.com.br/products/processador_de_alimentos_arno_multichef_7_em_1_preto_110v_mp70_1566847213_a392_600x600.jpg'
  },
  {
    tool: 'Forno-elétrico',
    toolUrl: 'https://s.zst.com.br/cms-assets/2021/02/comida-de-forno.jpg'
  },
  {
    tool: 'Chaleira',
    toolUrl:
      'https://images-americanas.b2w.io/produtos/01/00/img/73052/6/73052697_1GG.jpg'
  },
  {
    tool: 'Panela de pressão',
    toolUrl: 'https://i.zst.com.br/thumbs/12/3d/30/5660098.jpg'
  },
  {
    tool: 'Forma com elevação',
    toolUrl:
      'https://images.tcdn.com.br/img/img_prod/665211/forma_de_pudim_bolo_aluminio_para_padaria_com_cone_numero_20_cm_4165_1_20200610103256.jpg'
  },
  {
    tool: 'Fogão',
    toolUrl:
      'https://novomundo.vteximg.com.br/arquivos/ids/1568019-500-500/fogao-5-bocas-de-piso-dako-glass-forno-com-1195-litros-preto-dp5vupf0-bivolt-57895-0.jpg?v=636912720556170000'
  },
  {
    tool: 'Grill',
    toolUrl: 'https://listamelhores.com.br/img/melhor-grill-eletrico-1.jpg'
  },
  {
    tool: 'Torradeira',
    toolUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sandwich_toaster_open.jpg/200px-Sandwich_toaster_open.jpg'
  },
  {
    tool: 'Geladeira',
    toolUrl:
      'https://a-static.mlcdn.com.br/618x463/geladeira-refrigerador-electrolux-if56b-inverter-top-freezer-frost-free-474l-black-inox-look/magazineluiza/231218500/15ccb3a5820dafd9a2188e0d768965e5.jpg'
  }
].sort((a, b) => {
  if (a.tool < b.tool) {
    return -1
  } else if (a.tool > b.tool) {
    return 1
  } else {
    return 0
  }
})
export const timeUnit = ['Minuto(s)', 'Hora(s)', 'Dia(s)'].sort()

export const ingredients = [
  {
    ingredient: 'Beterraba',
    ingredientUrl:
      'http://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/beterraba-440x243-995921-d72145f0ec6291e66915220416406945-640-0.jpg'
  },
  {
    ingredient: 'Caju',
    ingredientUrl:
      'https://www.mundoecologia.com.br/wp-content/gallery/caju/Caju-6.jpg'
  },
  {
    ingredient: 'Alface',
    ingredientUrl:
      'https://cdn.awsli.com.br/600x450/334/334766/produto/18043861/e57164bfb6.jpg'
  },
  {
    ingredient: 'Farinha de Trigo',
    ingredientUrl:
      'https://img.itdg.com.br/tdg/images/blog/uploads/2018/10/tipos-de-farinha-de-trigo-veja.jpg?w=1200'
  },
  {
    ingredient: 'Ovo',
    ingredientUrl:
      'https://img.itdg.com.br/tdg/images/blog/uploads/2017/04/shutterstock_127517717.jpg'
  },
  {
    ingredient: 'Chocolate',
    ingredientUrl:
      'https://www.mercadodocacau.com.br/tim.php?src=https://www.mercadodocacau.com.br/uploads/images/2020/02/depressao-perda-de-memoria-problemas-cardiacos-tente-a-terapia-do-chocolate.jpg&w=700&h='
  },
  {
    ingredient: 'Extrato de Tomate',
    ingredientUrl:
      'https://www.sabornamesa.com.br/media/k2/items/cache/3de303a43620aac779205f8a1027a16c_XL.jpg'
  },
  {
    ingredient: 'Cenoura',
    ingredientUrl:
      'https://cdn.octoshop.com.br/lojas/padellasaobenedito/uploads_produto/cenoura-5e9786202ed7b.jpg'
  },
  {
    ingredient: 'Margarina',
    ingredientUrl:
      'http://www.casabelacafe.com.br/wp-content/uploads/2020/02/Voce%CC%82-sabe-como-e%CC%81-fabricada-a-margarina-casa-bela-cafe-colonial.jpg'
  },
  {
    ingredient: 'Leite',
    ingredientUrl:
      'https://exame.com/wp-content/uploads/2016/10/size_960_16_9_leite1-e1531400056443.jpg?quality=70&strip=info&w=680&h=453&crop=1'
  },
  {
    ingredient: 'Açúcar',
    ingredientUrl:
      'https://ogimg.infoglobo.com.br/in/19074892-94c-25d/FT1086A/acucar_shutterstock.jpg'
  },
  {
    ingredient: 'Sal',
    ingredientUrl: 'https://www.mdsaude.com/wp-content/uploads/sal-imagem2.jpg'
  },
  {
    ingredient: 'Frango',
    ingredientUrl:
      'https://s.cornershopapp.com/product-images/2669329.jpg?versionId=oWtGFEAsYxBZ7_YcGhJECstypEqSKAzR'
  },
  {
    ingredient: 'Leite Condensado',
    ingredientUrl:
      'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/5620a6ed95faaf2d79d6ff1c2f2d4f91.jpg'
  },
  {
    ingredient: 'Arroz',
    ingredientUrl:
      'https://www.acasaencantada.com.br/wp-content/uploads/2019/01/arroz-perfeito-480x270.jpg'
  },
  {
    ingredient: 'Feijão',
    ingredientUrl:
      'https://imagens-cdn.canalrural.com.br/2018/06/1473170375447.jpg'
  },
  {
    ingredient: 'Feijão Preto',
    ingredientUrl:
      'https://cdn.octoshop.com.br/lojas/light4you/uploads_produto/feijaopreto-6099848a5da16.png'
  },
  {
    ingredient: 'Cebola',
    ingredientUrl:
      'https://conteudo.imguol.com.br/c/entretenimento/61/2017/10/25/cebola-1508951722238_v2_450x450.jpg'
  },
  {
    ingredient: 'Alho',
    ingredientUrl:
      'https://conteudo.imguol.com.br/c/entretenimento/05/2020/02/19/alho-1582127606154_v2_615x300.jpg'
  },
  {
    ingredient: 'Banana',
    ingredientUrl:
      'https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_615x300.jpg'
  },
  {
    ingredient: 'Iogurte Natural',
    ingredientUrl:
      'https://www.receiteria.com.br/wp-content/uploads/receitas-de-iogurte-natural-caseiro-1.jpg'
  },
  {
    ingredient: 'Maionese',
    ingredientUrl:
      'https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/m/maionese-caseira-receita-0319-1400x800.jpg'
  },
  {
    ingredient: 'Catchup',
    ingredientUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReC-Fd-MrxGxb_zCFlrXHDhsY0xd4ZV5aB5Q&usqp=CAU'
  },
  {
    ingredient: 'Macarrão',
    ingredientUrl:
      'https://www.selecoes.com.br/wp-content/uploads/2018/02/iStock-827383054.jpg'
  },
  {
    ingredient: 'Carne Seca',
    ingredientUrl:
      'https://www.receitasnarede.com/content/img//316x316/dessalgar+carne+seca+rapidamente1.jpg'
  },
  {
    ingredient: 'Queijo Coalho',
    ingredientUrl:
      'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/135/059/products/coalho1-4e7c623234de7b9e3016264805925393-640-0.jpeg'
  },
  {
    ingredient: 'Azeite',
    ingredientUrl:
      'https://conteudo.imguol.com.br/c/entretenimento/b8/2020/06/19/azeite-de-oliva-e-um-querido-na-cozinha-mas-voce-sabe-que-tambem-e-cercado-de-mitos-1592594128425_v2_450x337.jpg'
  },
  {
    ingredient: 'Achocolatado',
    ingredientUrl:
      'https://receitastanahora.com.br/wp-content/uploads/2016/11/chocolate-em-po.jpg'
  },
  {
    ingredient: 'Tomate',
    ingredientUrl:
      'https://catracalivre.com.br/wp-content/uploads/2019/09/tomate.jpg'
  },
  {
    ingredient: 'Fermento Químico',
    ingredientUrl:
      'http://revistasaboresdosul.com.br/wp-content/uploads/2016/03/entenda-as-diferencas-entre-fermento-quimico-e-biologico-2.jpg'
  }
].sort((a, b) => {
  if (a.ingredient < b.ingredient) {
    return -1
  } else if (a.ingredient > b.ingredient) {
    return 1
  } else {
    return 0
  }
})
