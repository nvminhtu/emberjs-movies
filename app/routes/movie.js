import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return { id: params.movie_id, title: params.title };
  }
});
