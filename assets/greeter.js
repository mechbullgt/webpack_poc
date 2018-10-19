import moment from 'moment';

function greet(){
    var day = moment().format("dddd");
    console.log('Welcome to India, have a great '+day+'!');
}

export default greet;