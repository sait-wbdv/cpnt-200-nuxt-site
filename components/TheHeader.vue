<template>
  <header>
    <div>Home</div>
    <nav>
      <ul>
        <li><NuxtLink to="/blog">Server Side Blog</NuxtLink></li>
        <li><NuxtLink to="/articles">Client Side Articles</NuxtLink></li>
      </ul>
    </nav>
    <div>
      <ul>
        <li>
          <NuxtLink to="/signup">Sign up</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
      <button @click="useGoogleLogin">Login with Google</button>
      <button @click="useSignOut">Logout</button>
    </div>
  </header>
</template>
