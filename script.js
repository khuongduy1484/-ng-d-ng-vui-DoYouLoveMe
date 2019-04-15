function mesenger() {
    alert('Yes,You are right');

}
function mesenger2() {
    let a = Math.random() * window.innerHeight ;
    let b = Math.random() * window.innerWidth;
    document.getElementById('NO').style.left= a + 'px';
    document.getElementById('NO').style.top = b + 'px';
    
}