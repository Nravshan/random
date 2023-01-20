


    var endings = ["mail.ru", "uzb.uz", "wepro.uz", "yandex.ru", "gmail.com"],
        symbols = "ravshanamirdamirsamirxamirxondamir701774777007";

    function rand(min, max) {
        return (min + Math.random() * (max - min + 1)) | 0
    }

    function getRandomStr(len) {
        var ret = ""
        for (var i = 0; i < len; i++)
            console.log(ret += symbols[rand(0, symbols.length - 1)]);
        return ret;
    }

    function getEmail() {
        var a = getRandomStr(rand(3, 5)),
            b = getRandomStr(rand(3, 5));
        return a + "." + b + "@" + endings[rand(0, endings.length - 1)];
    }

    alert(getEmail())


