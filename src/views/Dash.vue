<template>
  <h1>DashBoard</h1>
</template>
<script>
import makeRequest from "../api/server";
  export default {
    beforeCreate() {
      makeRequest('comments', {
        method: "GET",
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(data=>data.json())
      .then(data=>console.log(data))
    }
  }
</script>
