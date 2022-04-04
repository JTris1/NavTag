let expanded = false;

function dropdown() {
    if(!expanded) {
        document.getElementById("myDropdown").style.display="flex";
        expanded = true;
    }
    else {
        document.getElementById("myDropdown").style.display="none";
        expanded = false;
    }
    
}