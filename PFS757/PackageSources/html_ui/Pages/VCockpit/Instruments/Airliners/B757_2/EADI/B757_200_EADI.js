class B757_200_EADI extends BaseAirliners {

  constructor() {
    super();
    this.initDuration = 7000;
  }

  get templateID() {
    return "B757_200_EADI";
  }

  get IsGlassCockpit() {
    return true;
  }

  connectedCallback() {
    super.connectedCallback();
    this.pageGroups = [
      new NavSystemPageGroup("Main", this, [
          new B757_200_EADI_MainPage()
      ]),
    ];
      this.maxUpdateBudget = 12;
  }
  disconnectedCallback() {
    window.console.log("A320 Neo PFD - destroyed");
    super.disconnectedCallback();
  }
}
class B757_200_EADI_MainElement extends NavSystemElement {
    init(root) {
    }
    onEnter() {
    }
    onUpdate(_deltaTime) {
    }
    onExit() {
    }
    onEvent(_event) {
    }
}
class B757_200_EADI_MainPage extends NavSystemPage {
  constructor() {
        super("Main", "Mainframe", new B757_200_EADI_MainElement());
        this.showILS = false;
        this.attitude = new B757_200_EADI_Attitude();
        this.vSpeed = new B757_200_EADI_VSpeed();
        this.airspeed = new B757_200_EADI_Airspeed();
        this.altimeter = new B757_200_EADI_Altimeter();
        this.compass = new B757_200_EADI_Compass();
        this.navStatus = new B757_200_EADI_NavStatus();
        this.ils = new B757_200_EADI_ILS();
        this.element = new NavSystemElementGroup([
            this.attitude,
            this.vSpeed,
            this.airspeed,
            this.altimeter,
            this.compass,
            this.navStatus,
            this.ils
        ]);
    }
    init() {
      super.init();
      
    }
