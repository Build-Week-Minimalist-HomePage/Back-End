
exports.seed = function(knex) {
  return knex('links').insert([
    {	user_id: 1, link_name: 'Google maps', link_url: 'https://maps.google.com' },
    {	user_id: 1, link_name: 'Google calendar', link_url: 'https://calendar.google.com/calendar/' },
    {	user_id: 1, link_name: 'Google drive', link_url: 'https://drive.google.com/drive/my-drive' }
  ]);
};
