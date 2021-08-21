<template>
    <h3 mb-sm>Padding & Margin</h3>
    <p>Padding 属性依次分别为 <q>pa</q> <q>pt</q> <q>pr</q> <q>pb</q> <q>pl</q>，它们使用标准段位。</p>
    <ul>
        <li><q>pa</q> 使四个方向的内间距都生效，即 <q>padding-all</q></li>
        <li><q>pt</q> 使顶部内间距生效，即 <q>padding-top</q></li>
        <li><q>pr</q> 使右侧内间距生效，即  <q>padding-right</q></li>
        <li><q>pb</q> 使底部内间距生效，即 <q>padding-bottom</q></li>
        <li><q>pl</q> 使左侧内间距生效，即 <q>padding-left</q></li>
    </ul>
    <p>Padding 的段位尺寸如下：</p>
    <ul>
        <li><code>xs <q>2px</q></code> </li>
        <li><code>sm <q>8px</q></code> </li>
        <li><code>md <q>18px</q></code></li>
        <li><code>lg <q>32px</q></code></li>
        <li><code>xl <q>50px</q></code></li>
    </ul>
    <div flex my-sm>
        <div pa-xs border><div sm wd-sm ht-sm jc ac foo bar>xs</div></div>
        <div pa-sm border><div sm wd-sm ht-sm jc ac foo bar>sm</div></div>
        <div pa-md border><div sm wd-sm ht-sm jc ac foo bar>md</div></div>
        <div pa-lg border><div sm wd-sm ht-sm jc ac foo bar>lg</div></div>
        <div pa-xl border><div sm wd-sm ht-sm jc ac foo bar>xl</div></div>
    </div>

</template>

<script>
export default {
    name: "padding&margin",
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>