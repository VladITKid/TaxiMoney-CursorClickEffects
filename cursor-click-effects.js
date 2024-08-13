// Создание блока для визуальных эффектов
const createCursorClickEffect = document.createElement('span');
createCursorClickEffect.className = 'cursor-click-effect';
document.body.appendChild(createCursorClickEffect);

const createCursorClickEffectOne = document.createElement('span');
createCursorClickEffectOne.className = 'cursor-click-effect-1';
document.body.appendChild(createCursorClickEffectOne);

const createCursorClickEffectTwo = document.createElement('span');
createCursorClickEffectTwo.className = 'cursor-click-effect-2';
document.body.appendChild(createCursorClickEffectTwo);


// Массив с классами блоков визуальных эффектов
const cursorClickEffectClassName = ['cursor-click-effect', 'cursor-click-effect-1', 'cursor-click-effect-2'];

// Массив с блоками визуальных эффектов
const cursorClickEffect = [
    document.querySelector(`.${cursorClickEffectClassName[0]}`),
    document.querySelector(`.${cursorClickEffectClassName[1]}`),
    document.querySelector(`.${cursorClickEffectClassName[2]}`)
];

// Время активности визуальных эффектов
const cursorClickEffectTimeout = 1000; // Таймаут для анимации визуального эффекта

// Модификаторы кнопок для визуальных эффектов
// Для покупки
const btnsEffectMoney = document.querySelectorAll('.btn--effect-money');
const btnsEffectGems = document.querySelectorAll('.btn--effect-gems');
// Для такси
const btnsEffectWheel = document.querySelectorAll('.btn--effect-wheel');
const btnsEffectScrews = document.querySelectorAll('.btn--effect-screws');
const btnsEffectSpeedometer = document.querySelectorAll('.btn--effect-speedometer');
const btnsEffectGasoline = document.querySelectorAll('.btn--effect-gasoline');
const btnsEffectTeleport = document.querySelectorAll('.btn--effect-teleport');
const btnsEffectSpray = document.querySelectorAll('.btn--effect-spray');
const btnsEffectUp = document.querySelectorAll('.btn--effect-up');
// Для добычи руды
const btnsEffectCracks = document.querySelectorAll('.btn--effect-cracks');
const btnsEffectOre = document.querySelectorAll('.btn--effect-ore');

// Массив с ключевыми словами эффектов
const cursorClickEffectNames = [
    // Для покупки
    'money', // 0
    'gems', // 1
    // Для такси
    'wheel', // 2
    'speedometer', // 3
    'gasoline', // 4
    'teleport', // 5
    'screws', // 6
    'spray', // 7
    'up', // 8
    // Для добычи руды
    'cracks', // 9
    'ore' // 10
];

document.addEventListener('DOMContentLoaded', () => {
    function cursorClickEffectFunction(blockName, className) {
        let animationTimeout; // Переменная для хранения таймаута анимации
        // Функция для обновления позиции блока эффектов относительно положения поинтера
        function updateCursorPosition(e) {
            const cursorPosition = { x: e.clientX, y: e.clientY };
            blockName.style.left = `${cursorPosition.x}px`;
            blockName.style.top = `${cursorPosition.y}px`;
        }

        // Функция состояний визуального эффекта
        function changeCursorState(effectName, action) {
            // Удаляем все возможные классы эффектов
            cursorClickEffectNames.forEach(effect => {
                blockName.classList.remove(`${className}--active-${effect}`);
            });

            // Условие активации/деактивации
            if (action === 'activation') {
                blockName.classList.remove(`${className}--inactive`);
                blockName.classList.add(`${className}--active-${effectName}`);
            } else if (action === 'deactivation') {
                blockName.classList.add(`${className}--inactive`);
            }
        }

        // Основная функция
        function cursorClickEffectAnimation(effectName) {
            return function (e) {
                // Останавливаем текущую анимацию и сбрасываем таймаут
                clearTimeout(animationTimeout);

                // Обновляем позицию на месте клика
                updateCursorPosition(e);
                changeCursorState(effectName, 'activation');

                // Устанавливаем новый таймаут для сброса анимации
                animationTimeout = setTimeout(() => {
                    changeCursorState(effectName, 'deactivation');
                }, cursorClickEffectTimeout);
            };
        }

        // Функция-шаблон применения Основной функции
        function addCursorClickEffect(buttons, effectName) {
            buttons.forEach(
                btn => btn.addEventListener('click', cursorClickEffectAnimation(effectName))
            );
        }

        // Для покупки
        addCursorClickEffect(btnsEffectMoney, cursorClickEffectNames[0]);
        addCursorClickEffect(btnsEffectGems, cursorClickEffectNames[1]);
        // Для такси
        addCursorClickEffect(btnsEffectWheel, cursorClickEffectNames[2]);
        addCursorClickEffect(btnsEffectSpeedometer, cursorClickEffectNames[3]);
        addCursorClickEffect(btnsEffectGasoline, cursorClickEffectNames[4]);
        addCursorClickEffect(btnsEffectTeleport, cursorClickEffectNames[5]);
        addCursorClickEffect(btnsEffectScrews, cursorClickEffectNames[6]);
        addCursorClickEffect(btnsEffectSpray, cursorClickEffectNames[7]);
        addCursorClickEffect(btnsEffectUp, cursorClickEffectNames[8]);
        // Для добычи руды
        addCursorClickEffect(btnsEffectCracks, cursorClickEffectNames[9]);
        addCursorClickEffect(btnsEffectOre, cursorClickEffectNames[10]);

        // Инициализация позиции курсора при загрузке
        changeCursorState('', 'deactivation');
    }

    cursorClickEffectFunction(cursorClickEffect[0], cursorClickEffectClassName[0]);
    cursorClickEffectFunction(cursorClickEffect[1], cursorClickEffectClassName[1]);
    cursorClickEffectFunction(cursorClickEffect[2], cursorClickEffectClassName[2]);
});
