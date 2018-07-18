import C from './constants'
import {city,membernames,instruments} from './intialState.json'

const state = null
const action = { 
    type: C.fetch_members,
    payload: {
        
    }
}

console.log (`
Constant (actions)
-------------------
${Object.keys(C).join('\n      ')}

`)


 





export { default } from './constants';
