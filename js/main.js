$(document).ready(function () {
    var currentFloor = 2; //изначально задаем значение текущего этажа
    var counterUp = $('.counter-up'); //кнопка увеличения этажа
    var counterDown = $('.counter-down');//кнопка уменьшения этажа
    var floorPath = $('.home-image path'); //какждый отдельный этаж в svg
    var modal = $('.modal');
    var modalClose =$('.modal-close-button');
    var viewFlats = $('.button-primary');

    /*функция при наведении мышки на этаж*/
    floorPath.on('mouseover', function(){ // при клике на этаж меняется значение currentFloor, mouseover - при наведении на этаж
        $(floorPath).removeClass('current-floor'); //удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); //получаем значение текущего этажа 
        $('.counter').text(currentFloor); //меняем значение счетчика на номер выбранного этажа
    });

    /*клик по кнопке вверх*/
    counterUp.on('click', function(){ //отслеж нажатие по кнопке
        if (currentFloor <18){ //проверяем значение этажа
            console.log('click по кнопке вверх');
            currentFloor++; //прибавляем 1 этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false}); //перевод обычного числа в нужный формат 1 в 01
            $('.counter').text(usCurrentFloor); //записыем значение этажа в счетчик справа
            floorPath.removeClass('current-floor'); //удаляем активный класс у объектов (чтобы все не выделялись)
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');//навешиваем на выбранный объект класс подсвечивания (обяз обратный апостроф)
        }
    });

    counterDown.on('click', function(){
        if (currentFloor>2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false}); //перевод обычного числа в нужный формат
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');//навешиваем на выбранный объект класс (обяз обратный апостроф)
        }
    })

    floorPath.on('click', toggleModal); /*клик на этаж, открывается модальнок окно */
    modalClose.on('click', toggleModal); /*закрытие окна*/
    
    function toggleModal(){
        modal.toggleClass('is-open');
    }

    viewFlats.on('click', toggleModal);



    //действия с модальным окном
    var flatPath = $('.flats path'); //какждая квартира в svg
    var flatLink = $('.flat-link');
    var currentFlat = 1; //изначально задаем значение текущего этажа

        flatPath.on('mouseover', function(){ // при клике на этаж меняется значение currentFloor, mouseover - при наведении на этаж
            $('.b').text(); 
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        });
});