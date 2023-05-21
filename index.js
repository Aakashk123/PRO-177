let words = [
    {
        "input":5,
        "category":"Sports",
        "word":"Chess"
    },
    {
        "input":6,
        "category":"European Country Name",
        "word":"France"
    },
]
$(document).ready(function () {
    displayWord();
})

$(function () {
    $(".input_field").keyup(function () {
        let id = $(this).attr("id");
        let input_number = id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val());
    })

    $("#next_word").click(unction () {
        displayWord();
    })
})

function displayWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    $("#words").html(words.title)

    $("#bank_words").empty();
    for (let i = 0; i <word.words.length; i++) {
        let html = `<button class="word_bank_button">${word.words[i]}</button>`
        $("#bank_words").append(html)
    }
    
    $("#input_fields").empty();
for (let i = 0; i < word.inputs; i++) {
    let input_html = `<input type="text" class="input_field" id="input_${i}" placeHolder="Input ${i + 1}"/>`
    $("input_fields").append(input_html)
}
$("#word_text").html(word.word)
}