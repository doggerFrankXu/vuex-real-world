<template>
  <div>
    <template v-if="!user">
      <h1>
        <i>Loading {{login}} 's profile</i>
      </h1>
    </template>
    <template v-else>
      <user :user="user" />
    </template>
  </div>
</template>

<script src="./UserPage.js">

</script>
