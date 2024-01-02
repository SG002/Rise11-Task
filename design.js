// var myDiv = document.getElementById('login');

// // Add a click event listener
// myDiv.addEventListener('click', function() {

//   this.classList.toggle('special');
//   myDiv.style.color = 'red';
// });

// const myDiv = document.getElementById('login');

// myDiv.addEventListener('click', function() {
//   if (this.classList.contains('clicked')) {
//     this.classList.remove('clicked');
//   } else {
//     this.classList.add('clicked');
//   }
// });

const divs = document.querySelectorAll('.login');

divs.forEach(div => {
  div.addEventListener('click', function() {
    divs.forEach(d => d.classList.remove('clicked')); 
    this.classList.add('clicked'); 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      label: 'Visitors',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56 ,10],
      barThickness: 10
    }]
  };


  var options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      }
    }
  };

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
    maintainAspectRatio: false,
    responsive: true,

    
  }
  });
});


// var ctx = document.getElementById('myLineChart').getContext('2d');

// var data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       label: 'Course Visit',
//       data: [12, 19, 3, 5, 2, 3, 4, 5, 7, 9, 8, 10],
//       borderColor: 'rgba(75, 192, 192, 1)',
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       borderWidth: 4
//     },
//     {
//       label: 'Course Sale',
//       data: [15, 2, 6, 7, 4, 6, 8, 1, 4, 6, 8, 1],
//       borderColor: 'rgba(255, 99, 132, 1)',
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderWidth: 4
//     }
//   ]
// };

// // Chart configuration
// var options = {
//   scales: {
//     y: {
//       beginAtZero: true
//     }
//   }
// };

// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options:  {
//     maintainAspectRatio: false,
//     responsive: true,
//   }
// });


var ctx = document.getElementById('myPieChart').getContext('2d');

var data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: 'Pie Chart',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};


var options = {
  responsive: true,
  maintainAspectRatio: false
};

var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});
