<template>
  <header>
    <!-- logo -->
    <div>logo</div>
    <!-- menu -->
    <nav>
      <ul>
        <li><NuxtLink to="/blog">Server Side Blog</NuxtLink></li>
        <li><NuxtLink to="/articles">Client Side Articles</NuxtLink></li>
      </ul>
    </nav>
    <!-- action -->
    <div>
      <div>
        <NuxtLink to="login">Login</NuxtLink>
      </div>
      <button>Logout</button>
    </div>
  </header>
</template>
