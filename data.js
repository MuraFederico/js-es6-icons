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



const eleIconsContainer = document.querySelector('.icons-container');
const eleSelection = document.querySelector('.filter');

function iconGeneration(arrIcons, eleIconsContainer) {
	eleIconsContainer.innerHTML = '';
	arrIcons.forEach(icon => {
		const eleIcon = document.createElement('div');
		eleIcon.classList.add('icon');
		eleIcon.dataset.icontype = icon.type
		eleIconsContainer.append(eleIcon);
		eleIcon.innerHTML = `<i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
							 <div>${icon.name.toUpperCase()}</div>
							`
	})

}

iconGeneration(arrIcons, eleIconsContainer)

arrIcons.forEach(icons => {
	if (!arrTypes.includes(icons.type)) {
		arrTypes.push(icons.type)
	}
})

arrTypes.forEach(type => {
	const eleOption = document.createElement('option');
	eleOption.value = type
	eleOption.innerHTML = type
	eleSelection.append(eleOption);
})

eleSelection.addEventListener('change', filterIcons);

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