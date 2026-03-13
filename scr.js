function toggleTheme(){
    document.body.classList.toggle("dark-theme");
}

function closeBanner(){
    document.getElementById("notification").style.display = "none";
}

document.getElementById("appointmentForm")?.addEventListener("submit",function(e){

    e.preventDefault();

    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let dept = document.querySelector("select").value;
    let date = document.querySelector("input[type='date']").value;

    if(name=="" || email=="" || dept=="Select Department"){
        alert("Please fill all fields");
        return;
    }

    alert("Appointment booked successfully for "+name+" on "+date+" in "+dept+" department");

    this.reset();
});