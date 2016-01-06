import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
    tagName:'',
    model() {
        return DS.store.findAll('person');
    },
    actions: {
        addTodo(){
            this.get('onSave')({
                //ez azért nem this.$(...).val() mert nem ismeri fel a this.$ -t
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                assignedto: document.getElementById("description").value,
            });
        }
    }
});
