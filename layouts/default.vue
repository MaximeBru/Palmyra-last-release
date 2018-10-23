<template>
  <div>
    <!-- navigation -->
    <header class="header" id="header">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 po-s">
            <div class="toggle-btn">
              <div class="icon menu1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <nav class="nav col-sm-11">
              <ul class="main-nav">
                <li class="active">
                  <nuxt-link data-parent-menu="Home" to="/">Home</nuxt-link>
                </li>
                <li>
                  <a data-parent-menu="About" href="#">Products</a>
                </li>
                <li>
                  <a data-parent-menu="Company" href="#">Mini-Packaging</a>
                </li>
                <li>
                  <nuxt-link to="/news" data-parent-menu="news">News</nuxt-link>
                </li>
                <li>
                  <a data-parent-menu="Careers" href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <nav class="nav-responsive">
        <ul class="main-nav-responsive">
          <li class="">
            <a href="#" title="Home" data-parent-menu="Home">Home</a>
          </li>
          <li class="">
            <a href="#" title="About" data-parent-menu="Brands">Products</a>
            <div style="display: none" class="sub-menu-responsive">
              <ul>
                <li><a href="#" title="Menu Item">UI-Web</a></li>
                <li><a href="#" title="Title">UI-Mobile</a></li>
                <li><a href="#" title="Menu Item">Services</a></li>
                <li><a href="#" title="Title">BPM</a></li>
                <li><a href="#" title="Menu Item">Devops</a></li>
                <li><a href="#" title="Title">IDE</a></li>
                <li><a href="#" title="Menu Item">Cloud</a></li>
              </ul>
            </div>
            <span class="fa fa-angle-down nav-arrow"></span>
          </li>
          <li class="">
            <a href="#" title="Company" data-parent-menu="Company">Company</a>
            <div style="display: none" class="sub-menu-responsive">
              <ul>
                <li><a href="#" title="Company">Company</a></li>
                <li><a href="#" title="Executive Board">Executive Board</a></li>
                <li><a href="#" title="Supervisory Board">Supervisory Board</a></li>
              </ul>
            </div>
            <span class="fa fa-angle-down nav-arrow"></span>
          </li>
          <li class="">
            <a href="#" title="Investor-Relations" data-parent-menu="Investor-Relations">Investor Relations</a>
            <div style="display: none" class="sub-menu-responsive">
              <ul>
                <li><a href="#" title="Menu Item">test2</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
              </ul>
            </div>
            <span class="fa fa-angle-down nav-arrow"></span>
          </li>
          <li class="active">
            <a href="/en/careers/" title="Careers" data-parent-menu="Careers">Careers</a>
            <div style="display: none" class="sub-menu-responsive">
              <ul>
                <li><a href="#" title="Menu Item">test 3</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
                <li><a href="#" title="Menu Item">Menu Item</a></li>
              </ul>
            </div>
            <span class="fa fa-angle-down nav-arrow"></span>
          </li>
          <li class="">
            <a href="/en/News/" title="News" data-parent-menu="News">News</a>
          </li>
          <li>
            <a href="#" title="Languages">Languages</a>
            <div style="display: none" class="sub-menu-responsive">
              <ul>
                <li class="active">
                  <a href="/en/careers/">English</a>
                </li>
                <li class="">
                  <a href="/de/karriere/">Deutsch</a>
                </li>
              </ul>
            </div>
            <span class="fa fa-angle-down nav-arrow"></span>
          </li>
          <li class="function-addon">
            <form method="get" action="/en/search-results/" class="form-search">
              <input value="" name="searchText" placeholder="Search" class="input-form">
              <span class="ktm-icon-search"></span>
              <a href="#" class="clear-input">x</a>
            </form>
          </li>
        </ul>
      </nav>
    </header>
    <div id="search-sub-menu" class="sub-menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <form method="get" action="" class="search-form">
              <input value="" name="searchText" class="input-form" placeholder="search..">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="About-sub-menu" class="sub-menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul>
              <li><a href="#" title="Menu Item">UI-Web</a></li>
              <li><a href="#" title="Menu Item">UI-Mobile</a></li>
              <li><a href="#" title="Menu Item">Services</a></li>
              <li><a href="#" title="Menu Item">BPM</a></li>
              <li><a href="#" title="Menu Item">Devops</a></li>
              <li><a href="#" title="Menu Item">IDE</a></li>
              <li><a href="#" title="Menu Item">Cloud</a></li>
              <li><a href="#" title="Menu Item">API Gateway</a></li>
              <li><a href="#" title="Menu Item">Composant</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="Company-sub-menu" class="sub-menu">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul>
              <li><a href="#" title="Menu Item">Transformation</a></li>
              <li><a href="#" title="Menu Item">Urbanisation</a></li>
              <li><a href="#" title="Menu Item">Front</a></li>
              <li><a href="#" title="Menu Item">Mobile</a></li>
              <li><a href="#" title="Menu Item">Onboarding</a></li>
              <li><a href="#" title="Menu Item">Sales flows/dématérialisation/omni-multi channel</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="news-sub-menu" class="sub-menu">
    </div>
    <div id="Careers-sub-menu" class="sub-menu">

    </div>

    <!--   navigation end -->
    <nuxt/>
<!--==================footer part==============  -->

 <footer class="footer">
    <div class="contain">
    <div class="col">
      <h1>Company</h1>
      <ul>
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div class="col">
      <h1>Products</h1>
      <ul>
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div class="col">
      <h1>Accounts</h1>
      <ul>
        <li>About</li>
        <li>Mission</li>
        <li>Services</li>
        <li>Social</li>
        <li>Get in touch</li>
      </ul>
    </div>
    <div class="col">
      <h1>Resources</h1>
      <ul>
        <li>Webmail</li>
        <li>Redeem code</li>
        <li>WHOIS lookup</li>
        <li>Site map</li>
        <li>Web templates</li>
        <li>Email templates</li>
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
        <li><img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;"></li>
        <li><img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;"></li>
        <li><img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;"></li>
      </ul>
    </div>
  <div class="clearfix"></div>
  </div>
  <!-- partie colorée  -->

  </footer>
    <!-- end of template -->
  </div>
</template>


