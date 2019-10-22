---

title: Colours
name: colours
category: layout
subcategory: General
layout: q+tq
id: colours-page

---

<div class="lead"><p>Our colour palette is based upon four reference colours:</p></div>

<div class="c-swatch c-swatch--teal">Teal</div>
<div class="c-swatch c-swatch--blue">Blue</div>
<div class="c-swatch c-swatch--pink">Pink</div>
<div class="c-swatch c-swatch--charcoal">Charcoal</div>

<!-- <div class="c-swatch c-swatch--gold">Gold</div> -->
<!-- <div class="c-swatch c-swatch--s1">S1</div> -->
<!-- <div class="c-swatch c-swatch--s2">Beige</div> -->
<!-- <div class="c-swatch c-swatch--s3">Off-white</div> -->

The colours we use on the website are defined by a *name* (eg; _blue_ or _red_) and a *weight*. The weight of a colour represents its luminosity and varies from 100 (lightest), to 900 (darkest) in increments of 100.

Colour values are accessible in Sass via the `colour` function which takes two arguments: the colour name, and its weight. Eg; `colour( "blue" , 700 )` returns a medium-dark shade of blue.

## Primary colours

This table represents the full spread of primary colours in our palette, with the most commonly used highlighted.

<style>
.tableswatch
{
	display:block;
	width:100%;
	padding:0 0 100% 0;
	height:0;
}
.tableswatch_primary
{
    padding:2px;
    background:black;
    color:white;
}
</style>

<table style="table-layout:fixed;">
	<thead>
		<tr>
			<th width="10%"></th>
			<th width="10%">100</th>
			<th width="10%">200</th>
			<th width="10%">300</th>
			<th width="10%">400</th>
			<th width="10%">500</th>
			<th width="10%">600</th>
			<th width="10%">700</th>
			<th width="10%">800</th>
			<th width="10%">900</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Grey</th>
			<td class="tableswatch_primary"  style="text-align:center;"><div class="tableswatch" style="background:#f9f9f9;"></div><small>#f9f9f9</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#E2E2E2;"></div><small>#E2E2E2</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#CBCBCB;"></div><small>#CBCBCB</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#B3B3B3;"></div><small>#B3B3B3</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#9C9C9C;"></div><small>#9C9C9C</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#868686;"></div><small>#868686</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#6E6E6E;"></div><small>#6E6E6E</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#585858;"></div><small>#585858</small></td>
			<td class="tableswatch_primary" style="text-align:center;"><div class="tableswatch" style="background:#404040;"></div><small>#404040</small></td>
		</tr>
		<tr>
			<th>Blue</th>
			<td style="text-align:center;"><div class="tableswatch" style="background:#D2F4FF;"></div><small>#D2F4FF</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#9DE4FA;"></div><small>#9DE4FA</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#69D4F5;"></div><small>#69D4F5</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#34C3F0;"></div><small>#34C3F0</small></td>
			<td class="tableswatch_primary" style="text-align:center;"><div class="tableswatch" style="background:#00B3EB;"></div><small>#00B3EB</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#0495C3;"></div><small>#0495C3</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#087396;"></div><small>#087396</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#0C5A73;"></div><small>#0C5A73</small></td>
			<td class="tableswatch_primary" style="text-align:center;"><div class="tableswatch" style="background:#0F3D4C;"></div><small>#0F3D4C</small></td>
		</tr>
	    <tr>
			<th>Pink</th>
			<td style="text-align:center;"><div class="tableswatch" style="background:#F3D8E9;"></div><small>#F3D8E9</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#E5BCD6;"></div><small>#E5BCD6</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#D7A0C3;"></div><small>#D7A0C3</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#CA86B1;"></div><small>#CA86B1</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#BE6C9F;"></div><small>#BE6C9F</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#AF4E8B;"></div><small>#AF4E8B</small></td>
			<td class="tableswatch_primary" style="text-align:center;"><div class="tableswatch" style="background:#A23479;"></div><small>#A23479</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#8E2D6A;"></div><small>#8E2D6A</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#7B285C;"></div><small>#7B285C</small></td>
		</tr>
	    <tr>
			<th>Beige</th>
			<td class="tableswatch_primary" style="text-align:center;"><div class="tableswatch" style="background:#F0F2E9;"></div><small>#F0F2E9</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#DCDED0;"></div><small>#DCDED0</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#CACCB8;"></div><small>#CACCB8</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#B5B7A3;"></div><small>#B5B7A3</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#9FA18D;"></div><small>#9FA18D</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#8B8D79;"></div><small>#8B8D79</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#767864;"></div><small>#767864</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#60624D;"></div><small>#60624D</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#4B4D38;"></div><small>#4B4D38</small></td>
		</tr>
	</tbody>
</table>

## Highlight colours

The colours below represent our highlight colour variants. These have a more functional purpose than the primary colours and are usually used to represent warnings (yellow), errors (red), or successful actions (green).

See the [alerts component](../css-components/alerts.html) for some examples.

<table style="table-layout:fixed;">
	<thead>
		<tr>
			<th width="10%"></th>
			<th width="10%">100</th>
			<th width="10%">200</th>
			<th width="10%">300</th>
			<th width="10%">400</th>
			<th width="10%">500</th>
			<th width="10%">600</th>
			<th width="10%">700</th>
			<th width="10%">800</th>
			<th width="10%">900</th>
		</tr>
	</thead>
	<tbody>
	    <tr>
			<th>Yellow</th>
			<td style="text-align:center;"><div class="tableswatch" style="background:#FAF1D9;"></div><small>#FAF1D9</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#F4E2B2;"></div><small>#F4E2B2</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#EFD38B;"></div><small>#EFD38B</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#E9C463;"></div><small>#E9C463</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#E4B53C;"></div><small>#E4B53C</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#C39A2F;"></div><small>#C39A2F</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#A48024;"></div><small>#A48024</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#836518;"></div><small>#836518</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#634B0D;"></div><small>#634B0D</small></td>
		</tr>
	    <tr>
			<th>Red</th>
			<td style="text-align:center;"><div class="tableswatch" style="background:#F4D4D4;"></div><small>#F4D4D4</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#E4A9A9;"></div><small>#E4A9A9</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#D58080;"></div><small>#D58080</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#C55656;"></div><small>#C55656</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#B62D2D;"></div><small>#B62D2D</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#9F2626;"></div><small>#9F2626</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#892121;"></div><small>#892121</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#731B1B;"></div><small>#731B1B</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#5E1717;"></div><small>#5E1717</small></td>
		</tr>
	    <tr>
			<th>Green</th>
			<td style="text-align:center;"><div class="tableswatch" style="background:#DDF4D4;"></div><small>#DDF4D4</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#BAE4AA;"></div><small>#BAE4AA</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#99D581;"></div><small>#99D581</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#76C557;"></div><small>#76C557</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#54b62d;"></div><small>#54b62d</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#479A26;"></div><small>#479A26</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#3B7F1F;"></div><small>#3B7F1F</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#2E6318;"></div><small>#2E6318</small></td>
			<td style="text-align:center;"><div class="tableswatch" style="background:#224912;"></div><small>#224912</small></td>
		</tr>
	</tbody>
</table>

## Usage

The website uses three background colours for most of its text-based content. For each of these we have selected and checked text and link colours to ensure that they meet accessibility guidelines:

- [White background](#white-background)
- [Beige background](#beige-background)
- [Teal background](#teal-background)

<div class="c-alert c-alert--info" role="alert">
  <div class="c-alert__content">
    Wherever possible, designers and developers should stick to these colour combinations.
  </div>
</div>
  
When combining colours, be sure to check that your combinations are accessible by using a colour contrast ratio checker tool. Lea Verou's [contrast-ratio.com](https://contrast-ratio.com/) is a popular option and Firefox's dev tools can now check your colour contrast ratios for WCAG compliance directly in the browser.

### White background

- Background: `white`, or `colour( "grey" , 100 )`
- Text: `colour( "grey" , 900 )`
- Link: `colour( "blue" , 700 )`
- Link hover: `colour( "blue" , 800 )`

<hr>
<p>The University was created by Royal Charter and is a public higher education institution and exempt charity in England.</p>
<ul>
	<li><a href="https://york.ac.uk/about/organisation/governance/chancellor/">Professor Sir Malcolm Grant</a>&nbsp;is Chancellor, the ceremonial head of the University</li>
	<li><a href="https://york.ac.uk/about/organisation/governance/council/members/profiles/">Denise Jagger</a> is Chair of&nbsp;<a href="https://york.ac.uk/about/organisation/governance/council/">Council</a>, the governing body and trustee board with statutory and strategic oversight of the University</li>
	<li><a href="https://york.ac.uk/about/organisation/management/meeting-the-board/charlie-jeffery/">Professor Charlie Jeffery</a> is Vice-Chancellor and President, the chief academic and executive officer responsible for leadership of the University</li>
</ul>
<hr>

### Beige background

- Background: `colour( "beige" , 100 )`
- Text: `colour( "grey" , 900 )`
- Link: `colour( "blue" , 700 )`
- Link hover: `colour( "blue" , 800 )`

<div class="c-panel ">
	<div class="c-panel__content">
		<p>The University was created by Royal Charter and is a public higher education institution and exempt charity in England.</p>
		<ul>
			<li><a href="https://york.ac.uk/about/organisation/governance/chancellor/">Professor Sir Malcolm Grant</a>&nbsp;is Chancellor, the ceremonial head of the University</li>
			<li><a href="https://york.ac.uk/about/organisation/governance/council/members/profiles/">Denise Jagger</a> is Chair of&nbsp;<a href="https://york.ac.uk/about/organisation/governance/council/">Council</a>, the governing body and trustee board with statutory and strategic oversight of the University</li>
			<li><a href="https://york.ac.uk/about/organisation/management/meeting-the-board/charlie-jeffery/">Professor Charlie Jeffery</a> is Vice-Chancellor and President, the chief academic and executive officer responsible for leadership of the University</li>
		</ul>
	</div>
</div>

### Teal background

- Background: `colour( "blue" , 900 )`
- Text: `white`
- Link: `colour( "blue" , 500 )`
- Link hover: `colour( "blue" , 400 )`

<div class="c-panel c-panel--highlight">
	<div class="c-panel__content">
		<p>The University was created by Royal Charter and is a public higher education institution and exempt charity in England.</p>
		<ul>
			<li><a href="https://york.ac.uk/about/organisation/governance/chancellor/">Professor Sir Malcolm Grant</a>&nbsp;is Chancellor, the ceremonial head of the University</li>
			<li><a href="https://york.ac.uk/about/organisation/governance/council/members/profiles/">Denise Jagger</a> is Chair of&nbsp;<a href="https://york.ac.uk/about/organisation/governance/council/">Council</a>, the governing body and trustee board with statutory and strategic oversight of the University</li>
			<li><a href="https://york.ac.uk/about/organisation/management/meeting-the-board/charlie-jeffery/">Professor Charlie Jeffery</a> is Vice-Chancellor and President, the chief academic and executive officer responsible for leadership of the University</li>
		</ul>
	</div>
</div>
