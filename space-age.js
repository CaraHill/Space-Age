function SpaceAge(secondsArg) {
  this.seconds = secondsArg;

  this.onEarth = () => {
    return +(this.seconds / 31557600).toFixed(2);
  }

  this.onMercury = () => {
    return +(this.seconds / 7600543.82).toFixed(2);
  }
}

export { SpaceAge }
