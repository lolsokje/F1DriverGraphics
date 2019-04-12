$(document).ready(function () {
    $('#nameInput').on('keyup', function (e) {
        changeValue('#firstName', e);
    });

    $('#lastNameInput').on('keyup', function (e) {
        const value = e.target.value.toUpperCase();
        $('#lastName').text(value);
    });

    $('#abbreviationInput').on('keyup', function (e) {
        $('#tla').text(e.target.value.toUpperCase());
    })

    $('#teamInput').on('keyup', function (e) {
        changeValue('#team', e);
    });

    $('#numberInput').on('keyup', function (e) {
        changeValue('#number', e);
    });

    $('#positionInput').on('keyup', function (e) {
        changeValue('#position', e);

        const length = e.target.value.length;

        if (length > 2) {
            $('#position').css('font-size', '33px');
        } else {
            $('#position').css('font-size', '48px');
        }
    });

    $('#colorInput').on('change', function (e) {
        const value = e.target.value;
        $('#divider').css('background-color', value);
        $('#extra').css('color', value);
    });

    $('#eliminatedInput').on('change', function (e) {
        const checked = $(this).is(':checked');
        const element = $('#position');

        if (checked) {
            element.addClass('eliminated');
        } else {
            element.removeClass('eliminated');
        }
    });
});

function changeValue(element, e) {
    $(element).text(e.target.value);
}

function takeScreenshot() {
    html2canvas(document.querySelector('#graphic')).then(function(canvas) {
        $('#screenshot').empty();
        document.querySelector('#screenshot').appendChild(canvas);
    });
}