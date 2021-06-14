export default ({
	namespaced: true,
	state: {
		menu: [
			{ title: 'Доски', route: 'Dash' },
			{ title: 'Задачи', route: 'Projects' },
		]
	},
	getters: {
		menu: state=>state.menu
	}
})
