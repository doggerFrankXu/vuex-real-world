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
      <list :items="starredPagination.ids"
        :on-load-more-click="handleLoadMoreClick"
        :loading-label="`Loading ${login}'s starred...'`"
        :is-fetching="starredPagination.isFetching"
        :page-count="starredPagination.pageCount"
        :nextPageUrl="starredPagination.nextPageUrl"
        >
        <template slot="item" scope="props">
          <!-- <repo :owner="props.itemProps.owner"
            :repo="props.itemProps.repo" /> -->
          <div>{{props.itemProps}}</div>
        </template>
      </list>
    </template>
  </div>
</template>

<script src="./UserPage.js">

</script>
