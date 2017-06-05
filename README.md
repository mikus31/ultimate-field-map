# The Ultimate Field Map

An interactive field map for ultimate frisbee tournaments.

## Map Objectives

**1. Topic and/or geographic phenomena the map will explore**

[USA Ultimate](http://www.usaultimate.org/index.html), the governing body for the sport of ultimate frisbee in the United States, hosted its annual college championships tournament on Memorial Day weekend. It's a highly-anticipated event every year among many in the ultimate community, and there are several websites and blogs that chronicle the season and cover the championships. One blog in particular, [Bama Secs](http://www.bamasecs.com/), produces [static web maps](https://twitter.com/bamasecs/status/867441795520753666) that show (1) field number locations and (2) game matchups per round. Within this data is a distinction, by color, between men's and women's games.

The working title for the map, which will provide a template for all future tournaments, is "USA Ultimate Interactive Field Map". The subtitle would be the name and year of the particular event, for example "College Championships 2017" or "Club Championships 2017".

**2. Map objectives and user needs**

The purpose of the map is to improve upon the static maps created by Bama Secs by creating an interactive web map for these championship events. The creation of this dynamic map would provide a working template for future events.

It also provides a visual affordance for fans of ultimate to see where their favorite teams and/or players are participating in a game during any particular round on any day of a championship event. This affordance would allow fans to position themselves accordingly between fields with matchups of interest.

In addition to pre-tournament planning, the map could be configured to show round-by-round results by way of final scores. This would bring fans, tournament organizers, and media back to the interactive map before, during, and after a tournament to use the map for results, analysis, recap, research, etc.

For example, the blog Bama Secs usually sends a representative to the college championships every spring. Before the event, the rep could plan his/her field positioning per round to live tweet the most interesting matchups. That could be determined by the rep himself/herself, or the rep could conduct a poll on Twitter before the event to see which game(s) ultimate fans want Bama Secs to live tweet. Once this information is in hand, the Bama Secs rep would use the interactive field map to slide between the rounds on any particular day and determine which fields to attend per round.

**3. Data source(s)**

Anticipated Data Source: [USA Ultimate Men](http://play.usaultimate.org/events/2017-USA-Ultimate-College-Championships/schedule/Men/College-Men/), [USA Ultimate Women](http://play.usaultimate.org/events/2017-USA-Ultimate-College-Championships/schedule/Women/College-Women/)

Sample CSV: [USA Ultimate Men - Friday Pool Play](https://docs.google.com/spreadsheets/d/13eMw1HnEBgsYFIQH6vaouxBvTBTL50piuAayoiMf2pg/edit?usp=sharing)

## Map Proposal

The thematic representation required for this mapping project will come in the form of a collection of digitized, geo-located field features. These features will be georeferenced using satellite imagery as a base map.

Content and requirements needed to complete the digital map:

* Ortho base map
* Digitized field features
* CSV of field-specific data
* Competency with CSS, HTML, and JavaScript
* Organized folder structure including the index.html, data folder(s), graphics, metadata, etc.
* Digital map web host (MapBox, Carto, GitHub, etc.)
    
The two most-prominent User Interaction features on the map will be a drop-down menu and slider. The drop-down menu will allow users to select a tournament day of interest. Within the day of interest selection, users can interact with the slide functionality to cycle through each round of games on that particular day. The field map will update on-the-fly as users slide from one round to the next, showing the appropriate team-versus-team matchups per field for the selected day/round. The initial load of the map should select the first day of the tournament in the drop-down, and should be set to the first round of that day on the slider.

As far as baked-in standard map functionality, the map will be bound to a pre-set coordinate extent at an appropriate scale. This should eliminate the need for user scrolling as the map should be large scale enough to see all features and labels clearly on the initial load. Scrolling, however, should still be enabled as well as zoom. Zoom control should have a set maximum limit that is equal to the originally-loaded map extent.

**Wireframe**

![alt text](https://github.com/newmapsplus/map673-module-07-mikus31/blob/master/final-topic-deliverables/images/wireframe.JPG "Wireframe of web map and a hypothetical app")

The anticipated technologies needed to complete the project are many. First and foremost, a desktop geographic information systems software like ESRI's ArcMap or QGIS to digitize and attribute the field polygons. A spreadsheet software like Microsoft Excel also is necessary to do advanced data table population and control. The data produced by these formats will be stored as a GeoJSON for the geographic features and a CSV for the advanced attribution.

Knowledge of and ability to research and hack through CSS, HTML, and JavaScript will be crucial for the success of this digital product. The desktop coding software programs GitHub Desktop and Brackets will be used to write and manage the code required to create the digital map.

The idea is to use a GitHub repository to store the data externally and track changes to the code. From this repository, a GitHub Page will be created to push the coded product to a web-based, public-facing digital map. The web-based map production service MapBox could also be utilized to help with the implementation of a mobile version of the site.

Google Sheets will be used as well to serve as a "real-time" attribute upload and download center to which results can be added and new matchups can be generated based on those results. This "real-time" attribution will improve the usefulness of the web map as a tournament progresses, taking it from a static pre-tournament snapshot to a dynamically-updated and therefore continuously useful and relevant tool.

Leaflet.css and Leaflet.js will be needed as sources to write code for the map. The Leaflet.Slider plugin might be particularly useful in creating this map. In addition to Leaflet products, JQuery will be needed for Ajax requests. Google Fonts will be used to standardize and customize the map design.
