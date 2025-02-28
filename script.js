let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }

  prevScrollPos = currentScrollPos;

  //this will make the navbar stick when reaches 80px
  if (window.pageYOffset > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

//this function will open the sidebar when reaches a small screen size
function openSideBar() {
  const navbar = document.querySelector(".navbar");
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  navbar.style.display = "none";
}

//this function will close the sidebar when reaches a large screen size
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  const navbar = document.querySelector(".navbar");
  sidebar.style.display = "none";
  navbar.style.display = "flex";
}

//function that create a timestamp on my footer
function updateFooter() {
  const yearElement = document.getElementById("year");
  const timestampElement = document.getElementById("timestamp");
  const now = new Date();

  yearElement.textContent = now.getFullYear();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  timestampElement.textContent = `Last updated: ${now.toLocaleDateString(
    "en-US",
    options
  )}`;
}

function showProfilePicture() {
  const profilePic = document.getElementById("profile-pic");
  profilePic.style.opacity = "1"; // Fade in
}

// Run functions when page loads
document.addEventListener("DOMContentLoaded", () => {
  updateFooter();

  // Delay profile picture appearance when load
  setTimeout(showProfilePicture, 5000);
});

// Run on page load and updating the footer
document.addEventListener("DOMContentLoaded", updateFooter);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("timestamp").textContent =
    "Last updated: " + new Date().toLocaleString();
});

// Function to calculate grade
function calculateGrade() {
  let userInput = document.getElementById("markInput").value;
  let result = $("#resultMessage");

  let mark = parseFloat(userInput);

  if (isNaN(mark) || mark < 0 || mark > 100) { //to check if user is putting a number and not some random characters
    alert("Please put a valid grade between 0 - 100");
    return;
  }

  //grade criteria with its corresponding mark
  if (mark < 50) {
    result.text("Your Grade is F");
    result.css("color", "red");
  } else if (mark >= 50 && mark < 60) {
    result.text("Your Grade is D");
    result.css("color", "orange");
  } else if (mark >= 60 && mark < 70) {
    result.text("Your Grade is C");
    result.css("color", "yellow");
  } else if (mark >= 70 && mark < 85) {
    result.text("Your Grade is B");
    result.css("color", "blue");
  } else if (mark >= 85 && mark <= 100) {
    result.text("Your Grade is A");
    result.css("color", "green");
  }
}

//function to convert and fahrenheit to Kelvin and Celsius
function convertTemperature() {
  let fahrenheitInput = document.getElementById("fahrenheit").value; //an input to put any fahrenheit degree
  let celsiusOutput = $("#convertedTempC");
  let kelvinOutput = $("#convertedTempK");

  let fahrenheit = parseFloat(fahrenheitInput); //convert and input to a float

  if (isNaN(fahrenheit)) {
    alert("Please enter a valid degree in fahrenheit"); //to check if user is putting a valid fahrenheit degree
    return;
  }

  // Fahrenheit to Celsius: (°F − 32) × 5/9 = °C
  let celsius = ((fahrenheit - 32) * 5) / 9;
  // Fahrenheit to Kelvin: (°F − 32) × 5/9 + 273.15 = K
  let kelvin = celsius + 273.15;

  // Update results here
  celsiusOutput.html(`<strong>${celsius.toFixed(2)}°C (Celsius)</strong>`);
  kelvinOutput.html(`<strong>${kelvin.toFixed(2)}K (Kelvin)</strong>`);

  // Add color to results
  celsiusOutput.css("color", "orange");
  kelvinOutput.css("color", "blue");
}

//data provided
const dataSet = [
  [
    "Brielle Williamson",
    "Integration Specialist",
    "New York",
    "4804",
    "2012/12/02",
    "$372,000",
  ],
  [
    "Herrod Chandler",
    "Sales Assistant",
    "San Francisco",
    "9608",
    "2012/08/06",
    "$137,500",
  ],
  [
    "Rhona Davidson",
    "Integration Specialist",
    "Tokyo",
    "6200",
    "2010/10/14",
    "$327,900",
  ],
  [
    "Colleen Hurst",
    "Javascript Developer",
    "San Francisco",
    "2360",
    "2009/09/15",
    "$205,500",
  ],
  [
    "Sonya Frost",
    "Software Engineer",
    "Edinburgh",
    "1667",
    "2008/12/13",
    "$103,600",
  ],
  ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
  [
    "Quinn Flynn",
    "Support Lead",
    "Edinburgh",
    "9497",
    "2013/03/03",
    "$342,000",
  ],
  [
    "Tiger Nixon",
    "System Architect",
    "Edinburgh",
    "5421",
    "2011/04/25",
    "$320,800",
  ],
  ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
  [
    "Ashton Cox",
    "Junior Technical Author",
    "San Francisco",
    "1562",
    "2009/01/12",
    "$86,000",
  ],
  [
    "Cedric Kelly",
    "Senior Javascript Developer",
    "Edinburgh",
    "6224",
    "2012/03/29",
    "$433,060",
  ],
  ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
  [
    "Charde Marshall",
    "Regional Director",
    "San Francisco",
    "6741",
    "2008/10/16",
    "$470,600",
  ],
  [
    "Haley Kennedy",
    "Senior Marketing Designer",
    "London",
    "3597",
    "2012/12/18",
    "$313,500",
  ],
  [
    "Tatyana Fitzpatrick",
    "Regional Director",
    "London",
    "1965",
    "2010/03/17",
    "$385,750",
  ],
  [
    "Michael Silva",
    "Marketing Designer",
    "London",
    "1581",
    "2012/11/27",
    "$198,500",
  ],
  [
    "Paul Byrd",
    "Chief Financial Officer (CFO)",
    "New York",
    "3059",
    "2010/06/09",
    "$725,000",
  ],
  [
    "Gloria Little",
    "Systems Administrator",
    "New York",
    "1721",
    "2009/04/10",
    "$237,500",
  ],
  [
    "Bradley Greer",
    "Software Engineer",
    "London",
    "2558",
    "2012/10/13",
    "$132,000",
  ],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
  [
    "Jenette Caldwell",
    "Development Lead",
    "New York",
    "1937",
    "2011/09/03",
    "$345,000",
  ],
  [
    "Yuri Berry",
    "Chief Marketing Officer (CMO)",
    "New York",
    "6154",
    "2009/06/25",
    "$675,000",
  ],
  [
    "Caesar Vance",
    "Pre-Sales Support",
    "New York",
    "8330",
    "2011/12/12",
    "$106,450",
  ],
  [
    "Doris Wilder",
    "Sales Assistant",
    "Sidney",
    "3023",
    "2010/09/20",
    "$85,600",
  ],
  [
    "Angelica Ramos",
    "Chief Executive Officer (CEO)",
    "London",
    "5797",
    "2009/10/09",
    "$1,200,000",
  ],
  ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
  [
    "Jennifer Chang",
    "Regional Director",
    "Singapore",
    "9239",
    "2010/11/14",
    "$357,650",
  ],
  [
    "Brenden Wagner",
    "Software Engineer",
    "San Francisco",
    "1314",
    "2011/06/07",
    "$206,850",
  ],
  [
    "Fiona Green",
    "Chief Operating Officer (COO)",
    "San Francisco",
    "2947",
    "2010/03/11",
    "$850,000",
  ],
  [
    "Shou Itou",
    "Regional Marketing",
    "Tokyo",
    "8899",
    "2011/08/14",
    "$163,000",
  ],
  [
    "Michelle House",
    "Integration Specialist",
    "Sidney",
    "2769",
    "2011/06/02",
    "$95,400",
  ],
  ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
  [
    "Prescott Bartlett",
    "Technical Author",
    "London",
    "3606",
    "2011/05/07",
    "$145,000",
  ],
  [
    "Gavin Cortez",
    "Team Leader",
    "San Francisco",
    "2860",
    "2008/10/26",
    "$235,500",
  ],
  [
    "Martena Mccray",
    "Post-Sales support",
    "Edinburgh",
    "8240",
    "2011/03/09",
    "$324,050",
  ],
  [
    "Unity Butler",
    "Marketing Designer",
    "San Francisco",
    "5384",
    "2009/12/09",
    "$85,675",
  ],
];

//mapping of the data and storing it an array and putting value on each data per item
let staffData = dataSet.map((staff) => ({
  name: staff[0],
  position: staff[1],
  department: staff[2],
  employeeID: staff[3],
  hireDate: staff[4],
  salary: parseInt(staff[5].replace(/[^0-9]/g, "")),
}));


let sortNameButton = document.querySelector(".sortingOptions .sortByName");
let sortSalaryButton = document.querySelector(".sortingOptions .sortBySalary");

//function to display staff and creating a table from the staff data provided
function displayStaff() {
  let tableBody = document.getElementById("staffTableBody");
  tableBody.innerHTML = "";
  staffData.forEach((staff) => {
    let row = `<tr>
            <td>${staff.name}</td>
            <td>${staff.position}</td>
            <td>${staff.department}</td>
            <td>$${staff.salary.toLocaleString()}</td>
        </tr>`;
    tableBody.innerHTML += row;
  });
}

//function to sort name from desc to asc
let desc = false;
sortNameButton.addEventListener("click", () => {
  let staffData = sortArrayBy(dataSet, "name", desc);
  displayStaff(staffData);

  desc = !desc;
});

//function to sort salary from desc to asc
sortSalaryButton.addEventListener("click", () => {
  let staffData = sortArrayBy(dataSet, "salary", desc);
  displayStaff(staffData);

  desc = !desc;
});

//function to sort any item
function sortArrayBy(array, sort, desc) {
  staffData.sort(function (a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;

    return 0;
  });
  if (desc) staffData.reverse();

  return staffData;
}

$(document).ready(function () {
  displayStaff();
});
