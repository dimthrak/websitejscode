function normal () {
    $w("#subtitle").text="Check them out."
}
$w.onReady(function () {
    $w("#subtitle").text="Here are the PowerPoint Presentations."
    setTimeout(normal, 3000)
});