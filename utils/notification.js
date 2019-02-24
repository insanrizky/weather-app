import swal from 'sweetalert';

export const loader = (bool = true) => {
    if (bool) {
        swal({
            icon: '/static/img/Spin-1s-149px.gif',
            title: 'Mohon Menunggu',
            text: 'sedang berinteraksi dengan server...',
            buttons: false, 
            allowOutsideClick: false,
            closeOnEsc: false,
            allowEnterKey: false, 
        })
    } else {
        swal.close();
    }
}

export const successNotif = (response) => {
    swal({
        title: 'Berhasil',
        text: response.data.message,
        icon: 'success',
        button: false,
        timer: 3000
    });
}

export const errorNotif = (error) => {
    console.log(error);
    swal({
        title: 'Terjadi Kesalahan',
        text: (!error.response && 'Network Error') || (error.response && error.response.data !== {} && error.response.data.message) || `Error ${error.response.status}: ${error.response.statusText}`,
        icon: 'error',
        button: false,
        timer: 3000
    });
}
