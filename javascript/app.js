            function MyFunction() {
                var st = document.getElementById("fo").innerHTML;
                if(st == "FOLLOW")
                    st = "UNFOLLOW";
                else st = "FOLLOW";
                document.getElementById("fo").innerHTML = st;
            }
            function Profile() {
                document.getElementById("view").innerHTML="Profile";
            }
            function Project() {
                document.getElementById("view").innerHTML="Project";

            }
            function Statistial() {
                document.getElementById("view").innerHTML="Statistial";
            }
            function BenefitWeb() {
                document.getElementById("view").innerHTML="Benefit Web";
            }
            function YourFeedBack() {
                document.getElementById("view").innerHTML="FeedBack";
            }
            function WelcomeName() {
                var name = document.getElementById("enter-name").value;
                if(name.length > 30) 
                {
                    alert("Vui lòng nhập tên có tối đa 30 kí tự!!!");
                    document.getElementById("post-name").innerHTML = "NO NAME";
                    document.getElementById("enter-name").value = null;
                } 
                else 
                {
                    name = name.toUpperCase();
                    if(name != "") {
                        name = "WELCOME " + name;
                        document.getElementById("post-name").innerHTML = name;
                        document.getElementById("enter-name").value = null;
                    } 
                    else document.getElementById("post-name").innerHTML = "NO NAME";
                }
            }