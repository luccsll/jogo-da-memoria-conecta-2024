function alert(type, title, content, id) {

    let struct;

    switch (type) {

        case 'warning':
            struct = `<div class="alert alert-warning" id="${id}">
                            <img src="../public/images/icon/warning.svg">
                            <div class="contentAlert">
                                <p><strong>${title}</strong></p>
                                <p>${content}</p>
                            </div>
                        </div>`
            break;
        case 'success':
            struct = `<div class="alert alert-success" id="${id}">
                            <img src="../public/images/icon/success.svg">
                            <div class="contentAlert">
                                <p><strong>${title}</strong></p>
                                <p>${content}</p>
                            </div>
                        </div>`
            break;
        case 'danger':
            struct = `<div class="alert alert-danger" id="${id}">
                            <img src="../public/images/icon/danger.svg">
                            <div class="contentAlert">
                                <p><strong>${title}</strong></p>
                                <p>${content}</p>
                            </div>
                        </div>`
            break;
        default:
            console.error('Invalid alert type');
            return;

    }

    $('body').append(struct)
}

export default alert