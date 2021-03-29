export const catalog = {
  programs: [
    {
      id: 1001,
      name: 'Интенсивное снижение веса',
      kKal: 1200,
      cost: 1180,
      image: 'program_1.jpg',
      imageinside: 'program_1.jpg',
      title: 'Интенсивное снижение веса',
      amount: 1,
      isHit: true,
      totalCost: 1180,
      discountAmount: 7,
      discountCost: 1070,
      discountAmount2: 30,
      discountCost2: 1038,
      shortDescription: 'Снизить вес в кратчайшие сроки',
      description:
        'Рацион составлен таким образом, что позволяет избавиться от килограммов с сохранением оптимального баланса белков, жиров и углеводов. Это способствует стабильному функционированию организма даже в условиях экстренного похудения',
      properties: 'Ккал 1200 (5 блюд)',
      priceProperties: [
        'за 1 день 1180 руб/день',
        'от 7 дней 1070 руб/день',
        'от 30 дней 1038 руб/день',
      ],
    },
    {
      id: 1101,
      name: 'Низкоуглеводная программа',
      kKal: 1300,
      cost: 1300,
      image: 'program_nu.jpg',
      imageinside: 'program_nu.jpg',
      title: 'Низкоуглеводная программа',
      amount: 1,
      isHit: true,
      totalCost: 1300,
      discountAmount: 7,
      discountCost: 1180,
      discountAmount2: 30,
      discountCost2: 1145,
      menuHref:
        'https://drive.google.com/file/d/1sApipOYOdSsTfDgICudkNUxZntA2uVTY/view',
      shortDescription:
        'В программе снижено количество углеводов, сделан акцент на полезных жирах и полноценных белках, за счёт чего происходит эффективное сжигание жировой прослойки.',
      description: 'В рацион также включена детокс-вода',
      vodasostav: '(0.3 л). Состав: лимон, мята, имбирь).',
      properties:
        'БЖУ 1300 / 100 / 75 / 55 (*Среднее значение , зависит от рациона) ',
      priceProperties: [
        'за 1 день 1300 руб/день',
        'от 7 дней 1180 руб/день',
        'от 30 дней 1145 руб/день',
      ],
    },

    {
      id: 1102,
      name: 'Детокс-рацион',
      kKal: 1100,
      cost: 1200,
      image: 'program-detox-obl.jpg',
      imageinside: 'program-detox-obl.jpg',
      title: 'Детокс-рацион',
      amount: 1,
      isNew: true,
      totalCost: 1200,
      menuDetoxHrev:
        'https://drive.google.com/file/d/1sApipOYOdSsTfDgICudkNUxZntA2uVTY/view',
      shortDescription: 'Очищение и отщелачивание',
      description:
        'Рацион исключает продукты животного происхождения, глютен, сахар. Состоит из 4-х приемов пищи, детокс воды и витграсса (сок из молодых побегов пшеницы, мощнейший антиоксидант). Включает все многообразие злаковых безглютеновых культур, овощей, зелени, ягод, фруктов и орехов.',
      properties: 'Ккал 1100',
      priceProperties: ['Стоимость 1200 р/день'],
    },
    {
      id: 1002,
      name: 'Рациональное снижение веса',
      kKal: 1400,
      cost: 1300,
      image: 'program_3.jpg',
      imageinside: 'program_3.jpg',
      title: 'Рациональное снижение веса',
      amount: 1,
      totalCost: 1300,
      discountAmount: 7,
      discountCost: 1180,
      discountAmount2: 30,
      discountCost2: 1145,
      shortDescription: 'Плавное похудение без стресса для организма',
      description:
        'Рацион питания включает в себя необходимый запас нутриентов. Программа обеспечит рациональное избавление от лишнего веса без постоянного чувства голода, нервного состояния и потери энергии',
      properties: 'Ккал 1400 (5 блюд)',
      priceProperties: [
        'за 1 день 1300 руб/день',
        'от 7 дней 1180 руб/день',
        'от 30 дней 1145 руб/день',
      ],
    },
    {
      id: 1003,
      name: 'Баланс с небольшим дефицитом калорий',
      kKal: 1600,
      cost: 1410,
      image: 'program_2.jpg',
      imageinside: 'program_2.jpg',
      title: 'Баланс с небольшим дефицитом калорий',
      amount: 1,
      totalCost: 1410,
      discountAmount: 7,
      discountCost: 1280,
      discountAmount2: 30,
      discountCost2: 1242,
      shortDescription: 'Поддержание текущего веса',
      description:
        'Программа разработана с соблюдением оптимального соотношения необходимых организму макронутриентов — белков, жиров и углеводов, а также микроэлементов — витаминов и минералов.',
      menuHref: '',
      properties: 'Ккал 1600 (5 блюд)',
      priceProperties: [
        'за 1 день 1410 руб/день',
        'от 7 дней 1280 руб/день',
        'от 30 дней 1242 руб/день',
      ],
    },
    {
      id: 1004,
      name: 'Поддержание веса',
      kKal: 1800,
      cost: 1530,
      image: 'program_4.jpg',
      imageinside: 'program_4.jpg',
      title: 'Поддержание веса',
      amount: 1,
      totalCost: 1530,
      discountAmount: 7,
      discountCost: 1390,
      discountAmount2: 30,
      discountCost2: 1349,
      shortDescription: 'Поддержание текущего веса',
      description:
        'Программа разработана с соблюдением оптимального соотношения необходимых организму макронутриентов — белков, жиров и углеводов, а также микроэлементов — витаминов и минералов',
      properties: 'Ккал 1800 (5 блюд)',
      priceProperties: [
        'за 1 день 1530 руб/день',
        'от 7 дней 1390 руб/день',
        'от 30 дней 1349 руб/день',
      ],
    },
    {
      id: 1005,
      name: 'Бизнес Будни',
      kKal: 900,
      cost: 899,
      image: 'program_5.jpg',
      imageinside: 'program_5.jpg',
      title: 'Бизнес Будни',
      amount: 1,
      totalCost: 899,
      shortDescription: 'Три любых блюда на выбор',
      description:
        'Программа подходит для тех, кто привык завтракать в семейном кругу, ужинать с близкими вне дома или устраивать перекусы самостоятельно. Рацион составлен таким образом, что помогает поддерживать себя в отличной форме в современном ритме жизни',
      properties: 'Ккал 900 (3 блюда)',
      priceProperties: ['899 руб'],
    },
  ],
  bonus: [
    {
      id: 9001,
      name: 'Подарочный сертификат на 1000 рублей',
      cost: 1000,
      image: 'podar-sert.jpg',
      imageinside: 'podar-sert.jpg',
      title: 'Подарочный сертификат на 1000 рублей',
      amount: 1,
      isHit: false,
      totalCost: 1000,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 1000 руб.'],
    },
    {
      id: 9002,
      name: 'Подарочный сертификат на 1500 рублей',
      cost: 1500,
      image: 'podar-sert2.jpg',
      imageinside: 'podar-sert2.jpg',
      title: 'Подарочный сертификат на 1500 рублей',
      amount: 1,
      isHit: true,
      totalCost: 1500,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 1500 руб.'],
    },
    {
      id: 9003,
      name: 'Бонусная карта «Овсянка»',
      cost: 313,
      image: 'bonus-card.jpg',
      imageinside: 'bonus-card.jpg',
      title: 'Бонусная карта «Овсянка»',
      amount: 1,
      isHit: true,
      totalCost: 313,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        '🌱 С каждого заказа на ваш бонусный счет идёт накопление 5% от суммы чека. 🌱 Вы можете потратить накопленные бонусы, оплатив ими до 50%  заказа из всего ассортимента «Овсянки». 🌱 оформляя карту, вы становитесь членом «Овсянка club», приобщаетесь к культуре здорового питания. Для держателей карт доступны специальные акции и персональные предложения',
      properties: 'Карта бессрочная и может использоваться для всей семьи',
      priceProperties: ['Стоимость бонусной карты: 313 руб. единовременно '],
    },
    {
      id: 9004,
      name: 'Подарочный сертификат на 2000 рублей',
      cost: 2000,
      image: 'podar-sert5.jpg',
      imageinside: 'podar-sert5.jpg',
      title: 'Подарочный сертификат на 2000 рублей',
      amount: 1,
      isHit: true,
      totalCost: 2000,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 2000 руб.'],
    },
    {
      id: 9005,
      name: 'Подарочный сертификат на 10 000 рублей',
      cost: 10000,
      image: 'podar-sert4.jpg',
      imageinside: 'podar-sert4.jpg',
      title: 'Подарочный сертификат на 10 000 рублей',
      amount: 1,
      isHit: false,
      totalCost: 10000,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 10 000 руб.'],
    },
  ],
  books: [
    {
      id: 11001,
      name: 'Время есть. Выпуск #1',
      cost: 490,
      image: 'book.obl.1vipusk.jpg',
      imageinside: 'book.inside.1vipusk.jpg',
      title: 'Время есть. Выпуск #1',
      amount: 1,
      eloblclose: '132131',
      isHit: false,
      isNew: true,
      totalCost: 490,
      consist: 'Онлайн книга самых лучших рецептов Овсянки',
      shortDescription: 'Онлайн книга самых лучших рецептов Овсянки',
      description:
        'В этой книге собраны самые крутые и любимые многими рецепты из первой доставки правильного питания для женщин «Овсянка» от руководителя Кристины Гоголевой. В них дана не сухая техника, как это часто бывает в рецептах из интернета, а ценные нюансы и советы по приготовлению и подаче. Все блюда сбалансированы и просчитаны по КБЖУ.',
      properties: 'Ура, не нужно самим считать калории!',
      priceProperties: ['Cтоимость 490 рублей.'],
    },
    {
      id: 11002,
      name: 'Время есть',
      cost: 1000,
      image: 'book.obl.1vipusk.jpg',
      title: 'Время есть',
      amount: 1,
      isHit: false,
      totalCost: 1000,
      shortDescription: 'Выпуск #1',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 1000 руб.'],
    },
    {
      id: 11003,
      name: 'Книга1',
      cost: 1000,
      image: 'book.obl.1vipusk.jpg',
      title: 'Книгиа1',
      amount: 1,
      isHit: false,
      totalCost: 1000,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 1000 руб.'],
    },
    {
      id: 11004,
      name: 'Книга1',
      cost: 1000,
      image: 'book.obl.1vipusk.jpg',
      title: 'Книгиа1',
      amount: 1,
      isHit: false,
      totalCost: 1000,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 1000 руб.'],
    },
    {
      id: 11005,
      name: 'Книга1',
      cost: 1000,
      image: 'book.obl.1vipusk.jpg',
      title: 'Книгиа1',
      amount: 1,
      isHit: false,
      totalCost: 1000,
      shortDescription: 'Не знаете, что подарить тому, у кого всё есть?',
      description:
        'Подарочная карта станет идеальным комплиментом для тех, кто заботится о себе и правильном питании. Кому можно подарить сертификат? ✅ Тем, для кого правильное питание – это стиль жизни. ✅ Тем, кто давно хотел попробовать и никак не решался. ✅ А также тем, кто вам особенно дорог. Ведь правильное питание – это в первую очередь здоровье! Мы с удовольствием доставим Ваш сертификат домой или на работу, как Вам удобно.',
      properties:
        'Просто напишите нам и мы привезем сертификат в назначенное место и время.',
      priceProperties: ['Стоимость подарочного сертификата 1000 руб.'],
    },
  ],
  pf: [
    {
      id: 21001,
      name: 'Сырники с изюмом',
      cost: 585,
	  kKal: '12 шт (540 г)',
      image: 'sirn.iz.obl.jpg',
      imageinside: 'sirn.inside.jpg',
      title: 'Сырники с изюмом',
	  consist: 'Состав: творог, мука рисовая, яйцо, изюм светлый, сахарозаменитель инулин, соль',
      kbju: '157 / 15 / 6 / 11 на 100 г.',
      amount: 1,
      eloblclose: '132131',
      isHit: false,
      isNew: true,
      totalCost: 585,
      shortDescription: 'Состав: творог, мука рисовая, яйцо, изюм светлый, сахарозаменитель инулин, соль',
      description:
        '12 шт по 45 гр. Масса нетто: 540+- 10 г. Срок хранения : 3 месяца при t= -18.',
      properties: 'КБЖУ 157 / 15 / 6 / 11 на 100 г.',
      priceProperties: ['585 руб / 12 шт.'],
    },
    {
      id: 21002,
      name: 'Сырники с курагой',
      cost: 595,
	  kKal: '12 шт (540 г)',
      image: 'sirn.kurag.obl.jpg',
	  imageinside: 'sirn.inside.jpg',
	  consist: 'Состав: творог, мука рисовая, яйцо, курага, мак, сахарозаменитель инулин, соль',
      kbju: '157 / 15 / 6 / 11 на 100 г.',
      title: 'Сырники с курагой',
      amount: 1,
      isHit: false,
	  isNew: true,
      totalCost: 595,
      shortDescription: 'Состав: творог, мука рисовая, яйцо, курага, мак, сахарозаменитель инулин, соль',
      description:
        '12 шт по 45 гр. Масса нетто: 540+- 10 г. Срок хранения : 3 месяца при t= -18.',
      properties:
        'КБЖУ 157 / 15 / 6 / 11 на 100 гр.',
      priceProperties: ['595 руб / 12 шт.'],
    },
    {
      id: 21003,
      name: 'Котлеты куриные',
      cost: 595,
	  kKal: '12 шт (500 г)',
      image: 'kotleti.obl.jpg',
	  imageinside: 'kotleti.obl.jpg',
	  consist: 'Состав: филе куриной грудки, филе куриного бедра, кабачок, лук, соль, специи',
      kbju: '160 / 23 / 7 /  1 на 100 г.',
      title: 'Котлеты куриные',
      amount: 1,
      isHit: false,
	  isNew: true,
      totalCost: 595,
      shortDescription: 'Состав: филе куриной грудки, филе куриного бедра, кабачок, лук, соль, специи',
      description:
        '12 шт. Масса нетто: 500+- 10 г. Срок хранения : 3 месяца при t= -18.',
      properties:
        'КБЖУ 160 / 23 / 7 /  1 на 100 гр.',
      priceProperties: ['595 руб / 12 шт.'],
    },
    {
      id: 21004,
      name: 'Сырники с изюмом',
      cost: 585,
	  kKal: '12 шт (540 г)',
      image: 'sirn.iz.obl.jpg',
      imageinside: 'sirn.inside.jpg',
      title: 'Сырники с изюмом',
	  consist: 'Состав: творог, мука рисовая, яйцо, изюм светлый, сахарозаменитель инулин, соль',
      kbju: '157 / 15 / 6 / 11 на 100 г.',
      amount: 1,
      eloblclose: '132131',
      isHit: false,
      isNew: true,
      totalCost: 585,
      shortDescription: 'Состав: творог, мука рисовая, яйцо, изюм светлый, сахарозаменитель инулин, соль',
      description:
        '12 шт по 45 гр. Масса нетто: 540+- 10 г. Срок хранения : 3 месяца при t= -18.',
      properties: 'КБЖУ 157 / 15 / 6 / 11 на 100 г.',
      priceProperties: ['585 руб / 12 шт.'],
    },
    {
      id: 21005,
      name: 'Сырники с курагой',
      cost: 595,
	  kKal: '12 шт (540 г)',
      image: 'sirn.kurag.obl.jpg',
	  imageinside: 'sirn.inside.jpg',
	  consist: 'Состав: творог, мука рисовая, яйцо, курага, мак, сахарозаменитель инулин, соль',
      kbju: '157 / 15 / 6 / 11 на 100 г.',
      title: 'Сырники с курагой',
      amount: 1,
      isHit: false,
	  isNew: true,
      totalCost: 595,
      shortDescription: 'Состав: творог, мука рисовая, яйцо, курага, мак, сахарозаменитель инулин, соль',
      description:
        '12 шт по 45 гр. Масса нетто: 540+- 10 г. Срок хранения : 3 месяца при t= -18.',
      properties:
        'КБЖУ 157 / 15 / 6 / 11 на 100 гр.',
      priceProperties: ['595 руб / 12 шт.'],
    },
    {
      id: 21006,
      name: 'Котлеты куриные',
      cost: 595,
	  kKal: '12 шт (500 г)',
      image: 'kotleti.obl.jpg',
	  imageinside: 'kotleti.obl.jpg',
	  consist: 'Состав: филе куриной грудки, филе куриного бедра, кабачок, лук, соль, специи',
      kbju: '160 / 23 / 7 /  1 на 100 г.',
      title: 'Котлеты куриные',
      amount: 1,
      isHit: false,
	  isNew: true,
      totalCost: 595,
      shortDescription: 'Состав: филе куриной грудки, филе куриного бедра, кабачок, лук, соль, специи',
      description:
        '12 шт. Масса нетто: 500+- 10 г. Срок хранения : 3 месяца при t= -18.',
      properties:
        'КБЖУ 160 / 23 / 7 /  1 на 100 гр.',
      priceProperties: ['595 руб / 12 шт.'],
    },
  ],
  detox: {
    smoothies: [
      {
        id: 2001,
        name: 'Coffee mint',
        kKal: 145,
        cost: 200,
        image: 'detox_coffee-mint.jpg',
        imageinside: 'detox_coffee-mint.jpg',
        consist:
          'Банан, кофе, миндальное молоко, мята, мускатный орех, корица, овсяные хлопья',
        title: 'Смузи Coffee mint',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Coffee mint',
        description:
          'Банан, кофе, миндальное молоко, мята, мускатный орех, корица, овсяные хлопья',
        priceProperties: ['200 руб'],
      },
      {
        id: 2002,
        name: 'CoCo Berry',
        kKal: 90,
        cost: 200,
        image: 'detox_coco-berry.jpg',
        imageinside: 'detox_coco-berry.jpg',
        consist: 'Клубника, малина, кокосовое молоко, чиа, лимон',
        title: 'Смузи CoCo Berry',
        amount: 1,
        isHit: true,
        totalCost: 200,
        shortDescription: 'Смузи CoCo Berry',
        description: 'Клубника, малина, кокосовое молоко, чиа, лимон',
        priceProperties: ['200 руб'],
      },
      {
        id: 2003,
        name: 'Fiolet Cream',
        kKal: 137,
        cost: 200,
        image: 'detox_fiolet-cream.jpg',
        imageinside: 'detox_fiolet-cream.jpg',
        consist: 'Банан, миндальное молоко, клубника, черника, лимон, ваниль',
        title: 'Смузи Fiolet Cream',
        isHit: true,
        amount: 1,
        totalCost: 200,
        shortDescription: 'Fiolet Cream',
        description:
          'Банан, миндальное молоко, клубника, черника, лимон, ваниль',
        priceProperties: ['200 руб'],
      },
      {
        id: 2004,
        name: 'Тархун',
        kKal: 123,
        cost: 200,
        image: 'detox_tarhun.jpg',
        imageinside: 'detox_tarhun.jpg',
        consist: 'Апельсин, киви, ананас, тархун',
        title: 'Смузи Тархун',
        amount: 1,
        isHit: true,
        totalCost: 200,
        shortDescription: 'Смузи Тархун',
        description: 'Апельсин, киви, ананас, тархун',
        priceProperties: ['200 руб'],
      },
      {
        id: 2005,
        name: 'Супер C',
        kKal: 99,
        cost: 200,
        image: 'detox_super-c.jpg',
        imageinside: 'detox_super-c.jpg',
        consist: 'Апельсин, грейпфрут, клубника, мята, имбирь',
        title: 'Смузи Супер C',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Супер C',
        description: 'Апельсин, грейпфрут, клубника, мята, имбирь',
        priceProperties: ['200 руб'],
      },
      {
        id: 2006,
        name: 'Banana Мак',
        kKal: 175,
        cost: 200,
        image: 'detox_banana-mak.jpg',
        imageinside: 'detox_banana-mak.jpg',
        consist: 'Банан, ананас, миндальное молоко, мак, лимон',
        title: 'Смузи Banana Мак',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Banana Мак',
        description: 'Банан, ананас, миндальное молоко, мак, лимон',
        priceProperties: ['200 руб'],
      },
      {
        id: 2007,
        name: 'Базилик Green',
        kKal: 110,
        cost: 200,
        image: 'detox_bazilik-green.jpg',
        imageinside: 'detox_bazilik-green.jpg',
        consist: 'Яблоко, киви, базилик, лимон',
        title: 'Смузи Базилик Green',
        isHit: true,
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Базилик Green',
        description: 'Яблоко, киви, базилик, лимон',
        priceProperties: ['200 руб'],
      },
      // {
      //   id: 2008,
      //   name: 'Свежесть',
      //   kKal: 50,
      //   cost: 200,
      //   image: 'detox_svezhest.jpg',
      //   imageinside: 'detox_svezhest.jpg',
      //   consist: 'Яблоко, огурец, сельдерей, мята, лимон, имбирь',
      //   title: 'Смузи Свежесть',
      //   amount: 1,
      //   totalCost: 200,
      // },
      {
        id: 2009,
        name: 'Ананас Fresh',
        kKal: 123,
        cost: 200,
        image: 'detox_ananas-fresh.jpg',
        imageinside: 'detox_ananas-fresh.jpg',
        consist: 'Ананас, груша, сельдерей,мята, лимон',
        title: 'Смузи Ананас Fresh',
        isHit: true,
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Ананас Fresh',
        description: 'Ананас, груша, сельдерей,мята, лимон',
        priceProperties: ['200 руб'],
      },
      {
        id: 2010,
        name: 'Choco Dessert',
        kKal: 175,
        cost: 200,
        image: 'detox_choco-desert.jpg',
        imageinside: 'detox_choco-desert.jpg',
        consist: 'Банан, миндальное молоко, финик, какао',
        title: 'Смузи Choco Dessert',
        isHit: true,
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Choco Dessert',
        description: 'Банан, миндальное молоко, финик, какао',
        priceProperties: ['200 руб'],
      },
      {
        id: 2011,
        name: 'Banana Mint',
        kKal: 112,
        cost: 200,
        image: 'detox_banana-mint.jpg',
        imageinside: 'detox_banana-mint.jpg',
        consist: 'Банан, апельсин, миндальное молоко, мята, лимон',
        title: 'Смузи Banana Mint',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Banana Mint',
        description: 'Банан, апельсин, миндальное молоко, мята, лимон',
        priceProperties: ['200 руб'],
      },
      {
        id: 2012,
        name: 'Green Banana',
        kKal: 111,
        cost: 200,
        image: 'detox_green-banana.jpg',
        imageinside: 'detox_green-banana.jpg',
        consist: 'Банан, киви, шпинат, лимон',
        title: 'Смузи Green Banana',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Green Banana',
        description: 'Банан, киви, шпинат, лимон',
        priceProperties: ['200 руб'],
      },
      {
        id: 2013,
        name: 'Сезам',
        kKal: 175,
        cost: 200,
        image: 'detox_sezam.jpg',
        imageinside: 'detox_sezam.jpg',
        consist: 'Соевое молоко, кунжут, курага, апельсин',
        title: 'Смузи Сезам',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Сезам',
        description: 'Соевое молоко, кунжут, курага, апельсин',
        priceProperties: ['200 руб'],
      },
      // {
      //   id: 2014,
      //   name: 'МатЧа Green Milk',
      //   kKal: 95,
      //   image: 'detox_matcha-green.jpg',
      //   imageinside: 'detox_matcha-green.jpg',
      //   cost: 200,
      //   consist: 'Банан, матча, лимон, миндальное молоко, ваниль',
      //   title: 'Смузи МатЧа Green Milk',
      //   amount: 1,
      //   totalCost: 200,
      //   shortDescription: 'Смузи МатЧа Green Milk',
      //   description: 'Банан, матча, лимон, миндальное молоко, ваниль',
      //   priceProperties: ['200 руб'],
      // },
      {
        id: 2015,
        name: 'Green Лимон',
        kKal: 90,
        cost: 200,
        image: 'detox_green-lemon.jpg',
        imageinside: 'detox_green-lemon.jpg',
        consist: 'Груша, лимон, шпинат',
        title: 'Смузи Green Лимон',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Green Лимон',
        description: 'Груша, лимон, шпинат',
        priceProperties: ['200 руб'],
      },
      {
        id: 2016,
        name: 'Cherry lady',
        kKal: 106,
        cost: 200,
        image: 'detox_cherry_lady.jpg',
        imageinside: 'detox_cherry_lady.jpg',
        consist: 'Вишня, банан, апельсин, лимон, мускатный орех',
        isNew: true,
        title: 'Смузи Cherry lady',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Cherry lady',
        description: 'Вишня, банан, апельсин, лимон, мускатный орех',
        priceProperties: ['200 руб'],
      },
      {
        id: 2017,
        name: 'Иммуно',
        kKal: 99,
        cost: 200,
        image: 'detox_immuno.jpg',
        imageinside: 'detox_immuno.jpg',
        consist: 'Апельсин, яблоко, облепиха, имбирь, лимон',
        isNew: true,
        title: 'Смузи Иммуно',
        amount: 1,
        totalCost: 200,
        shortDescription: 'Смузи Иммуно',
        description: 'Апельсин, яблоко, облепиха, имбирь, лимон',
        priceProperties: ['200 руб'],
      },
    ],
    programs: [
      {
        id: 3001,
        name: 'Перезагрузка (на 1 день)',
        kKal: '650 - 700',
        cost: 1200,
        image: 'detox_program_3.jpg',
        imageinside: 'detox_program_3.jpg',
        title: 'Перезагрузка (на 1 день)',
        amount: 1,
        totalCost: 1200,
        shortDescription: 'Перезагрузка (на 1 день)',
        priceProperties: ['1200 руб'],
      },
      {
        id: 3002,
        name: 'Легкость (на 3 дня)',
        kKal: '650 - 700',
        cost: 3600,
        image: 'detox_program_1.jpg',
        imageinside: 'detox_program_1.jpg',
        title: 'Легкость (на 3 дня)',
        amount: 1,
        totalCost: 3600,
        shortDescription: 'Легкость (на 3 дня)',
        priceProperties: ['3600 руб'],
      },
      {
        id: 3003,
        name: 'Очищение (на 5 дней)',
        kKal: '650 - 700',
        cost: 6000,
        image: 'detox_program_2.jpg',
        imageinside: 'detox_program_2.jpg',
        title: 'Очищение (на 5 дней)',
        amount: 1,
        totalCost: 6000,
        shortDescription: 'Очищение (на 5 дней)',
        priceProperties: ['6000 руб'],
      },
    ],
    water: [
      {
        id: 4001,
        name: 'Детокс Вода',
        kKal: 0,
        cost: 80,
        image: 'detox_water_1.jpg',
        imageinside: 'detox_water_1.jpg',
        title: 'Детокс Вода',
        amount: 1,
        totalCost: 80,
      },
    ],
  },
  sweets: [
    {
      id: 5001,
      name: 'Пирожное Брауни',
      kKal: 325,
      cost: 120,
      image: 'sweet_dessert_brauni.jpg',
      imageinside: 'sweet_dessert_brauni.jpg',
      consist:
        'Состав: кокосовое молоко, мука овсяная, мука цельнозерновая, банан, какао, шоколад Callebaut, оливковое масло, орехи (миндаль, грецкий, кешью)',
      kbju: '325  / 7 / 17 / 36 на 100 гр.',
      title: 'Пирожное Брауни',
      amount: 1,
      totalCost: 120,
      shortDescription: 'Шоколадное пирожное с мягкой сердцевиной',
      description:
        'Наш вариант классического десерта Брауни. \n' +
        'Состав: кокосовое молоко, мука овсяная, мука цельнозерновая, банан, какао, темный шоколад Callebaut, оливковое масло, миндаль.\n' +
        'Не содержит яиц, подходит как вегетарианцам, так и веганам.\n',
      properties: 'КБЖУ на 100 гр. (1 шт.) 325 / 7 / 17 / 36',
      priceProperties: ['120 руб'],
    },
    {
      id: 5002,
      name: 'Пирожное кешьюкейк',
      kKal: 365,
      cost: 190,
      image: 'sweet_dessert_keshu.jpg',
      imageinside: 'sweet_dessert_keshu.jpg',
      consist:
        'Состав: кешью, кокосовое молоко, клубника, чёрная смородина, грецкий орех, овсяные хлопья, финик',
      kbju: '365/ 8 / 27 /23 на 100 гр.',
      title: 'Пирожное кешьюкейк',
      isHit: true,
      amount: 1,
      totalCost: 190,
      shortDescription: 'Нежный и воздушный десерт',
      description:
        'Нежнейшая начинка из кешью и кокосового молока тает во рту, а изысканный вкус черной смородины с клубникой дает нотку кислинки, создавая гармоничное послевкусие.\n' +
        'Состав: кешью, кокосовое молоко, клубника, черная смородина, овсяные хлопья, финик, грецкий орех.\n' +
        'Кешьюкейк не проходит термическую обработку и не содержит яиц, поэтому он подходит абсолютно всем. Даже вегетарианцам, веганам и сыроедам.\n',
      properties: 'КБЖУ на 100 гр. (1 шт.) 365 / 8 / 27 / 23',
      priceProperties: ['190 руб'],
    },
    {
      id: 5003,
      name: 'Батончики "Сникерс"',
      kKal: 125,
      cost: 495,
      costSuffix: ' / 10 шт.',
      image: 'sweet_dessert_snikers.jpg',
      imageinside: 'sweet_dessert_snikers.jpg',
      consist:
        'Состав: арахис, арахисовая паста, сухое молоко, мед, финик, какао, грецкий орех',
      kbju: '125 / 5 / 7 /11 на 1 шт.',
      isHit: true,
      title: 'Батончики "Сникерс"',
      amount: 1,
      totalCost: 495,
      shortDescription: 'Наш вариант Сникерса',
      description:
        'Двухслойный батончик. Нижний ореховый слой со сливочной ноткой и верхний тягучий слой из иранской финиковой карамели, переплетаясь, создают неповторимый вкус.\n' +
        'Состав: арахис, арахисовая паста, сухое молоко, мед, финик, какао.',
      properties: 'КБЖУ на 30 гр. (1 шт.)  125 / 5 / 7 / 11',
      priceProperties: ['495 руб / 10 шт.'],
    },
    {
      id: 5103,
      name: 'Ореховое печенье ',
      kKal: 140,
      cost: 495,
      costSuffix: ' / 10 шт.',
      image: 'sweet_dessert_peanut_cookie.jpg',
      imageinside: 'sweet_dessert_peanut_cookie.jpg',
      consist:
        'Состав: арахисовая паста Nutsfun (собственного производства), иранские финики, овсяная мука, темный бельгийский шоколад Callebaut',
      kbju: '140 / 5/ 9 / 10 на 1 шт.',
      isHit: true,
      title: 'Ореховое печенье',
      amount: 1,
      totalCost: 495,
      shortDescription: 'Наше ореховое печенье',
      description:
        'Невероятно вкусное, ароматное, натуральное ореховое печенье. По текстуре мягкое, слегка рассыпчатое. Идеальный перекус с чаем или кофе./n' +
        'Состав: арахисовая паста Nutsfun (собственного производства), иранские финики, овсяная мука, темный бельгийский шоколад Callebaut',
      properties: 'КБЖУ на 32 гр. (1 шт.)  140 / 5/ 9 / 10',
      priceProperties: ['495 руб / 10 шт.'],
    },
    {
      id: 5104,
      name: 'Протеиновое ореховое печенье',
      kKal: 145,
      cost: 573,
      costSuffix: ' / 10 шт.',
      image: 'sweet_dessert_protein_peanut_cookie.jpg',
      imageinside: 'sweet_dessert_protein_peanut_cookie.jpg',
      consist:
        'Состав: арахисовая паста Nutsfun (собственного производства), иранские финики, протеин, темный бельгийский шоколад Callebaut',
      kbju: '145 / 7/ 9 / 9 на 1 шт.',
      title: 'Протеиновое ореховое печенье',
      amount: 1,
      totalCost: 495,
      shortDescription: 'Наше протеиновое ореховое печенье',
      description:
        'Невероятно вкусное, ароматное, натуральное протеиновое ореховое печенье. По текстуре мягкое, слегка рассыпчатое. Идеальный перекус с чаем или кофе./n' +
        'Состав: арахисовая паста Nutsfun (собственного производства), иранские финики, протеин, темный бельгийский шоколад Callebaut',
      properties: 'КБЖУ на 32 гр. (1 шт.)  145 / 7/ 9 / 9',
      priceProperties: ['573 руб / 10 шт.'],
    },
    {
      id: 5004,
      name: 'Торт Брауни',
      kKal: 325,
      cost: 1050,
      costSuffix: ' / 1 кг.',
      image: 'sweet_dessert_brauni_tort.jpg',
      imageinside: 'sweet_dessert_brauni_tort.jpg',
      consist:
        'Состав: кокосовое молоко, мука овсяная, мука цельнозерновая, банан, какао, шоколад Callebaut, оливковое масло, орехи (миндаль, грецкий, кешью)',
      kbju: '325/ 7/ 17/ 36 на 100 гр.',
      title: 'Торт Брауни',
      amount: 1,
      totalCost: 1050,
      shortDescription: 'Шоколадный торт с мягкой сердцевиной',
      description:
        'Наш вариант классического десерта Брауни. Этот торт украсит ваш праздник, станет необычной, вкусной и здоровой альтернативой магазинным тортам.\n' +
        'Состав: кокосовое молоко, мука овсяная, мука цельнозерновая, банан, какао, темный шоколад Callebaut, оливковое масло, миндаль.\n' +
        'Не содержит яиц, подходит как вегетарианцам, так и веганам.\n',
      properties: 'КБЖУ на 100 гр. 325 / 7 / 17 / 36',
      priceProperties: ['1050 руб'],
    },
    {
      id: 5005,
      name: 'Торт Кешьюкейк',
      kKal: 365,
      cost: 1900,
      costSuffix: ' / 1 кг.',
      image: 'sweet_dessert_keshu_cake.jpg',
      imageinside: 'sweet_dessert_keshu_cake.jpg',
      consist:
        'Состав: кешью, кокосовое молоко, клубника, чёрная смородина, грецкий орех, овсяные хлопья, финик',
      kbju: '365/ 8 / 27 /23 на 100 гр.',
      title: 'Торт Кешьюкейк',
      amount: 1,
      totalCost: 1900,
      shortDescription: 'Нежный и воздушный торт',
      description:
        'Нежнейшая начинка из кешью и кокосового молока тает во рту, а изысканный вкус черной смородины с клубникой дают нотку кислинки, создавая гармоничное послевкусие. Этот торт понравится не только взрослым, но и детям.\n' +
        'Состав: кешью, кокосовое молоко, клубника, черная смородина, овсяные хлопья, финик, грецкий орех.\n' +
        'Оформление торта можем выполнить по вашему желанию (орехи, сухофрукты, фрукты, ягоды и тд). Стоимость в таком случае будет варьироваться.\n' +
        'Цена указана за классическое украшение шоколадом, сезонными фруктами и орехами.\n',
      properties: 'КБЖУ на 100 гр. 365 / 8 / 27 / 23',
      priceProperties: ['1900 руб'],
    },
    // {
    //   id: 5006,
    //   name: 'Маффины',
    //   kKal: 300,
    //   cost: 300,
    //   image: 'sweet_dessert_maffin.jpg',
    //   imageinside: 'sweet_dessert_maffin.jpg',
    //   consist:
    //     'Состав: мука овсяная, мука цельнозерновая, яйцо, банан, черная смородина, оливковое масло, грецкий орех, пряности',
    //   costSuffix: ' / 4 шт.',
    //   kbju: '300 / 8 / 11 / 42 на 100 гр.',
    //   title: 'Маффины',
    //   amount: 1,
    //   totalCost: 300,
    //   shortDescription: 'Нежный кекс с кислинкой',
    //   description:
    //     'Сочная черная смородина в составе придает кексу приятную кислинку и насыщенный аромат. Он идеально дополнит ваше чаепитие.\n' +
    //     'Состав: мука овсяная, мука цельнозерновая, банан, яйцо, черная смородина, оливковое масло, грецкий орех.\n',
    //   properties: 'КБЖУ на 100 гр. (1 шт.) 300 / 8 / 11 / 42',
    //   priceProperties: ['300 руб'],
    // },
    {
      id: 5007,
      name: 'Кекс Баунти',
      kKal: 198,
      cost: 390,
      costSuffix: ' / 650 гр.',
      image: 'sweet_dessert_keks.jpg',
      imageinside: 'sweet_dessert_keks.jpg',
      consist:
        'Состав: мука овсяная, мука цельнозерновая, яйцо, банан, кокосовая стружка, оливковое масло, пряности',
      kbju: '198 / 7 / 6 / 29 на 100 гр.',
      title: 'Кекс Баунти',
      amount: 1,
      totalCost: 390,
      shortDescription: 'Ароматный Баунти',
      description:
        'Нежнейший кекс со сладкими кусочками банана и невероятным ароматом кокосовой стружки перенесет вас в райское тропическое место.\n' +
        'Состав: мука овсяная, мука цельнозерновая, банан, яйцо, банан, кокосовая стружка, оливковое масло, пряности.\n',
      properties: 'КБЖУ на 100 гр. 198 / 7 / 6 / 29',
      priceProperties: ['390 руб'],
    },
    // {
    //   id: 6001,
    //   name: 'Арахисовая паста 400 гр',
    //   kKal: 585,
    //   cost: 350,
    //   image: 'sweet_paste_classic.jpg',
    //   imageinside: 'sweet_paste_classic.jpg',
    //   consist: 'Состав: обжаренный арахис',
    //   kbju: '585 / 24  / 50 / 21',
    // },
    // {
    //   id: 6002,
    //   name: 'Арахисовая паста с шоколадом 400 гр',
    //   kKal: 575,
    //   cost: 370,
    //   image: 'sweet_paste_choco.jpg',
    //   imageinside: 'sweet_paste_choco.jpg',
    //   consist:
    //     'Состав: обжаренный арахис, темный бельгийский шоколад Callebaut',
    //   kbju: '575 / 21 / 47 / 24',
    // },
    // {
    //   id: 6003,
    //   name: 'Арахисовая паста с кокосом и сиропом топинамбура 400 гр',
    //   kKal: 360,
    //   cost: 591,
    //   image: 'sweet_paste_kokos.jpg',
    //   imageinside: 'sweet_paste_kokos.jpg',
    //   consist:
    //     'Состав: обжаренный арахис, кокосовая стружка, сироп топинамбура',
    //   kbju: '22  / 51 / 20',
    // },
    // {
    //   id: 6004,
    //   name: 'Арахисовая паста crunchy с солью 400 гр',
    //   kKal: 585,
    //   cost: 360,
    //   image: 'sweet_paste_sol.jpg',
    //   imageinside: 'sweet_paste_sol.jpg',
    //   consist: 'Состав: обжаренный арахис, соль',
    //   kbju: '24  / 50 / 21',
    // },
    // {
    //   id: 6005,
    //   name: 'Арахисовая паста с медом 400 гр',
    //   kKal: 582,
    //   cost: 360,
    //   image: 'sweet_paste_honey.jpg',
    //   imageinside: 'sweet_paste_honey.jpg',
    //   consist: 'Состав: обжаренный арахис, мед',
    //   kbju: '22  / 45 / 26',
    // },
    // {
    //   id: 6006,
    //   name: 'Арахисовая паста 250 гр',
    //   kKal: 585,
    //   cost: 250,
    //   image: 'sweet_paste_classic_mini.png',
    //   imageinside: 'sweet_paste_classic_mini.png',
    //   consist: 'Состав: обжаренный арахис',
    //   kbju: '585 / 24  / 50 / 21',
    // },
    // {
    //   id: 6007,
    //   name: 'Арахисовая паста с шоколадом 250 гр',
    //   kKal: 585,
    //   cost: 250,
    //   image: 'sweet_paste_choco_mini.png',
    //   imageinside: 'sweet_paste_choco_mini.png',
    //   consist:
    //     'Состав: обжаренный арахис, темный бельгийский шоколад Callebaut',
    //   kbju: '575 / 21 / 47 / 24',
    // },
    // {
    //   id: 7001,
    //   name: 'Гранола Шоко',
    //   kKal: 460,
    //   cost: 500,
    //   image: 'sweet_granola_classic.jpg',
    //   imageinside: 'sweet_granola_classic.jpg',
    //   consist:
    //     'Шоко: овсяные хлопья, финик, фундук, грецкий орех, какао, ваниль',
    //   kbju: '460/18 /19 /55',
    // },
    // {
    //   id: 7002,
    //   name: 'Гранола Классическая',
    //   kKal: 460,
    //   cost: 500,
    //   image: 'sweet_granola_shoko.jpg',
    //   imageinside: 'sweet_granola_shoko.jpg',
    //   consist:
    //     'Классическая: овсяные хлопья, изюм, вяленая клюква, арахис, семечки подсолнечника, миндаль, корица.',
    //   kbju: '460/18 /19 /55',
    // },
    // {
    //   id: 7003,
    //   name: 'Батончик мюсли Классический',
    //   kKal: 230,
    //   cost: 70,
    //   image: 'sweet_musli.jpg',
    //   imageinside: 'sweet_musli.jpg',
    //   consist:
    //     'Классический: овсяные хлопья, изюм, вяленая клюква, арахис, семечки подсолнечника, миндаль, корица.',
    //   kbju: '9/9/27',
    // },
    // {
    //   id: 7004,
    //   name: 'Живые конфеты №1',
    //   kKal: 130,
    //   cost: 170,
    //   image: 'sweet_live_1.jpg',
    //   imageinside: 'sweet_live_1.jpg',
    //   consist:
    //     'Состав: чернослив, финик, изюм, фундук, грецкий орех,арахисовая паста,какао',
    //   isFixPrice: false,
    // },
    // {
    //   id: 7005,
    //   name: 'Живые конфеты №2',
    //   kKal: 130,
    //   cost: 170,
    //   image: 'sweet_live_2.jpg',
    //   imageinside: 'sweet_live_2.jpg',
    //   consist:
    //     'Состав: курага, вяленый персик, имбирь, миндаль, арахисовая паста, кунжут',
    //   isFixPrice: false,
    // },
    // {
    //   id: 7006,
    //   name: 'Живые конфеты №3',
    //   kKal: 130,
    //   cost: 170,
    //   image: 'sweet_live_3.jpg',
    //   imageinside: 'sweet_live_3.jpg',
    //   consist: 'Состав: кешью, финик, кокосовая стружка, миндаль',
    //   isFixPrice: false,
    //   kbju: '2/10/12',
    // },
  ],
};

export const feedbacks = [
  {
    id: 1,
    name: 'Татьяна Фальченко',
    image: 'tfalchenko.jpg',
    description: 'основательница бренда FALCHENKO',
    message:
      'У меня очень динамичная жизнь человека, работающего большую часть времени.' +
      'Это не позволяло мне питаться правильно.' +
      'Нерегулярное питание "где придется" всегда вызывало просто жуткое самочувствие.' +
      'Готовить самой для меня просто нереально:' +
      'я убегаю на работу ранним утром, и возвращаюсь поздним вечером. Питаться в ресторанах мне так же просто неудобно, да и нет времени.' +
      'Уже полтора месяца пользуюсь сервисом Овсянка, и это стало для меня просто спасением!' +
      'Наконец-то я ем регулярно, вкусно и не заморачиваюсь с готовкой, с покупкой продуктов.' +
      'Я похудела, чувствую себя хорошо, пищеварение нормализовалось.' +
      'Самое главное- это здоровье, а на нем я не экономлю.' +
      'Этот сервис подойдёт таким активным девушкам как я , работающим и желающим оставаться здоровыми и красивыми, ведь правильное питание- залог успеха не только красивой фигуры, но и высокого качества жизни!',
  },
  {
    id: 2,
    name: 'Анастасия Уланова',
    image: 'aulanova.png',
    description: 'финансовый директор',
    message:
      'Почему я с Овсянкой? Мне 37 лет, у меня плотный рабочий график и насыщенное свободное от работы время.' +
      'В отличной физической форме я, как многие могли подумать, совсем не всю жизнь)' +
      '7 лет назад я была толстушкой весом 85 кг! И уж точно знаю что правильное питание - это главная составляющая успеха в победе над лишними килограммами.' +
      'Но в связи с плотным графиком жизни не всегда получается уделять приготовлению блюд время... Можно часами пропадать и потеть в спортзале, но без питания нечего не выйдет!' +
      'Моё знакомство с Овсянки началось с полезных сладостей) да, да сладкоежки! Они могут быть полезны и Овсянка про это знает! Их конфеты бесподобны, а арахисовые пасты, мммм... Затем я перешла на их полный рацион.' +
      'Рекомендую всем... Сервис на уровне, начиная от приёма заказа, заканчивая упаковкой блюд и их всегда своевременной доставкой. Рацион разнообразный и очень-очень всё вкусно!' +
      'А Кристина - самый милый и отзывчивый собственник бизнеса, с кем мне удалось познакомиться.' +
      'С Овсянкой можно привести в порядок не только фигуру, но и кожу, волосы, ногти, и здоровье в целом. Все это за счет правильных и натуральных продуктов. С присутствием полезных жиров (которые все это регулируют) и медленных углеводов.' +
      'Скоро лето готовитесь к нему с Овсянкой! А когда в душе лето круглый год будьте всегда с Овсянкой! Всем спорта, вкусных блюд и красоты... Ведь она правит Миром',
  },
  {
    id: 3,
    name: 'Елена Рудакова',
    image: 'erudakova.jpg',
    description:
      'коммерческий директор ДСТ МАТЧ ТВ, Вице Миссис Россия/ Вселенная 2016, MRS SPORT EUROPE 2017, Best Body Universe 2016',
    message:
      'Я применяю детокс-программы от Овсянки или перед важными событиями, или после поездок, во время которых сбивается режим питания и немного набирается вес. Мне достаточно одного детокс-дня в неделю, чтобы чувствовать себя лёгкой и стройной! Так как я сладкоежка, то мои любимые вкусы - с добавлением какао и фруктов',
  },
  {
    id: 5,
    name: 'Елена Петрохалкина',
    image: 'epetrohalkina.png',
    description: 'Начальник управления В2В ХК «Авангард»',
    message:
      'Мы с Овсянкой дружим давно и я могу с уверенностью назвать их надёжным и проверенным партнером.' +
      'Овсянка неоднократно участвовала в наших мероприятиях и каждый раз они удивляют наших клиентов чем-то новеньким и вкусненьким, а главное полезным!' +
      'Я сама пользуюсь этим сервисом: для разгрузки и очистки организма заказываю детокс-программу из смузи, а дневные рационы - это всегда разнообразные блюда, просто волшебная палочка для тех, кто так же, как и я, порой настолько занят каким-нибудь проектом, что поесть некогда, не то что приготовить! Я доверяю Овсянке!',
  },
  {
    id: 6,
    name: 'Елена Петрулевич',
    image: 'epetrulevich.jpg',
    description:
      'TV Host, владелица бренда модной одежды Infinity Italy Омск/ Москва',
    message:
      'Всегда все вкусно, а главное полезно.' +
      'Моя палочка-выручалочка.' +
      'Если у вас нет свободного времени для приготовления полноценного питания на день, лично для меня - это отличный выход.',
  },
  {
    id: 7,
    name: 'Кристина Хариби',
    image: 'kharibi.jpg',
    description: 'Основатель фитнес-проекта @beauty_body55',
    message:
      'Обожаю Овсянку! Я питаюсь всегда правильно, и попробовала все доставки питание в Омске. Цена и качество однозначно. На себе экономить 200 рублей и заказывать продукты самые простые не хочу, питание должно быть разнообразным: рыба, мясо, креветки, разные крупы, вкусные десерты.' +
      'Детокс заказываю каждый вторник, ингредиенты из которых делают смузи только у Овсянки достойные.' +
      'Обожаю их десерты, которые можно с уверенностью привезти на праздник или подарить подругам. В общем, отзыв мой однозначный. Овсянка - это мой выбор!',
  },
  {
    id: 8,
    name: 'Татьяна Судакова',
    image: 'tsudakova.jpg',
    description:
      'Преподаватель кафедры маркетинга ОмГУ, Член Гильдии Маркетологов РФ',
    message:
      'Можно ли иметь много свободного времени и при этом быть красивой, здоровой и стройной? Легко!' +
      'Главное, сделать правильный выбор. А это без сомнения - «Овсянка»!' +
      'Потрясающе вкусная полезная еда для, не побоюсь этих слов, гурманов, удивила меня разнообразием и непростым приготовлением блюд.' +
      'Ранняя доставка, удобная упаковка, приятные и важные мелочи: вилки, ложки, ножи, салфетки, - совершенно точно позволяют мне не думать о том, как сделать курицу съедобной, заворачивая в неё броколли.' +
      'За меня все делает «Овсянка». И это лучшая помощь в течение каждого дня.',
  },
  {
    id: 9,
    name: 'Галина Григорьева',
    image: 'grigorieva.png',
    description: 'Бизнес - вумен',
    message:
      'Я очень люблю свою семью, стараюсь тщательно следить за нашим образом жизни, здоровым и правильным питанием,' +
      'особенно подрастающего поколения - нашего ребенка, поэтому выбираю "Овсянку"!' +
      'Мне понравился главный их концепт: вкусно/полезно, без химических добавок, канцерогенов, трансжиров и избытка сахара и соли.' +
      'У меня на кухне давно прописались детоксы (о пользе их давно много сказано), натуральные (ключевое слово, а мне есть с чем сравнить)' +
      'арахисовые пасты и урбечи и правильные сладости!' +
      'Пища, приготовленная из качественных продуктов, с любовью и душой, вдвойне полезней!',
  },
  // {
  //   id: 10,
  //   name: 'Ольга Гершенкоп',
  //   image: 'no_avatar.jpg',
  //   description: 'Директор транспортной компании',
  //   message:
  //     '.."Хотелось бы поблагодарить создателей Овсянки за этот сервис!' +
  //     'Год назад решила привести себя в форму.Но !!!! Одним спортом ,как известно, не поможешь. Вот и решила сэкономить своё время и заказать готовый рацион правильного питания.' +
  //     'Подруга посоветовала Овсянку , а я друзьям доверяю.' +
  //     'Была приятно удивлена ! Оказывается правильное питание может быть вкусным!',
  // },
  {
    id: 11,
    name: 'Кристина Полякова',
    image: 'polakova.jpg',
    description: 'Владелица ювелирных салонов Chance',
    message:
      'Помимо того, что я работающая жена и мама, ещё я занимаюсь воздушной гимнастикой на полотнах. И на последней тренировке я поняла, что где-то прибавилось, чувствую каждые 100 лишних грамм, когда поднимаю свой собственный вес на руках. Плюс ко всему, скоро на море!' +
      'Аховая ситуация! Куда бежать?' +
      'Решилась я на детокс-программу в @ovsyankafood. Времени уже не оставалось, но хоть один денёчек.' +
      'Тяжело мне было только утром, потому что я привыкла завтракать плотно, кашу, омлет, например. Ближе к вечеру кушать хотелось всё меньше, потому что случилось некое привыкание и уже почувствовалась лёгкость.' +
      'Понимаю, что в обычной жизни это целое дело - закупиться продуктами, да и попробуй найти всё в одном магазине. Дома такое не приготовить, нужно то, что кушают все члены семьи, отдельно для себя - времени нет. А здесь профессионалы уже придумали - просчитали - приготовили.' +
      'Отличный выход после поездок, когда сбивается режим / когда просто из-за жары не хочется кушать / или когда срочно к отпуску надо быть в форме.' +
      'Я думаю, что раз в неделю устраивать себе детокс-день - идеальный вариант.' +
      'Сегодня мне легко, чувствую себя отлично, постройнела!' +
      'Спасибо за Ваш профессиональный подход и за возможность достичь хороший результат за максимально короткое время',
  },
  {
    id: 12,
    name: 'Марина Шагаева',
    image: 'mshagaeva.jpg',
    description: 'Бухгалтер',
    message:
      'Я уже несколько лет придерживаюсь правильного питания, сначала я это делала для похудения и мне это удавалось, а теперь я просто хочу быть здоровой.' +
      'Питаюсь также правильно, и в этом мне помогает Овсянка.' +
      'Я перепробовала меню нескольких фирм по пп и остановила свой выбор на Овсянке!' +
      'Перестроиться мне на другой режим питания было легко. Когда видишь результат и есть цель, все получается!' +
      'Овсянка - это не только здоровое и правильное питание, это ещё и разнообразные полезные вкусняшки, от которых не поправляешься.' +
      'А какая у них вкусная и красивая подача блюд, ммм!' +
      'Я привела своё тело в порядок, чувствую себя легко и комфортно!',
  },
  // {
  //   id: 13,
  //   name: 'Дарья Егер',
  //   image: 'no_avatar.jpg',
  //   description: 'Флорист',
  //   message:
  //     'Хочу выразить огромную благодарнось вашей компании. Все мы знаем,что после новогодних праздников приходит лишний вес,чувствуется тяжесть и вследствие чего плохое настроение нам обеспечено.' +
  //     'Часто листая ленту в инстаграме, я разглядывала ваши коробочки с едой,порции,все было такое необычное, все хотелось попробовать.' +
  //     'И я решилась. Сказать, что я в восторге- ничего не сказать!' +
  //     'Все очень вкусно, нет примитивной еды.' +
  //     'Если каша, то с сухофруктами, орешками или томленной грушей. Очень полюбился салат с лососем и спаржей.' +
  //     'Муж сначала отнесся очень скептически, но на следующий день просил поделиться сним обедом или ужином!' +
  //     'Чувство голода я не испытывала совершенно! Все настолько сбалансированное и легкое.' +
  //     'Я привела свое лицо в порядок,а самое главное потеряла 5 кг в весе. Теперь я встречу весну обновленной!' +
  //     'Хочу пожелать вам процветания, вы сделали меня намного лучше, спасибо вам!',
  // },
  {
    id: 14,
    name: 'Анастасия Глебова',
    image: 'glebova.jpg',
    description: 'Студия Аштанга Йога Омск',
    message:
      'Мечты сбываются!' +
      'Слишком активная жизнь и завал на работе однозначно всегда бьет по режиму питания...' +
      'И, к сожалению, я это очень хорошо почувствовала на себе... Не хотела делиться такими личными подробностями, но эффект меня вдохновил все же написать!!!' +
      'Несбалансированное питание без режима привели к набору лишних кг. Делала много попыток разгрузочных дней, но набирала обратно все очень быстро!' +
      'Те, кто пробовал, поймут, так как не было выработанной привычки питаться правильно(режимно). Сама постоянно на бегу и готовить не представляется возможности.' +
      'Теперь я не волнуюсь, что при активных тренировках и плотном рабочем графике у меня будет недостача чего-то очень нужного и полезного, потому что команда @ovsyankafood уже позаботилась о моем рационе со всеми полезностями, необходимостями и даже вкусностями(пп).' +
      'Я просто летаю, все успеваю и чувствую себя сытой и довольной!' +
      'Спасибо вам, дорогие мои, за вашу четкую и улучшающую жизнь людей работу!',
  },
];
