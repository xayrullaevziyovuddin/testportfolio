<template>
<nav class="nav">
        <div class="container">
            <div class="nav-row">
                <a href="./index.html" class="logo"><strong>Freelancer</strong> portfolio</a>

        

                <ul class="nav-list">
                  
                
                    <RouterLink to="/"   class="nav-list__item" > Projects</RouterLink>
                    <RouterLink to="/Skills"   class="nav-list__item" > Skills</RouterLink>
                    <RouterLink to="/Contacts"   class="nav-list__item" >Contacts</RouterLink>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>