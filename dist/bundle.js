/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./event-details.js":
/*!**************************!*\
  !*** ./event-details.js ***!
  \**************************/
/***/ (() => {

eval("\n//-------------------------------------------------------//\n\n// Get event details from URL parameters\nconst urlParams = new URLSearchParams(window.location.search);\nconst eventName = urlParams.get('name');\nconst eventDate = urlParams.get('date');\nconst eventTime = urlParams.get('time');\nconst eventVenue = urlParams.get('venue');\nconst eventDescription = urlParams.get('description'); // Assuming you added a description parameter\nconst eventImage = urlParams.get('image');\nconst eventImageElement = document.querySelector('.event-details img');\n\n// Update the page title\ndocument.title = `${eventName}`;\n\n// Display event details on the page\ndocument.getElementById('eventName').textContent = eventName;\ndocument.getElementById('eventDate').textContent = eventDate;\ndocument.getElementById('eventTime').textContent = eventTime;\ndocument.getElementById('eventVenue').textContent = eventVenue;\ndocument.getElementById('eventDescription').textContent = eventDescription;\neventImageElement.src = eventImage;\n\n\n// Get a reference to the country select element\nconst countrySelect = document.getElementById('country');\n\n// Fetch the list of countries from the RestCountries API\nfetch('https://restcountries.com/v3.1/all')\n    .then(response => response.json())\n    .then(countries => {\n        // Sort the countries alphabetically\n        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));\n\n        // Populate the country input field\n        const countryInput = document.getElementById('country');\n        countries.forEach(country => {\n            const option = document.createElement('option');\n            option.value = country.cca3;\n // Use ISO 3166-1 alpha-3 code\n            option.text = country.name.common;\n            countryInput.appendChild(option);\n        });\n    })\n    .catch(error => {\n        console.error('Error fetching countries:', error);\n    });\n\n\n\n//# sourceURL=webpack://codebyhue.github.io/./event-details.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./event-details.js"]();
/******/ 	
/******/ })()
;