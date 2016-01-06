import DS from 'ember-data';

var p = DS.Model.extend({
  name: DS.attr('string'),
  todos: DS.hasMany('todos', { async: true })
});

/*p.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Apa",
        },
        {
            id: 2,
            name: "Anya"
        },
        {
            id: 3,
            name: "Gyerek1"
        },
        {
            id: 4,
            name: "Gyerek2"
        }
    ]
});*/

export default p;