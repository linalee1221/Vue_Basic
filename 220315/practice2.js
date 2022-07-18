// 전역 컴포넌트 정의
Vue.component("todo-footer", {
    template: `<p>This is another global child component</p>`
});

// 지역 컴포넌트 정의
let cmp = {
    template: `<p>This is another local component</p>`
}

let app = new Vue({
    el: "#app",
    data: {
        message: "This is a parent component"
    },
    components: {
        "todo-list" : cmp
    }
});