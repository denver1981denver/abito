const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
	{
		id: 0,
		title: '1 товар',
		price: '170 P',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 1,
		title: '2 товар',
		price: '200 P',
		address: 'Москва, р-н Замоскворечье',
		date: '13 июня 12:20',
		img: './image/card-img.png'
	},
	{
		id: 2,
		title: '3 товар',
		price: '300 P',
		address: 'Санкт-Петербург, р-н Васильевский остров',
		date: '1 февраля 14:10',
		img: './image/card-img.png'
	},
	{
		id: 3,
		title: '4 товар',
		price: '500 P',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 4,
		title: '5 товар',
		price: '700 P',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 5,
		title: '6 товар',
		price: '1000 P',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
]

const render = (cardList) => {
	cardWrapper.innerHTML = '';

	cardList.forEach((item) => {
		cardWrapper.insertAdjacentHTML('beforeend', `
			<a href="product.html" class="content-main__list-item">
				<div class="content-main__list-item--img">
					<img src="${item.img}" alt="${item.title}">
				</div>

				<h5 class="content-main__list-item--title">${item.title}</h5>
				<strong class="content-main__list-item--price">${item.price}</strong>

				<div class="content-main__list-item--desc-box">
					<span class="content-main__list-item--desc">${item.address}</span>
					<span class="content-main__list-item--desc">${item.date}</span>
				</div>
			</a>
		`)
	});
}

const filteredArray = (array, value) => {
	return array.filter((item) => {
		return item.title.includes(value) || item.price.includes(value)
	})
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener('click', () => {
	render(filteredArray(cardArray, searchInput.value))
});

