
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){

        table.increments(); //CAMPO AUTOINCREMENT

        table.string('title').notNullable(); // DEFINE COMO UMA COLUNA NOT NULL
        table.string('description').notNullable(); 
        table.decimal('value').notNullable(); 
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); // CRIA UMA CHAVE ESTRANGEIRA DA TABELA ONGS
    });
};

exports.down = function(knex) {
 return knex.schema.dropTable('incidents');
};
