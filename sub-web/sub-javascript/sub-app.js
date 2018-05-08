function FeedBack() {
    alert("Gửi thành công. Xin cám ơn!!!");
    var x_name = document.getElementById("y-name").value;
    x_name = "NAME:   " + x_name;
    var x_mail = document.getElementById("y-mail").value;
    x_mail = "EMAIL:   " + x_mail;
    var x_content = document.getElementById("y-content").value;
    x_content = "CONTENT: " + x_content;
    document.getElementById("push-name").innerHTML = x_name;
    document.getElementById("push-mail").innerHTML = x_mail;
    document.getElementById("push-content").innerHTML = x_content;
}