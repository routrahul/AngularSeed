angular.module('forms.common', ['ngRoute'])

.factory('getStatesFactory',['$http',function($http){
        var states = [
          {
              id: "US",
              name: "Federal"
          }, {
              id: "AK",
              name: "Alaska"
          }, {
              id: "AL",
              name: "Alabama"
          }, {
              id: "AR",
              name: "Arkansas"
          }, {
              id: "AZ",
              name: "Arizona"
          }, {
              id: "CA",
              name: "California"
          }, {
              id: "CO",
              name: "Colorado"
          }, {
              id: "CT",
              name: "Connecticut"
          }, {
              id: "DE",
              name: "Delaware"
          }, {
              id: "DC",
              name: "District of Columbia"
          }, {
              id: "FL",
              name: "Florida"
          }, {
              id: "GA",
              name: "Georgia"
          }, {
              id: "HI",
              name: "Hawaii"
          }, {
              id: "IA",
              name: "Iowa"
          }, {
              id: "ID",
              name: "Idaho"
          }, {
              id: "IL",
              name: "Illinois"
          }, {
              id: "IN",
              name: "Indiana"
          }, {
              id: "KS",
              name: "Kansas"
          }, {
              id: "KY",
              name: "Kentucky"
          }, {
              id: "LA",
              name: "Louisiana"
          }, {
              id: "MA",
              name: "Massachusetts"
          }, {
              id: "MD",
              name: "Maryland"
          }, {
              id: "ME",
              name: "Maine"
          }, {
              id: "MI",
              name: "Michigan"
          }, {
              id: "MN",
              name: "Minnesota"
          }, {
              id: "MS",
              name: "Mississippi"
          }, {
              id: "MO",
              name: "Missouri"
          }, {
              id: "MT",
              name: "Montana"
          }, {
              id: "NC",
              name: "North Carolina"
          }, {
              id: "ND",
              name: "North Dakota"
          }, {
              id: "NE",
              name: "Nebraska"
          }, {
              id: "NH",
              name: "New Hampshire"
          }, {
              id: "NJ",
              name: "New Jersey"
          }, {
              id: "NM",
              name: "New Mexico"
          }, {
              id: "NV",
              name: "Nevada"
          }, {
              id: "NY",
              name: "New York"
          }, {
              id: "OH",
              name: "Ohio"
          }, {
              id: "OK",
              name: "Oklahoma"
          }, {
              id: "OR",
              name: "Oregon"
          }, {
              id: "PA",
              name: "Pennsylvania"
          }, {
              id: "RI",
              name: "Rhode Island"
          }, {
              id: "SC",
              name: "South Carolina"
          }, {
              id: "SD",
              name: "South Dakota"
          }, {
              id: "TN",
              name: "Tennessee"
          }, {
              id: "TX",
              name: "Texas"
          }, {
              id: "UT",
              name: "Utah"
          }, {
              id: "VA",
              name: "Virginia"
          }, {
              id: "VT",
              name: "Vermont"
          }, {
              id: "WA",
              name: "Washington"
          }, {
              id: "WI",
              name: "Wisconsin"
          }, {
              id: "WV",
              name: "West Virginia"
          }, {
              id: "WY",
              name: "Wyoming"
          }
        ];
        return{
            getStates : function(){
                return states;
            }
        }
    }])

.factory('getCategoriesFactory',['$http',function($http){
  var category = [
    {
        id: "I",
        name: "Individual"
    }, {
        id: "C",
        name: "Corporation"
    }, {
        id: "S",
        name: "S Corporation"
    }, {
        id: "P",
        name: "Partnership"
    }, {
        id: "F",
        name: "Fiduciary"
    }, {
        id: "R",
        name: "Exempt"
    }, {
        id: "T",
        name: "Estate"
    }, {
        id: "N",
        name: "Gift"
    }, {
        id: "B",
        name: "Benefit Plan"
    }
  ];
  return{
      getCategories : function(){
          return category;
      }
  }
}])
