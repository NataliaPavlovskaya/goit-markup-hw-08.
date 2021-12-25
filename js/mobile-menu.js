(() => {
    const refs = {
    //   openModalBtn: document.querySelector('[data-modal-open]'),
    //   closeModalBtn: document.querySelector('[data-modal-close]'),
      menuBtnref: document.querySelector('[data-menu-button]'),
    };
  
    refs.menuBtnref.addEventListener('click', toggleModal);
    // refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }
  })();