window.onload = function () {
    let progress = document.getElementById( 'progressbar' ),
        totalHeight = document.body.scrollHeight - window.innerHeight;

    this.onscroll = function () {
        let progressHeight = ( window.pageYOffset / totalHeight ) * 100;
        progress.style.height = progressHeight + "%";
    }
};
