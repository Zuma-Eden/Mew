<template>
    <headbar/>
    <sidebar/>
    <cantent/>
</template>

<script>
import headbar from '@/components/layout/headbar'
import sidebar from '@/components/layout/sidebar'
import cantent from '@/components/layout/cantent'
export default {
    name:'App',
    components:{
        headbar, sidebar, cantent
    }
}
</script>

