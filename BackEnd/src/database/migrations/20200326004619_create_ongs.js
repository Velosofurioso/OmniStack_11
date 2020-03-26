
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function(table){
      table.string('id').primary(); //DEFINE ESTE CAMPO COMO PRIMARIO
      table.string('name').notNullable(); // DEFINE COMO UMA COLUNA NOT NULL
      table.string('email').notNullable(); 
      table.string('whatsapp').notNullable(); 
      table.string('city').notNullable(); 
      table.string('uf', 2).notNullable(); 
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs'); 
};
