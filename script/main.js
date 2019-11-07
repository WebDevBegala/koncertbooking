// regex 
let name = new RegExp(/[a-zA-Z]{3,}/);
let password = new RegExp(/[a-zA-Z0-9]{8,28}/);
let phone = new RegExp(/[0-9]{6,}/);
let address = new RegExp(/[a-zA-Z0-9]{8,}/);
let email = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

let accepted = false;

let inputData = {
    name: "",
    mobile: "",
    email: "",
    lakcim: ""
}

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
                else {
                    inputData.name = $("#vezeteknev").val()+"_"+$("#keresztnev").val()
                }
            }
            else {
                accepted = true
                inputData.lakcim = targetInput.val()
            }
            break;

        case "password":
            if (!password.test($(targetInput).val())) {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
                alertBox("A jelszónak legalább 8 karakternek kell lennie és csak betűt és számot tartalmazhat ")
            } else { accepted = true }
            break;
        case "tel":
            if (!phone.test($(targetInput).val())) {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
            } else {
                accepted = true
                inputData.mobile = targetInput.val()
            }
            break;
        case "email":
            if (!email.test($(targetInput).val())) {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
            } else {
                accepted = true
                inputData.email = targetInput.val()
            }
            break;
        case "date":
            if ($(targetInput).val() == null || $(targetInput).val() == "") {
                accepted = false;
                targetTitle.css("color", "red")
                targetInput.css("border-color", "red")
            } else {
                accepted = true
                inputData.date = targetInput.val()
            }
            break;
    }
}

function checkbox() {
    let icon = $(".checkIcon")
    if ($(icon).css("display") == "block") {
        icon.css("display", "none")
       return  false;
    }
    else {
        icon.css("display", "block")
       return true
    }

}

function registration() {
    if (accepted) {
        let password = $("#password").val();
        let password2 = $("#password2").val();
        if (password != password2) {
            alertBox("A jelszavak nem egyeznek")
        }
        else {
            //Adatok begyűjtése és api hívás
        }
    }
    else {
        alertBox("Kérjük ellenőrize az adatokat")
    }
}


function alertBox(text) {
    let alert = $(".alert-box");
    $("#alert-text").text(text)
    $(alert).css("display", "block")
}
function closeAlert() {
    $(".alert-box").css("display", "none")
}

