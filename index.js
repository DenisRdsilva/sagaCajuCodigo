$(document).ready(function () {
    $(".castanha-wrapper").click(function () {
        $(".container").fadeIn();
        $(this).fadeOut();

        $(".fase1").click(function () {
            localStorage.setItem("faseSelecionada", "1");
            window.location.href = "./fases/primeiraFase.html";
        })
        $(".fase2").click(function () {
            localStorage.setItem("faseSelecionada", "2");
            window.location.href = "./fases/segundaFase.html";
        })
        $(".fase1").click(function () {
            localStorage.setItem("faseSelecionada", "3");
            window.location.href = "./fases/terceiraFase.html";
        })
    });
});