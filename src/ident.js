const {getUIDD} = require('utilsProject/src/init');
const ident ={};

ident.getIdent = async ()=>{
    return await getUIDD();
}

module.exports = ident; 