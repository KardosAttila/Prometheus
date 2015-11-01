var Waterline = require('waterline');


module.exports = Waterline.Collection.extend({
    identity: 'tantargy',
    connection: 'disk',
    attributes: {
        nev: {
        type: 'string',
        required: true
            
        },
        oktato: {
            type: 'string',
            required: true    
        },
        
        
        datum:{ 
            type: 'date',
            defaultsTo: function () { return new Date(); },
                },
        megjegyzes: {
            type: 'string',
            required: true
            
        },
        user: {
            model: 'user'
        },
        
        
    }
});