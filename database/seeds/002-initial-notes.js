
exports.seed = function(knex) {
  return knex('notes').insert([
    {	user_id: 1, note: 'Some important note' },
    {	user_id: 1, note: 'Anothe important note here' }
  ]);
};
