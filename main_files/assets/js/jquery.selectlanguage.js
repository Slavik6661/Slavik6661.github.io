$(document).ready(function () {
  // Добавляем эффект при наведении и клике
  $(".language-list li").on("click", function () {
    // Убираем класс "selected" у всех элементов
    $(".language-list li").removeClass("selected");

    // Добавляем класс "selected" к выбранному элементу
    $(this).addClass("selected");

    // Выводим в консоль выбранный язык
    const selectedLanguage = $(this).data("lang");
    console.log("Выбранный язык:", selectedLanguage);
  });
});
