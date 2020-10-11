// const fs = require('fs');
const moment = require('moment');
// const data = require('./ntzs');
// const tzs = require('./timeZones');
// const countries = require('./fCountries');

// // let myRes = {};
// // for (let item in data) {
// //   myRes[item] = Number(data[item]);
// // }

// // console.log(myRes);

// const greeting = ({ locale='en_US', country='NGA' }) => {
//   const now = new Date();
//   const formattedLocale = locale.replace(/_/g, '-');
//   const localeDateString = now.toUTCString();
//   const localeDate = new Date(localeDateString);
//   console.log(localeDateString, localeDate, localeDate.getUTCHours(), tzs[country], 'locale date>>>');
//   const currentHour = localeDate.getUTCHours() + tzs[country];
//   console.log(currentHour, 'current greeting hour>>>>');
//   let response = 'Hello';

//   if (currentHour >= 0 && currentHour <= 11) {
//     response = 'Good Morning';
//   } else if (currentHour >= 12 && currentHour <= 16) {
//     response = 'Good Afternoon';
//   } else if (currentHour >= 17 && currentHour <= 23) {
//     response = 'Good Evening';
//   }
//   return response;
// };


// const greetingOld = ({ locale='en_US', country='NGA' }) => {
//   const now = new Date();
//   const formattedLocale = locale.replace(/_/g, '-');
//   const zone = Intl.DateTimeFormat(country).resolvedOptions().timeZone;
//   const localeDateString = now.toLocaleString(formattedLocale, { timeZone: zone });
//   const localeDate = new Date(localeDateString);
//   console.log(localeDate, 'locale date>>>');
//   console.log(zone, 'zone>>>>');
//   const currentHour = zone === 'UTC' ? localeDate.getHours() + 1 : localeDate.getHours;
//   console.log(currentHour, 'current greeting hour>>>>');
//   let response = 'Hello';

//   if (currentHour >= 0 && currentHour <= 11) {
//     response = 'Good Morning';
//   } else if (currentHour >= 12 && currentHour <= 16) {
//     response = 'Good Afternoon';
//   } else if (currentHour >= 17 && currentHour <= 23) {
//     response = 'Good Evening';
//   }
//   return response;
// };


// const rawDateFormatter = (payload) => {
//   const validFormatRegex = /\d{2}\/\d{2}\/\d{4}/g;
//   let result;
//   if (validFormatRegex.test(payload)) {
//     result = payload;
//   } else {
//     const [year, month, day] = payload.split('-');
//     result = `${day}/${month}/${year}`;
//   }
//   console.log(result);
//   return result;
// };

// const getCurrentGMTDate = () => {
//   const now = new Date();
//   const localeDateString = now.toUTCString();
//   const localeDate = moment.utc().format();
//   console.log(localeDate, localeDateString);
//   const rawDate = localeDate.slice(0, 10);
//   return rawDateFormatter(rawDate);
// };

// const res = getCurrentGMTDate();
// console.log(res);

// const getProgressBar = (currentIndex, maxIndex) => {
//   let count = 1;
//   let stepStr = '';
//   const padLength = Math.floor(30 / maxIndex);

//   while (count < (maxIndex + 2)) {
//     let step = `${count}`;
//     if (count < (maxIndex + 1)) {
//       step = step.padEnd(padLength, '.');
//     }
//     stepStr += step;
//     count++;
//   }

//   const progressBar = stepStr.replace(new RegExp(`${currentIndex}`), `[${currentIndex}]`);
//   return progressBar;
// };

// const res = String.raw({ raw: ['Hey', ''] }, ' you');
// const foo = { bar: [] };
// const func = function (type) {
//   console.log(type);
//   let params = { '00': ['hello'] };
//   if (params.propertyIsEnumerable(type)) {
//     console.log(params.propertyIsEnumerable(type), params[type]);
//     return params[type][0];
//   } else return 'Oops!';
// };
// console.log(foo.propertyIsEnumerable('bars'));
// const baz = func('07');
// console.log(baz);

// const func = function (param) {
//   return new Promise((resolve, reject) => {
//     if (param) {
//       resolve('Yay!');
//     } else {
//       reject('Oops!');
//     }
//   });
// };

// func('').then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

const foo = moment('2020-09-06').format('dddd, MMMM Do YYYY');
console.log(foo)
