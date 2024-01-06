$(document).ready(function () {
    $('#cpf').mask('000.000.000-00', { placeholder: "123.456.789-00",reverse: true });
    $('#telefone').mask('(00) 00000-0000', { placeholder: "(00) 12345-1234" });
    $('#cep').mask('00000-000', { placeholder: "12345-123", reverse: true });

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
                required: true,
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
            nomeCompleto: "Por favor, insira o seu nome!",
            email: "Por favor, insira o seu email!",
            telefone: "Por favor, insira um telefone válido!",
            cpf: "Por favor, insira um CPF válido!",
            enderecoCompleto: "Por favor, insira o seu endereço completo!",
            cep: "Por favor, insira um CEP válido!",
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