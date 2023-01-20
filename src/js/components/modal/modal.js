import GraphModal from 'graph-modal';

// modal
function modalDef() {

    const btn = document.querySelector('.btn__care');

    if (btn) {
        const modal = new GraphModal();
        const items = document.querySelectorAll('.care__boxs');

        for (let i = 0; i < items.length; i++ ) {
            items[i].addEventListener('click', function(e) {
                let btn = items[i].querySelector('button');
                btn.click();
            })
        }
    }


}

export default modalDef;


