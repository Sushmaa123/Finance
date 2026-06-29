inp=document.getElementsByTagName("input")[0]
sub=document.getElementsByTagName("button")[0]
img=document.getElementsByTagName("img")[0]

sub.addEventListener("click",()=>{
    if(inp.value.length<1){
        alert("Please provide input:")
    }
    else
    {
        if(isNaN(inp.value)){
        let img_add=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`
        img.src=img_add
        inp.value=" "
        }
        else{
        alert("please provide the string:")
        }
        setTimeout(()=>{
            img.style.display="none"
        },5000)
    }
})    