import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		//new ver? 
		return  this.store.findAll('reference');
		//old ver? 
		//return  this.get('store').findAll('reference');
	}
});
