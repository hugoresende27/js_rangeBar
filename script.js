const medida = document.getElementById('range')

medida.addEventListener('input', (e) => {
    const x = +e.target.value //valores de input de 0 a 100 +para ser númerico
    const l = e.target.nextElementSibling //<label for="range">50</label> //o sibling de input range é o label range 
   // console.log(x)

   const rangeWidth = getComputedStyle(e.target).getPropertyValue('width') //vai buscar width de range, 300px
   const labelWidth = getComputedStyle(l).getPropertyValue('width')

   const num_width = +rangeWidth.substring(0, rangeWidth.length -2)
   const num_label_width = +labelWidth.substring(0, labelWidth.length -2)
   //console.log(num_width,num_label_width)
   const max = +e.target.max //100
   const min = +e.target.min //0
   

   const esq = x * (num_width / max) - num_label_width / 2 +scale(x,min,max,10,-10)
   //console.log(esq)

   l.style.left = `${esq}px` //left refere se à propriedade style-left recebe o valor esq, que é a diferença com o numero de pixeis totais do range


   l.innerHTML = x //sendo l a label e x o valor de input, a label vai mudar dinamicamente conforme o input
})

///////FUNÇÃO SCALE//////////////////////////////
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}