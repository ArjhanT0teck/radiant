var clearconfirm = confirm('Are you sure you want to clear localStorage? All saved data like custom coins, backgrounds, etc, will be cleared.');
if (clearconfirm === true) {
    localStorage.clear();
    alert('localStorage Cleared!')
}

if (clearconfirm === false) {
    alert('Canceled.')
}
