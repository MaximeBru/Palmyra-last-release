<template>
  <div class="content">

 <!-- ================================begin slider=================================== -->
     <div id="slider1_container" style="visibility: hidden; position: relative; margin: 0 auto;
top: 0px; left: 0px; width: 1300px; height: 500px; overflow: hidden;">
      <!-- Loading Screen -->
      <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
        <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="svg/loading/static-svg/spin.svg" />
      </div>

      <!-- Slides Container -->
      <div data-u="slides" style="position: absolute; left: 0px; top: 0px; width: 1300px; height: 500px; overflow: hidden;">
        <div>

          <div class="img-box">
            <div class="OpacFull">
              <div class="PalmyraHead" data-aos="fade-right" data-aos-duration="1500">
                <div class="conteneur">
                  <!--  <img data-u="image" src="~/assets/images/002.jpg" /> -->
                  <img src="~/assets/images/Logo-Palmyra1.jpg" alt="Logo Palmyra">

                  <h1><span class="red"> PALMYRA</span><br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                  <div class="triangle"></div>
                </div>
              </div>
              <!--       <div class="scroll"></div> -->
            </div>
          </div>
          <!-- ============= -->
        </div>
        <div>
          <img data-u="image" src="~/assets/images/slider2.png" />
        </div>
        <div>
          <img data-u="image" src="~/assets/images/slider3.png" />
        </div>
        <div>
          <img data-u="image" src="~/assets/images/slider4.png" />
        </div>
        <div>
          <img data-u="image" src="~/assets/images/Palmslide4.png" />
        </div>
      </div>

      <!--#region Bullet Navigator Skin Begin -->
      <!-- Help: https://www.jssor.com/development/slider-with-bullet-navigator.html -->
      <style>
        .jssorb031 {position:absolute;}
        .jssorb031 .i {position:absolute;cursor:pointer;}
        .jssorb031 .i .b {fill:#000;fill-opacity:0.5;stroke:#fff;stroke-width:1200;stroke-miterlimit:10;stroke-opacity:0.3;}
        .jssorb031 .i:hover .b {fill:#fff;fill-opacity:.7;stroke:#000;stroke-opacity:.5;}
        .jssorb031 .iav .b {fill:#fff;stroke:#000;fill-opacity:1;}
        .jssorb031 .i.idn {opacity:.3;}
    </style>
      <div data-u="navigator" class="jssorb031" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1"
        data-scale="0.5" data-scale-bottom="0.75">
        <div data-u="prototype" class="i" style="width:16px;height:16px;">
          <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
            <circle class="b" cx="8000" cy="8000" r="5800"></circle>
          </svg>
        </div>
      </div>
      <!--#endregion Bullet Navigator Skin End -->

      <!--#region Arrow Navigator Skin Begin -->
      <!-- Help: https://www.jssor.com/development/slider-with-arrow-navigator.html -->
      <style>
        .jssora051 {display:block;position:absolute;cursor:pointer;}
        .jssora051 .a {fill:none;stroke:#fff;stroke-width:360;stroke-miterlimit:10;}
        .jssora051:hover {opacity:.8;}
        .jssora051.jssora051dn {opacity:.5;}
        .jssora051.jssora051ds {opacity:.3;pointer-events:none;}
    </style>
      <div data-u="arrowleft" class="jssora051" style="width:55px;height:55px;top:0px;left:25px;" data-autocenter="2"
        data-scale="0.75" data-scale-left="0.75">
        <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
          <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
        </svg>
      </div>
      <div data-u="arrowright" class="jssora051" style="width:55px;height:55px;top:0px;right:25px;" data-autocenter="2"
        data-scale="0.75" data-scale-right="0.75">
        <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
          <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
        </svg>
      </div>
      <!--#endregion Arrow Navigator Skin End -->
    </div>
    <!-- Jssor Slider End -->
    <!--======slider end ==========-->

  </header>
  <!-- slider  -->
  <main>
    <section class="HomeSec  expanded" id="target1" data-magellan-target="test1">
      <div class="row">
        <article class="artRigth" id="PalmImgRight" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
          <img class="ToPres" src="~/assets/images/palmImgRight.png" alt="entéte de section">
          <img class="ToPresBorder" src="~/assets/images/border.png" alt="ligne rouge entéte de section ">
          <h2 class="TopTitleImg">WHAT IS<br> <span class="red">PALMYRA ?</span></h2>
        </article>
        <article class="responsiveTitle">
          <h2>WHAT IS PALMYRA</h2>
        </article>
        <article class="DescIntro" data-aos="fade-left" data-aos-offset="350" data-aos-duration="600">
          <p>You're accelerator for digital transformation</p>
        </article>
        <div class="artLeft" id="Fonctionality" data-aos="fade-left" data-aos-offset="400" data-aos-duration="600">
          <div class="FonctionalCard">
            <img src="~/assets/images/cloud.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">An accelerator</h2>
              <p>to support all aspects of Digital Transformation for financial leaders.
              </p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/svg/bank.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A robust Platform</h2>
              <p>Platform to build low-code and cloud-ready applications to let experts focus on business.
              </p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/svg/card.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A store of reusable</h2>
              <p>A robust Platform to build low code application with minimal involvement of Expert developers or
                system administrators</p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/svg/chip.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A reference platform</h2>
              <p>that embeds best of breed market standards.
              </p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/svg/contract.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A high-productivity development platform</h2>
              <p>hiding complexity for a faster time-to-market.
              </p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/svg/internet.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A strong generator</h2>
              <p>For apps, applications, components and services 100% free of Palmyra dependency at runtime.
              </p>
            </div>
          </div>
          <div class="FonctionalCard">
            <img src="~/assets/svg/build.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">An API builder</h2>
              <p> To builds and exposes your business logic through open APIs and micro-services.
              </p>
            </div>
          </div>
          <div class="FonctionalCard">
            <img src="~/assets/svg/DoubleCard.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A solution creator</h2>
              <p>Generates apps, applications, components and services 100% free of Palmyra dependency at runtime.
              </p>
            </div>
          </div>
          <div class="FonctionalCard">
            <img src="~/assets/svg/chart.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A strong generator</h2>
              <p>For apps, applications, components and services 100% free of Palmyra dependency at runtime.
              </p>
            </div>
          </div>

        </div>
        </div>

    </section>

    <!--=========================== section news========================== -->
    <section class="SecNews">
      <h2 class="NewsTilte">Palmyra News</h2>
      <figure v-for="info in infos.slice(0, 4)" :key="info.id" class="snip1208">
          <img :src="'http://localhost:1337' + info.image.url" alt="sample66" />
          <div class="date"><span class="day">{{$moment( info.date ).format('DD')}}</span><span class="month">{{$moment( info.date ).format('MMM')}}</span></div><i :class="info.logo.code"></i>
          <figcaption>
            <h3>{{ info.title }}</h3>
            <p>{{ info.description || 'No description provided.' }}</p>
            <button>Read More</button>
          </figcaption></figcaption><a :href="'info/' + info.id"></a>
        </figure>
      <div class="arrow-container">
        <a :href="'news/'">
          <p>View All<i class="fas fa-angle-right arrow-right"></i></p>
        </a>
      </div>
    </section>

    <!-- changement de section (page)=============== -->
    <section class="Homethird expanded" id="target2" data-magellan-target="test2">

      <article class="artRigth" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
        <img class="ToPres" src="~/assets/images/border.png" alt="ligne rouge entéte de section ">
        <h2 class="TopTitle">WHAT IS<br> <span class="red">PALMYRA ?</span></h2>
      </article>

      <!-- ==================partie rajoutée ============================-->
      <div class="PresentationPalm">
        <article class="benefitArt" data-aos="fade-right" data-aos-offset="200" data-aos-duration="600">
          <img src="~/assets/images/museum.png" id="bank" alt="logo institutional banquing">
          <h4 class="DefPresArt"><span class="NumberDef red">30+</span><br>Clients</h4>
          <ul>
            <li>
              <p>CACEIS</p>
            </li>
            <li>
              <p>CACF </p>
            </li>
            <li>
              <p>SANTANDER </p>
            </li>
            <li>
              <p>AXA BELGIU</p>
            </li>
            <li>
              <p>ZURICH UK </p>
            </li>
            <li>
              <p>Main European central banks</p>
            </li>
            <li>
              <p>SGSS SPAIN</p>
            </li>
            <li>
              <p>NASDAQ NORDIC</p>
            </li>
          </ul>
          <div class="borderTop"></div>
          <div class="borderBottom"></div>
        </article>

        <article class="benefitArt" data-aos="fade-left" data-aos-offset="200" data-aos-duration="600">
          <img src="~/assets/images/card.png" id="card" alt="logo card">
          <h4 class="DefPresArt"><span class="NumberDef red">15+</span><br>TOOLS / WIZARDS</h4>
          <ul>
            <li>
              <p>PROJECT SETUP WIZARDS</p>
            </li>
            <li>
              <p>DEPLOYMENT WIZARDS</p>
            </li>
            <li>
              <p>CONCEPT MODELING </p>
            </li>
            <li>
              <p>CONFIGURATION MGT</p>
            </li>
            <li>
              <p>IMPACT MANAGEMENT</p>
            </li>
            <li>
              <p>Main European central banks</p>
            </li>
            <li>
              <p>WORKFLOW/BPM DESIGN</p>
            </li>
            <li>
              <p>…</p>
            </li>
          </ul>
          <div class="borderTop"></div>
          <div class="borderBottom"></div>
        </article>

        <article class="benefitArt" data-aos="fade-right" data-aos-offset="200" data-aos-duration="600">
          <img src="~/assets/images/contract.png" id="contract" alt="logo contract">
          <h4 class="DefPresArt"><span class="NumberDef red">30+</span><br>FRAMEWORKS</h4>
          <ul>
            <li>
              <p>BASED ON OPEN STANDARDS ( ANGULAR JS, SPRING, HIBERNATE, LOG4J....)</p>
            </li>
          </ul>
          <div class="borderTop"></div>
          <div class="borderBottom"></div>
        </article>

        <article class="benefitArt" data-aos="fade-left" data-aos-offset="200" data-aos-duration="600">
          <img src="~/assets/images/chip.png" id="chip" alt="logo chip">
          <h4 class="DefPresArt"><span class="NumberDef red">120+</span><br>COMPONENTS</h4>
          <ul>
            <li>
              <p>BUSINESS COMPONENTS</p>
            </li>
            <li>
              <p>DIGITAL COMPONENTS</p>
            </li>
            <li>
              <p>TECHNICAL COMPONENTS</p>
            </li>
          </ul>
          <div class="borderTop"></div>
          <div class="borderBottom"></div>
        </article>

        <article class="benefitArt" data-aos="fade-right" data-aos-offset="200" data-aos-duration="600">
          <img src="~/assets/images/cloud.png" id="cloud" alt="logo cloud">
          <h4 class="DefPresArt"><span class="NumberDef red">CLOUD-READY</span><br>APPLICATIONS</h4>
          <ul>
            <li>
              <p>AMAZON</p>
            </li>
            <li>
              <p>AZURE</p>
            </li>
            <li>
              <p>IBM BLUEMIX</p>
            </li>
          </ul>
          <div class="borderTop"></div>
          <div class="borderBottom"></div>
        </article>

        <article class="benefitArt" data-aos="fade-left" data-aos-offset="200" data-aos-duration="600">
          <img src="~/assets/images/licorne.png" id="licorne" alt="logo licorne">
          <h4 class="DefPresArt"><span class="NumberDef red">20 000</span><br>MANDAYS / YEAR</h4>
          <ul>
            <li>
              <p>R&D</p>
            </li>
            <li>
              <p>INNOVATION</p>
            </li>
            <li>
              <p>BUSINESS STORE OF COMPONENTS</p>
            </li>
          </ul>
          <div class="borderTop"></div>
          <div class="borderBottom"></div>
        </article>
      </div>

      <div class="niceBorder"></div>
      <div class="RoundPalm">
        <article class="artRigth" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
          <img class="ToPres" src="~/assets/images/border.png" alt="ligne rouge entéte de section ">
          <h2 class="TopTitle"><span class="red">PALMYRA</span><br>PLAYGROUND </h2>
        </article>
        <div class="row">
          <div class="RoundText1" data-aos="fade-right" data-aos-offset="200" data-aos-duration="600">
            <h4 class="red">Middle Layer</h4>
            <ul>
              <li>
                <p>API zation</p>
              </li>
              <li>
                <p>Legacy Encapsulation</p>
              </li>
              <li>
                <p>Interfaces Management</p>
              </li>
              <li>
                <p>…</p>
              </li>
            </ul>
          </div>

          <div class="RoundTex2" data-aos="fade-left" data-aos-offset="200" data-aos-duration="600">
            <h4>Business Logic</h4>
            <ul>
              <li>
                <p>Back-office</p>
              </li>
              <li>
                <p>Data management</p>
              </li>
              <li>
                <p>Business Components</p>
              </li>
              <li>
                <p>…</p>
              </li>
            </ul>
          </div>




          <div class="RoundTex3" data-aos="fade-right" data-aos-offset="200" data-aos-duration="600">
            <h4 class="grey">Touchpoints</h4>
            <ul>
              <li>
                <p>Digitalization</p>
              </li>
              <li>
                <p>Mobile/Web front ends</p>
              </li>
              <li>
                <p>Client user experience</p>
              </li>
              <li>
                <p>…</p>
              </li>
            </ul>
          </div>
          <img src="~/assets/images/roundPalm.jpg" class="palmcircleTouch" alt="multi-cercle logo Palmyra" data-aos="fade"
            data-aos-offset="200" data-aos-duration="600">



        </div>

        <!--======================== fin de partie rajoutée ==============================-->
        <article class="artLeft" id="sideDif">



          <div class="CanvasContainer" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
            <h3 class="red"><strong>A Methodology</strong></h3>
            <p><span class="red"><i class="fas fa-circle"></i></span> Agile</p>
            <p><span class="pink"><i class="fas fa-circle"></i></span> Business analysis</p>
            <p><span class="grey"><i class="fas fa-circle"></i></span> Development</p>
            <div class="firstPerc">
              <svg width="200px" height="200px" viewBox="0 0 36 36" class="donut">
                <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent"
                  stroke-width="1"></circle>
                <switch>
                  <circle class="donut-segment" cx="18" cy="18" r="15.87" fill="transparent" stroke="#ff4d5a"
                    stroke-width="0.5" stroke-dashoffset="25"></circle>
                  <foreignObject>

                  </foreignObject>
                </switch>
              </svg>
            </div>

            <div class="SecPerc">
              <svg width="150px" height="150px" viewBox="0 0 36 36" class="donut">
                <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent"
                  stroke-width="1"></circle>
                <switch>
                  <circle class="donut-segment" cx="18" cy="18" r="15.87" fill="transparent" stroke="#fbd4db"
                    stroke-width="0.5" stroke-dashoffset="25"></circle>
                  <foreignObject>

                  </foreignObject>
                </switch>
              </svg>
            </div>

            <div class="thirdPerc">
              <svg width="100px" height="100px" viewBox="0 0 36 36" class="donut">
                <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent"
                  stroke-width="1"></circle>
                <switch>
                  <circle class="donut-segment" cx="18" cy="18" r="15.87" fill="transparent" stroke="grey" stroke-width="0.5"
                    stroke-dashoffset="25"></circle>
                  <foreignObject>

                  </foreignObject>
                </switch>
              </svg>
            </div>

          </div>
          <!-- 2eme circle -->
          <div class="CanvasContainer" id="SecOntain" data-aos="fade-left" data-aos-offset="350" data-aos-duration="600">
            <h3 class="red"><strong>A STORE OF COMPONENTS</strong></h3>
            <p><span class="red"><i class="fas fa-circle"></i></span> Business
              <!-- <span class="toLeft">65.9%</span> -->
            </p>
            <p><span class="pink"><i class="fas fa-circle"></i></span> Tecnical</p>
            <p><span class="grey"><i class="fas fa-circle"></i></span> Graphical</p>
            <p><span class="Light-grey"><i class="fas fa-circle"></i></span> Transverse</p>
            <div class="firstPerc">
              <svg width="200px" height="200px" viewBox="0 0 36 36" class="donut">
                <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent"
                  stroke-width="1"></circle>
                <switch>
                  <circle class="donut-segment" cx="18" cy="18" r="15.87" fill="transparent" stroke="#ff4d5a"
                    stroke-width="0.5" stroke-dashoffset="25"></circle>
                  <foreignObject>

                  </foreignObject>
                </switch>
              </svg>
            </div>

            <div class="SecPerc">
              <svg width="150px" height="150px" viewBox="0 0 36 36" class="donut">
                <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent"
                  stroke-width="1"></circle>
                <switch>
                  <circle class="donut-segment" cx="18" cy="18" r="15.87" fill="transparent" stroke="#fbd4db"
                    stroke-width="0.5" stroke-dashoffset="25"></circle>
                  <foreignObject>

                  </foreignObject>
                </switch>
              </svg>
            </div>

            <div class="thirdPerc">
              <svg width="100px" height="100px" viewBox="0 0 36 36" class="donut">
                <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent"
                  stroke-width="1"></circle>
                <switch>
                  <circle class="donut-segment" cx="18" cy="18" r="15.87" fill="transparent" stroke="grey" stroke-width="0.5"
                    stroke-dashoffset="25"></circle>
                  <foreignObject>

                  </foreignObject>
                </switch>
              </svg>
            </div>

            <div class="LastPerc">
              <svg width="50px" height="50px" viewBox="0 0 36 36" class="donut">
                <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent"
                  stroke-width="1"></circle>
                <switch>
                  <circle class="donut-segment" cx="18" cy="18" r="15.87" fill="transparent" stroke="#eee" stroke-width="1"
                    stroke-dashoffset="25"></circle>
                  <foreignObject>

                  </foreignObject>
                </switch>
              </svg>
            </div>



          </div>

          <!-- 2eme circle end -->

 </article>
      </div>




    </section>

    <section class="Homefour expanded" id="target3"  data-magellan-target="test3">
      <article class="graphContainer">

        <article class="sideImg" id="heigtDiff" data-aos="fade-left" data-aos-offset="300" data-aos-duration="600">
          <div class="BottomImg">
            <img src="~/assets/images/palmImg2.png" alt="working on a computer">
          </div>
        </article>
      </article>



    </section>

    <!-- ===============================section video===================== -->

    <!-- =================new section (page)================ -->
    <section class="QualityPart">
      <div class="niceBorder"></div>
      <article class="artRigth" data-aos="fade-right" data-aos-offset="450" data-aos-duration="600">
        <img class="ToPres" src="~/assets/images/border.png" alt="ligne rouge entéte de section ">
        <h2 class="TopTitle"><span class="red">PALMYRA </span><br>QUALITY PROCESS</h2>
      </article>

      <article class="Promote" data-aos="fade-right" data-aos-offset="250" data-aos-duration="600">
        <p><span class="red">/ </span>Development</p>
        <p> &ensp; Source Code Control at build time</p>
        <p> &ensp; Code Review</p>
        <p> &ensp; Static Security Audit</p>
        <p> &ensp; Unit test is generalized for every development</p>
      </article>
      <article class="iconleft" id="diff" data-aos="fade-left" data-aos-offset="250" data-aos-duration="600">
        <img src="~/assets/images/icon1.png" alt="groupe d'icones">
      </article>

      <article class="tableArt" data-aos="fade-right" data-aos-offset="250" data-aos-duration="600">
        <h3 class="red">A METHODOLOGY</h3>
        <table cellspacing="20">
          <tr>
            <th>Tutorials & training</th>
            <th>Procedures & Process</th>
            <th>Development</th>
            <th>Procedures & Process</th>
            <th>Development</th>
          </tr>
          <tr>
            <td>Business analysis</td>
            <td>152367</td>
            <td>147516</td>
            <td>148744</td>
            <td>147521</td>
          </tr>
          <tr>
            <td>Development</td>
            <td>148458</td>
            <td>147521</td>
            <td>256884</td>
            <td>784264</td>
          </tr>
          <tr>
            <td>Continuous Integration</td>
            <td>147459</td>
            <td>478556</td>
            <td>147521</td>
            <td>158963</td>
          </tr>
          <tr>
            <td>Procedure & Process</td>
            <td>478425</td>
            <td>458621</td>
            <td>147521</td>
            <td>147521</td>
          </tr>
        </table>

      </article>
      <article class="Promote" id="SecdProm" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
        <p><span class="red">/ </span>Development</p>
        <p> &ensp; Source Code Control at build time</p>
        <p> &ensp; Code Review</p>
        <p> &ensp; Static Security Audit</p>
        <p> &ensp; Unit test is generalized for every development</p>
      </article>

      <article class="sideImg" id="QualImg" data-aos="fade-left" data-aos-offset="350" data-aos-duration="600">
        <div class="BottomImg">
          <img src="~/assets/images/compter&phone.png" alt="working on a computer">
        </div>
      </article>
    </section>
    <!-- =============================section dev circle============== -->


    <!-- ==================end of section devcircle=============== -->
    <section class="Benefit">
      <div class="niceBorder"></div>
      <article class="artRigth" data-aos="fade-right" data-aos-offset="400" data-aos-duration="600">
        <img class="ToPres" src="~/assets/images/border.png" alt="ligne rouge entéte de section ">
        <h2 class="TopTitle"><span class="red">BENEFITS </span><br>YOU ARE ?</h2>
      </article>
      <article class="iconleft" data-aos="fade-left" data-aos-offset="250" data-aos-duration="600">
        <img src="~/assets/images/icon2.png" alt="second set of icon" id="BenefIcon">
      </article>
      <article class="benefitArt" data-aos="fade-right" data-aos-offset="200" data-aos-duration="600">
        <h3 class="red">BUSINESS</h3>
        <p><span class="red">/ </span>Faster Time to Market</p>
        <p><span class="red">/ </span>State of the art user digital experience</p>
        <p><span class="red">/ </span>Improved Customer services</p>
        <p><span class="red">/ </span>Easy configuration</p>
        <p><span class="red">/ </span>Continuous delivery circle</p>
        <p><span class="red">/ </span>Avoid confusion and misinterpretations <br> caused by hundreds of specification
          pages</p>
        <p><span class="red">/ </span>Avoid the tunnel effect</p>
        <div class="borderTop"></div>
        <div class="borderBottom"></div>
      </article>

      <!--       <article class="sideImg" id="BenefBotImg" data-aos="fade-left" data-aos-offset="300" data-aos-duration="600">
        <div class="BottomImg">
          <img src="~/assets/images/palmImg4.png" alt="working on a computer">
          <img src="~/assets/images/littlePalmyra.png" alt="logo Palmyra" id="lastPalmyra">
        </div>
      </article> -->
      <article class="videoPart">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YEkMq4ieWkM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </article>
    </section>
    </main>
    <!-- last section main -->


<script type="text/javascript" src="/js/slider.js"></script>
<script type="text/javascript" src="/js/customjs.js"></script>
         <!-- end of page -->
</div>

</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'

export default {
  head: {
    /*     return {
      script: [{ src: '/js/slider.js' }]
    } */
  },
  async created() {
    const res = await axios('http://localhost:1337/infos')
    console.log('res', res)
    this.$store.commit('initial', res.data)
  },
  computed: {
    ...mapState({
      infos: state => state.infos,
      list: state => state.list,
      imageUrl: state => state.infos.image.Url
    })
  },
  methods: {
    ...mapMutations(['get_infos', 'set', 'increment', 'reset'])
  },
  components: {}
}
</script>
