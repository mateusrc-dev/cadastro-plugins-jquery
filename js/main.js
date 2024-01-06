$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 00000-0000', {reverse: true});
    $('#cep').mask('00000-000', {reverse: true});

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            enderecoCompleto: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nomeCompleto: "Por favor, insira o seu nome!"
        },
        // submitHandler: function(form) {
        //     console.log(form);
        // },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    });
})