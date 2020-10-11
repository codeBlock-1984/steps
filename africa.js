let countries = {
  "NGA": "NG",
  "GHA": "GH",
  "KEN": "KE",
  "ZMB": "ZM",
  "SLE": "SL",
  "TZA": "TZ",
  "UGA": "UG",
  "LBR": "LR",

  "CIV": "CI",
  "BFA": "BF",
  "SEN": "SN",
  "BEN": "BJ",
  "GIN": "GN",
  "TCD": "TD",
  "CMR": "CM",
  "COG": "CG",
  "GAB": "GA",
  "COD": "CD",

  "MOZ": "MZ"
}

const ghh = [
  {
    "tip":"Title for the funding group",
    "type":"text","field":"name",
    "label":"Name",
    "rules":[
      {
        "key":"required",
        "value":"true"
      },
      {
        "key":"minLength",
        "value":"3"
      },
      {
        "key":"maxLength",
        "value":"100"
      },
      {
        "key":"type",
        "value":"string"
      }
    ]
  },
  {
    "tip":"Description for funding group","type":"text","field":"description","label":"Description","rules":[{"key":"required","value":"true"},{"key":"minLength","value":"2"},{"key":"maxLength","value":"255"},{"key":"type","value":"string"}]},{"tip":"Fixed individual amount","type":"amount","field":"individualAmount","label":"Amount","rules":[{"key":"required","value":"true"},{"key":"minValue","value":"0"},{"key":"type","value":"number"}]},{"tip":"Start Date for the crowdfunding group","type":"date","field":"startDate","label":"Start Date","rules":[{"key":"required","value":"true"},{"key":"type","value":"date"},{"key":"minDate","value":"1m"}]}];