import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
    tagName:'',
    model() {
        return DS.store.findAll('todo');
    },
    actions: {
        editTodo(item){
            console.log(item);
        },
        deleteTodo(item){
            item.deleteRecord();
            item.save();
        }
    },
});
