<template>
    <div>


        <header class="header">
            <div class="header__wrapper">
                <h1 class="header__title">
                    <strong>Hi, my name is <em>Hiki</em></strong><br>
                    a frontend developer
                </h1>
                <div class="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="https://github.com/xayrullaevziyovuddin" class="btn">GitHab</a>
            </div>
        </header>

        <Main></Main>
        <Footer></Footer>
    </div>
    
</template>

<script>

import Main from './Main.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {Main,Footer }
}
</script>

