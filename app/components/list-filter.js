import Component from '@ember/component';

export default Component.extend({
	classNames: ['list-filter'],
	valuu: '',
	init(){
		this._super(...arguments);
		this.filtro('').then((results) => {
			this.set('resulto',results.response);
		});
	},
	actions:{
		handleFilterEntry(){
			let filterInputValue = this.valuu;
			let filterAction = this.filtro;
			filterAction(filterInputValue).then((filterResults) => {
				if( filterResults !== undefined) 
					this.set('resulto',filterResults.response)
			});
		}
	}
});
