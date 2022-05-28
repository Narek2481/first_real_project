const img_button_left = document.getElementById('img_button_left');
const img_button_right = document.getElementById('img_button_right');
const changing_img = document.getElementById('changing_img');
const changing_h3 = document.getElementById('changing_h3');
const changing_text = document.getElementById('changing_text');
const changing_text_2 = document.getElementById('changing_text_2');
const img_src = [
    'img/1 6.png', 'img/1 7.png', 'img/1 5 (1).png', 'img/2 3.png', 'img/2 100.png', 'img/3 4.png', 'img/3 5.png', 'img/4 3.png', 'img/4 4.png', 'img/5 1.png', 'img/5 2.png', 'img/6 1.png'
];
const text_h3 = [
    'Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4', 'Шаг 5', 'Шаг 6', 'Шаг 6.1', 'Шаг 7', 'Шаг 7', 'Шаг 8', 'Шаг 8', 'Шаг 9'
];
const text_changing = [
    'Снять защиту', 'Снять гайки с валов', 'Снять насадки с валов', 'Установить основу приставки и верхний лепесток защиты ',
    'Установить на основу приставки держатели ножей ', 'Исходя из толщины кабеля, подобрать зубчатые насадки ',
    'Устанавливать насадки нужно строго симметрично на верхний и нижний валДопускается использовать как насадки из комплекта приставки, так и насадки из комплекта базовой комплектации',
    'Примерно укладываем ножи',
    'Форма ножей может быть любойМы рекомендуем использовать полотно пилы или канцелярские ножи.',
    'В зависимости от толщины кабеля ножи закрепляются в держателях на нужной высоте и выступают на нужную глубину прорезания.Высота установки ножей регулируется подкладочными пластинами.',
    'Для кабелей больших наружных диаметров (больше 80 мм) можно использовать насадки на валы меньшего диаметра из базовой комплектации. Для кабелей малых наружных диаметров в комплекте приставки присутствуют зубчатые шайбы толщиной 3 мм и большего диаметра, для увеличения линейной скорости и удобства настройки.',
    'Опускаем карету верхнего вала так, чтобы кабель оказался надежно захвачен вращающимися насадками'
];



if (img_button_left && img_button_right && changing_img && changing_text && changing_text_2) {
    img_button_left.addEventListener('click', changing_block_1);
    img_button_right.addEventListener('click', changing_block_2);
}
let examination = 0;
function changing_block_2() {
    if (examination == 8) {
        examination = 0;
    } else {
        examination++;
    }
    changing_img.setAttribute('src', img_src[examination]);
    changing_h3.innerHTML = text_h3[examination];
    changing_text.innerHTML = text_changing[examination];
    changing_text_2.innerHTML = examination + 1 + '/ 9';
}
function changing_block_1() {
    if (examination == 0) {
        examination = 8;
    } else {
        examination--;
    }
    changing_img.setAttribute('src', img_src[examination]);
    changing_h3.innerHTML = text_h3[examination];
    changing_text.innerHTML = text_changing[examination];
    changing_text_2.innerHTML = examination + 1 + '/ 9';
}

