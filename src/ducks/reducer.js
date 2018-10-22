import axios from 'axios';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    monthly_mortgage: 0,
    desired_rent: 0
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';
const UPDATE_DB = 'UPDATE_DB';

export default function reducer (sT = initialState, action){
    switch(action.type) {
        case UPDATE_NAME:
            return Object.assign({},sT,{name: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign({},sT,{address: action.payload});
        case UPDATE_CITY:
            return Object.assign({},sT,{city: action.payload});
        case UPDATE_STATE:
            return Object.assign({},sT,{state: action.payload});
        case UPDATE_ZIP:
            return Object.assign({},sT,{zip: action.payload});
        case UPDATE_IMAGE:
            return Object.assign({},sT,{image: action.payload});
        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({},sT,{monthly_mortgage: action.payload});
        case UPDATE_DESIRED_RENT:
            return Object.assign({},sT,{desired_rent: action.payload});

            default: return sT;
    }
}

// need to backtrack and set up state in each step and pull state to store onClick 
// for each step then third step complete button needs to axios.post to db

export function updateName(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(state){
    return {
        type: UPDATE_STATE,
        payload: state
    }
}
export function updateZip(zip){
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateImage(image){
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}
export function updateMonthlyMortgage(monthly_mortgage){
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthly_mortgage
    }
}
export function updateDesiredRent(desired_rent){
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desired_rent
    }
}

// clear = ()=>{
//     this.initialState({
//         name: '',
//         address: '',
//         city: '',
//         state: '',
//         zip: 0,
//         image: '',
//         monthly_mortgage: 0,
//         desired_rent: 0
//     })
// }

// export function postReq(){
       
//     axios.post('/api/house', this.)
//     .then(() => {
//      this.clear()})
// }
