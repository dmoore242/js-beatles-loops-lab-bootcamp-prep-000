function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayThisInstrument = []
  for (var i=0; i<musicians.length; i++) {
    theBeatlesPlayThisInstrument.push(`${musicians[i]} plays ${instruments[i]}`)
  }  return theBeatlesPlayThisInstrument
}

function johnLennonFacts(facts) {
  var i=0;
  while(i<facts.length) {
    facts[i]= (facts[i]+"!!!")
    i++;
  } return facts
  
}

function iLoveTheBeatles(number) {
  var beatles = []
  var i = 0
  do {
    beatles.push("I love the Beatles")*i
  }
  while(i  < 15) {
    i++
  } return beatles
}
  
