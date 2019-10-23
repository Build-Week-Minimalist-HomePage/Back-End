const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByUserId,
    update,
    remove
  };

function find() {
    return db('notes').select('id', 'user_id', 'note');
}

function findBy(filter) {
    return db('notes').where(filter);
}
  
async function add(note) {
    const [id] = await db('notes').insert(note);

    return findById(id);
}
  
function findById(id) {
    return db('notes')
    .select('id', 'user_id', 'note')
        .where({ id })
        .first();
}

function findByUserId(user_id) {
    return db('notes')
    .select('id', 'user_id', 'note')
        .where({ user_id });
}

function update(changes, id) {
    return db('notes')
    .update(changes)
    .where('id', id)
    .then(() => {
        return findById(id)
    })
}

function remove(id) {
    findById(id).then(selectedNote => {
        note = selectedNote;
    })
    return db('notes')
    .where('id', id)
    .del()

}