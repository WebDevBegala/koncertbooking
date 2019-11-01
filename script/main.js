// regex 
let name = new RegExp(/[a-zA-Z]{3,}/);
let password = new RegExp(/[a-zA-Z0-9]{8,28}/);
let phone = new RegExp(/[0-9]{6,}/);
let address = new RegExp(/[a-zA-Z0-9]{8,}/);
let email = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
let accepted = false
function focused(e) {
    let targetTitle = $(e.target).parent().parent().children(".input-title");
    let targetInput = $(e.target)
    targetTitle.css("color", "#23b7bc")
    targetInput.css("border-color", "#23b7bc")
}

function unfocused(e) {
    let targetTitle = $(e.target).parent().parent().children(".input-title");
    let targetInput = $(e.target);
    let currentType = $(targetInput).attr("type");
    targetTitle.css("color", "black")
    targetInput.css("border-color", "gray")
    switch (currentType) {
        case "text":
            if ($(targetInput).attr("placeholder") != "Lakcím") {
                if (!name.test($(targetInput).val())) {
                    accepted = false;
                    targetTitle.css("color", "red")
                    targetInput.css("border-color", "red")
                }
            }
            else { accepted = true }
            break;

        case "password":
            if (!password.test($(targetInput).val())) {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
                alert("A jelszónak legalább 8 karakternek kell lennie és csak betűt és számot tartalmazhat ")
            } else { accepted = true }
            break;
        case "tel":
            if (!phone.test($(targetInput).val())) {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
            } else { accepted = true }
            break;
        case "email":
            if (!email.test($(targetInput).val())) {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
            } else { accepted = true }
            break;
        case "date":
            console.log($(targetInput).val())
            if ($(targetInput).val() == null || $(targetInput).val() == "") {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
            } else { accepted = true }
            break;
    }
}

function checkbox() {
    let icon = $(".checkIcon")
    if ($(icon).css("display") == "block") {
        icon.css("display", "none")
    }
    else {
        icon.css("display", "block")
    }

}

function registration() {
    if (accepted) {
        let password = $("#password").val();
        let password2 = $("#password2").val();
        if(password != password2){
            alert("A jelszavak nem egyeznek")
        }
        else{
            //Adatok begyűjtése és api hívás
        }
    }
    else {
        alert("Kérjük ellenőrize az adatokat")
    }
}


