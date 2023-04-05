// Campos que serão validados
cvvInput = document.querySelector('#cc-cvv')
creditCardNumber = document.querySelector('#cc-number')
creditCardValidity = document.querySelector('#cc-validity')

/* 
  A função IMask recebe como parâmetro o campo que será aplicado a máscara de validação
  O segundo argumento é um objeto dizendo como deve ser esta validação
*/


IMask(cvvInput, {
  // Dizendo que só pode ser 4 números
  mask: '0000'
})


IMask(creditCardNumber, {
  mask: '0000 0000 0000 0000'
})

IMask(creditCardValidity, {
  // Neste caso é necessário formatar os blocos de máscara
  mask: 'MM{/}YY',


  blocks: {
    // No campo de mês é necessário limitar para valores acima de 12
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    // O Campo de ano deve receber no máximo 10 anós após da data atual
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2)
    }
  },

})