let maxId2 = 100
const createRecipeObject = (title, about, ingredients, recipe) => {
  return {
    id: maxId2++,
    title,
    about,
    ingredients,
    recipe,
  }
}
const pumpkinSoup = createRecipeObject(
  'Pumpkin soup',
  'Perfect easy recipe for cold autumn evening',
  [
    { name: 'pumpkin', quantity: '400g' },
    { name: 'whole nutmeg', quantity: 'half' },
    { name: 'single cream', quantity: '150ml' },
    { name: 'salt, pepper, greek oregano', quantity: 'by taste' },
  ],
  'Saute sliced onion in butter. Add grated nutmeg. Add sliced pumkin, salt, pepper, oregano and water to cover pumpkin. Bring to boil. Simmer for 20min. Blend soup and add cream. Stir and serve.'
)
const chickenSoup = createRecipeObject(
  'Chicken soup',
  'Perfect easy recipe for cold autumn evening',
  [
    { name: 'chicken', quantity: '400g' },
    { name: 'whole nutmeg', quantity: 'half' },
    { name: 'single cream', quantity: '150ml' },
    { name: 'salt, pepper, greek oregano', quantity: 'by taste' },
  ],
  'Saute sliced onion in butter. Add grated nutmeg. Add sliced pumkin, salt, pepper, oregano and water to cover pumpkin. Bring to boil. Simmer for 20min. Blend soup and add cream. Stir and serve.'
)

const postniyPlov = createRecipeObject(
  'Постный плов с сухофруктами',
  'Замечательный, насыщенный, очень вкусный постный плов с сухофруктами порадует вас не только в пост, но и в любой день.',
  [
    { name: 'Рис', quantity: '200 г' },
    { name: 'Курага', quantity: '50 г' },
    { name: 'Чернослив', quantity: '50 г' },
    { name: 'Изюм', quantity: '30 г' },
    { name: 'Вяленая вишня', quantity: '30 г' },
    { name: 'Лук репчатый', quantity: '1 шт' },
    { name: 'Морковь', quantity: '1 шт' },
    { name: 'Масло растительное', quantity: '2 ст.л.' },
    { name: 'Специи и приправы', quantity: 'по вкусу' },
  ],
  'Для приготовления возьмём нужные продукты. Что касается специй - При желании вы можете взять зиру, кориандр, барбарис или другие любимые специи. Рис хорошо промоем в нескольких водах, чтобы смыть лишний крахмал, до прозрачной воды. Сухофрукты хорошо промоем и зальём тёплой водой на 10 минут. Тем временем лук порежем кубиками, а морковь - тонкими брусочками. Для приготовления постного плова с сухофруктами возьмите казан или толстостенную кастрюлю. Я буду готовить в сковороде. Главное, чтобы посуда хорошо держала тепло. На разогретом масле обжарим лук до прозрачности, затем добавим морковь. Помешивая, обжарим лук с морковью 5-7 минут. Пока пассеруются овощи, сольём воду с сухофруктов, обсушим их и порежем полосочками. Изюм и вишню я оставила целыми. Добавим сухофрукты к овощам. Если используете зиру или кориандр, добавьте их сейчас, в горячем масле они начнут раскрывать свой вкус и аромат. Перемешаем и подержим на огне 1-2 минуты. Теперь настала очередь риса, выложим его поверх овощей и сухофруктов. Распределите рис равномерно, посолите по вкусу, добавьте паприку и куркуму. Добавьте холодную воду из расчёта 2:1 с рисом. Воду наливайте аккуратно, чтобы рис не перемешался с овощами и сухофруктами, можно использовать ситечко или шумовку, наливать воду через них. Накроем посуду крышкой и будем варить плов на сильном огне 15-20 минут (смотрите по своей посуде и плите, рис должен быть чуть-чуть недоваренным), затем огонь выключим и подержим плов под крышкой ещё 10 минут.'
)

const InitialRecipeObjectList = [pumpkinSoup, chickenSoup, postniyPlov]

export { InitialRecipeObjectList as recipeData }
