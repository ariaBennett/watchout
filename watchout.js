/*
window.wo={};

wo.options = {
  height: window.innerHeight,
  width: window.innerWidth
};

wo.gameBoard = d3.select('body').append('svg:svg').attr('width', wo.options.width).attr('height', wo.options.height);

wo.handleResize = function(){
  window.onresize = function(){
    wo.options.height = window.innerHeight;
    wo.options.width = window.innerWidth;
    wo.gameBoard.attr("width", window.innerHeight);
    wo.gameBoard.attr("width", window.innerWidth);

  };
};

wo.createLevel = function(){
  wo.gameBoard.append('circle')
  .attr('cx', '50%').attr('cy', '50%').attr('r', '5%')
  .attr('stroke', 'black').attr('stroke-width', '0.5%')
  .attr('fill', 'green');
};

// Run Section
wo.handleResize();
wo.createLevel();
*/


// copy paste below



var diameter = 960;

var tree = d3.layout.tree()
    .size([360, diameter / 2 - 240])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svg = d3.select("body").append("svg")
    .attr("width", diameter - 350)
    .attr("height", diameter - 150)
  .append("g")
    .attr("transform", "translate(" + diameter / 3 + "," + diameter / 3 + ")");


var jsonThing = {
  "name": "Marcus",
  "children": [
    {
      "name": "floor 1",
      "children": [
        {
          "name": "floor 1 help 1",
          "children": [
            {"name": "WeiMao", "size": 3938},
            {"name": "TristanYu", "size": 3812},
            {"name": "SeanSun", "size": 743}
          ]
        },
        {
          "name": "floor 1 help 2",
          "children": [
            {"name": "RobertHolmes", "size": 3534},
            {"name": "PhillipAlexander", "size": 5731},
            {"name": "KatieHempenius", "size": 5914}
          ]
        },
        {
          "name": "floor 1 help 3",
          "children": [
            {"name": "JoshuaGoldberg", "size": 7074},
            {"name": "JonathanTewksbury", "size": 7074},
            {"name": "FaridSiddiqi", "size": 7074}
          ]
        }
      ]
    },
    {
      "name": "floor 2",
      "children": [
        {
          "name": "floor 2 help 1",
          "children": [
              {"name": "EricCraft", "size": 1983},
              {"name": "AlbertLee​", "size": 1375},
              {"name": "ChrisOliver", "size": 8746}

            ]
          },
          {"name": "floor 2 help 2",
          "children": [
              {"name": "MarkChatkha", "size": 1983},
              {"name": "JPWhitaker​", "size": 1375},
              {"name": "AdnanWahab​", "size": 8746}

            ]
          },

            {"name": "floor 2 help 3",
          "children": [
              {"name": "ChristenThompson​", "size": 1983},
              {"name": "EmilyCoco", "size": 2047},
              {"name": "ChrisOliver", "size": 8746}

            ]
          },
          ]
        },
        {
          "name": "floor 3",
          "children": [
            {
              "name": "floor 3 help 1",
              "children": [
                {"name": "CharlesTai", "size": 721},
                {"name": "AlexJacobs", "size": 4294},
                {"name": "AddisonLee", "size": 1314}
              ]
            },
            {"name": "floor 3 help 2",
          "children": [
              {"name": "AdrianKim", "size": 9800},
              {"name": "ElliottThoreby", "size": 1375},
              {"name": "MeganTulac​", "size": 2047}

            ]
           },
            {"name": "floor 3 help 3",
          "children": [
              {"name": "HenryZhu​", "size": 2047},
              {"name": "MariusFarioletti", "size": 7840},
              {"name": "ShaneKeller", "size": 6714}
            ]
        },
          ]
        },
        {
          "name": "floor 4",
          "children": [
            {"name": "floor 4 help 1",
            "children": [
              {"name": "NathanHoule​", "size": 7074},
              {"name": "SherahSmith​", "size": 7074},
              {"name": "IanLyons", "size": 7074}
            ]},
            {"name": "floor 4 help 2", "size": 1732,
            "children": [
              {"name": "TimSchiller​", "size": 7074},
              {"name": "MarkReveley​", "size": 7074},
              {"name": "JunJung", "size": 7074}
            ]},
            {"name": "floor 4 help 3", "size": 3623,
            "children": [
              {"name": "MarkRossetti​", "size": 7074},
              {"name": "IanLyons", "size": 7074},
              {"name": "HenryZhu​", "size": 7074}

            ]}
          ]
        },
      ]
    };


var nodes = tree.nodes(jsonThing),
    links = tree.links(nodes);

for (var i = 0; i < nodes.length; i++) {
  nodes[i].x = nodes[i].x + 135;
}

var link = svg.selectAll(".link")
    .data(links)
  .enter().append("path")
    .attr("class", "link")
    .attr("d", diagonal);


var node = svg.selectAll(".node")
  .data(nodes)
  .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "rotate(" + (d.x) + ")translate(" + d.y + ")"; });



node.append("circle")
    .attr("r", 10);

node.append("text")
    .attr("dy", ".31em")
    .attr("text-anchor", function(d) { return "start"; })
    .attr("transform", function(d) { return  "rotate(45)translate(11)"; })
    .text(function(d) { return d.name; });

d3.select().style("height", diameter - 150 + "px");
