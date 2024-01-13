
function random(seed: number) {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
}

function seededRandom(seed: string) {
    // Convert the seed string into a numeric hash value
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    // Generate a random number between 0 and 1 using the hash value
    const random = (Math.abs(hash) % 10000000) / 10000000;
  
    return random;
}
  
function seededShuffle<T>(array: T[], seed: number) {
    const shuffled = array
    let currentIndex = shuffled.length
    let temporaryValue: T
    let randomIndex: number
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(random(seed) * currentIndex)
      currentIndex -= 1
  
      temporaryValue = shuffled[currentIndex]
      shuffled[currentIndex] = shuffled[randomIndex]
      shuffled[randomIndex] = temporaryValue
    }
  
    return shuffled
  }

export { seededShuffle, seededRandom }