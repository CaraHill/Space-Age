function SpaceAge(secondsArg) {
  this.seconds = secondsArg;

  this.onEarth = () => {
    return +(this.seconds / 31557600).toFixed(2);
  }

  this.onMercury = () => {
    return +(this.seconds / 7600543.82).toFixed(2);
  }

  this.onVenus = () => {
    return +(this.seconds / 19414149.05).toFixed(2);
  }

  this.onMars = () => {
    return +(this.seconds / 59354032.69).toFixed(2);
  }

  this.onJupiter = () => {
    return +(this.seconds / 374355659.12).toFixed(2);
  }

  this.onSaturn = () => {
    return +(this.seconds / 929292362.88).toFixed(2);
  }

  this.onUranus = () => {
    return +(this.seconds / 2651370019.33).toFixed(2);
  }

  this.onNeptune = () => {
    return +(this.seconds / 5200418560.03).toFixed(2);
  }
}

export { SpaceAge }

