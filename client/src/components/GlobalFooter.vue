<template>
    <footer class="footer">
        <span class="footer__author">Foxcode 2021</span>
        <span class="footer__project">GalaktykaBajek &copy; 2021</span>
        <span class="footer__text">Background <a href="#">Brian Edward Miller</a></span>
    </footer>
</template>

<style scoped>
.footer{
    background-color: #16161D;
    padding: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;

    /* position: absolute; */
    right: 0;
    bottom: 0;
    left: 0;
}
.footer__author{
    font-family: "Lovelo";
    font-size: 1.2em;
}
.footer__project{
    margin: 10px 0;
}
.footer__text{
    text-transform: uppercase;
    font-family: "Roboto Condensed";
}
.footer__text a{
    color: #fff;
    font-weight: bold;
}
</style>
