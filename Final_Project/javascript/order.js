
window.onload=init;


function init(){


    var x= location.search.substr(1);
    var z= x.split("&");
    tele=getData(z,"number");
    pickdate=getData(z,"Date");
    ot=getData(z,"ordertype");
    document.getElementById("number").value = tele;
    document.getElementById("number").defaultValue = "66504430";
    document.getElementById("date").value=pickdate;
    document.getElementById("date").defaultValue="2018-11-20"
    document.getElementById("caption").innerHTML="Order Number :"+ tele;
    document.getElementById("caption").defaultValue = "Order Number :"+"66504430";

    if(ot=="Pick+Up"){
      document.getElementById("pickup").checked=true;
    }
    else if(ot=="Delivery"){
      document.getElementById("deliver").checked=true;
    }

  function getData(str,name){
    var i=0;
        for(i=0;i<str.length;i++){
      var temp= str[i].split("=");
      if(name==temp[0]){
        return temp[1];
      }
    }
  }

  var list= initMenu();

    function bringImage(){
      var i=0;
      var x;
      for (i=0; i<list.length; i++){
       x=document.createElement("img");
       x.src=list[i].imagefile;
       x.alt=list[i].description;
       x.title=list[i].description;
       x.classList.add("menu");
       x.onclick=imgclicked;
       document.getElementById("container").appendChild(x);
     }
    /* var img=document.querySelectorAll(".menu");
     len=img.length;
     var order=0;
     var sum=0;
     for(var i=0;i<len; i++){
       var images= img[i];
       images.onclick=enter;
     }*/
   }


   bringImage();
   function imgclicked(){
     var temp=this.title;
     enter(temp);
   }
   var sum=0;
   function enter(abc){
     var fullPath=document.getElementsByClassName("menu").description;
     order=prompt("Qty to be ordered","1");
     if(isNaN(order)){
       enter(abc);
     }
     else if(order==null){
       return false;
     }
     else if(order.trim().length!=0){
       var table=document.getElementById("myTable");
       sum=Number(sum)+Number(order);
       var row=table.insertRow(1);
       var cell1=row.insertCell(0);
       var cell2=row.insertCell(1);
       cell1.innerHTML=abc;
       cell2.innerHTML=Number(order);
       cell1.classList.add("cell");
       cell2.classList.add("cell");
       document.getElementById("total").innerHTML= Number(sum);
     }

   }
   document.querySelector("#number").onchange=change;
   function change(){
     var temp=document.querySelector("#number").value;
     document.querySelector("#caption").innerHTML="Order No." + temp;
   }


   document.querySelector("#myform").onsubmit=errors;
   function errors(){
     var num=document.getElementById("number").value;
     var ne=0;
     var de=0;
     if(isNaN(num)){
       document.getElementById("one").innerHTML="Telephone number has to be a number";
       ne=1;
       }
      else if (num.length==0) {
        document.getElementById("one").innerHTML="Telephone number is empty";
        ne=1;
      }
      else if(num.trim()==0){
        document.getElementById("one").innerHTML="Telephone number is empty spaces";
        ne=1;
      }
      else{
        ne=0;

      }

      var dat=document.getElementById("date").value;
      var de;
      if (dat.length==0) {
        document.getElementById("two").innerHTML="Date is empty";
        de=1;
      }
      else if(dat.trim()==0){
        document.getElementById("two").innerHTML="Date is empty spaces.";
        de=1;
      }
      else{
        de=0;

      }

      if (ne==0 & de==0){
        storeInLocalStorage();
        return true;

      }
      else {
        document.getElementById("error").style.display="inline-block";
        document.body.style.opacity="0.5";
        return false;

      }
    }

    function storeInLocalStorage(){

      a=document.querySelectorAll(".cell");
      var i;

      for(i=0; i<a.length; i++){
        var key=i;
        var value=a[i].innerHTML;
        window.localStorage.setItem(key,value);
      }
      window.localStorage.setItem("length",a.length);

k=getElementById("number").value;
window.localStorage.setItem("name",k);
   }







/*var order;
var sum=0;



function GetTheNumber1(){

  var img1= document.getElementById("Photo1");
  order=prompt("Qty to be ordered");
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Pound Layer";
  cell2.innerHTML = Number(order);
  sum=Number(sum)+Number(order);
  document.getElementById("total").innerHTML=Number(sum);

}


function GetTheNumber2(){

  var img2= document.getElementById("Photo2");
  order=prompt("Qty to be ordered");
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "French Cruller";
  cell2.innerHTML = Number(order);

  sum=Number(sum)+Number(order);
  document.getElementById("total").innerHTML=Number(sum);



}
function GetTheNumber3(){

  var img3= document.getElementById("Photo3");
  order=prompt("Qty to be ordered");
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML ="Buccellator";
  cell2.innerHTML = Number(order);

  sum=Number(sum)+Number(order);
  document.getElementById("total").innerHTML=Number(sum);


}
function GetTheNumber4(){

  var img4= document.getElementById("Photo4");
  order=prompt("Qty to be ordered");
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Strawberry"
  cell2.innerHTML = Number(order);

  sum=Number(sum)+Number(order);
  document.getElementById("total").innerHTML=Number(sum);


}

var final=sum;*/





//const input= document.getElementById();
//const giveIn=document.getElementById("Button");

//giveIn.onClick=function(){

  //const key= input.value;
  //const value= giveIn.value;
  //if(key && value){

    //localStorage.setItem(key,value)






}
