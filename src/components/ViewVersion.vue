
<script setup> 
import packageJson from "../../package.json"; 

console.log('packageJson', packageJson.version)
</script>

<template>
    <div class="flex text-gray-500 justify-center pt-2">
            <small class="" v-if="packageJson && packageJson.version">v{{ packageJson.version }}</small>
        </div>
</template>