const { CronJob } = require('cron');
const moment = require('moment');
const fetch = require('node-fetch');

const song = ['it starts with', 'one thing'];

var foo = [
  {
      "id": "fd679da6-c42a-47b6-b947-1ae9eccaab23",
      "name": "Esusu",
      "description": "This group requires a minimum of two approved members and a maximum of twelve. Each member takes turns monthly to receive an accumulation of a fixed deposit by members of the group. No member can join the group when it has started.",
      "hasFixedIndividualAmount": true,
      "hasFixedGroupAmount": false,
      "hasMaturityDate": false,
      "maxUser": 12,
      "minUser": 2,
      "isAutomatedCycle": true,
      "defaultCycleDuration": "1m",
      "hasRollingBeneficiary": true,
      "hasFixedDefaultCycle": true,
      "canJoinClosedGroup": false,
      "config": "[{\"tip\":\"Title for the funding group\",\"type\":\"text\",\"field\":\"name\",\"label\":\"Name\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minLength\",\"value\":\"3\"},{\"key\":\"maxLength\",\"value\":\"100\"},{\"key\":\"type\",\"value\":\"string\"}]},{\"tip\":\"Description for funding group\",\"type\":\"text\",\"field\":\"description\",\"label\":\"Description\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minLength\",\"value\":\"2\"},{\"key\":\"maxLength\",\"value\":\"255\"},{\"key\":\"type\",\"value\":\"string\"}]},{\"tip\":\"Fixed individual amount\",\"type\":\"amount\",\"field\":\"individualAmount\",\"label\":\"Amount\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minValue\",\"value\":\"0\"},{\"key\":\"type\",\"value\":\"number\"}]},{\"tip\":\"Start Date for the crowdfunding group\",\"type\":\"date\",\"field\":\"startDate\",\"label\":\"Start Date\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"type\",\"value\":\"date\"},{\"key\":\"minDate\",\"value\":\"1d\"}]}]",
      "createdAt": "2020-02-24T11:39:38.283177Z",
      "updatedAt": "2020-07-11T15:56:55.097091Z"
  },
  {
      "id": "faf656ee-fef4-4d92-b00b-fea012a48bb5",
      "name": "Real Target Group Savings",
      "description": "This is a voluntary contribution type with a lumpsum target group amount. Each member is expected to donate at will towards the target group amount and date.",
      "hasFixedIndividualAmount": false,
      "hasFixedGroupAmount": true,
      "hasMaturityDate": true,
      "maxUser": 20,
      "minUser": 2,
      "isAutomatedCycle": false,
      "defaultCycleDuration": "0d",
      "hasRollingBeneficiary": false,
      "hasFixedDefaultCycle": false,
      "canJoinClosedGroup": true,
      "config": "[{\"tip\": \"Title for the group\", \"type\": \"text\", \"field\": \"name\", \"label\": \"Name\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"minLength\", \"value\": 2}, {\"key\": \"maxLength\", \"value\": 100}, {\"key\": \"type\", \"value\": \"string\"}]}, {\"tip\": \"Description of the group\", \"type\": \"text\", \"field\": \"description\", \"label\": \"Description\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"minLength\", \"value\": 2}, {\"key\": \"maxLength\", \"value\": 255}, {\"key\": \"type\", \"value\": \"string\"}]}, {\"tip\": \"Group target amount\", \"type\": \"amount\", \"field\": \"targetGroupAmount\", \"label\": \"Amount\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"minValue\", \"value\": 0}, {\"key\": \"type\", \"value\": \"number\"}]}, {\"tip\": \"Start date for the group\", \"type\": \"date\", \"field\": \"startDate\", \"label\": \"Start Date\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"type\", \"value\": \"date\"}, {\"key\": \"minDate\", \"value\": \"1d\"}]}, {\"tip\": \"Maturity date for the group\", \"type\": \"date\", \"field\": \"targetGroupDate\", \"label\": \"Maturity Date\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"type\", \"value\": \"date\"}, {\"key\": \"minDate\", \"value\": \"1d\"}]}]",
      "createdAt": "2020-03-10T14:11:29.220536Z",
      "updatedAt": "2020-07-26T06:32:45.050075Z"
  },
  {
      "id": "86a4024c-3820-4c54-9abc-a34e81c42a4f",
      "name": "Personal Target Savings",
      "description": "This is a voluntary \"Personal\" contribution type with a lumpsum target amount. The owner is expected to donate at will towards the target amount and date.",
      "hasFixedIndividualAmount": false,
      "hasFixedGroupAmount": true,
      "hasMaturityDate": true,
      "maxUser": 1,
      "minUser": 1,
      "isAutomatedCycle": false,
      "defaultCycleDuration": "0m",
      "hasRollingBeneficiary": false,
      "hasFixedDefaultCycle": false,
      "canJoinClosedGroup": false,
      "config": "[{\"tip\": \"Title for the group\", \"type\": \"text\", \"field\": \"name\", \"label\": \"Name\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"minLength\", \"value\": 2}, {\"key\": \"maxLength\", \"value\": 100}, {\"key\": \"type\", \"value\": \"string\"}]}, {\"tip\": \"Description for group\", \"type\": \"text\", \"field\": \"description\", \"label\": \"Description\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"minLength\", \"value\": 2}, {\"key\": \"maxLength\", \"value\": 255}, {\"key\": \"type\", \"value\": \"string\"}]}, {\"tip\": \"Target amount\", \"type\": \"amount\", \"field\": \"targetGroupAmount\", \"label\": \"Amount\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"minValue\", \"value\": 0}, {\"key\": \"type\", \"value\": \"number\"}]}, {\"tip\": \"Start Date for\", \"type\": \"date\", \"field\": \"startDate\", \"label\": \"Start Date\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"type\", \"value\": \"date\"}, {\"key\": \"minDate\", \"value\": \"1d\"}]}, {\"tip\": \"Maturity date for the crowd funding\", \"type\": \"date\", \"field\": \"targetGroupDate\", \"label\": \"Maturity Date\", \"rules\": [{\"key\": \"required\", \"value\": true}, {\"key\": \"type\", \"value\": \"date\"}, {\"key\": \"minDate\", \"value\": \"1d\"}]}]",
      "createdAt": "2020-05-13T13:27:30.877575Z",
      "updatedAt": "2020-07-11T16:33:42.288144Z"
  },
  {
      "id": "d1c1f6d1-9794-47a0-bc6b-50443c4e2cad",
      "name": "Personal Recurring Savings",
      "description": "This is an automated daily \"Personal\" savings. The owner's fund source is expected to be debited with a fixed daily amount.",
      "hasFixedIndividualAmount": true,
      "hasFixedGroupAmount": false,
      "hasMaturityDate": false,
      "maxUser": 1,
      "minUser": 1,
      "isAutomatedCycle": true,
      "defaultCycleDuration": "1d",
      "hasRollingBeneficiary": false,
      "hasFixedDefaultCycle": true,
      "canJoinClosedGroup": false,
      "config": "[{\"tip\":\"Title for the funding group\",\"type\":\"text\",\"field\":\"name\",\"label\":\"Name\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minLength\",\"value\":\"2\"},{\"key\":\"maxLength\",\"value\":\"100\"},{\"key\":\"type\",\"value\":\"string\"}]},{\"tip\":\"Description for the group\",\"type\":\"text\",\"field\":\"description\",\"label\":\"Description\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minLength\",\"value\":\"2\"},{\"key\":\"maxLength\",\"value\":\"255\"},{\"key\":\"type\",\"value\":\"string\"}]},{\"tip\":\"Fixed recurring amount\",\"type\":\"amount\",\"field\":\"individualAmount\",\"label\":\"Amount\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minValue\",\"value\":\"0\"},{\"key\":\"type\",\"value\":\"number\"}]},{\"tip\":\"Start date for the group\",\"type\":\"date\",\"field\":\"startDate\",\"label\":\"Start Date\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"type\",\"value\":\"date\"},{\"key\":\"minDate\",\"value\":\"1d\"}]}]",
      "createdAt": "2020-05-13T13:47:04.301235Z",
      "updatedAt": "2020-07-24T11:55:35.897068Z"
  },
  {
      "id": "9d7e24f0-1d7d-43ad-a0ea-65c417272955",
      "name": "daily esusu",
      "description": "This group requires a minimum of two approved members and a maximum of twelve. Each member takes turns daily to receive an accumulation of a fixed deposit by members of the group. No member can join the group when it has started.",
      "hasFixedIndividualAmount": true,
      "hasFixedGroupAmount": false,
      "hasMaturityDate": false,
      "maxUser": 12,
      "minUser": 2,
      "isAutomatedCycle": true,
      "defaultCycleDuration": "1d",
      "hasRollingBeneficiary": true,
      "hasFixedDefaultCycle": true,
      "canJoinClosedGroup": false,
      "config": "[{\"tip\":\"Title for the funding group\",\"type\":\"text\",\"field\":\"name\",\"label\":\"Name\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minLength\",\"value\":\"3\"},{\"key\":\"maxLength\",\"value\":\"100\"},{\"key\":\"type\",\"value\":\"string\"}]},{\"tip\":\"Description for funding group\",\"type\":\"text\",\"field\":\"description\",\"label\":\"Description\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minLength\",\"value\":\"2\"},{\"key\":\"maxLength\",\"value\":\"255\"},{\"key\":\"type\",\"value\":\"string\"}]},{\"tip\":\"Fixed individual amount\",\"type\":\"amount\",\"field\":\"individualAmount\",\"label\":\"Amount\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"minValue\",\"value\":\"0\"},{\"key\":\"type\",\"value\":\"number\"}]},{\"tip\":\"Start date for the crowdfunding group\",\"type\":\"date\",\"field\":\"startDate\",\"label\":\"Start Date\",\"rules\":[{\"key\":\"required\",\"value\":\"true\"},{\"key\":\"type\",\"value\":\"date\"},{\"key\":\"minDate\",\"value\":\"1d\"}]}]",
      "createdAt": "2020-08-17T20:57:29.784094Z",
      "updatedAt": "2020-06-03T09:40:46.271259Z"
  }
];
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ message: 'it starts with...' })
};

const options1 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ message: 'one thing. I don\'t know why...' })
};

const options2 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ message: 'it doesn\'t even matter...' })
};

const codeJob = new CronJob('* * * * * *', () => {
  fetch('http://localhost:3000/jobs', options)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
});

const codeJob1 = new CronJob('* * * * * *', () => {
  fetch('http://localhost:3000/jobs', options1)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
});

const codeJob2 = new CronJob('* * * * * *', () => {
  fetch('http://localhost:3000/jobs', options2)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
});

const codeTwo = new CronJob('* * * * * *', () => {
  console.log('one thing...');
});

codeJob.start();
codeJob1.start();
codeJob2.start();
// codeTwo.start();

process.on('message', function(msg) {
  console.log(msg, 'message >>>>>>>>>>');
  if (msg == 'shutdown') {
    console.log('Closing all connections...');
    setTimeout(function() {
      console.log('Finished closing connections');
      process.exit(0);
    }, 1500);
  }
});

// process.on('SIGINT', function() {
//   // console.log(, 'message >>>>>>>>>>');
//   if (msg == 'shutdown') {
//     console.log('Closing all connections...');
//     setTimeout(function() {
//       console.log('Finished closing connections');
//       process.exit(0);
//     }, 1500);
//   }
// });


