const initialState = {
  boards: [{
    id: 0,
    title: 'Доска номер 1',
    cells: [
      {
        title: 'План на месяц',
        elements: [
          "Попасть на стажировку вк",
          "Пройти курс по React",
          "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
          "Сделать бекенд своего сайта на node.js",
          "Понять, что ты фронтендер и бекенд не пишешь",
          "Расстроиться",
          "Начать учить бекенд?"
        ]
      },
      {
        title: 'План на день',
        elements: [
          "Отрефакторить код",
          "Забронировать тур на субботу",
          "Заполнить localStorage, чтобы человек, проверяющий эту работу (надеюсь такой будет :D), не парился на счет того, чтобы самому все заполнять",
          "Но это конечно-же можно сделать и самому, если есть желание"
        ]
      },
    ]
  }]
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};


export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    console.log(err)
  }
}
