let page1 = ` <div class="input-area">
<div class="input-title">
    <p>Keresztnév</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" id="keresztnev" onblur="unfocused(event)" type="text" class="input"
        placeholder="Keresztnév" onfocus="focused(event)" onblur="unfocused(event)">
</div>
</div>
<div class="input-area">
<div class="input-title">
    <p>Vezetéknév</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" id="vezeteknev" onblur="unfocused(event)" type="text" class="input"
        placeholder="Vezetéknév">
</div>
</div>
<div class="input-area">
<div class="input- le">
    <p>Születési dátum</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" onblur="unfocused(event)" type="date" class="input"
        placeholder="Születési dátum" max="2010-01-01">
</div>
</div>
<div class="input-area">
<div class="input-title">
    <p>Jelszó</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" onblur="unfocused(event)" type="password" class="input"
        id="password" placeholder="Jelszó">
</div>
</div>
<div class="input-area">
<div class="input-title">
    <p>Jelszó mégegyszer</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" onblur="unfocused(event)" type="password" class="input"
        id="password2" placeholder="Jelszó mégegyszer">
</div>
</div>`;

let page2 = `
<div class="input-area">
<div class="input-title">
    <p>Lakcím</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" onblur="unfocused(event)" type="text" class="input"
        placeholder="Lakcím">
</div>
</div>
<div class="input-area">
<div class="input-title">
    <p>Telefonszám</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" onblur="unfocused(event)" type="tel" class="input"
        placeholder="Telefonszám">
</div>
</div>
<div class="input-area">
<div class="input-title">
    <p>Email</p>
</div>
<div class="input-block">
    <input onfocus="focused(event)" onblur="unfocused(event)" id="email" type="email" class="input"
        placeholder="Email">
</div>
</div>

<div class="checkbox-row">
<div class="box" onclick="getCheckbox()" >
    <i class="fas fa-check checkIcon"></i>
</div>
<div class="text">
    <p>Elfogadom az ÁSZF-et</p>
</div>
</div>
`

let page3 = ` <div style="display:flex;justify-content:center" >
<lottie-player class="correct-animation" src="script/correct.json"
    background="transparent" speed="0.5" autoplay>
</lottie-player>

</div>
<p class="correct-feedback" >Sikeres regisztráció</p>`

let buttons = `<div class="back-button" onclick="back()" >
<span>
    Vissza
</span>
</div>
<div class="next-button" onclick="next()" >
<span>
    Tovább
</span>
</div>
`

let button = `<div class="next-button" onclick="next()" >
<span>
    Tovább
</span>
</div>`


let activePage = 0;

let pages = [page1, page2, page3];

$(document).ready(() => {
    $(".forms > form").append(page1)
    indicator()
    //$(".button-area").html(button);
})
$("#password2").ready(function () {
    $("#password2").blur(function (e) {

        if (accepted) {

            let password = $("#password").val();
            let password2 = $("#password2").val();
            if (password != password2) {
                alertBox("A jelszavak nem egyeznek")
            }
            else {
                //Adatok begyűjtése és api hívás
                $(".button-area").html(button);
            }
        }
        else {
            $(".button-area").html('');
        }
    });
});

function getCheckbox() {
    let ok = checkbox();
    if (!ok) {
        $(".button-area").html('');
    }
    else {
        $(".button-area").html(buttons);
    }

};


function next() {
    activePage++;
    $(".forms").html(pages[activePage]);
    if (activePage > 0 && activePage <= 1) {
        $(".button-area").html('');
    }
    else if (activePage == 2) {
        $(".button-area").html("");
    }
    else {
        $(".button-area").html(button);
    }
indicator()
};
function back() {
    activePage--;
    $(".forms").html(pages[activePage]);
    if (activePage > 0 && activePage <= 1) {
        $(".button-area").html(buttons);
    }
    else {
        $(".button-area").html(button);
    }
    indicator()
};

function indicator() {
    for (let i = 0; i <= activePage; i++) {
        $(".hr").eq(i).css("background-color", "#00c0bd")
        $(".indicator-title").eq(i).css({
            "border-color": "#00c0bd",
            "color": "#00c0bd"
        })
    }

}