<template>
    <div class="headbar"  flex jc ac sm catskill lighten>
            Quick archetype for Vue3, CSS in Attribute and best parctises.
    </div>
    <div flex fill style="height: calc(100% - 40px)">
        <div class="sidebar" col-10 flex je>
            <!--侧栏容器-->
            <div class="wrapper">
                <!--分组-->
                <div v-for="(group, groupName) in sidebar" py-sm py-7 bb>
                    <h6 sm grey lighten mb-xs mb-3>{{ groupName }}</h6>
                    <router-link v-for="item in group" :to="item.path" xs
                                 :class="{current: current === item.path}"
                                 @click="current = item.path"
                    >
                        {{ item.name }}
                    </router-link>
                </div>
                <!--分组-->
            </div>
            <!--侧栏容器-->
        </div>
        <div class="content" catskill bg col-15 fill>
            <div class="wrapper" :class="{ isMobile:isMobile }">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '@/router/sidebar'
import isMobile from 'ismobilejs'
export default {
    name: "layout",
    created(){
        this.current = window.location.hash.split('#')[1]
    },
    data(){
        return {
            sidebar,
            current:'',
        }
    },
}
</script>

<style scoped lang="scss">
div.headbar{
    background-color: #0D8050;
    height: 38px;
    div.smallTitle{
        font-size: 12px;
        transform: scale(.85);
        white-space: nowrap;
    }
}

div.sidebar{
    user-select: none;
    div.wrapper{
        width: 160px;
    }
    a{
        height: 28px;
        line-height: 28px;
        letter-spacing: .5px;
        color: rgba(0,0,0,.7);
        display: block;
        text-decoration: none;
        padding: 2px 8px;
        &:hover{
            //font-weight: bold;
            background-color: rgba(0,0,0,.06);
        }
        &.current{
            color: #0D8050;
            font-weight: bold;
            border-right: 3px solid #0D8050;
        }
    }
}
div.content{
    border-left: 1px solid #d2d6d9;
    div.wrapper{
        width: 790px;
        padding: 30px 40px;
    }
}

</style>