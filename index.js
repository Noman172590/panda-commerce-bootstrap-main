var spanElements = document.getElementsByTagName('h2');

for (var i = 0; i < spanElements.length; i++) {
    spanElements[i].style.color = 'lightblue';
}

document.getElementById('backpack').style.backgroundColor='tomato'


 var n=document.getElementsByClassName('card')

 for(var k of n)
 {
    k.style.borderRadius='30px'
   
 }

  function btni(){
    console.log("this is founded funtion")
  }
 
 document.getElementById('btn3').addEventListener('click',function () {
         document.getElementById('div3').remove();

     })
 
 document.getElementById('btn2').addEventListener('click',function () {
         document.getElementById('div2').remove();

     })
 document.getElementById('btn1').addEventListener('click',function () {
         document.getElementById('div1').remove();

     })
 

 document.getElementById('exampleInputEmail1').addEventListener('keyup',function(e){
     var delteButton=document.getElementById('dis')
    var text=e.target.value;
    if(text==='delete')
    {
            delteButton.removeAttribute('disabled')
    }
    else{
        delteButton.setAttribute('disabled',true)
    }

})    


function setNewphoto()
{
    document.getElementById('img1').src='images/shoes/shoe-2.png';
}
function oldpic()
{
    document.getElementById('img1').src='images/shoes/shoe-1.png';
}
  
document.getElementById('lets').addEventListener('dblclick',function(e){
    e.target.style.backgroundColor='tomato'
})


