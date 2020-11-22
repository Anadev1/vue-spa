<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e303f;
  max-width: 100vw;
}

#nav {
  max-width: 100%;
  height: 7vh;
  background-color: #2e303f;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #fafafa;
  margin: 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #63948c;
}
</style>
