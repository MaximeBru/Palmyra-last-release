<template>
  <div class="content">
    <h1 class="title">Custom CSS!</h1>
    <p><nuxt-link to="/about" class="button is-medium is-primary hvr-float-shadow">I am a button</nuxt-link></p>
    <p><nuxt-link to="/about">About page</nuxt-link></p>

      <header class="img-box">
      <div class="OpacFull">
        <div class="PalmyraHead" data-aos="fade-right" data-aos-duration="1500">
          <div class="conteneur">
            <img src="~/assets/images/Logo-Palmyra1.jpg" alt="Logo Palmyra">

            <h1><span class="red"> PALMYRA</span><br>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <div class="triangle"></div>
          </div>
        </div>
        <div class="scroll"></div>
      </div>
    </header>

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
         <!-- end of page -->
    </div>
  </div>

</template>
