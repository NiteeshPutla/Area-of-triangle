let triangleArea
const button=document.querySelector('button')

function areaOfTriangle(){
    const breadth=prompt('Please input breadth')
    if(breadth===""|| breadth===null){
        triangleArea= "Please Input correct breadth"
    }else{
        "received your input"
    }



    const height=prompt('Please input height')
    if(height===""|| height===null){
        triangleArea= "Please Input correct breadth"
    }else{
        "received your input"
    }
    triangleArea=(breadth*height/2)
    alert(`The area of traingle is ${triangleArea}`)

}
button.addEventListener('click',areaOfTriangle)