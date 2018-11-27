<template>
  <div>
    <footer class="footer">
      <div class="contain">
        <div class="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
          </ul>
        </div>
        <div class="col">
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
          </ul>
        </div>
        <div class="col">
          <h1>Accounts</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
          </ul>
        </div>
        <div class="col">
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
          </ul>
        </div>
        <div class="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        <div class="col social">
          <h1>Social</h1>
          <ul>
            <li>
              <img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;">
            </li>
            <li>
              <img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;">
            </li>
            <li>
              <img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;">
            </li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
      <!-- partie colorée  -->
      <cookie-law position="bottom">
        <div slot-scope="props">
          <span
            class="CoockieText"
          >This website uses cookies to ensure you get the best experience on our website, for more info
            <nuxt-link to="legal-notes">Click here</nuxt-link>
          </span>
          <button class="Cookie__button CookieButton" @click="props.accept">
            <span>I accept</span>
          </button>
          <button class="CookieButton Cookie__button" @click="props.close">
            <span>Ignore me</span>
          </button>
        </div>
      </cookie-law>
    </footer>
  </div>
</template>

<style scoped>
.CoockieText {
  margin-right: 2rem;
}
.Cookie--base .Cookie__button {
  background: #f1f1f1;
  color: black;
  border: solid 1px #eb456e;
  font-weight: bold;
}
.Cookie--base .Cookie__button:hover {
  background: #eb456e;
  color: white;
}
</style>
