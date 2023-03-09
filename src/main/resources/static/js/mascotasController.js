function redirect(url) {
    window.location.replace(url)
}

const notification = {
    toast: new bootstrap.Toast(document.getElementById('notification_toast')),
    elToast: document.getElementById('notification_toast'),
    elIcon: document.getElementById('notification_elIcon'),
    txtMessage: document.getElementById('notification_txtMessage'),
    show: function (message, success) {
        this.txtMessage.innerText = message
        if (success) {
            this.elIcon.classList.replace('fa-times', 'fa-check')
            this.elToast.classList.replace('text-bg-danger', 'text-bg-success')
        } else {
            this.elIcon.classList.replace('fa-check', 'fa-times')
            this.elToast.classList.replace('text-bg-success', 'text-bg-danger')
        }
        this.toast.show()
    }
}