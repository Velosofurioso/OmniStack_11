const connection = require('../database/connection');
const crypto = require('crypto');
const generatedUniqued = require('../utils/generateUniqueId');

module.exports = {
    
    //GET-ALL
    async index(request, response){

        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    // POST
    async create(request, response){
        
    const { name, email, whatsapp, city, uf} = request.body;

    const id = generatedUniqued();

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
    }
}