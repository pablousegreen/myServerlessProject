const ident = require ('../ident')
const initTest = {};


getId = async() =>{
    let res = await ident.getIdent();
    console.log('Res : ', res);
    return res;
}

getId();