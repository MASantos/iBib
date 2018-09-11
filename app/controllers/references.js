import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		filterByCategory(param){
			if( param != ''){
				return this.store
					.query('reference', {category: param})
					.then((ans) => {
					return {query:param, response: ans}; 
				});
			} else {
				return this.store
					.findAll('reference')
					.then((ans) => {
					return {query: param, response: ans};
				});
			}
		}	
	}
});
