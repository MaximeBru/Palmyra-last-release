<template>
  <div class="content">

 <!-- ================================begin slider=================================== -->
    <div id="slider1_container" style="visibility: hidden; position: relative; margin: 0 auto;
        top: 0px; left: 0px; width: 1300px; height: 500px; overflow: hidden;">
            <!-- Loading Screen -->
            <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
                <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="~/assets/svg/loading/static-svg/spin.svg" />
            </div>

            <!-- Slides Container -->
            <div data-u="slides" style="position: absolute; left: 0px; top: 0px; width: 1300px; height: 500px; overflow: hidden;">
                <div>

                  <div class="img-box">
        <div class="OpacFull">
        <div class="PalmyraHead" data-aos="fade-right" data-aos-duration="1500">
          <div class="conteneur">
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
                    <img data-u="image" src="~/assets/images/002.jpg" />
                </div>
                <div>
                    <img data-u="image" src="~/assets/images/003.jpg" />
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
            <div data-u="navigator" class="jssorb031" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
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
            <div data-u="arrowleft" class="jssora051" style="width:55px;height:55px;top:0px;left:25px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
                </svg>
            </div>
            <div data-u="arrowright" class="jssora051" style="width:55px;height:55px;top:0px;right:25px;" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
                </svg>
            </div>
            <!--#endregion Arrow Navigator Skin End -->
        </div>
        <!-- Jssor Slider End -->

        <section id="target1" class="HomeSec expanded" data-magellan-target="test1">
      <div class="row">
        <article class="artRigth" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
          <img class="ToPres" src="~/assets/images/palmCorp.jpg" alt="entéte de section">
        </article>
        <article class="DescIntro" data-aos="fade-left" data-aos-offset="350" data-aos-duration="600">
          <p><span class="red">/ </span>Built in Java, It integrates many market frameworks. It allows a developer to
            benefit from all these Frameworks functions without being a specialist of each of them.</p>
          <p class="red"> A Development Platform for Banking & Insurance <br> One-Stop-Shop Platform for Banking &
            Insurance</p>
        </article>
        <article class="artLeft" id="Fonctionality" data-aos="fade-left" data-aos-offset="400" data-aos-duration="600">
          <div class="FonctionalCard">
            <img src="~/assets/images/cloud.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A robust platform</h2>
              <p>A robust Platform to build low code application with minimal involvement of Expert developers or
                system administrators</p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/images/cloud.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">An enabler and Accelerator</h2>
              <p>To support fast digital transformation of banks and insurance.</p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/images/cloud.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A store of reusable</h2>
              <p>A robust Platform to build low code application with minimal involvement of Expert developers or
                system administrators</p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/images/cloud.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A reference platform</h2>
              <p> exclusive, to the banking and insurance sector.</p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/images/cloud.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A regularly up to date platform</h2>
              <p>That embeds best of breed market standard</p>
            </div>
          </div>

          <div class="FonctionalCard">
            <img src="~/assets/images/cloud.svg" alt="cloud">
            <div class="NiceText">
              <h2 class="red">A robust platform</h2>
              <p>A high-productivity development platform</p>
            </div>

          </div>

        </article>
        </div>
    </section>
<!-- second section -->
 <div class="Homethird expanded" id="target2" data-magellan-target="test2">
      <article class="artRigth">
        <article class="artRigth" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
          <img class="ToPres" src="~/assets/images/border.png" alt="ligne rouge entéte de div ">
          <h2 class="TopTitle">WHAT IS<br> <span class="red">PALMYRA ?</span></h2>
        </article>
      </article>
      <div class="artLeft">

        <div class="CanvasContainer" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
          <h3 class="red"><strong>A Methodology</strong></h3>
          <p><span class="red"><i class="fas fa-circle"></i></span> Agile<span class="toLeft">65.9%</span></p>
          <p><span class="pink"><i class="fas fa-circle"></i></span> Business analysis<span class="toLeft">65.9%</span></p>
          <p><span class="grey"><i class="fas fa-circle"></i></span> Development<span class="toLeft">65.9%</span></p>
          <div class="firstPerc">
            <svg width="200px" height="200px" viewBox="0 0 36 36" class="donut">
              <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent" stroke-width="1"></circle>
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
              <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent" stroke-width="1"></circle>
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
              <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent" stroke-width="1"></circle>
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
          <p><span class="red"><i class="fas fa-circle"></i></span> Business <span class="toLeft">65.9%</span></p>
          <p><span class="pink"><i class="fas fa-circle"></i></span> Tecnical<span class="toLeft">57.6%</span></p>
          <p><span class="grey"><i class="fas fa-circle"></i></span> Graphical<span class="toLeft">50.1%</span></p>
          <p><span class="Light-grey"><i class="fas fa-circle"></i></span> Transverse<span class="toLeft">75.1%</span></p>
          <div class="firstPerc">
            <svg width="200px" height="200px" viewBox="0 0 36 36" class="donut">
              <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent" stroke-width="1"></circle>
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
              <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent" stroke-width="1"></circle>
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
              <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent" stroke-width="1"></circle>
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
              <circle class="donut-ring" cx="18" cy="18" r="15.87" fill="transparent" stroke="transparent" stroke-width="1"></circle>
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



        </div>


      </div>


        <!-- section suivante  -->
        <section class="Homefour expanded" id="target3" data-magellan-target="test3">
      <div class="graphContainer" >

        <div class="graphTitle" data-aos="fade-right" data-aos-offset="350" data-aos-duration="600">
          <h3 class="red"><strong>A BASE FRAME</strong></h3>
          <p><span class="red"><i class="fas fa-circle"></i></span> Agile </p>
          <p><span class="pink"><i class="fas fa-circle"></i></span> Business Analysis</p>
          <p><span class="grey"><i class="fas fa-circle"></i></span> Development</p>

        </div>
        <!-- ==========garph bar begin===== -->
        <div class="igFrameBar">
          <div class="iTab iTab1"></div>
          <div class="iTab iTab2"></div>
          <div class="iTab iTab3"></div>
          <div class="iTab iTab4"></div>
          <div class="iTab iTab5"></div>
          <div class="iTab iTab6"></div>
          <div class="igData " id="isdat1"> </div>
          <div class="igData " id="isdat2"></div>
          <div class="igData " id="isdat3"></div>
          <div class="igData " id="isdat4"></div>
          <div class="igData " id="isdat5"></div>
          <div class="igData " id="isdat6"></div>

        </div>
        <!-- =======graph bar end=========== -->
        <div class="artRigth">

        </div>
        <div class="sideImg" data-aos="fade-left" data-aos-offset="300" data-aos-duration="600">
          <div class="BottomImg">
            <img src="~/assets/images/palmImg2.png" alt="working on a computer">
          </div>
        </div>

      </div>
    </section>
    <!-- last setction of homepage -->
    <section class="QualityPart">
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
        <article class="iconleft" data-aos="fade-left" data-aos-offset="250" data-aos-duration="600">
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
<section class="Benefit">
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
          <p><span class="red">/ </span>Avoid confusion and misinterpretations <br> caused by hundreds of specification pages</p>
          <p><span class="red">/ </span>Avoid the tunnel effect</p>
        <div class="borderTop"></div>
        <div class="borderBottom"></div>
      </article>

      <article class="benefitArt" data-aos="fade-left" data-aos-offset="250" data-aos-duration="600">
          <h3 class="red">DSI</h3>
            <p><span class="red">/ </span>Faster Time to Market</p>
            <p><span class="red">/ </span>State of the art user digital experience</p>
            <p><span class="red">/ </span>Improved Customer services</p>
            <p><span class="red">/ </span>Easy configuration</p>
            <p><span class="red">/ </span>Continuous delivery circle</p>
            <p><span class="red">/ </span>Avoid confusion and misinterpretations <br> caused by hundreds of specification pages</p>
            <p><span class="red">/ </span>Avoid the tunnel effect</p>
          <div class="borderTop"></div>
          <div class="borderBottom"></div>
        </article>

        <article class="benefitArt" data-aos="fade-right" data-aos-offset="250" data-aos-duration="600">
            <h3 class="red">DSI</h3>
              <p><span class="red">/ </span>Faster Time to Market</p>
              <p><span class="red">/ </span>State of the art user digital experience</p>
              <p><span class="red">/ </span>Improved Customer services</p>
              <p><span class="red">/ </span>Easy configuration</p>
              <p><span class="red">/ </span>Continuous delivery circle</p>
              <p><span class="red">/ </span>Avoid confusion and misinterpretations <br> caused by hundreds of specification pages</p>
              <p><span class="red">/ </span>Avoid the tunnel effect</p>
            <div class="borderTop"></div>
            <div class="borderBottom"></div>
          </article>

          <article class="sideImg" id="BenefBotImg" data-aos="fade-left" data-aos-offset="300" data-aos-duration="600">
            <div class="BottomImg">
              <img src="~/assets/images/palmImg4.png" alt="working on a computer">
              <img src="~/assets/images/littlePalmyra.png" alt="logo Palmyra" id="lastPalmyra">
            </div>
          </article>

</section>
         <!-- end of page -->
    </div>


</template>
<script>
export default {
  head () {
    return {
      script: [
        { src: '/js/slider.js' }
      ],
    }
  }
}
</script>
