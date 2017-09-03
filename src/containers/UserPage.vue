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
      <list :items="repos">
        <template slot="item" scope="props">
          <repo :owner="props.itemProps.name" />
        </template>
      </list>
    </template>
  </div>
</template>

<script src="./UserPage.js">

</script>
