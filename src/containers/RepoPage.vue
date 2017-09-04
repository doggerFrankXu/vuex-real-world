<template>
    <div>
        <template v-if="!repo || !owner">
            <h1>
                <i>Loading {{name}} details...</i>
            </h1>
        </template>
        <template v-else>
            <div>
                <repo :owner="owner" :repo="repo" />
                <hr />
                
            </div>
        </template>
    </div>
</template>
<script src="./RepoPage.js">
</script>
