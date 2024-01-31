const select = document.getElementById('buscar')

select.addEventListener('change', function () {
  const selectedOption = this.options[select.selectedIndex];
  console.log(selectedOption.value + ': ' + selectedOption.text);

  switch (selectedOption.value) {
    case 'Default':
      showAll()
      console.log("default")
      break
    default:
      showList(selectedOption.value)
      break
  }
})

function showList(option) {
  const shop = document.getElementById(option)
  const options = []
  
  for (i=0; i<select.length; i++) {
    options[i] = select.options[i].value;
    if (i!=0) {
      const shops = document.getElementById(options[i])
      shops.style.display = 'none'
    }
  }
  shop.style.display = 'block'
}
function showAll() {
  const options = []
  for (i=1; i<select.length; i++) {
    options[i] = select.options[i].value;
    const shops = document.getElementById(options[i])
    shops.style.display = 'block'
  }
}