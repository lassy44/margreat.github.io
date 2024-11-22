var btn = document.getElementById("btn")
btn.onclick = (e)=>{
    e.preventDefault()
    var text = document.getElementById("text").value
    text = text.trim()
    var email= document.getElementById("email").value
    email = email.trim()
    var sub= document.getElementById("sub").value
    sub = sub.trim()
    var area = document.getElementById("area").value
    if(text==="" || email==="" || sub===""|| area===""){
        document.getElementById("h2").innerHTML= "Please fill in all the feilds"
    }else{
        alert("Your form has been submitted successfully")
    }
    
}
const nav = document.querySelector(".nav")
const buger = document.querySelector(".buger")
buger.onclick = ()=>{
    nav.classList.toggle("active")
    nav.classList.toggle("show")
    
    
}
//creating about section
let textArray = [
    {data:["Iam an a student of Libra Vocational and Bussiness Institute ","Am still in my year one course of ICT","l have acertificate of uganda National Exams Board."]},{spans:" But so far l have learned Js ,Css, Html Technologies , as well l have affection  for like Technologies like Python ,js,Css, Html ,Java,React and extra"},
    {image:"assets/images/20240723_083429.jpg"} ]
    
let para = document.getElementById("p")
let images = document.getElementById("img")
textArray.forEach(text =>{
    let p = document.createElement("p")
    let span = document.createElement("span")
     images.src = text.image
     span.textContent = text.spans
    p.textContent = text.data
     para.appendChild(p)
     para.appendChild(span)
   span.style.fontSize = "1.5rem"
   p.style.color = "blueviolet"
    span.style.color = "black"
  
 
});
// let arrayMain = ["my name is Margie  am the web developer aswell Css and Html developers ","I  aim at being one of the  best programmer in the world","Professionazing at all trending Technologies</span> like Js and Python"]
// function change(){
//     let random =Math.floor(Math.random()*arrayMain.length)

//     document.getElementById("mainP").innerHTML = arrayMain[random]
// }
// setInterval(change, 3000)
//SKILLS SECTION
let skills = new Map([
    [1,{image:"assets/images/image copy 17.png",range:"80%"}],
    [2,{image:"assets/images/image copy 16.png",range:"90%"}],
    [3,{image:"assets/images/image copy 19.png",range:"70%"}]

]);
let skill_1 = document.getElementById("skill_1")
let skill_2 = document.getElementById("div_skill")
let skill_3 = document.getElementById("div_skill_1")
skills.forEach((skil, id) =>{
    let img = document.createElement("img")
    img.src = skil.image
    let input = document.createElement("input")
    input.type = "range"
    let p = document.createElement("p")
    p.textContent = skil.range
    if(id===1){
        skill_1.appendChild(img)
        skill_1.appendChild(input)
        skill_1.appendChild(p)


    }
    if(id===2){
        skill_2.appendChild(img)
        skill_2.appendChild(input)
        skill_2.appendChild(p)
    }
    if(id===3){
        skill_3.appendChild(img)
        skill_3.appendChild(input)
        skill_3.appendChild(p)
    }



    

});
