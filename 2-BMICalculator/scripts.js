const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results')
    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML=`Plese give a Valid Height ${height}`
    }else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML=`Plese give a Valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let  ans="";
        if(bmi<18.6) ans="Underweight";
        else if(bmi>=18.6 && bmi<=24.9) ans="Normal"
        else ans="Overweight"
        result.innerHTML=`<span>BMI = ${bmi} kg/m<sup>2</sup> (${ans}) </span>`
    }
})