export default function Demo()
{
    var companyName="Demo company"
    let hi=() =>
    {
            alert("this is for signup button ")
    }    
    let lg=()=>
    {
        alert("this is for login button ")
    }
    return(
        <>
        <h1>welcome to {companyName}</h1>
        <input type="button" value="Sign up " onClick={()=>hi()}/>
        <input type="button" value="Login" onClick={()=>lg()}/>
        </>
    )
}