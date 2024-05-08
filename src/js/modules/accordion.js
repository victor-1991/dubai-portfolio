class Accordion {
    constructor(accordionContainerSelector) {
        this.accordionContainer = document.querySelector(accordionContainerSelector);
        this.accordionBtns = this.accordionContainer.querySelectorAll('.accordion__trigger');
        this.accordionPanels = this.accordionContainer.querySelectorAll('.accordion__panel');
        this.accordionTrigger();
    }

    accordionTrigger = () => {
        this.accordionBtns.forEach((item, index) => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
                if (this.accordionPanels[index].style.maxHeight) {
                    this.accordionPanels[index].style.maxHeight = null;
                  } else {
                    this.accordionPanels[index].style.maxHeight = this.accordionPanels[index].scrollHeight + "px";
                  }
            })
        })
    }
}

export default Accordion;