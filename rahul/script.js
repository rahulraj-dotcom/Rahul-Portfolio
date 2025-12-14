   

   var t1 = gsap.timeline() 

    t1.from("#navbar", {
       y:-20,
       opacity:0,
       duration:1,
       delay:0.5,
    })

    t1.from("#navbar h1", {
       z:-20,
       opacity:0,
       duration:1,
    })

    t1.from("#navbar h3", {
       z:20,
       opacity:0,
       duration:1,
       stagger:0.5,
    })

    t1.from("#page1-info-left img", {
       z:20,
       opacity:0,
       duration:0.5,
    })

    t1.from("#page1-info-right h2", {
       z:20,
       opacity:0,
       duration:0.5,
       stagger:1,
    })
    t1.from("#page1-info-right h4", {
       z:20,
       opacity:0,
       duration:0.5,
       stagger:1,
    })
    t1.from("#page1-info-right p", {
       z:20,
       opacity:0,
       duration:0.5,
       stagger:1,
    })
    t1.from("#page1-info-right #icons", {
       z:20,
       opacity:0,
       duration:0.5,
       stagger:1,
    })

    t1.from("#page1-info-right #icon1 i", {
       z:20,
       opacity:0,
       stagger:1,
    })

    t1.from("#page1-info-right #hire-button button", {
       z:20,
       opacity:0,
       stagger:1,
    })

   