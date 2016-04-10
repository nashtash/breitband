function d3_speed(){function e(i){t=i,e.init()}var t,i,n=[{obj:!1,x:50,y:234,title:"Verteilerknoten",copy:"Hier entscheidet sich, welche Technologien verfügbar sind. Schon hier gibt es erste Unterschiede, denn die tatsächliche Geschwindigkeit ist z.B. abhängig vom Anbieter und den von ihm verwedeten Technologien.",img:"speed_detail_1.gif"},{obj:!1,x:244,y:135,title:"Datenstau",copy:"Kabelgebundene Systemen können relativ viele Nutzer/innen und damit Daten gleichzeitig verarbeiten. Wenn dagegen viele Geräte gleichzeitig über mobile Verbindungen aufs Netz zugreifen, kommt es eher zu Einbußen bei der Geschwindigkeit.",img:"speed_detail_2.gif"},{obj:!1,x:344,y:377,title:"Die letzte Meile",copy:"Obwohl Glasfaserleitungen am Verteiler anliegen, sind viele Nutzer/innen auf der letzten Meile immer noch über alte Kupferkabel, über die nicht die gleichen Geschwindigkeiten erreicht werden können, ans Netz angebunden.",img:"speed_detail_3.gif"},{obj:!1,x:555,y:250,title:"Hardware und Software",copy:"Neben alten Leitungen können auch alte Hardware und Software zu einem langsameren Internetvergnügen führen.",img:"speed_detail_4.gif"},{obj:!1,x:612,y:145,title:"Zu viele Wifi-Netzwerke",copy:"Gerade in dicht besiedelten Bereichen kämpfen dutzende drahtlose Netzwerke um die verfügbaren Kanäle. Netzwerke die auf demselben Kanal funken, können die Qualität und damit die Geschwindigkeit beeinflussen.",img:"speed_detail_5.gif"}],r=750,a=422;return e.init=function(){t.each(function(t,r){var a=d3.select(this);a=a.append("svg");var l=a.append("defs").append("radialGradient").attr("id","cgrad").attr("cx","50%").attr("cy","50%").attr("r","50%").attr("fy","50%").attr("fx","50%");l.append("stop").attr("offset","0%").attr("style","stop-color:rgb(255,255,255); stop-opacity:1"),l.append("stop").attr("offset","100%").attr("style","stop-color:rgb(255,255,255); stop-opacity:0"),i=a.append("image").attr("xmlns:xlink","http://www.w3.org/1999/xlink").attr("xlink:href","images/illu/speed_desc@2x.gif");for(var s=0;s<n.length;s++)n[s].obj=a.append("g"),n[s].obj.append("circle").attr("r",20).attr("fill","url(#cgrad)"),n[s].obj.append("circle").attr("r",10).attr("class","fullcircle"),n[s].obj.append("circle").attr("r",15).attr("class","outercircle-1"),n[s].obj.append("circle").attr("r",21).attr("class","outercircle-2"),n[s].obj.append("circle").attr("r",30).attr("class","clickcircle").attr("id","clickcircle-"+s).on("mouseenter",function(e){var t=parseInt(d3.select(this).attr("id").split("-")[1]);n[t].obj.classed("active",!0)}).on("mouseleave",function(e){var t=parseInt(d3.select(this).attr("id").split("-")[1]);n[t].obj.classed("active",!1)}).on("click",function(e){var t=parseInt(d3.select(this).attr("id").split("-")[1]);d3.select("#speeddesc-overlay h4").text(n[t].title),d3.select("#speeddesc-overlay p").text(n[t].copy),d3.select("#speeddesc-overlay img").attr("src","./images/illu/"+n[t].img),d3.select("#speeddesc-overlay").style("display","block")});d3.select("#speeddesc-overlay").on("click",function(){d3.select("#speeddesc-overlay").style("display","none")}),e.resize()})},e.resize=function(){t.each(function(e,t){var i=d3.select(this),l=i.node().getBoundingClientRect(),s=l.width/r;i.selectAll("svg, image").attr("width",s*r).attr("height",s*a);for(var d=0;d<n.length;d++)n[d].obj.attr("transform","translate("+n[d].x*s+" "+n[d].y*s+") scale("+s+")");d3.select("#speeddesc-overlay").style("height",s*a+"px").style("margin-top",-1*(s*a+5)+"px")})},e}