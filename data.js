const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let arrTypes = [] 

const arrHex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const eleIconsContainer = document.querySelector('.icons-container');
const eleSelection = document.querySelector('.filter');



iconGeneration(arrIcons, eleIconsContainer)

eleSelection.addEventListener('change', filterIcons);

///// DICHIARAZIONI FUNZIONI /////

///// GENERAZIONE ELEMENTI HTML /////
function iconGeneration(arrIcons, eleIconsContainer) {
	eleIconsContainer.innerHTML = '';
	arrIcons.forEach(icon => {
		const eleIcon = document.createElement('div');
		eleIcon.classList.add('icon');
		eleIcon.dataset.icontype = icon.type
		eleIconsContainer.append(eleIcon);
		eleIcon.innerHTML = `<i class="${icon.family} ${icon.prefix}${icon.name}" style="color:#${randomHex(arrHex)};"></i>
							 <div>${icon.name.toUpperCase()}</div>
							`
	})

}

///// PUSH DEI TYPE IN ARRAY TIPES /////
arrIcons.forEach(icons => {
	if (!arrTypes.includes(icons.type)) {
		arrTypes.push(icons.type)
	}
})

///// POPOLAZIONE DEL SELECT CON ELEMENTI DI ARRAY TYPES /////
arrTypes.forEach(type => {
	const eleOption = document.createElement('option');
	eleOption.value = type
	eleOption.innerHTML = type
	eleSelection.append(eleOption);
})

///// GENERAZIONE DI UN ARRAY FILTRATA /////
function filterIcons() {
	const typeSelected = this.value;
	
	if (typeSelected != 'all') {
		const filteredIcons = arrIcons.filter(Icons => {
			if (Icons.type == typeSelected) {
				return true
			}
		})
		iconGeneration(filteredIcons, eleIconsContainer)
	}else {
		iconGeneration(arrIcons, eleIconsContainer)
	}
}


function randomIndex() {
	return Math.floor(Math.random() * 16);
}

///// GENERAZIONE COLORE HEX RANDOM /////
function randomHex(arrHex) {
	let hex = ''
	for (let i = 0; i < 6; i++) {
		hex += arrHex[randomIndex()];	
	}
	return hex
}