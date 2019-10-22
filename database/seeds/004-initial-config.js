
exports.seed = function(knex) {
  return knex('config').insert([
    {	
      user_id: 1, 
      theme: 'light', 
      layout: 'first', 
      pluginOption1: 'option1', 
      pluginOption2: 'option2', 
      pluginOption3: 'option3', 
      pluginOption4: 'option4' }
  ]);
};
