function passWord() {
    var testV = 1;
    var pass1 = prompt('Enter The Password',' ');
    while (testV < 3) {
    if (!pass1) 
    history.go(-1);
    if (pass1.toLowerCase() == "paulisafish, powwer") {
    alert('Correct, welcome back to the Methods page.');
    window.open('youcansmdskdmafhij2efqwdfsdfiosdfhi.html');
    break;
    } 
    testV+=1;
    var pass1 = 
    prompt('Incorrect password.');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
    history.go(-1);
    return " ";
    } 
