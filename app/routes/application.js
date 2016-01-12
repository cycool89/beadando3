import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        //return this.store.findAll('todo');
        var todos = this.store.findAll('todo');
        var people = this.store.findAll('person');
        return Ember.Object.create({
            todos: todos,
            people: people
        });
    }
});
