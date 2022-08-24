const day = document.getElementById('day')
for(let i=1; i<=31; i++){
    let option = document.createElement('option')
    option.textContent=i
    day.append(option)
    console.log(option)
}

const month = document.getElementById('month')
mon =['January','February','March','April', 'May','June','July','August','September','October','November','December']
for(let i=0; i<12; i++){
    let option = document.createElement('option')
    option.textContent=mon[i]
    month.append(option)
    console.log(option)
}

const year = document.getElementById('year')
for(let i=1990; i<=2022; i++){
    let option = document.createElement('option')
    option.textContent=i
    year.append(option)
    console.log(option)
}