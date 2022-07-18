Vue.component("child-component", {
    /*html*/ 
    template:
    `
        <div class="container">
            <p>ChildComponent입니다.</p>
        </div>
    `
});

Vue.component("child-article", {
    /*html*/ 
    template:
    `
        <div class="article">
            <div>
                Lorem ipsum dolor sit amet conseteture adipisicing elit.
                <child-component></child-component>
            </div>
        </div>
    `
});

new Vue({
    el: "#app"
});