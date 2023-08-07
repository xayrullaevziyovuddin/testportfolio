<template>
<nav class="nav">
        <div class="container">
            <div class="nav-row">
                <RouterLink to="/"   class="logo" ><strong>Freelancer</strong> portfolio</RouterLink> 

        

                <ul class="nav-list">
                  
                
                    <RouterLink to="/"   class="nav-list__item" ><li class="nav-list__link "> Projects </li> </RouterLink>
                    <RouterLink to="/Skills"   class="nav-list__item" >  <li class="nav-list__link"> Skills </li>   </RouterLink>
                    <RouterLink to="/Contact"   class="nav-list__item" > <li class="nav-list__link"> Contacts </li>    </RouterLink>
                    
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