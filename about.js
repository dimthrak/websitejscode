function normal () {
    $w("#headertext").text="About"
}
$w.onReady(function () {
    $w("#headertext").text="Check how our website was made!"
    setTimeout(normal, 3000)
});