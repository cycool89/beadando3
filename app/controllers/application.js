import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
    title: "TODO List Application",
    actions: {
        toggle(id,title,description,aid) {
            this.set('toggleDisabled',true);
            document.getElementById("id_edit").value = id;
            document.getElementById("title_edit").value = title;
            document.getElementById("description_edit").value = description;
            document.getElementById("assignedto_edit").value = aid;
        },
        editTodo(){
            var id = document.getElementById("id_edit").value;
            var select = document.getElementById("assignedto_edit");
            var formData = {
                title: document.getElementById("title_edit").value,
                description: document.getElementById("description_edit").value,
                assignedto: {
                    id: select.value,
                    name: select.options[select.selectedIndex].text
                }
            };
            var _this = this;
            this.store.find('todo',id).then(function(todo){
                _this.store.find('person',select.value).then(function(person){
                    todo.set('assignedto',person);
                    todo.set('title',formData.title);
                    todo.set('description',formData.description);
                    todo.save().then(function(){
                        _this.set('toggleDisabled',false);
                    });
                });
            });
            
        },
        deleteTodo(itemid){
            console.log(itemid);
            this.store.find('todo', itemid).then(function (item) {
              item.destroyRecord();
            });
        },
        submit(){
            this.set('toggleDisabled',false);
            var select = document.getElementById("assignedto");
            var formData = {
                title: document.getElementById("title").value,
                description: document.getElementById("description").value
            };
            var todo = this.store.createRecord(
                'todo', 
               formData
            );
            var person = this.store.find('person',select.value);
            todo.set('assignedto',person);
            todo.save().then(function(){
                person.get('todos').then(function(todos){
                    todos.pushObject(todo);
                    todos.save();
                    person.save();
                });
            });
        }
    },
});
