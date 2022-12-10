alert('js is working')
let text = document.getElementById('edit');
let myData;
let postData = window.localStorage.getItem("save");
let reset = text.innerHTML;
// if no data
if (postData == null || postData == '') {
    myData = text.innerHTML;
    // store default value
    window.localStorage.setItem("save", myData);
    // make it placeholder style
    text.classList.remove('changed');
} else {
    // if there is a value post it
    text.innerHTML = postData;
    // make dark text
    text.classList.add('changed');
}

function saveChanges() {
    // store the current value
    myData = text.innerHTML;
    // local store the value
    window.localStorage.setItem("save", myData);
    text.classList.add('changed');
}