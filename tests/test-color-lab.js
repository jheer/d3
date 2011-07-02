require("./../lib/env-js/envjs/node");
require("./../d3");
require("./../d3.color");

var colors = [
  "#131313", "#260813", "#252525", "#2c250e", "#3a1c26", "#3f1b0f", "#4b0a26",
  "#4f0810", "#393939", "#413820", "#453702", "#4f2f39", "#552f21", "#582e04",
  "#63213a", "#672022", "#6a1f07", "#4d4d4d", "#564c34", "#5b4c18", "#65444e",
  "#6c4335", "#70421a", "#7a374e", "#803636", "#83351b", "#8e224f", "#922036",
  "#951f1d", "#636363", "#6c6248", "#73612d", "#766104", "#7c5963", "#845849",
  "#89572e", "#8b5708", "#934d64", "#994c4a", "#9d4b2f", "#9f4a0d", "#a83b64",
  "#ad3a4b", "#b03931", "#b23811", "#bb1c65", "#c0184c", "#c31632", "#c51415",
  "#797979", "#83785e", "#8a7742", "#8f7720", "#946f79", "#9c6e5f", "#a26e43",
  "#a56d23", "#ac637a", "#b2625f", "#b76144", "#ba6125", "#c2537b", "#c85260",
  "#cc5145", "#cf5027", "#d73c7b", "#dc3a61", "#e03947", "#e2382a", "#eb017c",
  "#909090", "#9b8f74", "#a38e57", "#a88e38", "#ac8d02", "#ac8691", "#b58575",
  "#bb8458", "#c08439", "#c3830a", "#c57a91", "#cc7976", "#d27859", "#d6783b",
  "#d87711", "#dc6b92", "#e36a76", "#e8695b", "#eb683d", "#ed6816", "#f25892",
  "#f85677", "#fc545c", "#a8a8a8", "#b3a78b", "#bca66e", "#c2a54f", "#c6a528",
  "#c59ea8", "#ce9d8c", "#d59c6f", "#da9b50", "#de9b2b", "#df92a9", "#e7918d",
  "#ed9070", "#f28f51", "#f58f2e", "#f784aa", "#fe828d", "#c0c0c0", "#ccbfa3",
  "#d5be85", "#dcbe66", "#e1bd42", "#deb6c1", "#e8b5a4", "#f0b486", "#f6b367",
  "#fab344", "#fdb208", "#f9aac1", "#d9d9d9", "#e6d8bb", "#efd79d", "#f7d77d",
  "#fcd65b", "#f8cfda", "#f3f3f3", "#1d0a28", "#000d3e", "#13263c", "#301e3c",
  "#1a2053", "#450d3c", "#381153", "#1c166b", "#160284", "#283a50", "#453151",
  "#323369", "#5b2351", "#4e2669", "#372982", "#6f0452", "#650c6a", "#551482",
  "#391b9c", "#3d4e66", "#175080", "#5a4566", "#484780", "#21499a", "#723967",
  "#653b80", "#503e9a", "#2241b4", "#872567", "#7d2880", "#6d2c9a", "#5531b5",
  "#1b37d0", "#86039b", "#7412b5", "#571dd0", "#53647d", "#356597", "#715a7d",
  "#5f5c97", "#405eb2", "#8a4e7d", "#7c5098", "#6853b2", "#4556ce", "#a03e7e",
  "#954098", "#8643b3", "#6f47ce", "#474cea", "#b5207e", "#ac2598", "#9f2bb3",
  "#8e31ce", "#7437ea", "#9408ea", "#697a94", "#4f7caf", "#027ecb", "#887194",
  "#7672b0", "#5b74cb", "#1777e7", "#a26595", "#9467b0", "#8169cb", "#626ce8",
  "#b95595", "#ae58b0", "#9f5bcc", "#895ee8", "#d03f96", "#c642b1", "#b946cc",
  "#a84be8", "#e50e96", "#dc19b1", "#d122cd", "#c32be8", "#8091ac", "#6893c8",
  "#3b95e4", "#9f88ac", "#8e89c8", "#748be5", "#bb7cad", "#ad7ec9", "#9a80e5",
  "#d36dad", "#c86fc9", "#b872e5", "#eb5aae", "#e15dca", "#d360e6", "#f841ca",
  "#ec45e6", "#98a9c5", "#81abe1", "#5cacfe", "#b89fc5", "#a7a1e2", "#d494c5",
  "#c695e2", "#ee85c6", "#e287e3", "#fb76e3", "#b0c2de", "#9ac3fb", "#d1b8de",
  "#bfb9fc", "#eeacdf", "#dfaefc", "#fca0fd", "#c9dbf7", "#ead0f8", "#246b7c",
  "#3e8294", "#5799ac", "#259bc8", "#70b2c4", "#4ab3e1", "#2bb9c4", "#89cadd",
  "#68ccfb", "#4fd2dd", "#a2e4f7", "#6decf7", "#012b25", "#142a0d", "#273e20",
  "#2e3e00", "#2d544d", "#3c5333", "#435317", "#0d5933", "#225815", "#426a62",
  "#516948", "#59692b", "#5e6800", "#296f47", "#396f2a", "#588178", "#67805d",
  "#707f41", "#767f1e", "#228778", "#41865d", "#508640", "#59861c", "#168b3f",
  "#2d8b1a", "#6f9890", "#7e9773", "#889756", "#8e9636", "#409f8f", "#599e73",
  "#679e56", "#719d35", "#09a472", "#38a455", "#49a333", "#86b0a7", "#95af8a",
  "#a0af6d", "#a7ae4d", "#acae25", "#5ab8a7", "#71b78a", "#7fb66c", "#89b64c",
  "#8fb522", "#37bd89", "#53bc6b", "#63bc4b", "#6cbc1f", "#1bc24a", "#37c11d",
  "#9ec9c0", "#adc8a2", "#b8c784", "#c1c764", "#c6c640", "#73d1bf", "#89d0a2",
  "#97cf83", "#a2ce63", "#a9ce3e", "#21d7bf", "#56d7a1", "#6dd683", "#7cd562",
  "#86d53c", "#1bdc82", "#45db61", "#57db3b", "#b7e2d9", "#c6e1bb", "#d2e19c",
  "#dae07c", "#e1df59", "#e6df2a", "#8dead8", "#a1e9ba", "#b0e99b", "#bbe87b",
  "#c3e758", "#c8e727", "#4cf1d8", "#71f1b9", "#87f09a", "#96ef7a", "#a0ef56",
  "#a7ee23", "#48f69a", "#64f579", "#74f555", "#7ff51f", "#1dfb53", "#d0fcf2",
  "#dffbd4", "#ebfab4", "#f5fa94", "#fcf972", "#210e00", "#300101", "#2c001d",
  "#74003d", "#760326", "#78010e", "#534f00", "#773e00", "#893001", "#991a00",
  "#9b0146", "#857b01", "#9d7102", "#b46504", "#d44c01", "#e53500", "#fe544a",
  "#fd5723", "#d4a005", "#ee9300", "#fd8578", "#ecba00", "#feaab1", "#fdad92",
  "#fecec9", "#fed1a9", "#fef2d8", "#fef4bf", "#011133", "#27002f", "#180048",
  "#03254b", "#021e63", "#450053", "#36016b", "#043b63", "#04357d", "#062c95",
  "#970360", "#8e0184", "#0e25ec", "#0065ad", "#0e5dce", "#117ad9", "#1693f8",
  "#468efe", "#7d84fe", "#a276fe", "#c066fd", "#e14afd", "#8da3fd", "#b298fd",
  "#d18bfe", "#ed7afe", "#fdc9f8", "#062932", "#014044", "#005569", "#106a8f",
  "#026e71", "#0b83a8", "#00878d", "#1099da", "#019eb6", "#00b4f3", "#0bb8d8",
  "#04bbb5", "#0cd3f1", "#02d6d3", "#021706", "#07412c", "#0a4301", "#385600",
  "#005846", "#436e01", "#06723b", "#127302", "#128b55", "#949502", "#7a9c03",
  "#59a205", "#03a732", "#1ba700", "#06c16b", "#10f6bf", "#fefa43", "#e0fea4",
  "#e8fe81", "#edfe58", "#091320", "#315259", "#076f62", "#ff0000", "#00ff00",
  "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#000000", "#ffffff"
];

var de00 = [
{"L1": 50.0000,"a1": 2.6772,"b1": -79.7751,"L2": 50.0000,"a2": 0.0000,"b2": -82.7485,"diff": 2.0425},
{"L1": 50.0000,"a1": 3.1571,"b1": -77.2803,"L2": 50.0000,"a2": 0.0000,"b2": -82.7485,"diff": 2.8615},
{"L1": 50.0000,"a1": 2.8361,"b1": -74.0200,"L2": 50.0000,"a2": 0.0000,"b2": -82.7485,"diff": 3.4412},
{"L1": 50.0000,"a1": -1.3802,"b1": -84.2814,"L2": 50.0000,"a2": 0.0000,"b2": -82.7485,"diff": 1.0000},
{"L1": 50.0000,"a1": -1.1848,"b1": -84.8006,"L2": 50.0000,"a2": 0.0000,"b2": -82.7485,"diff": 1.0000},
{"L1": 50.0000,"a1": -0.9009,"b1": -85.5211,"L2": 50.0000,"a2": 0.0000,"b2": -82.7485,"diff": 1.0000},
{"L1": 50.0000,"a1": 0.0000,"b1": 0.0000,"L2": 50.0000,"a2": -1.0000,"b2": 2.0000,"diff": 2.3669},
{"L1": 50.0000,"a1": -1.0000,"b1": 2.0000,"L2": 50.0000,"a2": 0.0000,"b2": 0.0000,"diff": 2.3669},
{"L1": 50.0000,"a1": 2.4900,"b1": -0.0010,"L2": 50.0000,"a2": -2.4900,"b2": 0.0009,"diff": 7.1792},
{"L1": 50.0000,"a1": 2.4900,"b1": -0.0010,"L2": 50.0000,"a2": -2.4900,"b2": 0.0010,"diff": 7.1792},
{"L1": 50.0000,"a1": 2.4900,"b1": -0.0010,"L2": 50.0000,"a2": -2.4900,"b2": 0.0011,"diff": 7.2195},
{"L1": 50.0000,"a1": 2.4900,"b1": -0.0010,"L2": 50.0000,"a2": -2.4900,"b2": 0.0012,"diff": 7.2195},
{"L1": 50.0000,"a1": -0.0010,"b1": 2.4900,"L2": 50.0000,"a2": 0.0009,"b2": -2.4900,"diff": 4.8045},
{"L1": 50.0000,"a1": -0.0010,"b1": 2.4900,"L2": 50.0000,"a2": 0.0010,"b2": -2.4900,"diff": 4.8045},
{"L1": 50.0000,"a1": -0.0010,"b1": 2.4900,"L2": 50.0000,"a2": 0.0011,"b2": -2.4900,"diff": 4.7461},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 50.0000,"a2": 0.0000,"b2": -2.5000,"diff": 4.3065},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 73.0000,"a2": 25.0000,"b2": -18.0000,"diff": 27.1492},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 61.0000,"a2": -5.0000,"b2": 29.0000,"diff": 22.8977},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 56.0000,"a2": -27.0000,"b2": -3.0000,"diff": 31.9030},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 58.0000,"a2": 24.0000,"b2": 15.0000,"diff": 19.4535},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 50.0000,"a2": 3.1736,"b2": 0.5854,"diff": 1.0000},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 50.0000,"a2": 3.2972,"b2": 0.0000,"diff": 1.0000},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 50.0000,"a2": 1.8634,"b2": 0.5757,"diff": 1.0000},
{"L1": 50.0000,"a1": 2.5000,"b1": 0.0000,"L2": 50.0000,"a2": 3.2592,"b2": 0.3350,"diff": 1.0000},
{"L1": 60.2574,"a1": -34.0099,"b1": 36.2677,"L2": 60.4626,"a2": -34.1751,"b2": 39.4387,"diff": 1.2644},
{"L1": 63.0109,"a1": -31.0961,"b1": -5.8663,"L2": 62.8187,"a2": -29.7946,"b2": -4.0864,"diff": 1.2630},
{"L1": 61.2901,"a1": 3.7196,"b1": -5.3901,"L2": 61.4292,"a2": 2.2480,"b2": -4.9620,"diff": 1.8731},
{"L1": 35.0831,"a1": -44.1164,"b1": 3.7933,"L2": 35.0232,"a2": -40.0716,"b2": 1.5901,"diff": 1.8645},
{"L1": 22.7233,"a1": 20.0904,"b1": -46.6940,"L2": 23.0331,"a2": 14.9730,"b2": -42.5619,"diff": 2.0373},
{"L1": 36.4612,"a1": 47.8580,"b1": 18.3852,"L2": 36.2715,"a2": 50.5065,"b2": 21.2231,"diff": 1.4146},
{"L1": 90.8027,"a1": -2.0831,"b1": 1.4410,"L2": 91.1528,"a2": -1.6435,"b2": 0.0447,"diff": 1.4441},
{"L1": 90.9257,"a1": -0.5406,"b1": -0.9208,"L2": 88.6381,"a2": -0.8985,"b2": -0.7239,"diff": 1.5381},
{"L1": 6.7747,"a1": -0.2908,"b1": -2.4247,"L2": 5.8714,"a2": -0.0985,"b2": -2.2286,"diff": 0.6377},
{"L1": 2.0776,"a1": 0.0795,"b1": -1.1350,"L2": 0.9033,"a2": -0.0636,"b2": -0.5514,"diff": 0.9082}
];

console.log("round trip rgb->lab->rgb:");
colors.forEach(function(c) {
  var c1 = d3.rgb(c),
      c2 = d3.lab(c).rgb(),
      dr = c1.r - c2.r,
      dg = c1.g - c2.g,
      db = c1.b - c2.b,
      cc = "clip:" + (c2.clipped ? "yes" : "no");
  console.log("  " + [c1, dr, dg, db, cc].join(" "));
});
console.log("");

console.log("ciede2000 test:");
de00.forEach(function(d) {
  var c1 = d3.lab(d.L1, d.a1, d.b1),
      c2 = d3.lab(d.L2, d.a2, d.b2)
      de = c1.de00(c2);
  console.log("  "
    + d.diff.toFixed(4) + " == " + de.toFixed(4) + "\t"
    + "("+ [d.L1, d.a1, d.b1].join(", ") + ") <> "
    + "("+ [d.L2, d.a2, d.b2].join(", ") + ")"
  );
});
console.log("");