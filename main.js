
function createQR() {
    let txtWiffi = document.getElementById('txtWiffi').value;
    let txtPassword = document.getElementById('txtPassword').value;
    let baoName = document.getElementById("baoName");
    let baoPass = document.getElementById("baoPass");
    let qrcode = document.getElementById("qrcode");
    if (txtWiffi.trim().length==0) {
        baoName.innerHTML = "Vui lòng nhập tên wiffi";
    }
    if(txtPassword.trim().length==0){
        baoPass.innerHTML = "Vui lòng nhập mật khẩu";
    }
    else{
        let wf = 'WIFI:T:WPA;S:' + txtWiffi + ';P:' + txtPassword + ';;';
        if(qrcode.innerHTML){
            qrcode.innerHTML = "";
        }
        let qrcode2 = new QRCode(qrcode,{
            text: wf,
            width: 200,
            height: 200
        });
        saveNameWiffi(txtWiffi);
    }
    saveText(txtWiffi);
}
function deleteText(val){
    document.getElementById(val).value="";
}
function hidePassword(){
    var pass = document.getElementById("txtPassword");
    if(pass.type==="password"){
        pass.type="text";
    }else{
        pass.type="password";
    }
}
// lấy danh sách tên wiffi từ local
function getSavedWiffiNames() {
    var savedNames = localStorage.getItem('wiffiNames');
    if (savedNames) {
      return JSON.parse(savedNames);
    } else {
      return [];
    }
}
// Hiển thị danh sách các tên wiffi đã lưu
function showSavedWiffiNames() {
    var savedNames = getSavedWiffiNames();
    savedNames.forEach(function(name) {
      console.log(name);
      // Hiển thị tên wiffi trên giao diện người dùng
    });
}

// lưu tên wiffi vào local
function saveNameWiffi(nameWiffi){
    var saveName = getSavedWiffiNames();
    saveName.push(nameWiffi);
    localStorage.setItem('wiffiNames',JSON.stringify(savedName));
}


