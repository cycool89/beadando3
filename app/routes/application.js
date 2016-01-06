import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            todos(){ return this.store.findAll('todo');},
            people(){ return this.store.findAll('person');}
        }
    }
});
