function normal () {
    $w("#headertext").text="1ST PRIMARY SCHOOL OF THRAKOMAKEDONES"
}
$w.onReady(function () {
    $w("#headertext").text="WELCOME!"
    setTimeout(normal, 3000)
    $w("#audioPlayer1").play()
});