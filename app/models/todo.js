import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  assignedto: DS.belongsTo('person', { async: true })
});
