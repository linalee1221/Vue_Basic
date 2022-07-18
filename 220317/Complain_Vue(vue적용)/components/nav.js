// 헤더 컴포넌트 만들기
Vue.component("nav-component", {
    template:
    /*html*/
    `
    <nav id="main-navigation">
        <div class="pull-left">
            <ul class="outer-menu">
                <li class="outer-menu-item">
                    <span class="menu-title">About</span>
                    <ul class="inner-menu">
                        <li class="inner-menu-item"><a href="index.html">Home</a></li>
                        <li class="inner-menu-item"><a href="complain.html">Complain</a></li>
                        <li class="inner-menu-item"><a href="register_member.html">회원가입</a></li>
                        
                    </ul>
                </li>
                <li class="outer-menu-item">
                    <span class="menu-title">상품정보</span>
                    <ul class="inner-menu">
                        <li class="inner-menu-item"><a href="info_cup.html">컵소개</a></li>
                    </ul>
                </li>
                <li class="outer-menu-item">
                    <span class="menu-title">찾아오시는길</span>
                    <ul class="inner-menu">
                        <li class="inner-menu-item"><a href="#">데이터</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="pull-right">
            <div class="search-bar">
                <form>
                    <input type="text" class="input-search" />
                    <input type="submit" class="input-search-submit" value="검색" />
                </form>
            </div>
        </div>
    </nav>
    `
})