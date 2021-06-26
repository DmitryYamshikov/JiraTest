<template>
  <div class="modal">
    <div class="wrapper">
      <form>
        <label
          >Name<input type="text" name="name" placeholder="Enter name"
        /></label>
        <label
          >Password<input
            type="password"
            name="password"
            placeholder="Enter password"
        /></label>
        <label
          >Confirm Password<input
            type="text"
            name="confirm_password"
            placeholder="Confirm password"
        /></label>
        <label
          >Email <input type="email" name="email" placeholder="Enter email"
        /></label>
        <fieldset>
          <legend>Choose role</legend>
          <div class="fieldset__body">
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="role"
                  value="admin"
                  checked
                />admin</label
              >
            </div>
            <div class="radio">
              <label
                ><input type="radio" name="role" value="pm" checked />Product
                manager</label
              >
            </div>
            <div class="radio">
              <label
                ><input
                  type="radio"
                  name="role"
                  value="worker"
                  checked
                />worker</label
              >
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
}
</style>
