import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        console.log('Itt vagyok');
        return this.store.findAll('todo');
    }
});
