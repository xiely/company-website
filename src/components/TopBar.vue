<!-- src/components/TopBar.vue -->
<template>
    <header class="top-bar">
        <div class="robotil-header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-9 col-sm-12">
                        <div class="top-address">
                            <p>
                                <span><i class="fas fa-home"></i>机器人大厦新世界</span>
                                <a href="tel:998556778345"><i class="fas fa-phone-alt"></i>998556778345</a>
                                <a href="mailto:demo@example.com"><i class="fas fa-envelope"></i>demo@example.com</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-3 col-sm-12">
                        <div class="top-right-menu">
                            <ul class="social-icons text-right text_m_center">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 主导航 -->
        <div class="robotil-main-menu one_page hidden-xs hidden-sm witr_h_h10">
            <div class="robotil_nav_area scroll_fixed postfix">
                <div class="container">
                    <div class="row logo-left">
                        <div class="col-lg-3 col-sm-3 col-xs-4">
                            <div class="logo">
                                <a class="main_sticky_main_l" href="index.html"><img src="@/assets/images/logo.png" alt="robotil"></a>
                                <a class="main_sticky_l" href="index.html"><img src="@/assets/images/logos.png" alt="robotil"></a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-sm-9 col-xs-8">
                            <nav class="robotil_menu">
                                <ul class="sub-menu">
                                    <li >
                                        <a href="">首页</a>
                                        <!-- <a href="index2.html">首页</a> -->
                                    </li>
                                    <li><a href="about.html">关于我们</a></li>
                                    <li >
                                        <a href="#">页面</a>
                                        <ul class="sub-menu">
                                            <li><a href="team.html">团队</a></li>
                                            <li><a href="service.html">服务</a></li>
                                            <li><a href="portfolio.html">作品集</a></li>
                                            <li><a href="faq.html">常见问题</a></li>
                                            <li><a href="history.html">历史</a></li>
                                            <li><a href="pricing.html">定价计划</a></li>
                                            <li><a href="privacy-policy.html">隐私政策</a></li>
                                            <li><a href="countdown.html">倒计时</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="event.html">活动</a></li>
                                    <li><a href="blog.html">博客</a></li>
                                    <li><a href="contact.html">联系我们</a></li>
                                </ul>
                                <div class="donate-btn-header">
                                    <a class="dtbtn" href="#">联系我们</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        </nav> -->
    </header>
 
</template>