const Validations = (input) =>{
let error = {};

if (!input.name){
    error.name = "Input name must not be empty"
}

if (!input.lastname){
    error.lastname = "Lastname input must not be empty"
}

if (!input.comments){
    error.comments = "comment input is empty"
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.mail)){
    error.mail = "Email written is invalid"
}


if (!input.activityName){
    error.activityName = "Actvity require a name"
}

if (!input.description){
    error.description = "Please, write a little description about Activity"
}

if (!input.difficulty){
    error.difficulty = "The difficulty of activity is necessary"
}

if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(input.time)){
    error.time = "Time format is ivalid. Check format and type again (HH:MM)"
}

if (!input.season){
    error.season = "Please select an ideal season for this activity"
}
if (!input.country.length){
    error.country = "At least one country should be associated to this activity"
}


return error
}
export default Validations