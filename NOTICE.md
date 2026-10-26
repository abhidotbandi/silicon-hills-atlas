# Notices

The **code** in this repository is © 2026 Abhi Bandi, released under the MIT License (see
`LICENSE`).

The MIT License covers the code only. The map data and the logos are covered by their own terms,
set out below. If you build on this project, keep these credits. The atlas already shows them on
its "About" panel.

## Map data (`public/atlas/`, `src/data/atlas/terminal.json`, `src/data/atlas/locator.json`)

These files are derived from open data and remain under its licences.

- **Overture Maps Foundation**, CDLA Permissive 2.0: buildings, transportation, base (water,
  land use, land cover, infrastructure), places, addresses and divisions.
  <https://overturemaps.org>
- **OpenStreetMap contributors**, ODbL 1.0. Parts of Overture's data come from OpenStreetMap.
  Derived databases built from it (the building, street and tile files here) that you make public
  must keep the attribution and be offered under the ODbL.
  <https://www.openstreetmap.org/copyright>
- **Terrain Tiles on AWS** (Mapzen), from USGS 3DEP, SRTM and other public sources.
  <https://registry.opendata.aws/terrain-tiles/>
- **USGS orthoimagery** (The National Map), public domain. It was used to trace footprints and
  areas Overture doesn't have yet: the airport's paving (`scripts/atlas/airport_areas.py`), the
  terminal (`scripts/atlas/build_terminal.py`) and Tower Business Park
  (`scripts/atlas/traced_buildings.py`).
- **Copernicus Sentinel-2**: contains modified Copernicus Sentinel data, 2026. It was used to
  place Tower Business Park's footprints.
- **Tower heights**: CTBUH, via Wikipedia's list of the tallest buildings in Austin
  (CC BY-SA 4.0 for the list's text), and published storey counts (`scripts/atlas/skyline.py`).

## Company facts (`src/data/atlas/companies.json`, `places.ts`, `tour.ts`)

The facts and descriptions are original writing. Each company's card links the public sources
it was checked against: press, filings, company pages and Texas TDLR registrations.

## Logos (`public/atlas/logos.webp`, `scripts/atlas/logos/`)

Company logos are **trademarks of their owners**. They are not licensed by this repository, and
are shown only to say whose site is whose. They come from each company's own site or icon, or
from Simple Icons (CC0) for the vector marks.

## Fonts

Geist and Geist Mono (SIL Open Font License 1.1), Newsreader and Nunito (SIL Open Font License
1.1), served through `next/font/google`.
