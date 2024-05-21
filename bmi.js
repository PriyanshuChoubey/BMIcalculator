const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()     //we prevent the default function of a form
    const height = parseInt(document.querySelector('#height').value) //.value give the value of input which is by default string so convert it into int using parseInt
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    //checks
    if(height === '' || height<0 || isNaN(height))     //isNaN(height) is an updated way for height != NaN
    {
        results.innerHTML = `Please enter a valid height!! ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight))     //isNaN(height) is an updated way for height != NaN
    {
        results.innerHTML = `Please enter a valid height!! ${weight}`
    }
    else
    {
        const bmi = `${(weight/((height*height)/10000)).toFixed(2)}`  //tofixed(2) --> upto 2 decimal place
        if(bmi<18.6)
        {
            results.innerHTML = `You are Under Weight! BMI = ${bmi}`
        }
        else if(bmi>24.9)
        {
            results.innerHTML = `You are Over Weight! BMI = ${bmi}`
        }
        else
        {
            results.innerHTML = `CONGRATULATION! you are fit :)  BMI = ${bmi}`
        }
    }

})