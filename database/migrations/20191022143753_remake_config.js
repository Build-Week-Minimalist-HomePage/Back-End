
exports.up = function(knex) {
    return knex.schema
        .dropTableIfExists('config')

        .createTable('config', tbl => {
            tbl.increments();
        
            tbl.string('theme', 64).notNullable();
            tbl.string('layout', 64).notNullable();
            tbl.string('pluginOption1', 64).notNullable();
            tbl.string('pluginOption2', 64).notNullable();
            tbl.string('pluginOption3', 64).notNullable();
            tbl.string('pluginOption4', 64).notNullable();

            tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        });
};

exports.down = function(knex) {
            return knex.schema
            .dropTableIfExists('config');
};
