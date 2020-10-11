let buggyMultiline = `tey, ihe light-greon apple
tangs on ihe greon traa`;

let res = buggyMultiline.replace(/^t/, 'H');
res = res.replace(/\bi(?=he)/g, 't');
res = res.replace(/\Bon\b/g, 'en');
res = res.replace(/\bt(?=angs)/, 'h');
res = res.replace(/\s(?=hangs)/gim, ' ');
res = res.replace(/\Baa/, 'ee');

const aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";
res = aliceExcerpt.match(/\ba\w*\b/gi);

console.log(res);
