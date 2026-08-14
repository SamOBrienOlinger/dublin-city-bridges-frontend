export const sources = {
  bridges: { title: 'The Liffey and Dublin', url: 'https://www.bridgesofdublin.ie/historical-dublin/the-liffey-and-dublin', publisher: 'Bridges of Dublin / Dublin City Council' },
  hapenny: { title: 'Ha\u2019penny Bridge', url: 'https://www.bridgesofdublin.ie/bridges/hapenny-bridge', publisher: 'Bridges of Dublin / Dublin City Council' },
  samuel: { title: 'Samuel Beckett Bridge', url: 'https://www.bridgesofdublin.ie/bridges/samuel-beckett-bridge', publisher: 'Bridges of Dublin / Dublin City Council' },
  casey: { title: 'Se\u00e1n O\u2019Casey Bridge \u2014 Design & Engineering', url: 'https://www.bridgesofdublin.ie/bridges/sean-ocasey-bridge/design-and-engineering', publisher: 'Bridges of Dublin / Dublin City Council' },
  tom: { title: 'Tom Clarke Bridge', url: 'https://www.bridgesofdublin.ie/bridges/tom-clarke-bridge', publisher: 'Bridges of Dublin / Dublin City Council' },
  heritage: { title: 'Dublin Heritage: The life history of a city', url: 'https://www.dublincity.ie/library/blog/dublin-heritage-life-history-city', publisher: 'Dublin City Council' },
  river: { title: 'Dublin: the city and the river', url: 'https://www.dublincity.ie/ga/library/blog/dublin-city-and-river', publisher: 'Dublin City Council' },
  docklands: { title: 'Visiting the Docklands', url: 'https://www.dublincity.ie/planning-and-land-use/learn-about-councils-plans-city/public-realm-strategy-and-master-plans/dublin-docklands/visiting-docklands', publisher: 'Dublin City Council' },
  logainm: { title: 'Baile \u00c1tha Cliath / Dublin', url: 'https://www.logainm.ie/en/57080', publisher: 'Placenames Database of Ireland' }
};

export const learningSections = [
  { id: 'place', title: 'River and city', intro: 'Begin with the River Liffey, the crossing places and the names from which Dublin grew.', items: [
    { title: 'The River Liffey', scope: 'Dublin local', body: 'The Liffey has shaped Dublin as a place of settlement, trade and movement. Viking ships used the river, and later generations built quays and bridges that helped the city expand on both banks.', source: 'bridges' },
    { title: 'Baile \u00c1tha Cliath and Dubh Linn', scope: 'Language and place', body: 'Baile \u00c1tha Cliath refers to the town of the ford of the hurdles, a crossing point on the Liffey. The English name Dublin is associated with Dubh Linn, the \u201cblack pool\u201d near today\u2019s Dublin Castle.', source: 'river' },
    { title: 'A Viking city', scope: 'Historical context', body: 'Dublin developed as a Viking settlement and trading centre in the ninth century. Its river access helped it become Ireland\u2019s first town and later the country\u2019s capital and largest city.', source: 'heritage' }
  ] },
  { id: 'bridges', title: 'Landmark bridges', intro: 'Dublin\u2019s bridges are crossings, works of engineering and records of the people and eras that shaped the city.', items: [
    { title: 'Ha\u2019penny Bridge', scope: 'City centre', body: 'Opened in 1816, the cast-iron Ha\u2019penny Bridge was the Liffey\u2019s first dedicated pedestrian bridge. Its familiar nickname came from the halfpenny toll once charged to cross.', source: 'hapenny' },
    { title: 'Samuel Beckett Bridge', scope: 'Docklands', body: 'Opened in 2009, Santiago Calatrava\u2019s cable-stayed bridge evokes an Irish harp. The 123-metre bridge can rotate horizontally through 90 degrees for river traffic.', source: 'samuel' },
    { title: 'Se\u00e1n O\u2019Casey Bridge', scope: 'Docklands', body: 'This pedestrian swing bridge opened in 2005. Its two balanced arms rotate to open a navigation channel while strengthening walking links between the north and south Docklands.', source: 'casey' }
  ] },
  { id: 'engineering', title: 'Design and engineering', intro: 'Different crossings answer different needs, from foot travel to public transport and access for shipping.', items: [
    { title: 'Cast iron and restoration', scope: 'Conservation', body: 'The Ha\u2019penny Bridge was assembled from cast-iron components made at Coalbrookdale. Dublin City Council restored it in 2001, conserving its historic character while meeting modern safety needs.', source: 'hapenny' },
    { title: 'A bridge that turns', scope: 'Moving bridge', body: 'The Samuel Beckett Bridge\u2019s deck rotates rather than lifting vertically. Its curved pylon rises 48 metres and its opening movement preserves a navigable route along the Liffey.', source: 'samuel' },
    { title: 'A bridge that lifts', scope: 'Moving bridge', body: 'The Tom Clarke Bridge includes a 45-metre opening span. Hydraulic equipment raises its 500-tonne leaf to allow vessels to pass near Dublin Port.', source: 'tom' }
  ] },
  { id: 'people', title: 'Names and public memory', intro: 'Bridge names connect the everyday city with writers, activists and political history.', items: [
    { title: 'Samuel Beckett', scope: 'Literature', body: 'The Docklands bridge honours Dublin-born writer Samuel Beckett, who received the 1969 Nobel Prize in Literature.', source: 'samuel' },
    { title: 'Se\u00e1n O\u2019Casey', scope: 'Literature and theatre', body: 'The pedestrian bridge beside City Quay commemorates Dublin dramatist Se\u00e1n O\u2019Casey and places cultural memory within an everyday walking route.', source: 'casey' },
    { title: 'Tom Clarke', scope: 'Revolutionary history', body: 'The former East-Link bridge was renamed for Tom Clarke, a signatory of the 1916 Proclamation, linking a working port crossing with Ireland\u2019s revolutionary history.', source: 'tom' }
  ] },
  { id: 'explore', title: 'Explore and participate', intro: 'Use the bridges as a route into Dublin\u2019s history, neighbourhoods and public spaces.', items: [
    { title: 'Walk the Liffey', scope: 'Self-guided learning', body: 'Crossing several bridges on foot reveals changing materials, street patterns and views. Look for how each bridge connects communities and responds to its place on the river.', source: 'bridges' },
    { title: 'Explore the Docklands', scope: 'Public realm', body: 'The Docklands combine historic quays and industrial heritage with contemporary public spaces. The Se\u00e1n O\u2019Casey and Samuel Beckett bridges make the area easier to explore on foot.', source: 'docklands' },
    { title: 'Use official place names', scope: 'Irish language', body: 'The Placenames Database of Ireland provides authoritative Irish and English forms of place names, including Baile \u00c1tha Cliath / Dublin.', source: 'logainm' }
  ] }
];

export const reviewedAt = '2026-08-14';
