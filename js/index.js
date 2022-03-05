const tabs = document.querySelectorAll('.tab')
const cons = document.querySelectorAll('.con3_con')
const con3_con1_item = document.querySelectorAll('.con3_con1_item')
const con4_left_buttons = document.querySelectorAll('.con4_left_button')
const menuButton = document.getElementById('menuButton')
const close_menu = document.getElementById('close_menu')
const menuOpt = document.getElementById('menuOpt')



const big_cons = document.querySelectorAll('.big_con')
tabs.forEach((el, index) => {
    el.onclick = (e) => {
        tabsReset()
        tabs[index].classList.add('ac')
        cons[index].style.opacity = 1


    }
})
con3_con1_item.forEach((el, index) => {
    el.onclick = (e) => {
        if (con3_con1_item[index].style.height == 'auto') {
            con3_con1_item[index].style.height = '40px'
        } else {
            con3_con1_item_Reset()
            con3_con1_item[index].style.height = 'auto'
        }
    }
    
})
con4_left_buttons.forEach((el, index) => {
    el.onmouseover = (e) => {
        big_cons[index].style.display = 'block'
        big_cons[index].style.opacity = 1

        console.log(index);
    }
    el.onmouseout = (e) => {
        console.log(index);
    }
})
big_cons.forEach((el, index) => {
    el.onmouseout = (e) => {
        big_cons[index].style.display = 'none'
        big_cons[index].style.opacity = 0
    }
})

menuButton.onclick = ()=>{
    menuOpt.style.height = 'auto'
    menuOpt.style.opacity = 1
}
close_menu.onclick = ()=>{
    menuOpt.style.height = 0
    menuOpt.style.opacity = 0
}
function tabsReset() {
    tabs.forEach((el, index) => {
        el.classList.remove('ac')
        cons[index].style.opacity = 0
    })
}

function con3_con1_item_Reset() {
    con3_con1_item.forEach((el) => {
        el.style.height = '40px'
    })
}