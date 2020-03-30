import React from 'react'

const SignIn = () => {
  return (
    <>
      {/* logo, nav bar */}
      <h1 class="signInHeader">Welcome Back!</h1>
      <section class="signIn">
        <label for="email">Email</label>
        <input type="email" placeholder="Email Address"></input>
        <label for="text">Password</label>
        <input type="text" placeholder="Password"></input>
      </section>
      <section>
        <p>Don't have an account?</p>
      </section>
    </>
  )
}
export default SignIn
