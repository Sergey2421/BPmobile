const form = document.querySelector('form');
const link = document.querySelector('#submit');


form.addEventListener(
    "change",
    function (event) {
        let value = new FormData(form);
        link.href = value.get('access');

        let id = document.querySelector('input:checked').id;
        const container = document.querySelectorAll(`.${id}`);
        document.querySelectorAll('.link').forEach(el => {
            el.style.border = 'none';
            el.style.background = 'rgba(255, 255, 255, 0.1)';
        })
        container[0].style.border = '1px solid #FFFFFF'
        container[0].style.background = 'rgba(255, 255, 255, 0.3)'

        event.preventDefault();
    },
);
