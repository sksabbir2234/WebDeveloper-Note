
function fibonacciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }
  
  const fibSeries = fibonacciSeries(10);
  console.log(fibSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]