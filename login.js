document.getElementById('submitBtn').addEventListener('click' , function(){
    const emailField = document.getElementById('emailField').value ;
    // console.log(emailField) ; 
    const passwaordField = document.getElementById('passwaordField').value ;
    const rePasswaordField = document.getElementById('rePasswaordField').value ;
    console.log(rePasswaordField) ;
    if(emailField == 'raj2022@gmail.com' && passwaordField == 'raj2022' && rePasswaordField =='raj2022'){
        location.href = 'http://127.0.0.1:5500/bank%20transaction%20project/bankWithdrowDepo.html';
        
        // window.location.href ='bankWithdrowDepo.html' ;
    }
})