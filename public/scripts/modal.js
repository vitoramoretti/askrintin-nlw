export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelBtn = document.querySelector('.button.cancel')

    cancelBtn.addEventListener('click', close)

    function open() {

        modalWrapper.classList.add('active')
    }
    function close() {
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}