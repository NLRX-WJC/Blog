function all(promises) {
  return new Promise((reslove,reject) => {
    let index = 0
    for (const promise of promises) {
      const currentIndex = index
      promise.then((value) => {
        if (errorFlag) {
          return
        }
        result[currentIndex] = value
        elementCount++
        if (elementCount === result.length) {
          reslove(result)
        }
      }, (error) => {
        if (errorFlag) {
          return
        }
        errorFlag = true
        
        reject(error)
      })
      index++
    }
    if (index === 0) {
      reslove([])
      return
    }
    const result = new Array(index)
    let errorFlag = false
    let elementCount = 0
  })
}

function race(promises) {
  return new Promise((reslove,reject) => {
    for (const promise of promises) {
      promise.then((value) => {
        if (settlementOccurred) {
          return
        }
        settlementOccurred = true
        reslove(value)
      }, (error) => {
        if (settlementOccurred) {
          return
        }
        settlementOccurred = true
        reject(error)
      })
    }
    let settlementOccurred = false
  })
}