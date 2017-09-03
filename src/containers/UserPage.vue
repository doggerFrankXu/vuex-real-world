<template>
  <div>
    <template v-if="!user">
      <h1>
        <i>Loading {{login}} 's profile</i>
      </h1>
    </template>
    <template v-else>
      <user :user="user" />
      <hr />
      <list :items="repos"
        :on-load-more-click="handleLoadMoreClick"
        :loading-label="`Loading ${login}'s starred...'`"
        :is-fetching="true"
        >
        <template slot="item" scope="props">
          <repo :owner="props.itemProps.owner"
            :repo="props.itemProps.repo" />
        </template>
      </list>
    </template>
  </div>
</template>

<script src="./UserPage.js">

</script>
