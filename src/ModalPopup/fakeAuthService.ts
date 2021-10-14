
import { LoginArgs } from './LoginModel';

const loginUser = ({password, login}: LoginArgs): Promise<boolean> => new Promise((resolve,reject) =>setTimeout(() =>{
    if(login === 'tomatoPotato' && password === 'test1234'){
        resolve(true)
    }
    else{
        reject('creadentials are wrong')
    }
},1500))


export  default loginUser;
